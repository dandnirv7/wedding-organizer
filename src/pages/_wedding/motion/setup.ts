import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register once — gsap-core + gsap-scrolltrigger best practice
gsap.registerPlugin(ScrollTrigger);

// Project-wide tween defaults: sync with global.css cubic 0.16,1,0.3,1 (≈ power3.out)
gsap.defaults({
  duration: 0.6,
  ease: "power3.out",
  overwrite: "auto",
});

export { gsap, ScrollTrigger };
