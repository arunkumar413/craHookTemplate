import React, { useState, useEffect } from "react";
import { CustomSelect } from "../components/CustomSelect";

export function DropDown(props) {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const selectOptions = [
    {
      name: "Jan",
      value: 0,
    },
    {
      name: "Feb",
      value: 1,
    },
    {
      name: "Mar",
      value: 2,
    },
  ];

  return (
    <div className="DropDown">
      <h1> Drop Down</h1>
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
          {`        <CustomSelect options={selectOptions} value={value1} setValue={setValue1} />
`}
        </code>
      </div>
      <h1 className="color-primary"> Select </h1>

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
        <p> Select </p>{" "}
        <CustomSelect
          options={selectOptions}
          value={value1}
          setValue={setValue1}
        />
      </article>
    </div>
  );
}
