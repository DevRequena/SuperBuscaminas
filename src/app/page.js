'use client'
import { MatrixComponent } from "./components/MatrixComponent";
import { StatusGame } from "./components/StatusGame";
import { MatrixInput } from "./components/MatrixInput";
import { ResultDisplay } from "./components/ResultDisplay";
import { useState } from "react";
import Swal from 'sweetalert2';

export default function Home() {
  const [matrixSize, setMatrixSize] = useState(0);
  const [result, setResult] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  

  if (matrixSize > 1 && result >= matrixSize) {
    Swal.fire({
      title: '¡Ganaste!',
      html: `Lograste un puntaje de ${result}<br> Tu objetivo era: ${matrixSize}`,
      icon: 'success',
      confirmButtonText: 'Reiniciar',
      didClose: () => {
        setMatrixSize(0)
        setResult(0)
      },
    });
  } 
  
  if(isGameOver === true){
    Swal.fire({
      title: '¡Oh no!',
      html: `<h1>Acabas de encontrar una mina</h1> <br> Lograste un puntaje de ${result} <br> Tu objetivo era: ${matrixSize}`,
      icon: 'error',
      confirmButtonText: 'Reiniciar',
      didClose: () => {
        setResult(0)
        setMatrixSize(0)
        setIsGameOver(false)
      },
    });
  }
  


  return (
    <div className="flex flex-col items-center mt-3">
      <h3 className="text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 drop-shadow-lg">
        ¡Conviértete en un experto en Buscaminas! 
      </h3>
      <MatrixInput setMatrixSize={setMatrixSize} isGameOver={isGameOver} />
      <ResultDisplay matrixSize={matrixSize} isGameOver={isGameOver} result={result}/>
      {matrixSize > 0 && <MatrixComponent size={matrixSize} setResult={setResult} setIsGameOver={setIsGameOver} />}
      <StatusGame isGameOver={isGameOver} />
    </div>
  );
}