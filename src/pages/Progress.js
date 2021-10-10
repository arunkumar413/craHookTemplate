import react, { useState } from "react";

export function Progress() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}>
      <progress
        className="primaryProgress"
        id="file"
        value="32"
        max="100"></progress>

      <progress
        className="primaryProgress"
        id="file"
        value="55"
        max="100"></progress>

      <progress
        className="progress-secondary"
        id="file"
        value="55"
        max="100"></progress>
    </div>
  );
}
