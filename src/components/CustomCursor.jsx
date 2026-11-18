import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;
    let raf;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top = my + "px";
    };

    const anim = () => {
      rx += (mx - rx) * 0.11;
      ry += (my - ry) * 0.11;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      raf = requestAnimationFrame(anim);
    };

    document.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(anim);

    const hoverEls = document.querySelectorAll(
      "a,button,.btn,.service-card,.team-card,.project-card,.cap-item,.why-card,input,select,textarea",
    );
    const onEnter = () => {
      dot.style.transform = "translate(-50%,-50%) scale(2.8)";
      dot.style.opacity = "0.7";
      ring.style.width = "54px";
      ring.style.height = "54px";
      ring.style.borderColor = "var(--ink)";
      ring.style.opacity = "0.25";
    };
    const onLeave = () => {
      dot.style.transform = "translate(-50%,-50%) scale(1)";
      dot.style.opacity = "1";
      ring.style.width = "36px";
      ring.style.height = "36px";
      ring.style.borderColor = "var(--gold)";
      ring.style.opacity = "0.5";
    };
    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    const onDocLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };
    const onDocEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "0.5";
    };
    document.addEventListener("mouseleave", onDocLeave);
    document.addEventListener("mouseenter", onDocEnter);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onDocLeave);
      document.removeEventListener("mouseenter", onDocEnter);
      hoverEls.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
