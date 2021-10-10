import React, { useState, useEffect } from "react";
import { Alert } from "../components/Alert";

export function Chips(props) {
  const [showAlert, setShowAlert] = useState(false);
  const classNames = [
    "chip-primary-filled",
    "chip-secondary-filled",

    "chip-filled-success",
    "chip-filled-warning",
    "chip-filled-error",

    "chip-primary-outlined",
    "chip-secondary-outlined",

    "chip-outlined-success",
    "chip-outlined-warning",
    "chip-outlined-error",
  ];

  const articleStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    justifyContent: "center",
    alignItems: "center",
    gridGap: 10,
    padding: 10,
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(function () {
      setTimeout(() => {
        setShowAlert(false);
      }, 4000);
    });
    setShowAlert(true);
  };

  const primaryFilledElements = classNames
    .slice(0, 5)
    .map(function (item, index) {
      return (
        <React.Fragment key={item}>
          <p> {item} </p>
          <button onClick={() => handleCopy(item)} className={item}>
            {" "}
            Filled Chip
          </button>
        </React.Fragment>
      );
    });

  const primaryOutlinedElements = classNames
    .slice(5, 10)
    .map(function (item, index) {
      return (
        <React.Fragment key={item}>
          <p> {item} </p>
          <button onClick={() => handleCopy(item)} className={item}>
            {" "}
            Outlined Chip
          </button>
        </React.Fragment>
      );
    });

  return (
    <div>
      <h1> Chips </h1>
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
          {`<input class='input-small-primary'/>`}
        </code>
      </div>
      <article className="shadow1" style={articleStyle}>
        <h2
          className="color-primary"
          style={{ gridColumnStart: 1, gridColumnEnd: 3 }}>
          {" "}
          Filled Chips{" "}
        </h2>

        {primaryFilledElements}
      </article>
      <article className="shadow1" style={articleStyle}>
        <h2
          className="color-primary"
          style={{ gridColumnStart: 1, gridColumnEnd: 3 }}>
          {" "}
          Outlined Chips{" "}
        </h2>

        {primaryOutlinedElements}
      </article>

      <Alert
        message="class name copied"
        isVisible={showAlert}
        icon={<i class="fas fa-check"></i>}
      />
    </div>
  );
}
