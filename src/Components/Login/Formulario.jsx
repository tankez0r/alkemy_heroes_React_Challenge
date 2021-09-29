import React from "react";
import { useContext } from "react";
import { Formik, Form } from "formik";
import { TextField } from "../TextField";
import * as Yup from "yup";
import UserContext from "../Context/UserContext";
const Formulario = ({ setlogin, spinner }) => {
  const validate = Yup.object({
    email: Yup.string()
      .email("El correo que ingresaste es invalido")
      .required("Necesitas ingresar tu correo"),
    password: Yup.string().required("Debes ingresar tu contraseña"),
  });

  const data = useContext(UserContext);
  const { validation } = data;
const userValisvalid = () => { if (validation === false ){
 return <span className="error-span">
              El usuario o la contraseña son incorrectos
            </span>
} else {null}}
 
  return (
    <Formik
      initialValues={{ email: "", password: "", complete: false }}
      validationSchema={validate}
      onSubmit={(values) => {
        setlogin(values);
      }}
    >
      {(formik) => (
        <div className="col-7 col-lg-4 width-60 bg-gray-dark justify-content-center d-flex align-self-center py-5  ">
          <div className="col-9 col-lg-9 d-flex flex-column  justify-content-center">
            <Form
              className="d-flex flex-column  col-8 align-self-center"
              action=""
              method="post"
            >
              <TextField
                label="Correo"
                name="email"
                type="email"
                placeholder="Ingresa tu correo/usuario"
              />

              <TextField
                label="Contraseña"
                name="password"
                type="password"
                placeholder="Ingresa tu contraseña"
              />
              {spinner ? (
                <div className="spinner">
                  <div className="rect1"></div>
                  <div className="rect2"></div>
                  <div className="rect3"></div>
                  <div className="rect4"></div>
                  <div className="rect5"></div>
                </div>
              ) : (
                <button className="btn btn-dark mt-3" type="submit">
                  Login
                </button>
              )}
            </Form>
            {userValisvalid()}
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Formulario;
