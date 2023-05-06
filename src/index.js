import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';
// =================================styles================================================


const gameStyles = {
  backgroundColor: 'salmon',
  margin: 10,
  padding: 20,
};
const boardStyles = {
  backgroundColor: 'skyblue',
  margin: 10,
  padding: 20,
}













// ========================================functions======================================================

const root = ReactDOM.createRoot(document.getElementById('root'));
const Game = () => {
  return (
    <div style={gameStyles} className="game">
     lets play TIC-TAC-TOE game
      <Board/>
    </div>
  );
};
const Square = (props)=>{
 
  return (
    <button
    className="square" onClick={props.onClickEvent}>
      {props.value}
    </button>


  );
};

const Board = () => {
  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClickEvent = (i) => {
    const newSquares = [...squares];
   
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };
  

  const renderSquare = (i)=>{
    const statusPlayer = `Next player: ${xIsNext ? 'X' : 'O'}`
    return(
     <Square value={squares[i]} onClickEvent={()=> handleClickEvent(i)}/>
    );
  };
  const winner = calculateWinner(squares);
  const statusPlayer = winner ? `Winner: ${winner}` :`Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div style={boardStyles}>
      <div className="statusPlayer">
        {statusPlayer}
      </div>

      <div className="board-row">
      {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}

      </div>
      <div className="board-row">
      {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}

      </div>
      <div className="board-row">
      {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}

      </div>

    </div>
  );
};

function calculateWinner(squares){
  // will put our winning combination in lines array.
  const lines = [
    [0,1,2],[3,4,5],[6,7,8], // rows
    [0,3,6],[1,4,7],[2,5,8], // columns
    [0,4,8],[2,4,6] // diagonals
  ];
  // The for...of statement creates a loop iterating over iterable objects
  for(let line of lines){
    // The destructuring assignment syntax is a JavaScript expression
    // that makes it possible to unpack values from arrays, or properties
    // from objects, into distinct variables.
   
    // extracting 3 elements from line array.
    const [a,b,c] = line;
    // checking if squares[a] exists
    // Then comparing with squares[b] and squares[c]
    if(squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
      return squares[a]; // 'X' or 'O'
    }
  }
  // otherwise return null.
  return null;
}








// ===============================================================================================
root.render(
  <React.StrictMode>
    <Game/>
  
  </React.StrictMode>
);


