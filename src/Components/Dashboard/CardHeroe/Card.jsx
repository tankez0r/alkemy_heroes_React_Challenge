import React from "react";

const Card = ({ nombre, imagen, id }) => {
  console.log(nombre);
  return (
    <div className="col-4">
      <img src={imagen} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title"> {nombre} </h5>
        <p className="card-text"></p>
      </div>
    </div>
  );
};

export default Card;
