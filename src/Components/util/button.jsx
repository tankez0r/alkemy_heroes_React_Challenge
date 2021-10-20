import React from "react";
const Button = ({ type, classNames, label, action }) => {

function Dispatch(trigger) {
switch(trigger){
   case a: null;
   case b: null;
   default: return null

}
}

  return (
    <button onClick={Dispatch(action)} type={type} className={"btn "+classNames}>
      {label}
    </button>
  );
};

export default Button;
