import React from "react";

const Footer: React.FC = () => (
  <footer
    style={{
      borderTop: "1px solid #1e293b",
      padding: "20px 24px",
      textAlign: "center",
      fontSize: 11,
      color: "#334155",
      letterSpacing: 1,
    }}
  >
    <span style={{ color: "#00D4AA" }}>{"<"}</span>
    {" CHARLES UWAJE · BACKEND ENGINEER · LAGOS, NIGERIA "}
    <span style={{ color: "#00D4AA" }}>{"/>"}</span>
    {/* <div style={{ marginTop: 6, fontSize: 10, color: "#1e293b" }}>
    
    </div> */}
  </footer>
);

export default Footer;
