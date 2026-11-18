const items = [
  "Tendering & QS",
  "Site Clearance",
  "Excavation",
  "Brickwork",
  "Roofing",
  "Electrical",
  "Finishes",
  "Renovations",
  "Pavement",
  "Civil Works",
];

export default function Capabilities() {
  const doubled = [...items, ...items];
  return (
    <div className="cap-strip">
      <div className="cap-wrap">
        {doubled.map((label, i) => (
          <div
            className="cap-item"
            key={i}
            aria-hidden={i >= items.length ? "true" : undefined}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
