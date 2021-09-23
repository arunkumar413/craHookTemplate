import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

export function About(props) {
  const [state, setState] = useState("");
  const { appState, setFormState, handleFormState, formState, getFormState } =
    useLocalStorage();

  console.log(getFormState());

  return (
    <div>
      <h2> About</h2>
      <Link to="/contact"> contact </Link>

      <form>
        <input className="bigInput" />
        <input className="bigInput round" />
        <input className="bigInput rounder" />
        <input className="bigInput roundest" />
      </form>
    </div>
  );
}
