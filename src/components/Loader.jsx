import { useEffect, useState } from "react";

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`loader${hidden ? " hidden" : ""}`}>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "2rem",
          color: "#fff",
          marginBottom: "30px",
        }}>
        Double Cast
      </div>
      <div className="loader-bar">
        <span />
      </div>
    </div>
  );
}
