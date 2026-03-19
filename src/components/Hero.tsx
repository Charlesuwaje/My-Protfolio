import React from "react";
import { useTypewriter } from "../hooks/useTypewriter";

interface HeroProps {
  onNavigate: (section: string) => void;
}

const ROLES = ["Backend Engineer", "DevOps Specialist", "API Architect", "Fintech Builder", "Team Player"];

const SOCIALS = [
  {
    label: "GitHub",
    url: "https://github.com/charlesuwaje",
    path: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.936.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z",
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/charles-uwaje",
    path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
  },
  {
    label: "Email",
    url: "mailto:charlesuwaje02@gmail.com",
    path: "M3 8l9 6 9-6M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z",
  },
];

const STATS = [
  { value: "5+", label: "Years Exp." },
  { value: "8+", label: "Projects" },
  { value: "3", label: "Countries" },
];

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const typed = useTypewriter(ROLES, 80, 2200);

  return (
    <section
      id="About"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "80px 24px 60px",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      {/* ── Two-column layout ── */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 48,
        width: "100%",
        flexWrap: "wrap",
      }}>

        {/* ── LEFT: Text content ── */}
        <div style={{ flex: "1 1 480px", minWidth: 0 }}>
          {/* Available pill */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(0,212,170,0.08)", border: "1px solid rgba(0,212,170,0.3)",
            borderRadius: 20, padding: "5px 14px", marginBottom: 28,
            fontSize: 11, color: "#00D4AA", letterSpacing: 1, fontWeight: 600,
          }}>
            <span className="pulse-dot" />
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <h1 style={{
            fontSize: "clamp(40px,6vw,76px)",
            fontWeight: 800,
            lineHeight: 1.05,
            margin: "0 0 16px 0",
          }}>
            <span style={{ color: "#E2E8F0" }}>CHARLES</span>
            <br />
            <span style={{ color: "#00D4AA" }}>UWAJE</span>
          </h1>

          {/* Typewriter */}
          <div style={{
            fontSize: "clamp(15px,2.2vw,20px)",
            color: "#94A3B8", marginBottom: 20,
            minHeight: 32, fontWeight: 500,
          }}>
            <span style={{ color: "#00D4AA" }}>{">"}</span>{" "}
            <span style={{ color: "#E2E8F0" }}>{typed}</span>
            <span className="cursor-blink" style={{ color: "#00D4AA" }}>_</span>
          </div>

          <p style={{
            fontSize: 14, color: "#64748B",
            maxWidth: 500, lineHeight: 1.85, marginBottom: 32,
          }}>
            5+ years architecting scalable backend systems across fintech, logistics, and HR
            platforms. Specialized in PHP Laravel, Node.js, Microservices, and DevOps —
            delivering enterprise-grade solutions across Nigeria, UK, and Canada.
          </p>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 24, marginBottom: 32 }}>
            {STATS.map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 24, fontWeight: 800, color: "#00D4AA", lineHeight: 1 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: 10, color: "#475569", marginTop: 4, letterSpacing: 1, fontWeight: 600 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 36 }}>
            <button
              onClick={() => onNavigate("Projects")}
              className="btn-primary"
              style={{
                padding: "11px 26px", borderRadius: 8, border: "none",
                cursor: "pointer", background: "#00D4AA", color: "#0A0F1E",
                fontSize: 12, fontWeight: 700, fontFamily: "inherit", letterSpacing: 1,
              }}
            >
              VIEW PROJECTS →
            </button>
            <a
              href="mailto:charlesuwaje02@gmail.com"
              className="btn-outline"
              style={{
                padding: "11px 26px", borderRadius: 8,
                border: "1px solid #1e3a5f", background: "transparent",
                color: "#94A3B8", fontSize: 12, fontWeight: 700,
                fontFamily: "inherit", letterSpacing: 1,
                textDecoration: "none", display: "inline-flex", alignItems: "center",
              }}
            >
              CONTACT ME
            </a>
          </div>

          {/* Socials */}
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="social-btn"
                style={{
                  width: 36, height: 36, borderRadius: 8,
                  border: "1px solid #1e293b", background: "rgba(30,41,59,0.5)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#64748B", textDecoration: "none",
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
            {/* <span style={{ fontSize: 11, color: "#334155", marginLeft: 4 }}> */}
            <span style={{ fontSize: 11, color: "#ffff", marginLeft: 4 }}>

              Lagos, Nigeria · Open to Relocation
            </span>
          </div>
        </div>

        {/* ── RIGHT: Profile image ── */}
        <div style={{
          flex: "0 0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}>
          {/* Outer glow ring */}
          <div style={{
            position: "relative",
            width: 280,
            height: 280,
          }}>
            {/* Rotating dashed border */}
            <div style={{
              position: "absolute", inset: -6,
              borderRadius: "50%",
              border: "1.5px dashed rgba(0,212,170,0.35)",
              animation: "spin 18s linear infinite",
            }} />

            {/* Teal accent ring */}
            <div style={{
              position: "absolute", inset: 0,
              borderRadius: "50%",
              border: "2px solid rgba(0,212,170,0.2)",
            }} />

            {/* Image container */}
            <div style={{
              width: "100%", height: "100%",
              borderRadius: "50%",
              overflow: "hidden",
              background: "linear-gradient(135deg, #0d1526 0%, #1e293b 100%)",
              border: "3px solid #0d1526",
              position: "relative",
              zIndex: 1,
            }}>
              
                <img
                  src="/charles uwaje picture.jpeg"
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
             
              <div style={{
                width: "100%", height: "100%",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: 8,
              }}>
                {/* Placeholder avatar */}
                <div style={{
                  width: 80, height: 80, borderRadius: "50%",
                  background: "rgba(0,212,170,0.15)",
                  border: "2px solid rgba(0,212,170,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 28, fontWeight: 800, color: "#00D4AA",
                }}>
                  CU
                </div>
                <div style={{ fontSize: 10, color: "#334155", letterSpacing: 1, textAlign: "center" }}>
                 
                  <br />
                  <span style={{ fontSize: 9, color: "#1e3a5f" }}>passionate in what i do </span>
                </div>
              </div>
            </div>

            {/* Floating badge — top right */}
            <div style={{
              position: "absolute", top: 12, right: -8, zIndex: 2,
              background: "#0d1526", border: "1px solid rgba(0,212,170,0.3)",
              borderRadius: 8, padding: "5px 10px",
              fontSize: 10, fontWeight: 700, color: "#00D4AA", letterSpacing: 0.5,
              whiteSpace: "nowrap",
            }}>
              {"</>"} Backend
            </div>

            {/* Floating badge — bottom left */}
            <div style={{
              position: "absolute", bottom: 16, left: -16, zIndex: 2,
              background: "#0d1526", border: "1px solid rgba(245,158,11,0.3)",
              borderRadius: 8, padding: "5px 10px",
              fontSize: 10, fontWeight: 700, color: "#F59E0B", letterSpacing: 0.5,
              whiteSpace: "nowrap",
            }}>
              ☁ DevOps
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 700px) {
          #About > div {
            flex-direction: column-reverse !important;
            align-items: center !important;
          }
          #About > div > div:last-child > div {
            width: 200px !important;
            height: 200px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;