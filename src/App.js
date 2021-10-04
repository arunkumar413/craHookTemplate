import logo from "./logo.svg";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import  './App.css'
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar/>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
