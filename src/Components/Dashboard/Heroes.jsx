import React, { useContext, useEffect, useState } from "react";
import UserContext from "../Context/UserContext";
import { types } from "../Context/Reducer";
import Searcher from "../Searcher";
import axios from "axios";
const Heroes = () => {
  const data = useContext(UserContext);
  const [Heroe, setHeroe] = useState({});
  const { dispatch, token } = data;

  return (
    <div className="D-flex h-75">
      <div className="d-flex flex-row ">
        <Searcher setHeroe={setHeroe} token={token} />
        <div className="col-7 d-flex flex-wrap">
          <div className="row mb-3 align-self-star col-12">
            <div className="col-4">
              {" "}
              <h1>a ver2</h1>
            </div>
            <div className="row align-self-center col-12 mt-3">
              <div className="col-4">
                <h1>a ver</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroes;
