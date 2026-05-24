const services = [
  {
    title: "Tendering & Quantity Surveying",
    desc: "Accurate cost estimation, bills of quantities, tender documentation and budget management for projects of every scale.",
  },
  {
    title: "Site Clearance & Excavation",
    desc: "Site preparation, demolition, bulk earthworks, trenching and foundation excavation with modern plant and equipment.",
  },
  {
    title: "Substructure & Brickwork",
    desc: "Foundations, footings, retaining walls, blockwork and brickwork — built to engineered specifications and Class 1 standards.",
  },
  {
    title: "Roofing & Structural Works",
    desc: "Timber trusses, IBR & tile roofing, structural steel, slabs and beams — sealed against the Zimbabwean climate.",
  },
  {
    title: "Electrical Works & Tubing",
    desc: "Domestic and commercial wiring, conduit & tubing, DBs, lighting and ZESA-compliant installations by qualified electricians.",
  },
  {
    title: "Building Finishes",
    desc: "Plastering, screeding, tiling, painting, ceilings, carpentry, joinery and bespoke finishes that elevate every space.",
  },
  {
    title: "Renovations & Refurbishment",
    desc: "Transform existing homes, offices and commercial spaces with intelligent layout updates and modern materials.",
  },
  {
    title: "Pavement & Civil Works",
    desc: "Driveways, paving, kerbing, drainage, road formations and external civil works delivered on schedule.",
  },
  {
    title: "Full Construction Projects",
    desc: "End-to-end project management — from drawing approvals and tendering through to handover of the completed building.",
  },
];

const Icon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L19.82 8 12 11.82 4.18 8 12 4.18zM4 9.71l7 3.5v7.16l-7-3.5V9.71zm9 10.66v-7.16l7-3.5v7.16l-7 3.5z" />
  </svg>
);

export default function Services() {
  return (
    <section id="services">
      <div className="section-head">
        <span className="section-tag reveal">What We Do</span>
        <h2 className="section-title reveal">
          Construction services,
          <br />
          engineered end-to-end.
        </h2>
        <p className="section-sub reveal">
          From the first sketch to the last coat of paint — every discipline you
          need to bring your project to life, under one trusted roof.
        </p>
      </div>
      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card stagger" key={i}>
            <div className="service-icon">
              <Icon />
            </div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
