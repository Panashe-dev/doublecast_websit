import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import { NOT_FOUND_ROUTE, ROUTES } from "./data/routes";
import { buildHead } from "./seo/head";

export { NOT_FOUND_ROUTE, ROUTES, buildHead };

export function render(path) {
  return renderToString(
    <StrictMode>
      <App path={path} />
    </StrictMode>,
  );
}
