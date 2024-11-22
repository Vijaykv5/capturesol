import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Question {
  question: string;
  answer: string;
}

interface QuestionnaireProps {
  questions: Question[];
  onQuestionAnswered: () => void;
}

export function Questionnaire({
  questions,
  onQuestionAnswered,
}: QuestionnaireProps) {
  const [answers, setAnswers] = useState<string[]>(
    new Array(questions.length).fill("")
  );
  const [feedback, setFeedback] = useState<string[]>(
    new Array(questions.length).fill("")
  );

  const handleSubmit = (index: number) => {
    const isCorrect =
      answers[index].toLowerCase() === questions[index].answer.toLowerCase();
    setFeedback((prev) => {
      const newFeedback = [...prev];
      newFeedback[index] = isCorrect ? "Correct!" : "Try again!";
      return newFeedback;
    });
    if (isCorrect) {
      onQuestionAnswered();
    }
  };

  return (
    <div className="space-y-6">
      {questions.map((q, index) => (
        <div key={index} className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">{q.question}</h3>
          <div className="flex space-x-2">
            <Input
              type="text"
              value={answers[index]}
              onChange={(e) =>
                setAnswers((prev) => {
                  const newAnswers = [...prev];
                  newAnswers[index] = e.target.value;
                  return newAnswers;
                })
              }
              placeholder="Your answer"
              className="flex-grow"
            />
            <Button onClick={() => handleSubmit(index)}>Submit</Button>
          </div>
          {feedback[index] && (
            <p
              className={`mt-2 ${
                feedback[index] === "Correct!"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {feedback[index]}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
