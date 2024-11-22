"use client";

import { motion } from "framer-motion";
import { AnimatedSolanaLogo } from "./loader/LogoLoader";

export default function LoadingPage() {
  return (
    <div className="min-h-screen bg-[#0b0d17] flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="inline-block mb-8"
        >
          <AnimatedSolanaLogo />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-4 text-2xl font-bold text-white"
        >
          Loading SolanaCodeLab...
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-2 text-gray-400"
        >
          Preparing your coding adventure
        </motion.p>
      </motion.div>
    </div>
  );
}
