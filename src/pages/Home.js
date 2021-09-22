import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

export function Home(props) {
  const [reRender, setReRender] = useState(false);
  const { appState, setFormState, handleFormState, formState, getFormState } =
    useLocalStorage();

  const handleChange = (evt) => {
    // changeLocalStorage(evt, "state");
    handleFormState(evt.target.name, evt.target.value)
    setReRender(reRender === true ? false : true); //reredner the component
  };

  function changeLocalStorage(evt, stateKey) {
    let state = JSON.parse(localStorage.getItem(stateKey)); //get the current state
    state[evt.target.name] = evt.target.value; //modify the state
    let stringifedText = JSON.stringify(state); //stringify the state
    localStorage.setItem(stateKey, stringifedText); //set the state
  }

  useEffect(function () {
    let appState = { name: "", city: "" };
    localStorage.setItem("state", JSON.stringify(appState));
    localStorage.setItem("formState", JSON.stringify(appState));
  }, []);


  function formValues(stateKey, formKey){
    return JSON.parse(localStorage.getItem(stateKey))[formKey]
    
  }

  return (
    <div>
      <h2> Home</h2>
      <Link to="/about"> About </Link>

      <input
        name="name"
        value={JSON.parse(localStorage.getItem("state")).name}
        onChange={handleChange}
      />
      <input
        name="city"
        value={JSON.parse(localStorage.getItem("state")).city}
        onChange={handleChange}
      />

      <h3> {JSON.parse(localStorage.getItem("state")).name} </h3>
      <h3> {JSON.parse(localStorage.getItem("state")).city} </h3>
      <h1> {formValues('state','name')} </h1>

      <p> {getFormState().name} </p>


    </div>
  );
}