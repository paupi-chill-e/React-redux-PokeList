import React from "react";
import Login from "./components/login/login";
import Home from "./components/home/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pokemon from "./containers/pokemon";
import "./assets/styles/index.scss";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Home" exact component={Home} />
          <Route path="/Home/:pokemon" exact component={Pokemon} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
