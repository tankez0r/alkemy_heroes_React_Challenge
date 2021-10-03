import React, { useState } from "react";
import { createContext } from "react";
const searchContext = createContext();

const UserSearch = ({ children }) => {
  const [Searchresults, setSearch] = useState([]);
  const data = { setSearch, Searchresults };

  return (
    <searchContext.Provider value={data}>{children}</searchContext.Provider>
  );
};

export default UserSearch;
export { searchContext, UserSearch };
