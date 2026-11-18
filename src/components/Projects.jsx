import { useEffect, useRef } from "react";
import { PROJECT_IMAGES } from "../data/images";
import ResponsiveImage from "./ResponsiveImage";

const projects = [
  {
    title: "Residential Estate, Harare",
    cat: "Full Construction",
    img: PROJECT_IMAGES.residentialEstate,
  },
  {
    title: "Commercial Office Block",
    cat: "Structural & Finishes",
    img: PROJECT_IMAGES.officeBlock,
  },
  {
    title: "Damafalls Family Home",
    cat: "Renovation",
    img: PROJECT_IMAGES.familyHome,
  },
  {
    title: "Industrial Warehouse",
    cat: "Civil & Structural",
    img: PROJECT_IMAGES.warehouse,
  },
  {
    title: "Boundary Wall & Paving",
    cat: "Pavement & Civil",
    img: PROJECT_IMAGES.paving,
  },
  {
    title: "Luxury Villa Build",
    cat: "Full Construction",
    img: PROJECT_IMAGES.villa,
  },
];

export default function Projects({ isPage = false, limit }) {
  const gridRef = useRef(null);
  const Heading = isPage ? "h1" : "h2";
  const CardHeading = isPage ? "h2" : "h3";
  const reveal = isPage ? "" : " reveal";
  const visibleProjects = limit ? projects.slice(0, limit) : projects;

  useEffect(() => {
    const canTilt = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    ).matches;
    if (!canTilt) return undefined;

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
        <span className={`section-tag${reveal}`}>Selected Work</span>
        <Heading className={`section-title${reveal}`}>
          Projects we&apos;re proud of.
        </Heading>
        <p className={`section-sub${reveal}`}>
          A snapshot of builds delivered across Harare and beyond — residential,
          commercial, civil and refurbishment.
        </p>
      </div>
      <div className="projects-grid" ref={gridRef}>
        {visibleProjects.map((p, i) => (
          <div
            className={`project-card${isPage && i === 0 ? "" : " stagger"}`}
            key={p.title}>
            <ResponsiveImage image={p.img} priority={isPage && i === 0} />
            <div className="project-overlay">
              <CardHeading>{p.title}</CardHeading>
              <span>{p.cat}</span>
            </div>
          </div>
        ))}
      </div>
      {limit && (
        <div className="section-more">
          <a href="/projects/" className="btn btn-outline">
            View All Projects
          </a>
        </div>
      )}
    </section>
  );
}
