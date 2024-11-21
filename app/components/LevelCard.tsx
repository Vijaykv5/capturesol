// components/LevelCard.tsx
import React from "react";
import Link from "next/link";

interface Level {
  id: number;
  title: string;
  description: string;
  xp: number;
  unlocked: boolean;
}

interface LevelCardProps {
  level: Level;
  unlocked: boolean;
}

const LevelCard: React.FC<LevelCardProps> = ({ level, unlocked }) => {
  return (
    <div
      className={`p-4 border rounded-lg ${
        unlocked ? "border-green-500" : "border-gray-300"
      }`}
    >
      <h2 className="text-xl font-bold">
        Level {level.id}: {level.title}
      </h2>
      <p>{level.description}</p>
      {unlocked ? (
        <Link href={`/levels/${level.id}`}>
          <a className="text-blue-500">Start Level</a>
        </Link>
      ) : (
        <span className="text-gray-500">Locked</span>
      )}
    </div>
  );
};

export default LevelCard;
