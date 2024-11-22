"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Navbar } from "@/app/components/NavBar";
import useCurrentUser from "@/app/hooks/useCurrentUser";
import { lessonContent } from "./lesson-content";
import { Questionnaire } from "./questionnaire";
export default function TutorialLayout() {
  const { user } = useCurrentUser();
  const [currentLesson, setCurrentLesson] = React.useState(1);
  const totalLessons = lessonContent.length;
  const [questionsAnswered, setQuestionsAnswered] = React.useState(0);

  const handleNext = () => {
    if (currentLesson < totalLessons) {
      setCurrentLesson(currentLesson + 1);
      setQuestionsAnswered(0);
    }
  };

  const handleBack = () => {
    if (currentLesson > 1) {
      setCurrentLesson(currentLesson - 1);
      setQuestionsAnswered(0);
    }
  };

  const { title, xp, maxXp, theory, questionnaire } =
    lessonContent[currentLesson - 1];

  const handleQuestionAnswered = () => {
    setQuestionsAnswered((prev) => prev + 1);
  };

  return (
    <div className="flex h-screen flex-col bg-[#0a0a16] text-white">
      <Navbar user={user} />
      <header className="mt-6 flex h-14 items-center justify-between border-b border-gray-800 px-6 bg-[#0f0f1a]">
        <h1 className="text-lg font-semibold">
          Chapter {currentLesson}: {title}
        </h1>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">
            XP: {xp}/{maxXp}
          </span>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/2 border-r border-gray-800">
          <ScrollArea className="h-full">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">The Story So Far...</h2>
              <p className="mb-4">{theory.story}</p>
              <h3 className="text-xl font-semibold mb-2">Today's Lesson</h3>
              {theory.content}
            </div>
          </ScrollArea>
        </div>

        <div className="w-1/2">
          <ScrollArea className="h-full">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Quest</h2>
              <Questionnaire
                questions={questionnaire}
                onQuestionAnswered={handleQuestionAnswered}
              />
            </div>
          </ScrollArea>
        </div>
      </div>

      <footer className="relative flex h-16 items-center justify-end border-t border-gray-800 px-6 bg-[#0f0f1a]">
        <motion.div
          initial={{ x: 0 }}
          animate={{
            x:
              ((currentLesson - 1) / (totalLessons - 1)) *
              (window.innerWidth - 150),
            y: [-5, 5, -5],
          }}
          transition={{
            x: { type: "spring", stiffness: 50, damping: 20 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
          }}
          className="absolute left-6 bottom-0 translate-y-1/2"
        >
          <img
            src="https://i.etsystatic.com/34457433/r/il/318184/4653430832/il_340x270.4653430832_asul.jpg"
            alt="Progress Duck"
            className="h-16 w-16 object-contain"
          />
        </motion.div>

        <div className="ml-auto flex items-center gap-4">
          <span className="text-sm text-gray-400">
            {currentLesson}/{totalLessons}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={handleBack}
            disabled={currentLesson === 1}
            className="border-gray-700 bg-transparent text-white hover:bg-gray-800 hover:text-white"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleNext}
            disabled={
              currentLesson === totalLessons ||
              questionsAnswered < questionnaire.length
            }
            className="border-gray-700 bg-transparent text-white hover:bg-gray-800 hover:text-white"
          >
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </footer>
    </div>
  );
}
