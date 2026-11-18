import { ABOUT_IMAGE } from "../data/images";
import ResponsiveImage from "./ResponsiveImage";

const values = [
  "Integrity",
  "Craftsmanship",
  "Safety First",
  "On-Time Delivery",
  "Engineering Excellence",
  "Client Partnership",
];

const Check = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
);

export default function About() {
  return (
    <section id="about">
      <div className="about-inner">
        <div className="about-img">
          <ResponsiveImage image={ABOUT_IMAGE} priority />
        </div>
        <div className="about-content">
          <span className="section-tag">About Double Cast</span>
          <h1 className="section-title">
            A construction partner you can build a future with.
          </h1>
          <p className="section-sub">
            Founded in Harare and rooted in the Damafalls community, Double Cast
            Construction & Civil Works has grown into a trusted name for
            full-scope construction delivery across Zimbabwe. We combine
            qualified engineering, registered building credentials and
            ground-level craftsmanship to deliver buildings that stand the test
            of time.
          </p>
          <ul className="about-vals">
            {values.map((v) => (
              <li key={v}>
                <Check />
                {v}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
