export default function Navbar() {
  return (
    <nav>
      <a
        href="#home"
        style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "var(--ink)",
          }}>
          Double<span style={{ color: "var(--gold)" }}>Cast</span>
        </span>
      </a>
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#team">Team</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <a href="#contact" className="btn btn-solid">
        Get a Quote
      </a>
    </nav>
  );
}
