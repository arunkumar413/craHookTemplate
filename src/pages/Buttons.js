import react, { useState, useEffect } from "react";

export function Buttons() {
  const cssClasses = [
    "btn-primary-filled",
    "btn-primary-outlined",
    "btn-primary-outlined round",
    "btn-primary-filled rounder",
    "btn-primary-outlined roundest",
    "btn-secondary-filled",
    "btn-secondary-outlined",
    "btn-secondary-outlined round",
    "btn-secondary-outlined rounder",
    "btn-secondary-outlined roundest",
  ];

  const elements = cssClasses.map(function (item, index) {
    return (
      <react.Fragment key={item}>
        <h5> {item} </h5>
        <button className={item}> {item} </button>
      </react.Fragment>
    );
  });

  return (
    <div>
      <h2> Buttons</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gridGap: 10,
          alignItems: "center",
        }}>
        <h5> btn-primary-filled </h5>
        <button className="btn-primary-filled"> Primary Filled </button>

        <h5>btn-primary-outlined </h5>
        <button className="btn-primary-outlined">Primary Outlined </button>

        <h5>btn-primary-outlined round </h5>
        <button className="btn-primary-outlined round">Round </button>

        <h5> btn-primary-filled rounder </h5>
        <button className="btn-primary-filled rounder">Rounder</button>

        <h5> btn-primary-outlined roundest </h5>
        <button className="btn-primary-outlined roundest">Roundest</button>

        <h5>btn-secondary-filled </h5>
        <button className="btn-secondary-filled">Secondary Filled </button>

        <h5> btn-secondary-outlined </h5>
        <button className="btn-secondary-outlined">Secondary Outlined</button>

        <h5> btn-secondary-outlined round </h5>
        <button className="btn-secondary-outlined round">Round</button>

        <h5> btn-secondary-outlined rounder </h5>
        <button className="btn-secondary-outlined rounder">rounder</button>

        <h5> btn-secondary-outlined roundest </h5>
        <button className="btn-secondary-outlined roundest">Roundest</button>
        {/* {elements} */}
      </div>
    </div>
  );
}
