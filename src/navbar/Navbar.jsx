import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [clickedBtn, setClickedBtn] = useState(null);

  const handleButtonClick = (btn) => {
    setClickedBtn(btn);
    setTimeout(() => setClickedBtn(null), 200);
  };

  return (
    <nav className="bg-gray-100 hover:bg-gray-200 transition-colors duration-300 border border-black rounded-md shadow-sm mx-auto my-4 w-11/12 p-4 flex justify-between items-center">
      {/* Left Logo */}
      <div className="flex items-center space-x-2">
        <div className="bg-lime-300 px-2 py-1 rounded shadow-md border border-black text-black font-bold">OX</div>
        <span className="font-bold text-lg">Tic Tac Toe</span>
      </div>

      {/* Center Links */}
      <ul className="flex space-x-6 items-center font-medium">
  <li>
    <Link to="/" className="text-black hover:text-lime-600 transition-colors duration-200">Game</Link>
  </li>
  <li>
    <Link to="/about" className="text-black hover:text-lime-600 transition-colors duration-200">About</Link>
  </li>
</ul>

      {/* Right Buttons */}
      <div className="flex space-x-2">
        <button
          onClick={() => handleButtonClick('signIn')}
          className={`${
            clickedBtn === 'signIn' ? 'bg-green-700' : 'bg-lime-300'
          } border border-black px-4 py-2 rounded shadow-[3px_3px_0px_0px_black] hover:shadow-[5px_5px_0px_0px_black] transition-all duration-150`}
        >
          Sign In
        </button>

        <button
          onClick={() => handleButtonClick('signOut')}
          className={`${
            clickedBtn === 'signOut' ? 'bg-green-700' : 'bg-lime-300'
          } border border-black px-4 py-2 rounded shadow-[3px_3px_0px_0px_black] hover:shadow-[5px_5px_0px_0px_black] transition-all duration-150`}
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

