const team = [
  {
    name: "Eng. T. Mugomba",
    role: "Managing Director",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80",
  },
  {
    name: "Eng. P. Chideme",
    role: "Senior Civil Engineer",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80",
  },
  {
    name: "Mr. K. Sibanda",
    role: "Site Foreman",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&q=80",
  },
  {
    name: "Ms. R. Moyo",
    role: "Quantity Surveyor",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80",
  },
];

export default function Team() {
  return (
    <section id="team">
      <div className="section-head">
        <span className="section-tag reveal">The People Behind the Build</span>
        <h2 className="section-title reveal">
          Qualified. Registered. Hands-on.
        </h2>
        <p className="section-sub reveal">
          Our leadership combines engineering expertise with decades of on-site
          experience — ensuring every project is delivered to the highest
          professional standards.
        </p>
      </div>
      <div className="team-grid">
        {team.map((m, i) => (
          <div className="team-card stagger" key={i}>
            <div className="img-wrap">
              <img src={m.img} alt={m.name} />
            </div>
            <h4>{m.name}</h4>
            <span>{m.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
