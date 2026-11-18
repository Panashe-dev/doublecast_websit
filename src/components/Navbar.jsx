import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data/site";

export default function Navbar({ currentPath }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <nav aria-label="Main" className={menuOpen ? "menu-open" : undefined}>
      <a
        href="/"
        style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "var(--ink)",
          }}>
          Double<span style={{ color: "var(--gold-deep)" }}>Cast</span>
        </span>
      </a>
      <ul className={`nav-links${menuOpen ? " open" : ""}`} id="nav-menu">
        {NAV_LINKS.map((link) => {
          const isCurrent = link.href === currentPath;
          return (
            <li key={link.href}>
              <a
                href={link.href}
                className={isCurrent ? "active" : undefined}
                aria-current={isCurrent ? "page" : undefined}>
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="nav-actions">
        <a href="/contact/" className="btn btn-solid">
          Get a Quote
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          onClick={() => setMenuOpen((open) => !open)}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d={
                menuOpen
                  ? "M6.4 5 5 6.4 10.6 12 5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6L19 6.4 17.6 5 12 10.6z"
                  : "M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"
              }
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
