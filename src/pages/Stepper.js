import React, { useState, useEffect } from "react";

export function Stepper() {
  const [showAlert, setShowAlert] = useState(false);

  const primaryClassNames = [
    "btn-stepper-primary-filled",
    "btn-stepper-primary-outlined",
    "btn-stepper-secondary-filled",
    "btn-stepper-secondary-outlined",
  ];

  return (
    <div>
      <h1> Stepper </h1>
      <article
        className="shadow1"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 3fr",
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}>
        <h2
          className="color-primary"
          style={{ gridColumnStart: 1, gridColumnEnd: 3 }}>
          {" "}
          Primary Filled Stepper{" "}
        </h2>
        <p> stepper-primary </p>
        <div className="stepper-primary">
          <button className="btn-stepper-primary-filled">1</button>
          <span> Step 1 </span>

          <span className="stepper-seperator"></span>
          <button className="btn-stepper-primary-normal">2</button>
          <span> Step 2 </span>
          <span className="stepper-seperator"></span>

          <button className="btn-stepper-primary-normal">3</button>
          <span> Step 3 </span>
        </div>
      </article>
    </div>
  );
}
