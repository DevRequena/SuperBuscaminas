'use client'

import { useState } from "react";

export const MatrixInput = ({ setMatrixSize }) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const newValue = Math.min(10, Math.max(0, parseInt(event.target.value) || 0));
    setInputValue(newValue.toString());
  };

  const handleSubmit = () => {
    const size = Number(inputValue);
    if (!isNaN(size) && size > 1 && size < 11) {
      setMatrixSize(size);
    } else {
      alert("Por favor, ingresa un número válido mayor que 1");
      setInputValue('')
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[720px] mx-auto p-3 bg-white rounded-lg shadow-md">
        <div className="w-[250px] flex flex-col items-center max-w-sm relative mt-1 gap-3">
          <label className="block mb-2 text-slate-800 text-lg font-medium text-center">
            ¡Prepárate para un desafío! Ingresa un número.
          </label>
          <div className="flex gap-4">
            <input
              type="number"
              className="w-full px-3 text-center py-2 border [&::-webkit-inner-spin-button]:appearance-none border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-slate-700"
              placeholder="5"
              value={inputValue}
              onChange={handleInputChange}

            />
            <button
              className="w-fit px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              type="button"
              onClick={handleSubmit}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 mx-auto"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

