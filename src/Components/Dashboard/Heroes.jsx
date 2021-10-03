import React, { useContext, useEffect, useState } from "react";
import UserContext from "../Context/UserContext";
import { types } from "../Context/Reducer";
import Searcher from "./Searcher";
import Heroe from "./Heroe";
const Heroes = () => {
  const data = useContext(UserContext);
  const { dispatch, token } = data;
  return (
    <div className="container">
      <div className="row">
        <Searcher token={token} />
        <div className="col-8 d-flex flex-wrap">
          <Heroe />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
