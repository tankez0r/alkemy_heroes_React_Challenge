import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-4 ">
      <div className="container">
        <span className="navbar-brand">
          <h1>Navbar</h1>
        </span>
        <button className="btn-primary">Cerrar Sesión</button>
      </div>
    </nav>
  );
};

export default Navbar;
