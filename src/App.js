import * as React from "react";
import { useState } from "react";
import "@fontsource/roboto";
import Header from "./components/Header";
import Output from "./components/Output";
import Input from "./components/Input";

function App() {
  const [calc, setCalc] = useState([
    [7, 4, 1, 0],
    [8, 5, 2, "."],
    [9, 6, 3, "+/-"],
    ["DEL", "*", "+", "ANS"],
    ["AC", "/", "-", "="],
  ]);

  const [currentCalculation, setCurrentCalculation] = useState(0);
  const [prevCalculation, setPrevCalculation] = useState(null);

  // add to currentcalculation
  const makeCalculation = (func) => {
    if (Number.isInteger(func)) {
      setCurrentCalculation(currentCalculation * 10 + parseInt(func));
    } else if (["+", "-", "/", "*"].includes(func)) {
      console.log(["+", "-", "/", "*"]);
    } else if (func === "DEL") {
      setCurrentCalculation(Math.floor(currentCalculation / 10));
    } else if (func === "AC") {
      setCurrentCalculation(0);
      setPrevCalculation(null);
    } else if (func === "+/-") {
      setCurrentCalculation(currentCalculation *-1)
    }
  };

  return (
    <div className="container">
      <Header />
      <Output calculation={currentCalculation} />
      <Input calcInfo={calc} makeCalculation={makeCalculation} />
    </div>
  );
}

export default App;
