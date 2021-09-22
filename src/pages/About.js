import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

export function About(props) {
  const [state, setState] = useState("");

  const { appState, setFormState, handleFormState, formState, getFormState } =
    useLocalStorage();


    console.log(getFormState())

  return (
    <div>
      <h2> About</h2>
      <Link to="/contact"> contact </Link>
      <h3>{getFormState().name} </h3>
      <h3>{getFormState().city} </h3>

    </div>
  );
}
