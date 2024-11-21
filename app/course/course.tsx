"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";

export default function CoursePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = {
    name: "John Doe",
    image: "/user-avatar.png",
  };

  return (
    <div className="min-h-screen bg-[#0b0d17] text-white">
      {/* Navbar */}
      <header className="w-full px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold">SolanaCodeLab</span>
        </div>
        <div className="flex items-center space-x-6">
          {isLoggedIn ? (
            <div className="flex items-center space-x-2">
              <Image
                src={user.image}
                alt="User Avatar"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span>{user.name}</span>
            </div>
          ) : (
            <Button className="bg-teal-500 text-white hover:bg-teal-600 px-4 py-2 rounded-full">
              Start Coding
            </Button>
          )}
        </div>
      </header>

      {/* Course Content */}
      <main className="container mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Solana: Beginner to Advanced Development
          </h1>
          <p className="text-lg text-gray-400 mb-8">
            Dive into Solana development and master the skills needed to build
            powerful decentralized applications.
          </p>
          <Button className="bg-teal-500 text-white hover:bg-teal-600 px-6 py-3 rounded-full">
            Start Course
          </Button>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">What you'll learn:</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-300">
            <li>Understanding Solana Architecture</li>
            <li>Building Smart Contracts with Rust</li>
            <li>Deploying and Testing on Solana</li>
            <li>Integrating with Front-end Applications</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Course Content</h2>
          <div className="space-y-4">
            {[
              { title: "Introduction to Solana", progress: 40 },
              { title: "Smart Contract Basics", progress: 0 },
              { title: "Advanced Rust Programming", progress: 0 },
              { title: "Deploying on Solana", progress: 0 },
            ].map((lesson, index) => (
              <div
                key={index}
                className="bg-gray-900 p-4 rounded-lg flex justify-between items-center"
              >
                <span className="font-medium">{lesson.title}</span>
                <div className="w-1/2 bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-teal-500 h-2 rounded-full"
                    style={{ width: `${lesson.progress}%` }}
                  />
                </div>
                <span className="text-sm text-gray-400">
                  {lesson.progress}% completed
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
