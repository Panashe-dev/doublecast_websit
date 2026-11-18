export default function FloatingElements() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <div className="social-sidebar">
        <a
          href="https://wa.me/263771165810"
          target="_blank"
          rel="noreferrer"
          className="wa"
          title="WhatsApp"
          aria-label="WhatsApp">
          <svg viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.714l5.969-1.566A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.374l-.36-.213-3.724.977.994-3.62-.234-.373A9.818 9.818 0 1121.818 12 9.829 9.829 0 0112 21.818z" />
          </svg>
        </a>
        <a
          href="https://facebook.com/doublecastconstruction"
          target="_blank"
          rel="noreferrer"
          className="fb"
          title="Facebook"
          aria-label="Facebook">
          <svg viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
        <a
          href="https://twitter.com/doublecastconstruction"
          target="_blank"
          rel="noreferrer"
          className="tw"
          title="Twitter"
          aria-label="Twitter">
          <svg viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a
          href="tel:+263771165810"
          className="ph"
          title="Call us"
          aria-label="Call us">
          <svg viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.05z" />
          </svg>
        </a>
      </div>

      <a
        href="https://wa.me/263771165810"
        target="_blank"
        rel="noreferrer"
        className="wa-float"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.714l5.969-1.566A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.374l-.36-.213-3.724.977.994-3.62-.234-.373A9.818 9.818 0 1121.818 12 9.829 9.829 0 0112 21.818z" />
        </svg>
      </a>

      <button
        id="scroll-top"
        className="scroll-top"
        onClick={scrollTop}
        aria-label="Scroll to top">
        <svg viewBox="0 0 24 24">
          <path d="M12 4l-8 8h5v8h6v-8h5z" />
        </svg>
      </button>
    </>
  );
}
