import { text } from "@fortawesome/fontawesome-svg-core";
import react, { useState, useEffect } from "react";

export function Alert(props) {
  const alertStyle = {
    padding: 0,
    backgroundColor: "var(--success)",
    position: "fixed",
    left: 10,
    bottom: 20,
    width: 300,
    textAlign: "center",
    color: "white",
    alignContent: "center",
    fontSize: "1.2rem",
    display: props.isVisible ? "block" : "none",
    borderRadius: 10
  };

  return (
    <div style={alertStyle}>
      <p>
        {props.message} {props.icon}{" "}
      </p>
    </div>
  );
}
