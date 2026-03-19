import React from "react";

interface SectionHeaderProps {
  index: string;
  title: string;
  centered?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ index, title, centered }) => (
  <div style={{ marginBottom: 40, textAlign: centered ? "center" : "left" }}>
    <div
      style={{
        fontSize: 11,
        color: "#00D4AA",
        letterSpacing: 3,
        fontWeight: 700,
        marginBottom: 8,
      }}
    >
      {/* {`// SECTION ${index}`} */}
    </div>
    <h2
      style={{
        fontSize: "clamp(24px,4vw,36px)",
        fontWeight: 800,
        color: "#E2E8F0",
        lineHeight: 1,
        letterSpacing: -0.5,
        margin: 0,
      }}
    >
      {title}
    </h2>
    <div
      style={{
        width: centered ? 60 : 48,
        height: 2,
        background: "#00D4AA",
        borderRadius: 1,
        marginTop: 12,
        marginLeft: centered ? "auto" : 0,
        marginRight: centered ? "auto" : 0,
      }}
    />
  </div>
);

export default SectionHeader;
