import React from "react";
import "./InputOperator.css";

const InputOperator = ({ click, children }) => {
  return (
    <div onClick={() => click(children)} className="inputOperator">
      {children}
    </div>
  );
};

export default InputOperator;
