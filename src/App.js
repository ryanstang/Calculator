import * as React from "react";
import { useState } from "react";
import "@fontsource/roboto";
import Header from "./components/Header";
import Output from "./components/Output";
import Input from "./components/Input";
import { create, all } from "mathjs";

function App() {
  const config = {};
  const math = create(all, config);

  const [calc, setCalc] = useState([
    ["Null", 7, 4, 1, 0],
    ["Null", 8, 5, 2, "."],
    ["Null", 9, 6, 3, "+/-"],
    ["(", "DEL", "*", "+", "ANS"],
    [")", "AC", "/", "-", "="],
  ]);

  const [currentCalculation, setCurrentCalculation] = useState([]);
  const [prevCalculation, setPrevCalculation] = useState(null);
  const [prevButton, setPrevButton] = useState(null);

  // add to currentcalculation
  const makeCalculation = (func) => {
    if (
      Number.isInteger(func) ||
      ["+", "-", "/", "*", "(", ")"].includes(func)
    ) {
      setCurrentCalculation([...currentCalculation, func]);
    } else if (func === "DEL") {
      setCurrentCalculation(currentCalculation.slice(0, -1));
    } else if (func === "AC") {
      setCurrentCalculation([]);
      setPrevCalculation(null);
    } else if (func === "+/-") {
      currentCalculation.length > 0 && currentCalculation[0] !== "-"
        ? setCurrentCalculation(["-", ...currentCalculation])
        : setCurrentCalculation(currentCalculation.slice(1));
    } else if (func === "=") {
      console.log(currentCalculation)
      console.log(math.evaluate(currentCalculation.join("")))
      setCurrentCalculation([math.evaluate(currentCalculation.join(""))])
    }
    setPrevButton(func)
  };

  return (
    <div className="container">
      <Header />
      <Output
        calculation={currentCalculation.length > 0 ? currentCalculation : 0}
      />
      <Input calcInfo={calc} makeCalculation={makeCalculation} />
    </div>
  );
}

export default App;
