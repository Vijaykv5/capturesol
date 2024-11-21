// utils/data.ts
export interface Level {
  id: number;
  title: string;
  description: string;
  xp: number;
  unlocked: boolean;
}

export const levels: Level[] = [
  {
    id: 1,
    title: "Introduction to Solana",
    description: "Learn the basics of Solana and why it's unique.",
    xp: 50,
    unlocked: true,
  },
  {
    id: 2,
    title: "Setting Up Developer Toolkit",
    description: "Install the tools needed for Solana development.",
    xp: 100,
    unlocked: false,
  },
  {
    id: 3,
    title: "Building Your First Program",
    description: "Deploy a simple Solana program.",
    xp: 150,
    unlocked: false,
  },
];
