import React, { useState, useEffect } from "react";

export function useLocalStorage(key) {
  const [formState, setFormState] = useState({ name: "", city: "" });

  useEffect(function () {}, []);

  function handleFormState(name, value) {
    let state = JSON.parse(localStorage.getItem("formState")); //get the current state
    state[name] = value; //modify the state
    let stringifedText = JSON.stringify(state); //stringify the state
    localStorage.setItem("formState", stringifedText); // Add the new state to local storage
    setFormState(JSON.parse(localStorage.getItem("formState")));
  }
  function getFormState() {
    return JSON.parse(localStorage.getItem("formState"));
  }

  return { setFormState, handleFormState, formState, getFormState };
}
