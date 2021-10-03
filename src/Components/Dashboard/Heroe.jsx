import React, { Fragment, useContext, useEffect, useState } from "react";
import Card from "./CardHeroe/Card";
import Searcher from "./Searcher";
import { searchContext, UserSearch } from "../Context/SearchContext";
const Heroe = () => {
  const Context = useContext(searchContext);
  const [heroes, setHeroes] = useState([]);
  const [onArray, setonArray] = useState(false);
  const { Searchresults } = Context;
  useEffect(() => {
    if (Searchresults === undefined) {
      return null;
    } else if (Searchresults.length > 1) {
      let mapResult = Searchresults.map((heroe) => (!heroe.id ? null : heroe));
      setHeroes(mapResult);
      setonArray(true);
    }
    return () => {
      setHeroes([]);
    };
  }, [Context]);

  return (
    <div className="row">
      {heroes.map((hero) => {
        return (
          <Card
            nombre={hero.name}
            imagen={hero.image.url}
            id={hero.id}
            key={hero.id}
            onArray={onArray}
          />
        );
      })}
    </div>
  );
};

export default Heroe;
