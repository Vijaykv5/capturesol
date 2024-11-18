"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Camera,
  Trophy,
  Coins,
  ArrowRight,
  Megaphone,
  Hash,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    <div className="min-h-screen bg-[#f5f5e9] overflow-hidden relative">
      {/* Light beam effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-100/20 to-transparent transform -rotate-45" />

      {/* Header */}
      <header className="relative z-10 px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-4 sm:mb-0"
        >
          SolanaSnaps
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button className="bg-[#d4ff4d] text-black hover:bg-[#c2ee3c] font-medium rounded-full px-6 w-full sm:w-auto">
            Start Posting <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </header>

      {/* Announcement Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-[#d4ff4d] text-black px-4 py-2 text-center mx-auto max-w-2xl rounded-full mt-4 flex items-center justify-center gap-2 border-2 border-black text-sm sm:text-base"
      >
        <Megaphone className="h-4 w-4 flex-shrink-0" />
        <span>
          Join the Solana community showcase! Post your support and earn SOL
        </span>
      </motion.div>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 text-center mt-12 sm:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            Share. <span className="text-gray-600">Support.</span>{" "}
            <span className="text-[#d4ff4d] bg-black px-4 py-1 rounded-lg border-2 border-black inline-block transform -skew-x-12">
              Earn.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Show your support for the Solana ecosystem through creative photos
            and messages. Get tipped in SOL when your content resonates with the
            community.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <Button className="bg-black text-white hover:bg-black/90 rounded-full px-8 py-6 text-lg w-full sm:w-auto">
              <Camera className="mr-2 h-5 w-5" /> Share Your Support
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 text-lg w-full sm:w-auto"
            >
              Explore Posts
            </Button>
          </motion.div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 sm:mt-20"
        >
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl">
            <Camera className="h-10 w-10 text-[#d4ff4d] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Share Your Voice</h3>
            <p className="text-gray-600">
              Post creative photos with your message of support for Solana
            </p>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl">
            <Trophy className="h-10 w-10 text-[#d4ff4d] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Get Recognized</h3>
            <p className="text-gray-600">
              Stand out in the community with your unique perspective
            </p>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl sm:col-span-2 lg:col-span-1">
            <Coins className="h-10 w-10 text-[#d4ff4d] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Earn SOL Tips</h3>
            <p className="text-gray-600">
              Receive tips from supporters who love your content
            </p>
          </div>
        </motion.div>

        {/* Photo Grid Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 mb-24"
        >
          <div className="flex items-center justify-center gap-2 mb-8 text-lg sm:text-xl">
            <Hash className="h-5 w-5" />
            <span className="font-medium">
              Use the hashtag #solsnaps to be featured!
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="grid gap-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Community event"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Community event"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Community event"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Community event"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Community event"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Community event"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Marquee */}
      <div
        className="fixed bottom-0 left-0 right-0 bg-black overflow-hidden"
        style={{ width: "calc(100% + 200px)", marginLeft: "-100px" }}
      >
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
                <span className="text-[#d4ff4d]">
                  📸 SHARE YOUR SOLANA STORY
                </span>
                <span className="text-white">🌟 GET COMMUNITY RECOGNITION</span>
                <span className="text-[#d4ff4d]">💰 EARN SOL TIPS</span>
                <span className="text-white">🚀 JOIN THE MOVEMENT</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
