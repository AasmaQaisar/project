import React, { FC } from 'react';

interface ResultScreenProps {
  firstNumber: number[];
  secondNumber: number[];
  sign: string | null;
  result: number;
}

export const ResultScreen: FC<ResultScreenProps> = ({ firstNumber, secondNumber, sign, result }) => {
  return (
    <div className="text-center bg-gray-200 h-24 ">
      <div className="float-right p-6">
        <h4 className="text-black-600 font-bold text-l">
          {firstNumber.join("")}
          {sign}
          {secondNumber.join("")}
        </h4>
        <h4 className="text-black-600 text-xl font-bold  -mb-24">{result}</h4>
      </div>
    </div>
  );
};
