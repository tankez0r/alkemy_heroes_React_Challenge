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
  localStorage.setItem("token", "10224302307604024");
  useEffect(() => {
    if (login.email && login.password !== "") {
      const url = "https://challenge-react.alkemy.org/";
      const APIrequest = async () => {
        try {
          setSpinner(true);
          let res = await axios.post(url, login);
          setSpinner(false);
          let data = res.data;
          let token = data.token;
          localStorage.setItem("token", token);
          dispatch({ type: types.token });
          dispatch({ type: types.vvalid });
          dispatch({ type: types.logon });
        } catch (error) {
          setSpinner(false);
          dispatch({ type: types.verror });
          dispatch({ type: types.logoff });
        }
      };
      APIrequest();
    }
  }, [login]);
  return <Formulario setlogin={setlogin} spinner={spinner} />;
}
export default Login;
