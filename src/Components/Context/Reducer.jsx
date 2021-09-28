const types = {
  token: "verify - token",
  addMiembro: "agregar - integrante",
  deleteMiembro: "eliminar - integrante",
  login: "logon - logoff",
  verror: "interface invalid user/password",
  vvalid: "interface valid user/password",
};

let token =
  localStorage.getItem("token") === null ? "" : localStorage.getItem("token");

const InitialUserData = {
  token,
  equipo: [],
  login: false,
  validation: null,
};

const userdataReducer = (state, action) => {
  switch (action.type) {
    case types.token:
      return {
        ...state,
        token: action.payload,
      };
    case types.verror:
      return { ...state, validation: false };
    case types.vvalid:
      return { ...state, validation: true };
    default:
      return state;
  }
};
export { userdataReducer, InitialUserData, types };
