import React, { useState } from "react";
import { NAV_LINKS } from "../data/portfolio";

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (section: string) => {
    onNavigate(section);
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "rgba(10,15,30,0.9)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #1e293b",
          padding: "0 24px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: "#00D4AA", fontWeight: 700, fontSize: 16 }}>{"<"}</span>
          <span style={{ fontWeight: 700, fontSize: 14, letterSpacing: 1.5, color: "#E2E8F0" }}>
            CHARLES.UWAJE
          </span>
          <span style={{ color: "#00D4AA", fontWeight: 700, fontSize: 16 }}>{"/>"}</span>
        </div>

        {/* Desktop links */}
        <div className="nav-desktop">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              style={{
                padding: "6px 14px",
                borderRadius: 6,
                border: "none",
                cursor: "pointer",
                fontSize: 12,
                fontWeight: 600,
                fontFamily: "inherit",
                letterSpacing: 0.5,
                background:
                  activeSection === link ? "rgba(0,212,170,0.1)" : "transparent",
                color: activeSection === link ? "#00D4AA" : "#94A3B8",
                borderBottom:
                  activeSection === link
                    ? "1px solid #00D4AA"
                    : "1px solid transparent",
                transition: "all 0.2s",
              }}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-mobile-btn"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#94A3B8",
            padding: 4,
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d={menuOpen ? "M6 6l12 12M6 18L18 6" : "M3 6h18M3 12h18M3 18h18"}
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 60,
            left: 0,
            right: 0,
            zIndex: 49,
            background: "#0d1526",
            borderBottom: "1px solid #1e293b",
            padding: "12px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              style={{
                padding: "10px 14px",
                borderRadius: 6,
                border: "none",
                cursor: "pointer",
                fontSize: 13,
                fontWeight: 600,
                fontFamily: "inherit",
                background:
                  activeSection === link ? "rgba(0,212,170,0.1)" : "transparent",
                color: activeSection === link ? "#00D4AA" : "#94A3B8",
                textAlign: "left",
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
