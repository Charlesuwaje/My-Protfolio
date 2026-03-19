import React from "react";
import { EXPERIENCES } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import ExperienceCard from "./ExperienceCard";

const Experience: React.FC = () => (
  <section
    id="Experience"
    style={{ padding: "80px 24px", maxWidth: 1000, margin: "0 auto" }}
  >
    <SectionHeader index="02" title="Work Experience" />

    <div style={{ position: "relative" }}>
      {/* Timeline vertical line */}
      <div
        style={{
          position: "absolute",
          left: 19,
          top: 0,
          bottom: 0,
          width: 1,
          background: "linear-gradient(to bottom, #00D4AA40, transparent)",
        }}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {EXPERIENCES.map((exp, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: 28,
              paddingBottom: 28,
              position: "relative",
            }}
          >
            {/* Timeline node */}
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: exp.color,
                flexShrink: 0,
                marginTop: 8,
                boxShadow: `0 0 8px ${exp.color}60`,
                zIndex: 1,
              }}
            />
            <ExperienceCard exp={exp} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
