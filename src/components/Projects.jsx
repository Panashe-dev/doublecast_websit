import { useEffect, useRef } from "react";

const projects = [
  {
    title: "Residential Estate, Harare",
    cat: "Full Construction",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80",
  },
  {
    title: "Commercial Office Block",
    cat: "Structural & Finishes",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80",
  },
  {
    title: "Damafalls Family Home",
    cat: "Renovation",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=700&q=80",
  },
  {
    title: "Industrial Warehouse",
    cat: "Civil & Structural",
    img: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=700&q=80",
  },
  {
    title: "Boundary Wall & Paving",
    cat: "Pavement & Civil",
    img: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=700&q=80",
  },
  {
    title: "Luxury Villa Build",
    cat: "Full Construction",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80",
  },
];

export default function Projects() {
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".project-card") ?? [];
    const handlers = [];
    cards.forEach((card) => {
      const move = (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(700px) rotateY(${x * 9}deg) rotateX(${-y * 9}deg) scale(1.03)`;
      };
      const leave = () => {
        card.style.transition = "transform 0.5s cubic-bezier(0.16,1,0.3,1)";
        card.style.transform = "";
        setTimeout(() => {
          card.style.transition = "";
        }, 500);
      };
      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
      handlers.push({ card, move, leave });
    });
    return () =>
      handlers.forEach(({ card, move, leave }) => {
        card.removeEventListener("mousemove", move);
        card.removeEventListener("mouseleave", leave);
      });
  }, []);

  return (
    <section id="projects">
      <div className="section-head">
        <span className="section-tag reveal">Selected Work</span>
        <h2 className="section-title reveal">Projects we&apos;re proud of.</h2>
        <p className="section-sub reveal">
          A snapshot of builds delivered across Harare and beyond — residential,
          commercial, civil and refurbishment.
        </p>
      </div>
      <div className="projects-grid" ref={gridRef}>
        {projects.map((p, i) => (
          <div className="project-card stagger" key={i}>
            <img src={p.img} alt={p.title} />
            <div className="project-overlay">
              <h4>{p.title}</h4>
              <span>{p.cat}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
