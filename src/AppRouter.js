import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { routes } from "./AppRoutes";
import { Sidebar } from "./components/Sidebar";
import { About } from "./pages/About";
import { Buttons } from "./pages/Buttons";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Inputs } from "./pages/Inputs";
import { Test } from "./pages/Test";
import { Text } from "./pages/Text";

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
        <Route path={routes.text}>
          {" "}
          <Text />{" "}
        </Route>
        <Route path={routes.buttons}>
          {" "}
          <Buttons />{" "}
        </Route>
        <Route path={routes.inputs}>
          {" "}
          <Inputs />{" "}
        </Route>
      </Switch>
  );
}
