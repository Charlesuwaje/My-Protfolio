import React from "react";
import { PROJECTS } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => (
  <section
    id="Projects"
    style={{ padding: "80px 24px", maxWidth: 1000, margin: "0 auto" }}
  >
    <SectionHeader index="03" title="Featured Projects" />
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 16,
      }}
    >
      {PROJECTS.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  </section>
);

export default Projects;
