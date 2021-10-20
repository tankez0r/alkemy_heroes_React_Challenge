import React, { Fragment } from "react";
import { Link, Router } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark navbar navbar-inverse navbar-static-top ">
        <div className="container-fluid">
          <Link className="text-decoration-none h1 text-white"
          to={"/"}
          >
            !F<del className="">alse</del>
          </Link>

          <div className="group-form">
            <input type="secondary-text " />{" "}
            <button className="btn btn-secondary">Buscar</button>
          </div>

          <button className="btn-primary">Iniciar Sesión</button>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
