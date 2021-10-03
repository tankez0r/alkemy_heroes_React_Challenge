import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { searchContext } from "../Context/SearchContext";

const Searcher = ({ token }) => {
  const [herosearch, setherosearch] = useState("");
  const Searchcontext = useContext(searchContext);
  const { setSearch } = Searchcontext;

  const url = `https://superheroapi.com/api/${token}/search/${herosearch}`;
  useEffect(() => {
    const APIsearchHero = async () => {
      try {
        let res = await axios.get(url);
        let data = res.data;
        setSearch(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    APIsearchHero();
  }, [herosearch]);

  return (
    <div className="mx-auto col-3">
      <form action="">
        <div className="form-group d-flex flex-column">
          <label htmlor="" className="label">
            Busca un heroe
          </label>
          <input
            onKeyUp={(e) => {
              setherosearch(e.target.value);
            }}
            type="search"
            name="Searcher"
            id={"id"}
          />
        </div>
      </form>
    </div>
  );
};

export default Searcher;
