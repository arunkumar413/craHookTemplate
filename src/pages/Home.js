import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

let appState = { name: "", city: "" };
localStorage.setItem("state", JSON.stringify(appState));
localStorage.setItem("formState", JSON.stringify(appState));

export function Home(props) {
  const [reRender, setReRender] = useState(false);
  const { appState, setFormState, handleFormState, formState, getFormState } =
    useLocalStorage();

  const handleChange = (evt) => {
    handleFormState(evt.target.name, evt.target.value);
  };

  useEffect(function () {}, []);

  return (
    <div
      style={{
        display: "grid",
        gridAutoColumns: "auto",
        rowGap: 10,
        justifyContent: "center",
      }}>
      <h1> Welcome</h1>
    </div>
  );
}
