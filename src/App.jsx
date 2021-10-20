import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserSearch from "./Components/Context/SearchContext";
import Login from "./Components/Login/Login";
import error404 from "./Components/404/error404";
import Dashboard from "./Components/Dashboard/Dashboard";
import React, { useContext, Fragment } from "react";
import Post from "./Components/posteos/Post";
import UserContext from "./Components/Context/UserContext";
import "./style.scss";
import Navbar from "./Components/Navbar";
function App() {
  const data = useContext(UserContext);
  const { login } = data;
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <UserSearch>
            <Route exact path="/Login" component={Login} />
            <Route exact path="/post" component={Post} />
          </UserSearch>
          <Route path="/*" component={error404}></Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
