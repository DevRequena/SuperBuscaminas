'use client'

import React, { useState, useEffect } from 'react';
import { MatrixButton } from './MatrixButton';
import { generateCellValue } from '../utils/generateCellValue';

export const MatrixComponent = ({ size, setResult, setIsGameOver }) => {
  const [matrixValues, setMatrixValues] = useState([]);

  useEffect(() => {
    if (size > 0) {
      generateMatrix();
    }
  }, [size]);


  const generateMatrix = () => {
    const newMatrix = [];
    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < size; j++) {
        row.push(generateCellValue(size));
      }
      newMatrix.push(row);
    }
    setMatrixValues(newMatrix);
    setResult(0);
  };


  const handleButtonClick = (value) => {
    if (value !== 0) {
      setResult(prevResult => prevResult + value);
    } else {
      setIsGameOver(true)
    }
  };

  return (
    <div
      className="grid gap-0 p-2 mb-3 w-fit bg-green-500"
      style={{
        gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
        width: `${size * 2.5 + size * 0.5}rem`,
      }}
    >
      {matrixValues.map((row, rowIndex) => (
        row.map((cellValue, colIndex) => (
          <MatrixButton
            key={`${rowIndex}-${colIndex}`}
            value={cellValue}
            onClick={handleButtonClick}
            size={size}
          />
        ))
      ))}
    </div>
  );
}
