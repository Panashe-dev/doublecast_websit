import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/cormorant-garamond/latin-500.css";
import "@fontsource/cormorant-garamond/latin-600.css";
import "@fontsource/cormorant-garamond/latin-700.css";
import "@fontsource-variable/dm-sans/wght.css";
import App from "./App.jsx";
import "./index.css";

const LEGACY_SECTIONS = ["services", "team", "projects", "about", "contact"];
const legacySection = window.location.hash.slice(1);

if (window.location.pathname === "/" && LEGACY_SECTIONS.includes(legacySection)) {
  window.location.replace(`/${legacySection}/`);
} else {
  const container = document.getElementById("root");
  const prerenderedPath = container.dataset.route;
  const app = (
    <React.StrictMode>
      <App path={prerenderedPath ?? window.location.pathname} />
    </React.StrictMode>
  );

  if (prerenderedPath) {
    ReactDOM.hydrateRoot(container, app);
  } else {
    ReactDOM.createRoot(container).render(app);
  }
}
