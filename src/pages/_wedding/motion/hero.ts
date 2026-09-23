import { gsap } from "./setup";

/**
 * Hero entrance — timeline stagger, runs once on load.
 * Uses gsap.matchMedia to respect prefers-reduced-motion and to keep
 * hero visible by default (progressive enhancement).
 * Only animates transform + autoAlpha (compositor) — gsap-performance.
 */
export function initHero(mm: gsap.MatchMedia): void {
  mm.add(
    {
      isReduce: "(prefers-reduced-motion: reduce)",
      isDesktop: "(min-width: 1024px)",
    },
    (context) => {
      const cond = context.conditions as { isReduce: boolean; isDesktop: boolean } | undefined;
      const isReduce = cond?.isReduce ?? false;

      // Reduced motion: ensure visible, kill CSS animation without flash
      if (isReduce) {
        gsap.set(".hero-rise, .screen", { clearProps: "all", autoAlpha: 1 });
        return;
      }

      const heroEls = gsap.utils.toArray<HTMLElement>(".hero-rise");
      const screen = gsap.utils.toArray<HTMLElement>(".screen");
      if (heroEls.length === 0 && screen.length === 0) return;

      // Cancel CSS hero-rise so GSAP owns it (avoid double animation)
      // This runs before first paint when possible — module executes after parser
      heroEls.forEach((el) => {
        // Remove CSS animation in a way that doesn't trigger reflow thrash (single write)
        (el as HTMLElement).style.animation = "none";
      });

      // Keep readable before JS for no-js fallback: now take ownership
      if (heroEls.length) {
        gsap.set(heroEls, { autoAlpha: 0, y: 16 });
      }
      if (screen.length) {
        const heroScreen = document.querySelector("#top .screen") as HTMLElement | null;
        if (heroScreen) {
          (heroScreen as HTMLElement).style.animation = "none";
          gsap.set(heroScreen, { autoAlpha: 0, y: 12 });
        }
      }

      const tl = gsap.timeline({
        defaults: { duration: 0.58, ease: "power3.out" },
        // add will-change only while animating
        onStart: () => {
          heroEls.forEach((el) => el.classList.add("is-animating"));
          document.querySelector("#top .screen")?.classList.add("is-animating");
        },
        onComplete: () => {
          heroEls.forEach((el) => {
            el.classList.remove("is-animating");
            gsap.set(el, { clearProps: "all" });
          });
          const hs = document.querySelector("#top .screen") as HTMLElement | null;
          if (hs) {
            hs.classList.remove("is-animating");
            gsap.set(hs, { clearProps: "all" });
          }
        },
      });

      if (heroEls.length) {
        tl.to(heroEls, {
          autoAlpha: 1,
          y: 0,
          duration: 0.58,
          stagger: 0.12,
          overwrite: "auto",
        }, 0);
      }

      const heroScreen = document.querySelector("#top .screen") as HTMLElement | null;
      if (heroScreen) {
        tl.to(heroScreen, {
          autoAlpha: 1,
          y: 0,
          duration: 0.72,
          ease: "power3.out",
        }, "<0.15");
      }

      // timeline playback control not needed — fire once
      return () => {
        tl.kill();
      };
    }
  );
}
