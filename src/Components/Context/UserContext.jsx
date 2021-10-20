import React, { createContext, useReducer } from "react";
import { userdataReducer, InitialUserData } from "./Reducer";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(userdataReducer, InitialUserData);
  const { token, equipo, login, validation } = userState;
  const data = { token, equipo, login, validation, dispatch };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;
