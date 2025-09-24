import React, { useState } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [xMoves, setXMoves] = useState([]);
  const [oMoves, setOMoves] = useState([]);
  const [highlightIndex, setHighlightIndex] = useState(null);

  const handleClick = (index) => {
    if (board[index]) return;

    const newBoard = [...board];
    const currentMark = isXNext ? 'X' : 'O';
    newBoard[index] = currentMark;

    let newMoves = isXNext ? [...xMoves] : [...oMoves];
    newMoves.push(index);

    if (newMoves.length > 3) {
      const fadedIndex = newMoves[0];
      setHighlightIndex(fadedIndex);
      setTimeout(() => {
        newMoves.shift();
        newBoard[fadedIndex] = null;
        setBoard([...newBoard]);
        setHighlightIndex(null);
      }, 300); // 300ms for fading effect
    }

    if (isXNext) setXMoves(newMoves);
    else setOMoves(newMoves);

    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setXMoves([]);
    setOMoves([]);
    setHighlightIndex(null);
  };

  const renderSquare = (index) => {
    const isFading = index === highlightIndex;
    const mark = board[index];
    let textColor = '';

    if (mark === 'X') textColor = 'text-pink-700';
    if (mark === 'O') textColor = 'text-purple-700';

    return (
      <button
        key={index}
        onClick={() => handleClick(index)}
        className={`w-24 h-24 m-1 border-4 border-black text-4xl font-bold bg-yellow-200 transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg ${
          isFading ? 'opacity-50' : 'opacity-100'
        } ${textColor}`}
      >
        {mark}
      </button>
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-100">
      <div className="bg-yellow-400 shadow-[10px_10px_0px_rgba(0,0,0,1)] p-8 rounded-md">
        <div className="grid grid-cols-3 gap-2">
          {board.map((_, index) => renderSquare(index))}
        </div>
        <button
          onClick={resetGame}
          className="mt-6 px-6 py-2 bg-pink-500 text-white font-semibold rounded shadow-md hover:bg-pink-600 hover:shadow-lg transition"
        >
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
