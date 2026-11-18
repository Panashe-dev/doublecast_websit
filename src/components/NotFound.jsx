export default function NotFound() {
  return (
    <section className="not-found">
      <span className="section-tag">Error 404</span>
      <h1 className="section-title">We couldn&apos;t find that page.</h1>
      <p className="section-sub">
        The page may have moved. Head back to the homepage or get in touch about
        your project.
      </p>
      <div className="hero-btns">
        <a href="/" className="btn btn-solid">
          Back to Home
        </a>
        <a href="/contact/" className="btn btn-outline">
          Contact Us
        </a>
      </div>
    </section>
  );
}
