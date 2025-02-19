'use client'

import { useEffect, useState } from "react";

export const MatrixButton = ({ value, onClick, size }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleClick = () => {
    setIsRevealed(true);
    onClick(value);
  };

  useEffect(() => {
    setIsRevealed(false);
  }, [size]);

  return (
    <button
      className={`w-10 h-10 m-0.5 text-center text-base border border-gray-400 cursor-pointer ${isRevealed ? 'bg-gray-200 text-black' : 'bg-gray-300 text-transparent'} disabled:opacity-50`}
      onClick={handleClick}
      disabled={isRevealed}
    >
      {isRevealed ? value : ''}
    </button>
  );
}