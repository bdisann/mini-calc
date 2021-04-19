import React from "react";
import "./InputNumber.css";

const InputNumber = ({
  number,
  setNumber,
  checklist,
  setChecklist,
  placeholder,
}) => {
  return (
    <div className="inputNumber">
      <input
        type="number"
        placeholder={placeholder}
        className="inputNumber__form"
        value={typeof number !== "number" ? "" : number}
        onChange={setNumber}
      />
      {checklist ? (
        <i onClick={setChecklist} className="fas fa-check-square checklist"></i>
      ) : (
        <i onClick={setChecklist} className="far fa-square checklist"></i>
      )}
    </div>
  );
};

export default InputNumber;
