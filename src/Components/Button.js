import React, { useContext } from "react";

import { CalcContext } from "../contaxt/CalcContaxt";

const getStyleName = (btn) => {
  const className = {
    x: "operations",
    "+": "operations",
    "-": "operations",
    "/": "operations",
    "=": "equal",
  };
  return className[btn];
};

function Button({ value }) {
  const { calc, setCalc } = useContext(CalcContext);

  // Comma Cllick
  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };
  // Reset Click
  const resetClick = () => {
    setCalc({
      sign: "",
      num: 0,
      res: 0,
    });
  };

  // User Click Number
  const handleClickButton = () => {
    const numberString = value.toString();

    let numberValue;

    if (numberString === "0" && calc.num === 0) {
      numberValue = "0";
    } else {
      numberValue = Number(calc.num + numberString);
    }
    setCalc({
      ...calc,
      num: numberValue,
    });
  };

  // UserClick Operation

  const signClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  // Equal Cllick
  const equalClick = () => {
    if (calc.res && calc.num) {
      const math = (a, b, sign) => {
        const result = {
          "+": (a, b) => a + b,
          "-": (a, b) => a - b,
          x: (a, b) => a * b,
          "/": (a, b) => a / b,
        };
        return result[sign](a, b);
      };
      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: "",
        num: 0,
      });
    }
  };

  // Persent Click
  const persentClick = () => {
    setCalc({
      num: calc.num / 100,
      res: calc.res / 100,
      sign: "",
    });
  };

  // invertClick Btn
  const invertClick = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
    });
  };
  const handleBtnClick = () => {
    const results = {
      ".": commaClick,
      C: resetClick,
      "/": signClick,
      x: signClick,
      "-": signClick,
      "+": signClick,
      "=": equalClick,
      "%": persentClick,
      "+-": invertClick,
    };
    if (results[value]) {
      return results[value]();
    } else {
      return handleClickButton();
    }
  };

  return (
    <button
      onClick={handleBtnClick}
      className={`${getStyleName(value)} button`}
    >
      {value}
    </button>
  );
}

export default Button;
