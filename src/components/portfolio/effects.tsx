import { useEffect, useState } from "react";

/*
 * Experimental motion effects. Styles live in src/effects.css, one block per
 * effect. Each effect is opt-in through a class or data attribute in the JSX,
 * so removing that attribute (or the CSS block) disables it in isolation.
 */

/** Navbar glass: true once the page is scrolled past `offset` pixels. */
export function useScrolled(offset = 8) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > offset);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [offset]);
  return scrolled;
}

/**
 * Scroll reveal: elements with `data-reveal` get `data-revealed="anim"` when
 * they enter the viewport (CSS animates their direct children in sequence),
 * then `"done"` so children re-mounted later (e.g. language switch) don't
 * animate again. Only runs when the inline script in __root added `.fx`.
 */
function useScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    root.dataset["fxReady"] = "";
    if (!root.classList.contains("fx")) return;

    const timers: number[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          observer.unobserve(el);
          el.dataset["revealed"] = "anim";
          timers.push(window.setTimeout(() => (el.dataset["revealed"] = "done"), 1600));
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);
}

/**
 * Pointer-driven effects (hero spotlight, card tilt, button glow). Elements
 * with `data-fx-pointer` receive, while the cursor is over them:
 *   --fx-x / --fx-y   cursor position in px, relative to the element
 *   --fx-cx           cursor x in px, relative to the viewport
 *   --fx-px / --fx-py cursor position normalised to -0.5..0.5 (used by tilt)
 *   data-fx-moving    present while the cursor is moving
 * One delegated listener, batched with requestAnimationFrame. Desktop only.
 */
function usePointerEffects() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let active = new Set<HTMLElement>();
    let last: PointerEvent | null = null;
    let frame = 0;
    let idle = 0;

    const reset = (el: HTMLElement) => {
      el.style.setProperty("--fx-px", "0");
      el.style.setProperty("--fx-py", "0");
      delete el.dataset["fxMoving"];
    };

    const update = () => {
      frame = 0;
      if (!last) return;
      const next = new Set<HTMLElement>();
      let el = (last.target as Element | null)?.closest<HTMLElement>("[data-fx-pointer]");
      while (el) {
        next.add(el);
        el = el.parentElement?.closest<HTMLElement>("[data-fx-pointer]") ?? null;
      }
      // read all rects first, then write, to avoid layout thrashing
      const measured = [...next].map((node) => [node, node.getBoundingClientRect()] as const);
      for (const [node, r] of measured) {
        const x = last.clientX - r.left;
        const y = last.clientY - r.top;
        node.style.setProperty("--fx-x", `${x}px`);
        node.style.setProperty("--fx-y", `${y}px`);
        node.style.setProperty("--fx-cx", `${last.clientX}px`);
        node.style.setProperty("--fx-px", (x / r.width - 0.5).toFixed(3));
        node.style.setProperty("--fx-py", (y / r.height - 0.5).toFixed(3));
        node.dataset["fxMoving"] = "";
      }
      active.forEach((node) => !next.has(node) && reset(node));
      active = next;

      clearTimeout(idle);
      idle = window.setTimeout(
        () => active.forEach((node) => delete node.dataset["fxMoving"]),
        900,
      );
    };

    const onMove = (e: PointerEvent) => {
      last = e;
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onLeave = () => {
      active.forEach(reset);
      active.clear();
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
      clearTimeout(idle);
      onLeave();
    };
  }, []);
}

export function MotionEffects() {
  useScrollReveal();
  usePointerEffects();
  return null;
}
