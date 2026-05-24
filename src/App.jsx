import { useEffect } from "react";
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
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import FloatingElements from "./components/FloatingElements";
import ScrollReveal from "./components/ScrollReveal";

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (href && href.startsWith("#")) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => link.addEventListener("click", handleAnchorClick));

    return () => {
      links.forEach((link) =>
        link.removeEventListener("click", handleAnchorClick),
      );
    };
  }, []);

  return (
    <>
      <Loader />
      <CustomCursor />
      <Navbar />
      <Hero />
      <Capabilities />
      <Services />
      <Team />
      <WhyUs />
      <About />
      <Projects />
      <CtaStrip />
      <Contact />
      <Footer />
      <FloatingElements />
      <ScrollReveal />
    </>
  );
}

export default App;
