import React from 'react'

export const ResultDisplay = ({ matrixSize, isGameOver, result }) => {
  return (
    <>
      {
        matrixSize > 0 && 
        <div className='flex justify-center items-center mt-2 mb-4 gap-6'>
          <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-lg font-medium text-gray-800">
                Tu objetivo es sumar: {matrixSize} 
              </div>
          </div>
    
          <div className="bg-white p-4 rounded-lg shadow-md"> 
            <div className="text-lg font-medium text-gray-800">
              Tu Puntaje es: {result}
            </div>
          </div>
        </div>
      }
    </>
  )
}