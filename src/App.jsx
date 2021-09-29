import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React from "react";
import Login from "./Components/Login/Login";
import error404 from "./Components/404/error404";
import Dashboard from "./Components/Dashboard/Dashboard";
import { useContext } from "react";
import UserContext from "./Components/Context/UserContext";
import "./style.scss";
function App() {
  const data = useContext(UserContext);
  const { login } = data;
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return login ? <Redirect to="/dashboard" /> : <Login />;
          }}
        />
        <Route
          exact
          path="/dashboard"
          render={() => {
            return login ? <Dashboard /> : <Redirect to="/" />;
          }}
        />
        <Route path="/*" component={error404}></Route>
      </Switch>
    </Router>
  );
}

export default App;
