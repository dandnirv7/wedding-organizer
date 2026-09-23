import { gsap, ScrollTrigger } from "./setup";

/**
 * Scroll reveals — Tier B light.
 * - Batch .act sections (9 sections) with ScrollTrigger.batch()
 * - Mosaic stagger for .mosaic .screen
 * - Nav hairline toggle via standalone ScrollTrigger
 * All use transform + autoAlpha only, once:true, clearProps after.
 */
export function initReveal(mm: gsap.MatchMedia): void {
  mm.add(
    {
      isReduce: "(prefers-reduced-motion: reduce)",
      isDesktop: "(min-width: 1024px)",
    },
    (context) => {
      const cond = context.conditions as { isReduce: boolean; isDesktop: boolean } | undefined;
      const isReduce = cond?.isReduce ?? false;

      if (isReduce) {
        // Ensure everything visible, no pin/scrub, kill any pending triggers for this context
        gsap.set(".act, .mosaic .screen", { autoAlpha: 1, y: 0, clearProps: "all" });
        return;
      }

      const isDesktop = cond?.isDesktop ?? false;

      // --- 1. Section batch: .act (Statement → Final CTA) ---
      const acts = gsap.utils.toArray<HTMLElement>(".act");
      if (acts.length) {
        // Set initial only when JS active — avoids FOUC
        gsap.set(acts, { autoAlpha: 0, y: 20 });

        ScrollTrigger.batch(acts, {
          interval: 0.1,
          batchMax: 3,
          start: isDesktop ? "top 82%" : "top 88%",
          end: "bottom 20%",
          once: true,
          onEnter: (batch: unknown) => {
            const els = batch as unknown as HTMLElement[];
            els.forEach((el) => el.classList.add("is-animating"));
            gsap.to(els, {
              autoAlpha: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.12,
              ease: "power3.out",
              overwrite: "auto",
              onComplete: () => {
                els.forEach((el) => {
                  el.classList.remove("is-animating");
                  gsap.set(el, { clearProps: "all" });
                });
              },
            });
          },
        } as unknown as ScrollTrigger.BatchVars);

        // Refresh after initial batch registration
        // Defer to next frame so ScrollTrigger calculates with final layout
        requestAnimationFrame(() => ScrollTrigger.refresh());
      }

      // --- 2. Mosaic detail: stagger only, subtle ---
      const mosaicScreens = gsap.utils.toArray<HTMLElement>(".mosaic .screen");
      if (mosaicScreens.length) {
        gsap.set(mosaicScreens, { autoAlpha: 0, y: 12 });

        ScrollTrigger.batch(mosaicScreens, {
          interval: 0.08,
          batchMax: 5,
          start: "top 90%",
          once: true,
          onEnter: (batch: unknown) => {
            const els = batch as unknown as HTMLElement[];
            els.forEach((el) => el.classList.add("is-animating"));
            gsap.to(els, {
              autoAlpha: 1,
              y: 0,
              duration: 0.52,
              stagger: 0.08,
              ease: "power3.out",
              overwrite: "auto",
              onComplete: () => {
                els.forEach((el) => {
                  el.classList.remove("is-animating");
                  gsap.set(el, { clearProps: "all" });
                });
              },
            });
          },
        } as unknown as ScrollTrigger.BatchVars);
      }

      // --- 3. Nav hairline toggle ---
      const nav = document.querySelector<HTMLElement>(".sheet-nav");
      if (nav) {
        ScrollTrigger.create({
          trigger: document.body,
          start: "top top+=80",
          end: "max",
          onUpdate: (self) => {
            nav.classList.toggle("is-scrolled", self.progress > 0.005);
          },
        });
      }

      // --- 4. Refresh on fonts/images ready (once) ---
      const doRefresh = () => ScrollTrigger.refresh();
      if (document.fonts?.ready) {
        document.fonts.ready.then(doRefresh).catch(() => {});
      }
      window.addEventListener("load", doRefresh, { once: true });

      return () => {
        // mm will auto-revert ScrollTriggers + tweens created in this context
        // Extra cleanup for nav batch created outside batch scope is handled by revert
      };
    }
  );
}
