import React from "react";
import { useTypewriter } from "../hooks/useTypewriter";

interface HeroProps {
  onNavigate: (section: string) => void;
}

const ROLES = ["Backend Engineer", "DevOps Specialist", "API Architect", "Fintech Builder"];

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
        maxWidth: 1000,
        margin: "0 auto",
      }}
    >
      <div style={{ width: "100%" }}>
        {/* Available pill */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(0,212,170,0.08)",
            border: "1px solid rgba(0,212,170,0.3)",
            borderRadius: 20,
            padding: "5px 14px",
            marginBottom: 28,
            fontSize: 11,
            color: "#00D4AA",
            letterSpacing: 1,
            fontWeight: 600,
          }}
        >
          <span className="pulse-dot" />
          AVAILABLE FOR OPPORTUNITIES
        </div>

        <div style={{ fontSize: 13, color: "#64748B", letterSpacing: 2, marginBottom: 12 }}>
       
        </div>

        <h1
          style={{
            fontSize: "clamp(40px,7vw,80px)",
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: 16,
            margin: "0 0 16px 0",
          }}
        >
          <span style={{ color: "#E2E8F0" }}>CHARLES</span>
          <br />
          <span style={{ color: "#00D4AA" }}>UWAJE</span>
        </h1>

        {/* Typewriter */}
        <div
          style={{
            fontSize: "clamp(16px,2.5vw,22px)",
            color: "#94A3B8",
            marginBottom: 24,
            minHeight: 36,
            fontWeight: 500,
          }}
        >
          <span style={{ color: "#00D4AA" }}>{">"}</span>{" "}
          <span style={{ color: "#E2E8F0" }}>{typed}</span>
          <span className="cursor-blink" style={{ color: "#00D4AA" }}>_</span>
        </div>

        <p
          style={{
            fontSize: 15,
            color: "#64748B",
            maxWidth: 560,
            lineHeight: 1.8,
            marginBottom: 36,
          }}
        >
          5+ years architecting scalable backend systems across fintech, logistics, and HR
          platforms. Specialized in PHP Laravel, Node.js, Microservices, and DevOps —
          delivering enterprise-grade solutions across Nigeria, UK, and Canada.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 40 }}>
          <button
            onClick={() => onNavigate("Projects")}
            className="btn-primary"
            style={{
              padding: "12px 28px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              background: "#00D4AA",
              color: "#0A0F1E",
              fontSize: 13,
              fontWeight: 700,
              fontFamily: "inherit",
              letterSpacing: 1,
            }}
          >
            VIEW PROJECTS →
          </button>
          <a
            href="mailto:charlesuwaje02@gmail.com"
            className="btn-outline"
            style={{
              padding: "12px 28px",
              borderRadius: 8,
              border: "1px solid #1e3a5f",
              background: "transparent",
              color: "#94A3B8",
              fontSize: 13,
              fontWeight: 700,
              fontFamily: "inherit",
              letterSpacing: 1,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            CONTACT ME
          </a>
        </div>

        {/* Socials */}
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              className="social-btn"
              style={{
                width: 38,
                height: 38,
                borderRadius: 8,
                border: "1px solid #1e293b",
                background: "rgba(30,41,59,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#64748B",
                textDecoration: "none",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d={s.path} />
              </svg>
            </a>
          ))}
          <span style={{ fontSize: 11, color: "#334155", marginLeft: 4 }}>
            Lagos, Nigeria · Open to Relocation
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
