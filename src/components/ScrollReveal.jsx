import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
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

    document.querySelectorAll("[data-count]").forEach((el) => cio.observe(el));

    // Nav scroll
    const nav = document.querySelector("nav");
    const scrollBtn = document.getElementById("scroll-top");
    const sections = [
      "home",
      "services",
      "team",
      "projects",
      "about",
      "contact",
    ];
    const onScroll = () => {
      const y = window.scrollY;
      if (nav) nav.classList.toggle("scrolled", y > 60);
      if (scrollBtn) scrollBtn.classList.toggle("show", y > 450);
      sections.forEach((id) => {
        const sec = document.getElementById(id);
        const link = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (!sec || !link) return;
        const r = sec.getBoundingClientRect();
        link.classList.toggle("active", r.top <= 90 && r.bottom > 90);
      });
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      io.disconnect();
      cio.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
