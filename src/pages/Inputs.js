import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import react, { useState, useEffect } from "react";
import { Alert } from "../components/Alert";

export function Inputs() {
  const [showAlert, setShowAlert] = useState(false);

  const handleFocus = (text) => {
    navigator.clipboard.writeText(text).then(function () {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 4000);
    });
  };

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

    "input-small-primary-outlined",
  ];

  const secondarySmallClassNames = [
    "input-small-secondary",
    "input-small-secondary input-success",
    "input-small-secondary input-warning",
    "input-small-secondary input-error",
  ];

  const secondaryMediumClassNames = [
    "input-medium-secondary input-success",
    "input-medium-secondary input-warning",
    "input-medium-secondary input-error",
  ];

  const secondaryLargeClassNames = [
    "input-large-secondary",
    "input-large-secondary input-success",
    "input-large-secondary input-warning",
    "input-large-secondary input-error",
  ];

  const secondarySmallElements = secondarySmallClassNames.map(function (
    item,
    index
  ) {
    return (
      <react.Fragment key={item}>
        <p> {item} </p>
        <input onFocus={() => handleFocus(item)} className={item} />
      </react.Fragment>
    );
  });
  const secondaryMediumElements = secondaryMediumClassNames.map(function (
    item,
    index
  ) {
    return (
      <react.Fragment key={item}>
        <p> {item} </p>
        <input onFocus={() => handleFocus(item)} className={item} />
      </react.Fragment>
    );
  });

  const secondaryLargeElements = secondaryLargeClassNames.map(function (
    item,
    index
  ) {
    return (
      <react.Fragment key={item}>
        <p> {item} </p>
        <input onFocus={() => handleFocus(item)} className={item} />
      </react.Fragment>
    );
  });

  const smallElements = smallInputClasses.map(function (item, index) {
    return (
      <react.Fragment key={item}>
        <p> {item} </p>
        <input onFocus={() => handleFocus(item)} className={item} />
      </react.Fragment>
    );
  });

  const mediumElements = mediumInputClasses.map(function (item, index) {
    return (
      <react.Fragment key={item} className="shadow1">
        <p> {item} </p>
        <input onFocus={() => handleFocus(item)} className={item} />
      </react.Fragment>
    );
  });

  const largeElements = largeInputClasses.map(function (item, index) {
    return (
      <react.Fragment key={item}>
        <p> {item} </p>
        <input onFocus={() => handleFocus(item)} className={item} />
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
          {`<input className='input-small-primary'/>`}
        </code>

        <p>HTML</p>

        <code className="color-secondary">
          {`<input class='input-small-primary'/>`}
        </code>
      </div>
      <h1 className="color-primary"> Primary Inputs </h1>

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
        <h2
          style={{ gridColumnStart: 1, gridColumnEnd: 3 }}
          className="color-primary">
          {" "}
          Small Inputs{" "}
        </h2>
        {smallElements}
      </article>

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
        <h2
          style={{ gridColumnStart: 1, gridColumnEnd: 3 }}
          className="color-primary">
          {" "}
          Medium Inputs
        </h2>

        {mediumElements}
      </article>

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
        <h2
          style={{ gridColumnStart: 1, gridColumnEnd: 3 }}
          className="color-primary">
          {" "}
          Large Inputs
        </h2>
        {largeElements}
      </article>
      <h1 className="color-secondary"> Secondary Inputs</h1>

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
        <h2
          style={{ gridColumnStart: 1, gridColumnEnd: 3 }}
          className="color-secondary">
          {" "}
          Small Inputs
        </h2>

        {secondarySmallElements}
      </article>

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
        <h2
          style={{ gridColumnStart: 1, gridColumnEnd: 3 }}
          className="color-secondary">
          {" "}
          Medium Secondary Inputs
        </h2>

        {secondaryMediumElements}
      </article>
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
        <h2
          style={{ gridColumnStart: 1, gridColumnEnd: 3 }}
          className="color-secondary">
          {" "}
          Large Secondary Inputs
        </h2>

        {secondaryLargeElements}
      </article>

      <h2 className="color-primary"> Outlined inputs</h2>

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
        <p> input-medium-primary-outlined </p>

        <fieldset className="input-medium-primary-outlined">
          <legend> Name </legend>
          <input />
        </fieldset>
      </article>
      <Alert
        isVisible={showAlert}
        message="Copied the class name"
        icon={<i class="fas fa-check"></i>}
      />
    </div>
  );
}
