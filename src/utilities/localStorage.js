export function changeLocalStorage(evt, stateKey) {
  let state = JSON.parse(localStorage.getItem(stateKey)); //get the current state
  state[evt.target.name] = evt.target.value; //modify the state
  let stringifedText = JSON.stringify(state); //stringify the state
  localStorage.setItem(stateKey, stringifedText); //set the state
}

export function formValues(stateKey, formKey) {
  return JSON.parse(localStorage.getItem(stateKey))[formKey];
}
