const types = {
  token: "verify - token",
  addMiembro: "agregar - integrante",
  deleteMiembro: "eliminar - integrante",
  logon: "active session",
  logoff: "inactive session or time out",
  verror: "interface invalid user/password",
  vvalid: "interface valid user/password",
  vnull: "interface null validation",
  heroesSearch: "Search heroes",
};

const InitialUserData = {
  token: "10224302307604024",
  equipo: [],
  login: false,
  validation: null,
};

const userdataReducer = (state, action) => {
  switch (action.type) {
    case types.token:
      return {
        ...state,
        token: "10224302307604024",
      };
    case types.logon:
      return { ...state, login: true };
    case types.logoff:
      localStorage.removeItem("token");

      return { ...state, token: "", login: false };
    case types.verror:
      return { ...state, validation: false };
    case types.vvalid:
      return { ...state, validation: true };
      case types.vnull:
      return {...state, validation: null};
    default:
      return state;
  }
};
export { userdataReducer, InitialUserData, types };
