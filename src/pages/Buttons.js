import react, { useState, useEffect } from "react";
import { Alert } from "../components/Alert";

export function Buttons() {
  const [copyAlert, setCopyAlert] = useState(false);

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

  const handleCopy = (item) => {
    navigator.clipboard.writeText(item);
    setCopyAlert(true);
    setTimeout(function () {
      setCopyAlert(false);
    }, 5000);
  };

  const primaryElements = btnPrimaryClassNames.map(function (item, index) {
    return (
      <react.Fragment key={item}>
        <p> {item} </p>
        <button onClick={() => handleCopy(item)} className={item}>
          {" "}
          {item}{" "}
        </button>
      </react.Fragment>
    );
  });

  const secondaryElements = btnSecondaryClassNames.map(function (item, index) {
    return (
      <react.Fragment key={item}>
        <p> {item} </p>
        <button onClick={() => handleCopy(item)} className={item}>
          {" "}
          {item}{" "}
        </button>
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
       

        <p>Usage</p>

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
        {secondaryElements}
      </article>
      <Alert
        message="Class name copied"
        isVisible={copyAlert}
        icon={<i class="fas fa-check"></i>}
      />
    </div>
  );
}
