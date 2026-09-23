import gsap from "gsap";

export const fadeIn = (element: string | Element | null, options = {}) => {
  if (!element) return;
  return gsap.fromTo(
    element,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1, ease: "power3.out", ...options }
  );
};
