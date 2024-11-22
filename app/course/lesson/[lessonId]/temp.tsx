"use client";

import { motion } from "framer-motion";
import { RabbitIcon as Duck, Flag } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Chapter {
  id: number;
  title: string;
  x: number;
  y: number;
}

const chapters: Chapter[] = [
  { id: 1, title: "Getting Started", x: 10, y: 80 },
  { id: 2, title: "Basic Concepts", x: 25, y: 60 },
  { id: 3, title: "Advanced Features", x: 40, y: 40 },
  { id: 4, title: "Best Practices", x: 55, y: 20 },
  { id: 5, title: "Real World Examples", x: 70, y: 40 },
  { id: 6, title: "Troubleshooting", x: 85, y: 60 },
  { id: 7, title: "Next Steps", x: 95, y: 80 },
];

export default function ChapterMap() {
  return (
    <div className="relative h-[600px] w-full overflow-hidden rounded-xl bg-slate-900 p-8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-900 to-slate-950"></div>

      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4B5563" />
            <stop offset="100%" stopColor="#6B7280" />
          </linearGradient>
        </defs>

        {/* White Curvy Path */}
        <motion.path
          d="M 5% 80% Q 20% 20%, 40% 40% T 70% 40% T 95% 80% T 98% 80%"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Grey Gradient Path */}
        <motion.path
          d="M 5% 80% Q 20% 20%, 40% 40% T 70% 40% T 95% 80% T 98% 80%"
          fill="none"
          stroke="url(#roadGradient)"
          strokeWidth="20"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Dotted Overlay Path */}
        <motion.path
          d="M 5% 80% Q 20% 20%, 40% 40% T 70% 40% T 95% 80% T 98% 80%"
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="5,10"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        />
      </svg>

      {/* Start Point with Duck */}
      <motion.div
        className="absolute left-[3%] top-[76%]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="rounded-full bg-yellow-400 p-2 shadow-glow">
          <Duck className="h-6 w-6 text-yellow-800" />
        </div>
      </motion.div>

      {/* Chapter Points */}
      <TooltipProvider>
        {chapters.map((chapter, index) => (
          <motion.div
            key={chapter.id}
            className="absolute"
            style={{ left: `${chapter.x}%`, top: `${chapter.y}%` }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8 + index * 0.2 }}
          >
            <Tooltip>
              <TooltipTrigger>
                <motion.div
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 shadow-glow"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-lg font-bold text-white">
                    {chapter.id}
                  </span>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm font-medium">{chapter.title}</p>
              </TooltipContent>
            </Tooltip>
          </motion.div>
        ))}
      </TooltipProvider>

      {/* End Point with Flag */}
      <motion.div
        className="absolute right-[1%] top-[76%]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2.2 }}
      >
        <div className="rounded-full bg-red-500 p-2 shadow-glow">
          <Flag className="h-6 w-6 text-white" />
        </div>
      </motion.div>

      <style jsx>{`
        .shadow-glow {
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </div>
  );
}
