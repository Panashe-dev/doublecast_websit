import { SERVICES } from "../data/services";

const Icon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L19.82 8 12 11.82 4.18 8 12 4.18zM4 9.71l7 3.5v7.16l-7-3.5V9.71zm9 10.66v-7.16l7-3.5v7.16l-7 3.5z" />
  </svg>
);

export default function Services({ isPage = false, limit }) {
  const Heading = isPage ? "h1" : "h2";
  const CardHeading = isPage ? "h2" : "h3";
  const reveal = isPage ? undefined : "reveal";
  const visibleServices = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <section id="services">
      <div className="section-head">
        <span className={`section-tag ${reveal ?? ""}`.trim()}>What We Do</span>
        <Heading className={`section-title ${reveal ?? ""}`.trim()}>
          Construction services,
          <br />
          engineered end-to-end.
        </Heading>
        <p className={`section-sub ${reveal ?? ""}`.trim()}>
          From the first sketch to the last coat of paint — every discipline you
          need to bring your project to life, under one trusted roof.
        </p>
      </div>
      <div className="services-grid">
        {visibleServices.map((s) => (
          <div className="service-card stagger" id={s.slug} key={s.slug}>
            <div className="service-icon">
              <Icon />
            </div>
            <CardHeading>{s.title}</CardHeading>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
      {limit && (
        <div className="section-more">
          <a href="/services/" className="btn btn-outline">
            View All Construction Services
          </a>
        </div>
      )}
    </section>
  );
}
