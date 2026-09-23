import { gsap, ScrollTrigger } from "./setup";
import { initHero } from "./hero";
import { initReveal } from "./reveal";

/**
 * Orchestrator — Tier B light.
 * - Uses gsap.matchMedia for reduced-motion + responsive (gsap-core)
 * - Hero timeline + ScrollTrigger batch reveals
 * - Lazy-safe: caller should invoke after DOM ready; we also guard for Astro transitions
 */
export function initMotion(): void {
  if (typeof window === "undefined") return;

  // Ensure gsap + ScrollTrigger registered (setup already did)
  void ScrollTrigger;

  const mm = gsap.matchMedia();

  initHero(mm);
  initReveal(mm);

  // Expose for manual refresh if needed (e.g. after palette switch)
  // Palette picker changes CSS vars but not layout — still refresh on resize
  let resizeTimer: number | undefined;
  const onResize = () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => ScrollTrigger.refresh(), 200);
  };
  window.addEventListener("resize", onResize);

  // Astro ClientRouter: re-init on page transition (static but may use ViewTransitions)
  document.addEventListener("astro:page-load", () => {
    ScrollTrigger.refresh();
  });

  // Optional: cleanup hook for HMR
  if (import.meta.hot) {
    import.meta.hot.dispose(() => {
      mm.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    });
  }
}
