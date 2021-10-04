import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import react, { useState, useEffect } from "react";

export function Inputs() {
  const smallInputClasses = [
    "input-small-primary",
    "input-small-primary input-success",
    "input-small-primary input-warning",
    "input-small-primary input-error",
  ];

  const mediumInputClasses = [
    "input-medium-primary",
    "input-medium-primary input-success",
    "input-medium-primary input-warning",
    "input-medium-primary input-error",
  ];

  const largeInputClasses = [
    "input-large-primary",
    "input-large-primary input-success",
    "input-large-primary input-warning",
    "input-large-primary input-error",
  ];

  const primaryClassNames = [
    "input-small-primary",
    "input-small-primary input-success",
    "input-small-primary input-warning",
    "input-small-primary input-error",

    "input-medium-primary",
    "input-medium-primary input-success",
    "input-medium-primary input-warning",
    "input-medium-primary input-error",

    "input-large-primary",
    "input-large-primary input-success",
    "input-large-primary input-warning",
    "input-large-primary input-error",
  ];

  const secondaryClassNames = [
    "input-small-secondary",
    "input-small-secondary input-success",
    "input-small-secondary input-warning",
    "input-small-secondary input-error",

    "input-medium-secondary input-success",
    "input-medium-secondary input-warning",
    "input-medium-secondary input-error",

    "input-large-secondary",
    "input-large-secondary input-success",
    "input-large-secondary input-warning",
    "input-large-secondary input-error",
  ];

  const cssClassNames = [
    "input-small-primary",
    "input-small-primary input-success",
    "input-small-primary input-warning",
    "input-small-primary input-error",

    "input-medium-primary",
    "input-medium-primary input-success",
    "input-medium-primary input-warning",
    "input-medium-primary input-error",

    "input-large-primary",
    "input-large-primary input-success",
    "input-large-primary input-warning",
    "input-large-primary input-error",

    "input-small-secondary",
    "input-small-secondary input-success",
    "input-small-secondary input-warning",
    "input-small-secondary input-error",

    "input-medium-secondary input-success",
    "input-medium-secondary input-warning",
    "input-medium-secondary input-error",

    "input-large-secondary",
    "input-large-secondary input-success",
    "input-large-secondary input-warning",
    "input-large-secondary input-error",
  ];

  const smallElements = smallInputClasses.map(function (item, index) {
    return (
      <react.Fragment key={item}>
        <p> {item} </p>
        <input className={item} />
      </react.Fragment>
    );
  });

  const mediumElements = mediumInputClasses.map(function (item, index) {
    return (
      <react.Fragment key={item} className="shadow1">
        <p> {item} </p>
        <input className={item} />
      </react.Fragment>
    );
  });

  const largeElements = largeInputClasses.map(function (item, index) {
    return (
      <react.Fragment key={item}>
        <p> {item} </p>
        <input className={item} />
      </react.Fragment>
    );
  });

  const primaryElements = primaryClassNames.map(function (item, index) {
    return (
      <react.Fragment key={item}>
        <p> className={item} </p>
        <input className={item} />
      </react.Fragment>
    );
  });

  return (
    <div>
      <h1> Inputs</h1>
      <h2 className="color-primary"> Primary Inputs </h2>
      <p>
        {" "}
        Usage
        <code className="color-secondary">
          {" "}
          {`<input className='input-small-primary'/>`}
        </code>
      </p>

      <article
        className="shadow1"
        style={{
          display: "grid",
          //   gridTemplateColumns: "3fr 6fr",
          gridTemplateColumns: "repeat(auto-fill, minmax(500px, 1fr))",
          justifyContent: "center",
          alignItems: "center",
          gridGap: 5,
          padding: 10,
        }}>
        {smallElements}
      </article>
      <h2 className="color-primary"> Medium Elements</h2>

      <article
        className="shadow1"
        style={{
          display: "grid",
          width: "100%",
          //   gridTemplateColumns: "3fr 6fr",
          gridTemplateColumns: "repeat(auto-fill, minmax(500px, 1fr))",
          justifyContent: "center",
          alignItems: "center",
          gridGap: 5,
          padding: 10,
        }}>
        {mediumElements}
      </article>

      <h2 className="color-primary"> Large Inputs</h2>

      <article
        className="shadow1"
        style={{
          display: "grid",
          width: "100%",
          //   gridTemplateColumns: "3fr 6fr",
          gridTemplateColumns: "repeat(auto-fill, minmax(500px, 1fr))",
          justifyContent: "center",
          alignItems: "center",
          gridGap: 5,
          padding: 10,
        }}>
        {largeElements}
      </article>
    </div>
  );
}
