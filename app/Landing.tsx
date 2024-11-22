"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Code,
  BookOpen,
  Rocket,
  ArrowRight,
  Megaphone,
  Hash,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SignIn from "./SignIn";
import { Navbar } from "./components/NavBar";
// import { Navbar } from "./components/NavBar";

export default function Component() {
  const marqueeVariants = {
    animate: {
      x: [0, -1500],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative ">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900 opacity-50" />

      {/* Curved shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-1/2 h-full bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute -bottom-1/2 -right-1/4 w-1/2 h-full bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-1/2 left-1/4 w-1/2 h-full bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        {/* Header */}
        {/* <NavBar /> */}

        <main className="container mx-auto px-4 text-center mt-16 sm:mt-28 flex flex-col lg:flex-row">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
                Learn to Code
                <span className="text-purple-400">in Solana.</span>{" "}
                <span className="text-teal-400">Fast and Interactive.</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Master Solana development through hands-on coding challenges,
                interactive tutorials, and real-world projects.
              </p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
              >
                <SignIn />
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-6 text-lg w-full sm:w-auto border-gray-600 text-black"
                >
                  EXPLORE SOLANA
                </Button>
              </motion.div>
            </motion.div>

            {/* Features */}
          </div>

          {/* Leaderboard */}
          <div className="flex-1 mt-12 lg:mt-0 lg:ml-12">
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">Top Learners</h2>
              <ul className="space-y-4">
                {[
                  { rank: "#1", name: "solana_dev_pro", xp: "1500 XP" },
                  { rank: "#2", name: "blockchain_ninja", xp: "1450 XP" },
                  { rank: "#3", name: "crypto_coder", xp: "1400 XP" },
                ].map((user, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between bg-gray-900 p-4 rounded-lg"
                  >
                    <div className="flex items-center">
                      <div className="bg-purple-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">
                        {user.rank}
                      </div>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-gray-400">0x...{index}F6</p>
                      </div>
                    </div>
                    <div className="text-lg font-bold">{user.xp}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>

        {/* Marquee */}
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 overflow-hidden">
          <motion.div
            variants={marqueeVariants}
            animate="animate"
            className="py-4 sm:py-6 whitespace-nowrap"
          >
            <div
              className="flex gap-4 sm:gap-8 text-sm sm:text-lg font-medium"
              style={{ width: "max-content" }}
            >
              {[...Array(2)].map((_, index) => (
                <div key={index} className="flex gap-4 sm:gap-8">
                  <span className="text-purple-400">
                    💻 LEARN SOLANA PROGRAMMING
                  </span>
                  <span className="text-teal-400">
                    🏆 TOP UP THE LEADERBOARD
                  </span>
                  <span className="text-blue-400">
                    🚀 BUILD REAL SOLANA DAPPS
                  </span>
                  <span className="text-white">
                    🌟 JOIN THE SOLANA DEV COMMUNITY
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
