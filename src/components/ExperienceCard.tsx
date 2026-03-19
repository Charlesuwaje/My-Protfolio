import React, { useState } from "react";
import { Experience } from "../data/portfolio";

interface ExperienceCardProps {
  exp: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        background: "#0d1526",
        border: `1px solid ${hovered ? exp.color + "50" : "#1e293b"}`,
        borderRadius: 12,
        padding: "18px 20px",
        transition: "border-color 0.2s",
        flex: 1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 8,
          marginBottom: 10,
        }}
      >
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#E2E8F0" }}>
            {exp.company}
          </div>
          <div style={{ fontSize: 12, color: exp.color, marginTop: 2 }}>{exp.role}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
          {exp.tag && (
            <span
              style={{
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: 1,
                padding: "2px 8px",
                borderRadius: 20,
                background: exp.color + "15",
                color: exp.color,
                border: `1px solid ${exp.color}40`,
              }}
            >
              {exp.tag}
            </span>
          )}
          <span style={{ fontSize: 11, color: "#475569" }}>{exp.period}</span>
        </div>
      </div>

      {/* Bullet points */}
      <ul
        style={{
          paddingLeft: 0,
          listStyle: "none",
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        {exp.points.map((pt, j) => (
          <li
            key={j}
            style={{
              display: "flex",
              gap: 8,
              fontSize: 12,
              color: "#94A3B8",
              lineHeight: 1.6,
            }}
          >
            <span style={{ color: exp.color, flexShrink: 0, marginTop: 2 }}>▸</span>
            {pt}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
