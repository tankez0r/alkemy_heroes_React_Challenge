import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import "./style.scss";
import {UserProvider} from "./Components/Context/UserContext";
function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
      </UserProvider>

  );
}

export default App;
