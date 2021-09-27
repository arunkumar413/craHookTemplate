import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export function About(props) {
  const [state, setState] = useState("");
  const { appState, setFormState, handleFormState, formState, getFormState } =
    useLocalStorage();

  console.log(getFormState());

  return (
    <div>
      <h2> About</h2>
      <Link to="/contact"> contact </Link>

      <form
        style={{
          display: "grid",
          gridTemplateColumns: "15rem 1fr",
          gridGap: 4,
          textAlign: "left",
          alignItems: "center",
          justifyContent: "space-around",
        }}>
        <label htmlFor="name"> Name </label>

        <input name="small" placeholder="small" className="smallInput" />

        <label htmlFor="name"> Name </label>

        <input name="name" placeholder="medium" className="mediumInput" />

        <label htmlFor="name"> Name </label>

        <input name="name" placeholder="large" className="largeInput" />

        <label htmlFor="city"> City </label>
        <input name="city" placeholder="round" className="smallInput round" />

        <label htmlFor="city"> City </label>
        <input placeholder="rounder" className="smallInput rounder" />

        <label htmlFor="city"> City </label>
        <input placeholder="roundest" className="smallInput roundest" />

        <label htmlFor="number"> City </label>
        <input
          name="number"
          id="number"
          type="number"
          placeholder="roundest"
          className="largeInput round noBorder"
        />

        <label name="inputWithIcon"> Input with Icon </label>

        <div className="inputWithIcon">
          <FontAwesomeIcon icon={["fas", "coffee"]} size="lg" />

          <input className="smallInput" />
        </div>

        <label name="inputWithIcon"> Medium Input with Icon </label>

        <div className="mediumInputWithIcon">
          <FontAwesomeIcon icon={["fas", "coffee"]} />

          <input className="mediumInput" />
        </div>
        <button
          style={{
            gridColumnStart: 2,
            marginLeft: "auto",
            marginRight: "auto",
          }}
          className="wide btn-primary primary-filled filled">
          Submit{" "}
        </button>

        <label name="inputWithIcon"> Medium Input with Icon </label>


        <div className="numberInput" >
          <input type="number" className='mediumInput' />
          <button className='btn-primary primary-filled' > + </button>
          <button className='btn-secondary secondary-filled' > - </button>
        </div>
      </form>
    </div>
  );
}
