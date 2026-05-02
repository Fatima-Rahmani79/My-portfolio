import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const codeLines = [
  "const app = {",
  "  name: 'Habit Tracker',",
  "  stack: ['React', 'Tailwind'],",
  "};",
  "",
  "function buildApp() {",
  "  return 'Clean & scalable code';",
  "}",
];

export default function Step3() {
  const [displayedLines, setDisplayedLines] = useState([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedLines((prev) => [...prev, codeLines[i]]);
      i++;
      if (i >= codeLines.length) clearInterval(interval);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen flex flex-col items-center justify-center text-center bg-[#0B0B0F] text-white px-4">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold"
      >
        Then I write{" "}
        <span className="text-green-400">clean, scalable code</span>
      </motion.h2>

      {/* Code Block */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-10 bg-black/60 border border-white/10 rounded-2xl p-6 text-left w-full max-w-xl shadow-xl backdrop-blur"
      >
        <pre className="text-green-400 text-sm leading-relaxed">
          {displayedLines.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </pre>
      </motion.div>
    </section>
  );
}
