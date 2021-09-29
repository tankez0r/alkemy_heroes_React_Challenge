const types = {
  token: "verify - token",
  addMiembro: "agregar - integrante",
  deleteMiembro: "eliminar - integrante",
  logon: "active session",
  logoff: "inactive session or time out",
  verror: "interface invalid user/password",
  vvalid: "interface valid user/password",
};

const InitialUserData = {
  token:
    localStorage.getItem("token") === null ? "" : localStorage.getItem("token"),
  equipo: [],
  login: localStorage.getItem("token") === null ? false : true,
  validation: null,
};

const userdataReducer = (state, action) => {
  switch (action.type) {
    case types.token:
      return {
        ...state,
        token:
          localStorage.getItem("token") === null
            ? ""
            : localStorage.getItem("token"),
      };
    case types.logon:
      return { ...state, login: true };
    case types.logoff:
      localStorage.removeItem('token')

      return { ...state, token: "", login: false };
    case types.verror:
      return { ...state, validation: false };
    case types.vvalid:
      return { ...state, validation: true };
    default:
      return state;
  }
};
export { userdataReducer, InitialUserData, types };
