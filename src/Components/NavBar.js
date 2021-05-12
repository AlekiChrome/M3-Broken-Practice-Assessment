import React from "react";
import Berries from "./Berries";
import Pokemon from "./Pokemon";
import Locations from "./Locations";
import { Switch, Route, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="nav-bar">
        <Link to="/">
          <img
            className="pokeball"
            src="https://pngimg.com/uploads/pokeball/pokeball_PNG21.png"
            alt="pokeball logo"
            style={{ height: "50px", width: "50px" }}
          />
        </Link>{" "}
        <Link to="/pokemon">Pokemon</Link>{" "}
        <Link to="/locations">Locations</Link>{" "}
        <Link to="/berries">Berries</Link>
      </nav>

        <Switch>

          <Route exact path="/">
          <h1>Welcome to My Pokemon App!</h1>
          </Route>
          <Route path="/berries" component={Berries} />
          <Route path="/pokemon" component={Pokemon} />
          <Route path="/locations" component={Locations} />

        </Switch>

    </div>
  );
};

export default NavBar;
