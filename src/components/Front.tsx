import React from 'react';

interface KeyboardProps {
    handleOperation: () => any;
    handleNumber: (number: string | number)=>any; // Update parameter type
    setSign: (sign: string) => any
    handleClear: () => any;
  }

export const Keyboard: React.FC<KeyboardProps> = ({
  handleOperation,
  handleNumber,
  setSign,
  handleClear,
}) => {
  const numbers: (number | string)[] = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  const signs: string[] = ["+", "-", "*", "/"];

  return (
        <div className="py-4 flex justify-center">
          <div className="grid grid-cols-3 gap-4 font-bold text-white">
            {numbers.map((number) => (
              <div
                key={number}
                className="bg-pink-700 p-4 text-center font-bold rounded-full border border-yellow-600 shadow-md hover:bg-pink-400"
                onClick={() => handleNumber(number)}
              >
                {number}
              </div>
            ))}
        <div
          onClick={() => handleNumber(".")}
          className="bg-pink-700 p-4 text-center font-bold rounded-full border border-pink-600 shadow-md hover:bg-pink-500"
        >
          .
        </div>
        <div
          onClick={() => handleClear()}
          className= "p-4 text-center font-bold bg-yellow-400 rounded-full border border-pink-600 shadow-md hover:bg-pink-500"
        >
          Del.
        </div>
      </div>
      <div className="grid ml-8 text-center w-20 bg-yellow-400 p-4 rounded-md grid-cols-1 gap-4 mfont-bold  text-white">
        {signs.map((sign) => (
          <div
            key={sign}
            onClick={() => setSign(sign)}
            className="text-center text-3xl font-bold rounded-full hover:bg-pink-600"
          >
            {sign}
          </div>
        ))}
        <div
          onClick={() => handleOperation()}
          className="text-center bg-pink-600 text-3xl font-semibold hover:bg-pink-500"
        >
          =
        </div>
      </div>
    </div>
  );
};
