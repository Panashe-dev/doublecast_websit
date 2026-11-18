import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import Services from "./components/Services";
import Team from "./components/Team";
import WhyUs from "./components/WhyUs";
import About from "./components/About";
import Projects from "./components/Projects";
import CtaStrip from "./components/CtaStrip";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import CustomCursor from "./components/CustomCursor";
import FloatingElements from "./components/FloatingElements";
import ScrollReveal from "./components/ScrollReveal";

const PAGES = {
  "/": () => (
    <>
      <Hero />
      <Capabilities />
      <Services limit={6} />
      <WhyUs />
      <Projects limit={3} />
      <CtaStrip />
    </>
  ),
  "/services/": () => (
    <>
      <Services isPage />
      <CtaStrip />
    </>
  ),
  "/projects/": () => (
    <>
      <Projects isPage />
      <CtaStrip />
    </>
  ),
  "/team/": () => (
    <>
      <Team />
      <CtaStrip />
    </>
  ),
  "/about/": () => (
    <>
      <About />
      <WhyUs />
      <CtaStrip />
    </>
  ),
  "/contact/": () => <Contact />,
};

const normalizePath = (path) => (path.endsWith("/") ? path : `${path}/`);

function App({ path }) {
  const currentPath = normalizePath(path);
  const Page = PAGES[currentPath] ?? NotFound;

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <CustomCursor />
      <Navbar currentPath={currentPath} />
      <main id="main" tabIndex={-1}>
        <Page />
      </main>
      <Footer />
      <FloatingElements />
      <ScrollReveal />
    </>
  );
}

export default App;
