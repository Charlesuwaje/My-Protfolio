import React, { useState } from "react";
import { Project } from "../data/portfolio";

interface ProjectCardProps {
  project: Project;
}

const GitHubIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
  </svg>
);

const ProjectCard: React.FC<ProjectCardProps> = ({ project: p }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        background: "#0d1526",
        border: `1px solid ${hovered ? p.color + "50" : "#1e293b"}`,
        borderRadius: 14,
        padding: "22px",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        transition: "all 0.2s",
        position: "relative",
        overflow: "hidden",
        transform: hovered ? "translateY(-2px)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: p.color,
          borderRadius: "14px 14px 0 0",
        }}
      />

      {/* Title row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div
            style={{
              fontSize: 9,
              color: p.color,
              letterSpacing: 2,
              fontWeight: 700,
              marginBottom: 5,
            }}
          >
            {p.category.toUpperCase()}
          </div>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#E2E8F0" }}>{p.name}</div>
        </div>

        {p.github && (
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            title="View on GitHub"
            style={{ color: "#475569", transition: "color 0.2s", textDecoration: "none" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = p.color; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#475569"; }}
          >
            <GitHubIcon />
          </a>
        )}
      </div>

      {/* Description */}
      <p style={{ fontSize: 12, color: "#64748B", lineHeight: 1.7, flex: 1, margin: 0 }}>
        {p.desc}
      </p>

      {/* Tech stack */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {p.stack.map((tech) => (
          <span
            key={tech}
            style={{
              fontSize: 10,
              fontWeight: 600,
              padding: "2px 9px",
              borderRadius: 20,
              background: p.color + "12",
              color: p.color,
              border: `1px solid ${p.color}30`,
              letterSpacing: 0.3,
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
