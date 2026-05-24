const reasons = [
  {
    title: "Class 1 Registered Builders",
    desc: "Officially registered to deliver projects of any scale, with full compliance to Zimbabwean construction standards.",
  },
  {
    title: "Qualified Engineers On-Staff",
    desc: "Every project benefits from in-house engineering oversight — structural integrity is non-negotiable.",
  },
  {
    title: "Transparent Pricing",
    desc: "Detailed BoQs, fixed-cost contracts where possible, and no hidden surprises mid-project.",
  },
  {
    title: "On-Time Delivery",
    desc: "Programme-driven project management with weekly client reporting from groundbreaking to handover.",
  },
];

export default function WhyUs() {
  return (
    <section id="why">
      <div className="section-head">
        <span className="section-tag reveal">Why Choose Us</span>
        <h2 className="section-title reveal">
          Built on trust, delivered with precision.
        </h2>
        <p className="section-sub reveal">
          We treat every project — large or small — with the same engineering
          rigour and craftsmanship.
        </p>
      </div>
      <div className="why-grid">
        {reasons.map((r, i) => (
          <div className="why-card stagger" key={i}>
            <h4>{r.title}</h4>
            <p>{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
