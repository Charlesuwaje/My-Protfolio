import React, { useState } from "react";
import SectionHeader from "./SectionHeader";

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("charlesuwaje02@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="Contact"
      style={{
        padding: "80px 24px 120px",
        maxWidth: 700,
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <SectionHeader index="04" title="Get In Touch" centered />

      <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.8, marginBottom: 36 }}>
        Open to senior backend / DevOps roles, contract work, and technical consulting.
        <br />
        Let's build something great together.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
        }}
      >
        {/* Copy email */}
        <button
          onClick={copyEmail}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "14px 28px",
            background: copied ? "rgba(0,212,170,0.15)" : "#0d1526",
            border: `1px solid ${copied ? "#00D4AA" : "#1e293b"}`,
            borderRadius: 10,
            cursor: "pointer",
            fontFamily: "inherit",
            color: copied ? "#00D4AA" : "#94A3B8",
            fontSize: 13,
            transition: "all 0.2s",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M3 8l9 6 9-6M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
          </svg>
          {copied ? "✓ Copied to clipboard!" : "charlesuwaje02@gmail.com"}
        </button>

        {/* Phone */}
        <a
          href="tel:+2348106771861"
          className="contact-link"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "14px 28px",
            background: "#0d1526",
            border: "1px solid #1e293b",
            borderRadius: 10,
            color: "#94A3B8",
            fontSize: 13,
            textDecoration: "none",
            transition: "all 0.2s",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.25 1.18 2 2 0 012.24 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
          +234 810 677 1861
        </a>

        {/* External links */}
        <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
          {[
            { label: "GITHUB ↗", url: "https://github.com/charlesuwaje" },
            { label: "LINKEDIN ↗", url: "https://linkedin.com/in/charles-uwaje" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ext-link"
              style={{
                padding: "10px 20px",
                borderRadius: 8,
                border: "1px solid #1e293b",
                background: "#0d1526",
                color: "#64748B",
                fontSize: 12,
                fontWeight: 600,
                textDecoration: "none",
                letterSpacing: 0.5,
                transition: "all 0.2s",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
