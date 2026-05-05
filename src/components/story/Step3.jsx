import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const codeLines = [
  "const app = {",
  "  name: 'Habit Tracker',",
  "  stack: ['React', 'Tailwind'],",
  "};",
  "",
  "function buildApp() {",
  "  return 'UI Ready 🚀';",
  "}",
];

export default function Step3() {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [stage, setStage] = useState("typing");
  // typing → building → done

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedLines((prev) => [...prev, codeLines[i]]);
      i++;

      if (i >= codeLines.length) {
        clearInterval(interval);

        setTimeout(() => setStage("building"), 600);
        setTimeout(() => setStage("done"), 1800);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#0B0B0F] text-white px-4">
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-bold text-center"
      >
        From code to{" "}
        <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
          real product
        </span>
      </motion.h2>

      {/* CODE */}
      <div className="mt-10 w-full max-w-xl">
        <div className="bg-black/70 border border-white/10 rounded-2xl p-6 text-left shadow-xl backdrop-blur">
          <pre className="text-green-400 text-sm font-mono">
            {displayedLines.map((line, i) => (
              <div key={i}>{line}</div>
            ))}

            {stage === "typing" && (
              <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse"></span>
            )}
          </pre>
        </div>

        {/* BUILDING */}
        {stage === "building" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-indigo-300 text-sm"
          >
            ⚙️ Building interface...
          </motion.div>
        )}
      </div>

      {/* 👇 UI OUTPUT */}
      {stage === "done" && (
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="mt-12 w-full max-w-md"
        >
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur shadow-2xl">
            {/* header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Habit Tracker</h3>
              <span className="text-xs text-green-400">Live</span>
            </div>

            {/* tasks */}
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg">
                <span>Workout</span>
                <div className="w-4 h-4 bg-green-400 rounded-full"></div>
              </div>

              <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg">
                <span>Read</span>
                <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
              </div>

              <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg">
                <span>Code</span>
                <div className="w-4 h-4 bg-green-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
