/**
 * lhexus.os — window manager for the portfolio.
 * Windows stay in normal page flow (the page still scrolls); this adds
 * minimize / maximize / close / drag / focus, tabs, dock integration and
 * the boot screen. Everything degrades to a readable page without JS.
 */

const root = document.documentElement;
root.classList.add("js-ready");

const $$ = <T extends Element = HTMLElement>(sel: string, scope: ParentNode = document) =>
  Array.from(scope.querySelectorAll<T>(sel));

const windows = () => $$<HTMLElement>(".win[data-window]");
const winById = (id: string) => document.querySelector<HTMLElement>(`.win[data-window="${id}"]`);
const reopenFor = (id: string) => document.querySelector<HTMLButtonElement>(`[data-reopen="${id}"]`);
const dockFor = (id: string) => document.querySelector<HTMLElement>(`[data-dock="${id}"]`);
const btn = (win: HTMLElement, action: string) =>
  win.querySelector<HTMLButtonElement>(`:scope > .win-bar [data-action="${action}"]`);
const titleOf = (win: HTMLElement) => win.querySelector(".win-title")?.firstChild?.textContent?.trim() ?? "window";

/* ---------------- reveal on scroll ---------------- */

const reveal = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add("is-open");
        reveal.unobserve(e.target);
      }
    }
  },
  { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
);
$$(".win[data-reveal]").forEach((w) => reveal.observe(w));

/* ---------------- focus / z-order ---------------- */

function bringToFront(win: HTMLElement) {
  windows().forEach((w) => w.removeAttribute("data-front"));
  win.setAttribute("data-front", "");
}

function setActive(id: string) {
  windows().forEach((w) => (w.dataset.active = String(w.dataset.window === id)));
  $$<HTMLElement>("[data-dock]").forEach((a) => {
    if (a.dataset.dock === id) {
      a.setAttribute("aria-current", "true");
      const strip = a.closest("ul");
      if (strip && strip.scrollWidth > strip.clientWidth) {
        strip.scrollTo({ left: a.offsetLeft - strip.clientWidth / 2 + a.offsetWidth / 2, behavior: "smooth" });
      }
    } else a.removeAttribute("aria-current");
  });
}

/* ---------------- window states ---------------- */

type State = "open" | "minimized" | "closed";

function setState(win: HTMLElement, state: State) {
  const id = win.dataset.window!;
  win.dataset.state = state;
  btn(win, "minimize")?.setAttribute("aria-expanded", String(state === "open"));
  const placeholder = reopenFor(id);
  if (placeholder) placeholder.hidden = state !== "closed";
  const dock = dockFor(id);
  if (dock) dock.dataset.running = String(state !== "closed");
}

function maximize(win: HTMLElement, on: boolean) {
  const section = win.closest("section");
  const maxBtn = btn(win, "maximize");
  if (on) {
    if (win.dataset.state !== "open") setState(win, "open");
    windows().forEach((w) => w !== win && w.classList.contains("is-max") && maximize(w, false));
    if (section) section.style.minHeight = `${section.offsetHeight}px`;
    win.style.translate = "";
    win.removeAttribute("data-moved");
    win.classList.add("is-max");
    root.classList.add("has-max");
    maxBtn?.setAttribute("aria-pressed", "true");
    maxBtn?.setAttribute("aria-label", `Restore ${titleOf(win)}`);
    bringToFront(win);
    setActive(win.dataset.window!);
  } else {
    win.classList.remove("is-max");
    if (section) section.style.minHeight = "";
    if (!document.querySelector(".win.is-max")) root.classList.remove("has-max");
    maxBtn?.setAttribute("aria-pressed", "false");
    maxBtn?.setAttribute("aria-label", `Maximize ${titleOf(win)}`);
  }
}

function minimize(win: HTMLElement) {
  if (win.classList.contains("is-max")) maximize(win, false);
  setState(win, win.dataset.state === "minimized" ? "open" : "minimized");
}

function close(win: HTMLElement) {
  if (win.classList.contains("is-max")) maximize(win, false);
  win.style.translate = "";
  win.removeAttribute("data-moved");
  setState(win, "closed");
  reopenFor(win.dataset.window!)?.focus();
}

function reopen(id: string, focus = true) {
  const win = winById(id);
  if (!win) return;
  setState(win, "open");
  win.classList.add("is-open");
  bringToFront(win);
  if (focus) btn(win, "minimize")?.focus({ preventScroll: true });
}

document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;

  const action = target.closest<HTMLButtonElement>("[data-action]");
  if (action) {
    const win = action.closest<HTMLElement>(".win");
    if (!win) return;
    const kind = action.dataset.action;
    if (kind === "minimize") minimize(win);
    else if (kind === "maximize") maximize(win, !win.classList.contains("is-max"));
    else if (kind === "close") close(win);
    return;
  }

  const placeholder = target.closest<HTMLButtonElement>("[data-reopen]");
  if (placeholder) {
    reopen(placeholder.dataset.reopen!);
    return;
  }

  // Dock acts as a launcher: restore the app, then let the anchor scroll.
  const dock = target.closest<HTMLAnchorElement>("[data-dock]");
  if (dock) {
    const win = winById(dock.dataset.dock!);
    const maxed = document.querySelector<HTMLElement>(".win.is-max");
    if (maxed && maxed !== win) maximize(maxed, false);
    if (win && win.dataset.state !== "open") reopen(dock.dataset.dock!, false);
  }
});

document.addEventListener("dblclick", (e) => {
  const bar = (e.target as HTMLElement).closest<HTMLElement>("[data-drag-handle]");
  if (!bar || (e.target as HTMLElement).closest("button")) return;
  const win = bar.closest<HTMLElement>(".win");
  if (win) maximize(win, !win.classList.contains("is-max"));
});

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  const maxed = document.querySelector<HTMLElement>(".win.is-max");
  if (maxed) {
    maximize(maxed, false);
    btn(maxed, "maximize")?.focus({ preventScroll: true });
  }
});

document.addEventListener(
  "pointerdown",
  (e) => {
    const win = (e.target as HTMLElement).closest<HTMLElement>(".win[data-window]");
    if (win) {
      bringToFront(win);
      setActive(win.dataset.window!);
    }
  },
  { capture: true }
);

/* ---------------- dragging ---------------- */

const canDrag = window.matchMedia("(pointer: fine) and (min-width: 768px)");

document.addEventListener("pointerdown", (e) => {
  if (!canDrag.matches || e.button !== 0) return;
  const target = e.target as HTMLElement;
  const bar = target.closest<HTMLElement>("[data-drag-handle]");
  if (!bar || target.closest("button")) return;
  const win = bar.closest<HTMLElement>(".win");
  if (!win || win.classList.contains("is-max")) return;

  const [sx, sy] = (win.style.translate || "0px 0px").split(" ").map((v) => parseFloat(v) || 0);
  const startX = e.clientX;
  const startY = e.clientY;
  const barRect = bar.getBoundingClientRect();
  let moved = false;

  const onMove = (ev: PointerEvent) => {
    let dx = ev.clientX - startX;
    let dy = ev.clientY - startY;
    if (!moved && Math.hypot(dx, dy) < 4) return;
    if (!moved) {
      moved = true;
      win.classList.add("is-dragging");
      bar.setPointerCapture(e.pointerId);
    }
    // keep the title bar reachable inside the viewport
    dy = Math.min(Math.max(dy, -barRect.top), window.innerHeight - barRect.bottom - 8);
    dx = Math.min(Math.max(dx, -(barRect.right - 120)), window.innerWidth - barRect.left - 120);
    win.style.translate = `${sx + dx}px ${sy + dy}px`;
  };
  const onUp = () => {
    bar.removeEventListener("pointermove", onMove);
    bar.removeEventListener("pointerup", onUp);
    bar.removeEventListener("pointercancel", onUp);
    win.classList.remove("is-dragging");
    if (moved) win.setAttribute("data-moved", "");
  };
  bar.addEventListener("pointermove", onMove);
  bar.addEventListener("pointerup", onUp);
  bar.addEventListener("pointercancel", onUp);
});

/* ---------------- tabs ---------------- */

$$<HTMLElement>("[data-tabs]").forEach((list) => {
  const tabs = $$<HTMLButtonElement>('[role="tab"]', list);
  const select = (tab: HTMLButtonElement, focus = false) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(t.getAttribute("aria-controls")!);
      if (panel) panel.hidden = !on;
    });
    if (focus) tab.focus();
  };
  select(tabs.find((t) => t.getAttribute("aria-selected") === "true") ?? tabs[0]);
  list.addEventListener("click", (e) => {
    const tab = (e.target as HTMLElement).closest<HTMLButtonElement>('[role="tab"]');
    if (tab) select(tab);
  });
  list.addEventListener("keydown", (e) => {
    const i = tabs.indexOf(document.activeElement as HTMLButtonElement);
    if (i < 0) return;
    const next =
      e.key === "ArrowRight" ? tabs[(i + 1) % tabs.length]
      : e.key === "ArrowLeft" ? tabs[(i - 1 + tabs.length) % tabs.length]
      : e.key === "Home" ? tabs[0]
      : e.key === "End" ? tabs[tabs.length - 1]
      : null;
    if (next) {
      e.preventDefault();
      select(next, true);
    }
  });
});

/* ---------------- section spy ---------------- */

const spy = new IntersectionObserver(
  (entries) => {
    if (document.querySelector(".win.is-max")) return;
    for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
$$("main section[id]").forEach((s) => spy.observe(s));
windows().forEach((w) => setState(w, "open"));

/* ---------------- boot screen ---------------- */

const boot = document.getElementById("boot");
if (boot && root.classList.contains("booting")) {
  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    try {
      sessionStorage.setItem("booted", "1");
    } catch {}
    boot.classList.add("boot-out");
    window.setTimeout(() => root.classList.remove("booting"), 320);
    window.removeEventListener("keydown", finish);
  };
  boot.querySelector(".boot-fill")?.addEventListener("animationend", finish);
  boot.addEventListener("click", finish);
  window.addEventListener("keydown", finish);
  window.setTimeout(finish, 2600);
}
