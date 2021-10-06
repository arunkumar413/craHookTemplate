import react, { useState, useEffect } from "react";

export function Buttons() {
  const btnPrimaryClassNames = [
    "btn-primary-filled",
    "btn-primary-outlined",
    "btn-primary-outlined round",
    "btn-primary-filled rounder",
    "btn-primary-outlined roundest",
  ];

  const btnSecondaryClassNames = [
    "btn-secondary-filled",
    "btn-secondary-outlined",
    "btn-secondary-outlined round",
    "btn-secondary-filled rounder",
    "btn-secondary-outlined roundest",
  ];

  const primaryElements = btnPrimaryClassNames.map(function (item, index) {
    return (
      <react.Fragment key={item}>
        <p> {item} <i class="far fa-copy"></i> </p> 
        <button className={item}> {item} </button>
      </react.Fragment>
    );
  });

  return (
    <div>
      <h1> Inputs</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          justifyContent: "flex-start",
          alignItems: "center",
          columnGap: 10,
        }}>
        <p>Reactjs</p>

        <code className="color-secondary">
          {`<button className="btn-primary-filled rounder">Rounder</button>`}
        </code>

        <p>HTML</p>

        <code className="color-secondary">
          {`<button class="btn-primary-filled rounder">Rounder</button>`}
        </code>
      </div>
      <h1 className="color-primary"> Primary Buttons </h1>

      <article
        className="shadow1"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gridGap: 10,
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}>
        {primaryElements}
      </article>
      <h1 className="color-secondary"> Secondary Buttons </h1>

      <article
        className="shadow1"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gridGap: 10,
          alignItems: "center",
          padding: 20,
        }}>
        <p>btn-secondary-filled </p>
        <button className="btn-secondary-filled">Secondary Filled </button>

        <p> btn-secondary-outlined </p>
        <button className="btn-secondary-outlined">Secondary Outlined</button>

        <p> btn-secondary-outlined round </p>
        <button className="btn-secondary-outlined round">Round</button>

        <p> btn-secondary-outlined rounder </p>
        <button className="btn-secondary-outlined rounder">rounder</button>

        <p> btn-secondary-outlined roundest </p>
        <button className="btn-secondary-outlined roundest">Roundest</button>
        {/* {elements} */}
      </article>
    </div>
  );
}
