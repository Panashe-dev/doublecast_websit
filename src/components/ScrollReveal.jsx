import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.11 },
    );

    document
      .querySelectorAll(".reveal,.reveal-left,.reveal-right,.stagger")
      .forEach((el) => io.observe(el));

    // Counter animation
    const animCount = (el, target, suffix, dur) => {
      let start = null;
      const step = (ts) => {
        if (!start) start = ts;
        const prog = Math.min((ts - start) / dur, 1);
        const ease = 1 - Math.pow(1 - prog, 4);
        el.textContent = Math.floor(ease * target) + suffix;
        if (prog < 1) requestAnimationFrame(step);
        else el.textContent = target + suffix;
      };
      requestAnimationFrame(step);
    };

    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          const raw = el.getAttribute("data-count");
          const suf = el.getAttribute("data-suffix") || "";
          if (raw && !el.classList.contains("ticked")) {
            animCount(el, parseInt(raw), suf, 1600);
            el.classList.add("ticked");
          }
          cio.unobserve(el);
        });
      },
      { threshold: 0.5 },
    );

    if (!reduceMotion) {
      document
        .querySelectorAll("[data-count]")
        .forEach((el) => cio.observe(el));
    }

    // Nav scroll
    const nav = document.querySelector("nav");
    const scrollBtn = document.getElementById("scroll-top");
    let frame = null;
    const update = () => {
      frame = null;
      const y = window.scrollY;
      if (nav) nav.classList.toggle("scrolled", y > 60);
      if (scrollBtn) scrollBtn.classList.toggle("show", y > 450);
    };
    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      cio.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
