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
    console.log('render')

  const handleChange = (evt) => {
    // changeLocalStorage(evt, "state");
    handleFormState(evt.target.name, evt.target.value);
    // setReRender(reRender === true ? false : true); //reredner the component
  };

  // function changeLocalStorage(evt, stateKey) {
  //   let state = JSON.parse(localStorage.getItem(stateKey)); //get the current state
  //   state[evt.target.name] = evt.target.value; //modify the state
  //   let stringifedText = JSON.stringify(state); //stringify the state
  //   localStorage.setItem(stateKey, stringifedText); //set the state
  // }

  useEffect(function () {}, []);

  // function formValues(stateKey, formKey) {
  //   return JSON.parse(localStorage.getItem(stateKey))[formKey];
  // }

  

  return (
    <div style={{ display: "grid", gridAutoColumns: "auto", rowGap: 10 }}>
      <input name='name' onChange={handleChange} className="input wide" />
      <h4> {getFormState().name} </h4>
      <input name='city' onChange={handleChange} placeholder='Name' className="bigInput roundest" />
      <button className="btn-primary primary-filled widest">
        {" "}
        btn-primary widest{" "}
      </button>
      <button className="btn-primary primary-filled wider">
        {" "}
        btn-primary wider{" "}
      </button>
      <button className="btn-primary primary-filled wide">
        {" "}
        btn-primary wide{" "}
      </button>

      <button className="btn-primary primary-outlined wide round">
        {" "}
        Outlined Round{" "}
      </button>
      <button className="btn-secondary secondary-filled widest">
        {" "}
        btn-primary wider{" "}
      </button>

      <button className="btn-secondary secondary-filled wider">
        {" "}
        btn-primary wider{" "}
      </button>
      <button className="btn-secondary secondary-filled wide">
        {" "}
        btn-secondary wide{" "}
      </button>

      <button className="btn-secondary secondary-outlined round">
        {" "}
        Outlined Round{" "}
      </button>

      <button className="btn-secondary wider error round"> Error </button>
      <button className="btn-secondary wider warning round"> Warning </button>
      <button className="btn-secondary wider success round"> Warning </button>
      <input className="input round" />
      <input className="input round" />
      <input className="input round" />
      <input className="input round" />
    </div>
  );
}
