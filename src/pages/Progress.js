import react, { useState } from "react";

export function Progress() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}>
      <article
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 3fr",
          justifyContent: "center",
          alignItems:'center'
        }}>
        <p> progress-primary </p>
        <progress
          className="progress-primary"
          id="file"
          value="32"
          max="100"></progress>
      </article>

      <article
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 3fr",
          justifyContent: "center",
          alignItems:'center'
        }}>
        <p> progress-secondary </p>
        <progress
          className="progress-secondary"
          id="file"
          value='88'
          max="100"></progress>
      </article>

     

     
    </section>
  );
}
