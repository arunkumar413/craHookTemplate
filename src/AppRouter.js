import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { routes } from "./AppRoutes";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
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
      </Switch>
    </BrowserRouter>
  );
}
