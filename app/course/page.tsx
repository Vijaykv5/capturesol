// // pages/index.tsx
// 'use client'
// import React, { useState } from "react";
// import GameHeader from "../components/GameHeader";
// import LevelCard from "../components/LevelCard";
// import { levels, Level } from "../utils/data";

// const Home: React.FC = () => {
//   const [xp, setXp] = useState<number>(0);
//   const [currentLevel, setCurrentLevel] = useState<number>(1);

//   return (
//     <div>
//       <GameHeader xp={xp} level={currentLevel} />
//       <main className="p-6">
//         <h2 className="text-3xl mb-4">Select a Level to Begin</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {levels.map((level: Level) => (
//             <LevelCard
//               key={level.id}
//               level={level}
//               unlocked={level.unlocked || level.id <= currentLevel}
//             />
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Home;
"use client"
import React from "react";
import SignIn from "../SignIn";
import CoursePage from "./course";

const Page = () => {
  return <div>

    <CoursePage/>
  </div>;
};

export default Page;

