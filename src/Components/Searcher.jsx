import axios from "axios";
import React, { useEffect } from "react";

const Searcher = ({ setHeroe, token }) => {
  const url = `https://superheroapi.com/api/${token}/245/`;
  useEffect(() => {
    const APIsearchHero = async () => {
      try {
        let res = await axios.get(url);
        let data = res.data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    APIsearchHero();
  }, []);

  return (
    <div className="mx-auto">
      <form action="">
        <div className="form-group d-flex flex-column">
          <label htmlor="" className="label">
            Busca un heroe
          </label>
          <input type="search" name="Searcher" id={"id"} />
          <ul>
            <li>asd</li>
            <li className="">asdafs</li>
            <li>asdafs</li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default Searcher;
