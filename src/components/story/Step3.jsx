import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const codeLines = [
  "const app = {",
  "  name: 'Habit Tracker',",
  "  stack: ['React', 'Tailwind'],",
  "};",
  "",
  "function buildApp() {",
  "  return 'Clean UI ready 🚀';",
  "}",
];

export default function Step3() {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedLines((prev) => [...prev, codeLines[i]]);
      i++;
      if (i >= codeLines.length) {
        clearInterval(interval);
        setTimeout(() => setDone(true), 500);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-[#0B0B0F] text-white px-4">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-bold"
      >
        Then I turn it into <span className="text-green-400">real product</span>
      </motion.h2>

      {/* Code block */}
      <div className="mt-10 w-full max-w-xl">
        <div className="bg-black/70 border border-white/10 rounded-2xl p-6 text-left shadow-xl backdrop-blur">
          <pre className="text-green-400 text-sm leading-relaxed font-mono">
            {displayedLines.map((line, i) => (
              <div key={i}>{line}</div>
            ))}

            {/* blinking cursor */}
            {!done && (
              <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse"></span>
            )}
          </pre>
        </div>

        {/* 👇 OUTPUT (خیلی مهم) */}
        {done && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 bg-white/5 border border-indigo-400/20 rounded-xl p-4 text-sm text-gray-300"
          >
            ✅ UI Generated: Clean Dashboard Interface
          </motion.div>
        )}
      </div>
    </section>
  );
}
