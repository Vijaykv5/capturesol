// components/XPBar.tsx
import React from "react";

interface XPBarProps {
  xp: number;
  maxXp: number;
}

const XPBar: React.FC<XPBarProps> = ({ xp, maxXp }) => {
  const percentage = (xp / maxXp) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
      <div
        className="bg-green-500 h-4 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default XPBar;
