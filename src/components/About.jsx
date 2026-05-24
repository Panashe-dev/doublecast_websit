const values = [
  "Integrity",
  "Craftsmanship",
  "Safety First",
  "On-Time Delivery",
  "Engineering Excellence",
  "Client Partnership",
];

const Check = () => (
  <svg viewBox="0 0 24 24">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
);

export default function About() {
  return (
    <section id="about">
      <div className="about-inner">
        <div className="about-img reveal-left">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80"
            alt="About Double Cast"
          />
        </div>
        <div className="about-content reveal-right">
          <span className="section-tag">About Double Cast</span>
          <h2 className="section-title">
            A construction partner you can build a future with.
          </h2>
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
