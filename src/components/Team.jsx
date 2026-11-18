import { TEAM_IMAGES } from "../data/images";
import ResponsiveImage from "./ResponsiveImage";

const team = [
  {
    name: "Eng. T. Mugomba",
    role: "Managing Director",
    img: TEAM_IMAGES.managingDirector,
  },
  {
    name: "Eng. P. Chideme",
    role: "Senior Civil Engineer",
    img: TEAM_IMAGES.civilEngineer,
  },
  {
    name: "Mr. K. Sibanda",
    role: "Site Foreman",
    img: TEAM_IMAGES.siteForeman,
  },
  {
    name: "Ms. R. Moyo",
    role: "Quantity Surveyor",
    img: TEAM_IMAGES.quantitySurveyor,
  },
];

export default function Team() {
  return (
    <section id="team">
      <div className="section-head">
        <span className="section-tag">The People Behind the Build</span>
        <h1 className="section-title">Qualified. Registered. Hands-on.</h1>
        <p className="section-sub">
          Our leadership combines engineering expertise with decades of on-site
          experience — ensuring every project is delivered to the highest
          professional standards.
        </p>
      </div>
      <div className="team-grid">
        {team.map((m, i) => (
          <div className={`team-card${i === 0 ? "" : " stagger"}`} key={m.name}>
            <div className="img-wrap">
              <ResponsiveImage image={m.img} priority={i === 0} />
            </div>
            <h2>{m.name}</h2>
            <span>{m.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
