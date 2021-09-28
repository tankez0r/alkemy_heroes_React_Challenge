import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import Formulario from "./Formulario";
import UserContext from "../Context/UserContext";
import { types } from "../Context/Reducer";

function Login() {
  const data = useContext(UserContext);
  const { dispatch } = data;
  const [login, setlogin] = useState({ email: "", password: "" });
  const [spinner, setSpinner] = useState(false);
  useEffect(() => {
    if (login.email && login.password !== "") {
      const url = "http://challenge-react.alkemy.org/";
      const APIrequest = async () => {
        try {
          setSpinner(true);
          let res = await axios.post(url, login);
          setSpinner(false);
          let data = res.data;
          let token = data.token;
          localStorage.setItem("token", token);
          disppatch({ type: types.vvalid });
        } catch (error) {
          setSpinner(false);
          console.log(error);
          dispatch({ type: types.verror });
        }
      };
      APIrequest();
    }
  }, [login]);
  return (
    <div className="App-header bg-cyan d-flex justify-content-center ">
      <Formulario setlogin={setlogin} spinner={spinner} />
    </div>
  );
}
export default Login;
