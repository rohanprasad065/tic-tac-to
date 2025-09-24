import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-green-200 grid place-items-center">
      <div
        className="bg-orange-400 border-4 border-black shadow-[6px_6px_0px_0px_black] 
                   hover:shadow-[10px_10px_0px_0px_black] hover:scale-105 
                   transition-all duration-300 rounded-md p-10 w-[90%] md:w-[70%] lg:w-[50%] text-center"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-4">About Tic Tac Toe</h1>
        <h1 className="text-lg md:text-xl text-black font-medium">Rules of the Game:</h1>
        
          
        <h1 className="text-lg md:text-xl text-black font-medium">Connect 3 to Win
        Just like the classic version, your goal is to get three of your marks in a row — horizontally, vertically, or diagonally.</h1>
        <br />


        <h1 className="text-lg md:text-xl text-black font-medium">Take Turns
        It's a two-player game. You and your opponent take turns one after the other — one move each per turn.</h1>
        <br />


        <h1 className="text-lg md:text-xl text-black font-medium">Dynamic Play – Vanishing Rule
        Here’s the twist! ⏳
        When you place your fourth mark, your first mark vanishes automatically.
        So, you always have only 3 active marks on the board at any time!</h1>
        <br />


       <h1 className="text-lg md:text-xl text-black font-medium"> Stay sharp, think ahead, and outsmart your opponent in this exciting version of Tic Tac Toe!</h1>
      </div>
    </div>
  );
};

export default About;

