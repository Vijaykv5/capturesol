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
import { useRouter } from "next/navigation";
import { supabase } from "../../../../app/utils/supabase";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

export default function TutorialLayout() {
  const router = useRouter();
  const { user } = useCurrentUser();
  const [currentLesson, setCurrentLesson] = React.useState(1);
  const [questionsAnswered, setQuestionsAnswered] = React.useState(0);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [currentXp, setCurrentXp] = React.useState(0);
  const [windowWidth, setWindowWidth] = React.useState(0);
  const totalLessons = lessonContent.length;

  // Destructure lesson content for the current lesson
  const {
    title,
    xp: lessonXp,
    maxXp,
    theory,
    questionnaire,
  } = lessonContent[currentLesson - 1];

  React.useEffect(() => {
    // Set the initial window width
    setWindowWidth(window.innerWidth);

    // Add event listener for window resize
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Use useEffect to fetch the current XP on mount and whenever the user changes
  React.useEffect(() => {
    const fetchCurrentXp = async () => {
      if (!user?.identities?.[0]?.user_id) return;

      try {
        const userId = user.identities[0].user_id;

        // Fetch the current XP
        const { data, error } = await supabase
          .from("user_xp")
          .select("xp")
          .eq("UUID", userId)
          .single();

        if (error) {
          console.error("Error fetching XP:", error);
          return;
        }

        setCurrentXp(data?.xp || 0); // Set current XP or 0 if not found
      } catch (err) {
        console.error("Error fetching XP:", err);
      }
    };

    fetchCurrentXp();
  }, [user]);

  // Handle "Next" button click and accumulate XP
  const handleNext = async () => {
    if (currentLesson < totalLessons) {
      const userId = user?.identities?.[0]?.user_id;
      if (!userId) return;

      try {
        // Calculate the new XP by adding the lesson XP to the current XP
        const newXp = currentXp + lessonXp;

        // Update the user's XP in the database
        const { data, error } = await supabase
          .from("user_xp")
          .update({ xp: newXp }) // Accumulate XP
          .eq("UUID", userId);

        if (error) {
          console.error("Error updating XP:", error);
          return;
        }

        // Successfully updated XP
        setCurrentXp(newXp); // Update the state with the new XP

        // Move to the next lesson
        setCurrentLesson((prev) => prev + 1);
        setQuestionsAnswered(0);
      } catch (err) {
        console.error("Error in handleNext:", err);
      }
    }
  };

  const handleBack = () => {
    if (currentLesson > 1) {
      setCurrentLesson(currentLesson - 1);
      setQuestionsAnswered(0);
    }
  };

  const handleSubmit = () => {
    setIsModalOpen(true);
  };

  const handleQuestionAnswered = () => {
    setQuestionsAnswered((prev) => prev + 1);
  };

  return (
    <div className="flex h-screen flex-col bg-[#0a0a16] text-white">
      {/* Navbar */}
      <Navbar user={user as AppUser | null} />

      {/* Header */}
      <header className="mt-6 flex h-14 items-center justify-between border-b border-gray-800 px-6 bg-[#0f0f1a]">
        <h1 className="text-lg font-semibold">
          Chapter {currentLesson}: {title}
        </h1>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">XP: {lessonXp}</span>
        </div>
      </header>

      {/* Main Content */}
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
                key={currentLesson}
                questions={questionnaire}
                onQuestionAnswered={handleQuestionAnswered}
              />
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative flex h-16 items-center justify-end border-t border-gray-800 px-6 bg-[#0f0f1a]">
        <motion.div
          initial={{ x: 0 }}
          animate={{
            x: ((currentLesson - 1) / (totalLessons - 1)) * (windowWidth - 150),
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

          {currentLesson === totalLessons ? (
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSubmit}
                  disabled={questionsAnswered < questionnaire.length}
                  className="border-gray-700 bg-transparent text-white hover:bg-gray-800 hover:text-white"
                >
                  Submit
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-800 rounded-lg p-6 text-center text-white">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">
                    Congratulations!
                  </DialogTitle>
                  <DialogDescription className="mt-4 text-gray-300">
                    You have completed all the chapters! Great job on reaching
                    the end.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button
                    onClick={() => router.push("/course")}
                    className="border-gray-700 bg-transparent text-white hover:bg-green-600 transition-colors duration-200"
                  >
                    Go back to the course page
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={handleNext}
              disabled={questionsAnswered < questionnaire.length}
              className="border-gray-700 bg-transparent text-white hover:bg-gray-800 hover:text-white"
            >
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </footer>
    </div>
  );
}
