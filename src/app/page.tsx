"use client";

import { useState } from "react";
import { Keyboard } from "@/components/Front";
import { ResultScreen } from "@/components/Result";


function App() {
  const [firstNumber, setFirstNumber] = useState<number[]>([]);
  const [secondNumber, setSecondNumber] = useState<number[]>([]);
  const [sign, setSign] = useState<string | null>(null);
  const [result, setResult] = useState<number>(0);

  const handleClear = () => {
    setFirstNumber([]);
    setSecondNumber([]);
    setResult(0);
    setSign(null);
  };

  const handleNumber = (number: any) => {
    if (result !== 0) {
      handleClear();
    }
    if (!sign) {
      setFirstNumber((oldNumber) => [...oldNumber, number]);
    } else {
      setSecondNumber((oldNumber) => [...oldNumber, number]);
    }
  };

  const handleOperation = () => {
    const num1 = parseInt(firstNumber.join(""), 10);
    const num2 = parseInt(secondNumber.join(""), 10);
    if (sign === "+") setResult(num1 + num2);
    else if (sign === "-") setResult(num1 - num2);
    else if (sign === "*") setResult(num1 * num2);
    else setResult(num1 / num2);
  };

  return (
    <div className="bg-gray-800 rounded-lg border shadow-md w-96 my-32 mx-96">
      <ResultScreen
        firstNumber={firstNumber}
        secondNumber={secondNumber}
        sign={sign}
        result={result}
      />
      <Keyboard
        handleOperation={handleOperation}
        handleNumber={handleNumber}
        setSign={setSign}
        handleClear={handleClear}
      />
    </div>
  );
}

export default App;
