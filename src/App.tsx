import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { NAV_LINKS } from "./data/portfolio";

function App() {
  const [activeSection, setActiveSection] = useState("About");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );
    NAV_LINKS.forEach((link) => {
      const el = document.getElementById(link);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="portfolio-root">
      <div className="dot-grid" />
      <Navbar activeSection={activeSection} onNavigate={scrollTo} />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero onNavigate={scrollTo} />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
