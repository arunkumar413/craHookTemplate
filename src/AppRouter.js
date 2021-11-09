import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { routes } from "./AppRoutes";
import { Sidebar } from "./components/Sidebar";
import { About } from "./pages/About";
import { Buttons } from "./pages/Buttons";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Inputs } from "./pages/Inputs";
import { Test } from "./pages/Test";
import { Typography } from "./pages/Typography";
import { Chips } from "./pages/Chips";
import { Progress } from "./pages/Progress";
import { Stepper } from "./pages/Stepper";
import { Calendar } from "./pages/Calendar";
import { Calendar2 } from "./pages/Calendar2";
import { DropDown } from "./pages/DropDown";

export function AppRouter() {
  return (
    <Switch>
      <Route exact path="/">
        {" "}
        <Home />{" "}
      </Route>

      <Route path={routes.home}>
        {" "}
        <Home />{" "}
      </Route>

      <Route path={routes.contact}>
        {" "}
        <Contact />{" "}
      </Route>

      <Route path={routes.about}>
        {" "}
        <About />{" "}
      </Route>
      <Route path={routes.test}>
        {" "}
        <Test />{" "}
      </Route>
      <Route path={routes.typography}>
        {" "}
        <Typography />{" "}
      </Route>
      <Route path={routes.buttons}>
        {" "}
        <Buttons />{" "}
      </Route>
      <Route path={routes.inputs}>
        {" "}
        <Inputs />{" "}
      </Route>

      <Route path={routes.chips}>
        <Chips />
      </Route>
      <Route path={routes.progress}>
        <Progress />
      </Route>

      <Route path={routes.stepper}>
        <Stepper />
      </Route>

      <Route path={routes.calendar}>
        <Calendar />
      </Route>
      <Route path={routes.calendar2}>
        <Calendar2 />
      </Route>

      <Route path={routes.dropdown}>
        <DropDown />
      </Route>
    </Switch>
  );
}
