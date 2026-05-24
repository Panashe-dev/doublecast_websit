export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-left">
          <span className="section-tag reveal">Class 1 Builders · Harare</span>
          <h1 className="reveal">
            Building with
            <br />
            Precision & Trust.
          </h1>
          <p className="reveal">
            Double Cast Construction & Civil Works delivers full-scope
            construction projects across Zimbabwe — from tendering and
            excavation to finishes and handover. Engineered by qualified
            professionals. Built to last.
          </p>
          <div className="hero-btns reveal">
            <a href="#contact" className="btn btn-solid">
              Start Your Project →
            </a>
            <a href="#services" className="btn btn-outline">
              Our Services
            </a>
          </div>
          <div className="stats-grid">
            <div className="stat-box stagger">
              <div className="num" data-count="120" data-suffix="+">
                0
              </div>
              <p>Projects Delivered</p>
            </div>
            <div className="stat-box stagger">
              <div className="num" data-count="15" data-suffix="+">
                0
              </div>
              <p>Years Experience</p>
            </div>
            <div className="stat-box stagger">
              <div className="num" data-count="98" data-suffix="%">
                0
              </div>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
        <div className="hero-right reveal-right">
          <div className="hero-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80"
              alt="Construction site"
            />
            <div className="hero-img-badge">
              Class 1<span>Registered Builders</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
