import { useState } from "react";
import "../App.css";

const Calculator = () => {
  const [display, setDisplay] = useState("0");

  const handleClear = () => {
    setDisplay("0");
  };

  const handleNumber = (num: string) => {
    if (display === "0") {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };

  const handleDecimal = () => {
    const lastNumber = display.split(/[\+\-\*\/]/).pop(); 
    if (lastNumber && lastNumber.includes(".")) return; 
    setDisplay(display + ".");
  };

  const handleOperator = (operator: string) => {
    if (/[+\-*/]$/.test(display)) {
      
      if (operator === "-") {
        setDisplay(display + "-"); 
      } else {
        setDisplay(display.replace(/[+\-*/]+$/, operator));
      }
    } else {
      setDisplay(display + operator);
    }
  };

  const handleEquals = () => {
    try {
      const result = Function("return " + display)();
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  return (
    <div className="calculator">
      <div id="display">{display}</div>
      <div className="buttons">
        <button id="clear" onClick={handleClear}>C</button>
        <button id="divide" onClick={() => handleOperator("/")}>/</button>
        <button id="multiply" onClick={() => handleOperator("*")}>*</button>
        <button id="subtract" onClick={() => handleOperator("-")}>-</button>
        <button id="seven" onClick={() => handleNumber("7")}>7</button>
        <button id="eight" onClick={() => handleNumber("8")}>8</button>
        <button id="nine" onClick={() => handleNumber("9")}>9</button>
        <button id="add" onClick={() => handleOperator("+")}>+</button>
        <button id="four" onClick={() => handleNumber("4")}>4</button>
        <button id="five" onClick={() => handleNumber("5")}>5</button>
        <button id="six" onClick={() => handleNumber("6")}>6</button>
        <button id="one" onClick={() => handleNumber("1")}>1</button>
        <button id="two" onClick={() => handleNumber("2")}>2</button>
        <button id="three" onClick={() => handleNumber("3")}>3</button>
        <button id="zero" onClick={() => handleNumber("0")}>0</button>
        <button id="decimal" onClick={handleDecimal}>.</button>
        <button id="equals" onClick={handleEquals}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
