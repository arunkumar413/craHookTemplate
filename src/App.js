import logo from "./logo.svg";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import  './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
