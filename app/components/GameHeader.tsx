// components/GameHeader.tsx
import React from "react";

interface GameHeaderProps {
  xp: number;
  level: number;
}

const GameHeader: React.FC<GameHeaderProps> = ({ xp, level }) => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Solana Quest</h1>
      <div>
        <span className="mr-4">XP: {xp}</span>
        <span>Level: {level}</span>
      </div>
    </header>
  );
};

export default GameHeader;
