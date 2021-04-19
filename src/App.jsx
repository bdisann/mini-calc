import { useState } from "react";
import "./App.css";
import InputNumber from "./components/InputNumber";
import InputOperator from "./components/InputOperator";

function App() {
  const [number, setNumber] = useState({
    number1: null,
    number2: null,
    number3: null,
  });
  const [checklist, setChecklist] = useState({
    checklist1: false,
    checklist2: false,
    checklist3: false,
  });
  const [hasil, setHasil] = useState(0);

  const handleResultProcess = (param) => {
    const arrayOfNumber = [number.number1, number.number2];
    if (
      arrayOfNumber[0] === null ||
      isNaN(arrayOfNumber[0]) ||
      arrayOfNumber[1] === null ||
      isNaN(arrayOfNumber[1])
    ) {
      return window.alert("Silahkan periksa angka/checklist");
    } else if (!checklist.checklist1 || !checklist.checklist2) {
      return window.alert("Silahkan periksa checklist");
    }
    if (
      typeof number.number3 === "number" &&
      checklist.checklist3 &&
      !isNaN(number.number3)
    ) {
      arrayOfNumber.push(number.number3);
    }
    // console.log(arrayOfNumber);

    switch (param) {
      case "+":
        return setHasil(arrayOfNumber.reduce((acc, current) => acc + current));

      case "-":
        return setHasil(arrayOfNumber.reduce((acc, current) => acc - current));

      case "/":
        return setHasil(arrayOfNumber.reduce((acc, current) => acc / current));

      case "x":
        return setHasil(arrayOfNumber.reduce((acc, current) => acc * current));
      default:
        return setHasil(arrayOfNumber);
    }
  };
  return (
    <div className="App">
      <h1>CALCULATOR</h1>
      <div className="cal__container">
        <div className="cal__panel__top">
          <InputNumber
            number={number.number1}
            setNumber={(e) =>
              setNumber({
                ...number,
                number1: parseInt(e.target.value),
              })
            }
            checklist={checklist.checklist1}
            setChecklist={() =>
              setChecklist({
                ...checklist,
                checklist1: !checklist.checklist1,
              })
            }
            placeholder="*required number"
            required
          />
          <InputNumber
            number={number.number2}
            setNumber={(e) =>
              setNumber({
                ...number,
                number2: parseInt(e.target.value),
              })
            }
            checklist={checklist.checklist2}
            setChecklist={() =>
              setChecklist({
                ...checklist,
                checklist2: !checklist.checklist2,
              })
            }
            placeholder="*required number"
            required
          />
          <InputNumber
            number={number.number3}
            setNumber={(e) =>
              setNumber({
                ...number,
                number3: parseInt(e.target.value),
              })
            }
            checklist={checklist.checklist3}
            setChecklist={() =>
              setChecklist({
                ...checklist,
                checklist3: !checklist.checklist3,
              })
            }
            placeholder="(optional)"
          />
        </div>
        <div className="cal__panel__bottom">
          <InputOperator click={handleResultProcess}>+</InputOperator>
          <InputOperator click={handleResultProcess}>-</InputOperator>
          <InputOperator click={handleResultProcess}>/</InputOperator>
          <InputOperator click={handleResultProcess}>x</InputOperator>
        </div>
        <div className="cal__underline"></div>
        <div className="cal__result">
          <h3>HASIL:</h3>
          <h3>{hasil ? hasil : 0}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
