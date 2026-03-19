import React from "react";
import { SKILLS } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

const Skills: React.FC = () => (
  <section
    id="Skills"
    style={{ padding: "80px 24px", maxWidth: 1000, margin: "0 auto" }}
  >
    <SectionHeader index="01" title="Technical Skills" />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 16,
      }}
    >
      {Object.entries(SKILLS).map(([category, items]) => (
        <div
          key={category}
          className="skill-card"
          style={{
            background: "#0d1526",
            border: "1px solid #1e293b",
            borderRadius: 12,
            padding: 20,
            transition: "border-color 0.2s",
          }}
        >
          <div
            style={{
              fontSize: 10,
              color: "#00D4AA",
              letterSpacing: 2,
              fontWeight: 700,
              marginBottom: 14,
            }}
          >
            {` ${category.toUpperCase()}`}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {items.map((skill) => (
              <div key={skill} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: "#00D4AA",
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: 13, color: "#CBD5E1" }}>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
