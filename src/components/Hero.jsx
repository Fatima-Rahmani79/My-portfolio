import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const codeLines = [
  "const developer = {",
  "  name: 'Fatima Rahmani',",
  "  role: 'Frontend Developer',",
  "  skills: ['React', 'Tailwind'],",
  "};",
  "",
  "function build() {",
  "  return 'Clean & fast apps';",
  "}",
];

export default function Hero() {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setLines((prev) => [...prev, codeLines[i]]);
      i++;
      if (i >= codeLines.length) clearInterval(interval);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  const scrollToStory = () => {
    document.getElementById("step1")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0B0B0F] text-white px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-purple-600 opacity-20 blur-[160px] rounded-full pointer-events-none top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-blue-500 opacity-20 blur-[140px] rounded-full pointer-events-none bottom-[-100px] right-[-100px]" />

      {/* CONTAINER */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 z-10">
        {/* LEFT */}
        <div className="flex-1 max-w-xl text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Fatima
            </span>{" "}
            👋
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-gray-400 text-lg max-w-md"
          >
            I build fast, clean & scalable web apps for real users.
          </motion.p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.button
              onClick={scrollToStory}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl shadow-lg hover:shadow-purple-500/30 transition"
            >
              Start Experience →
            </motion.button>

            <button className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/5 transition">
              View Projects
            </button>
          </div>

          {/* Scroll hint */}
          <div className="mt-12 text-sm text-gray-500 hidden md:block">
            ↓ Scroll to explore
          </div>
        </div>

        {/* RIGHT - CODE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-full max-w-md">
            {/* Glow behind code */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 blur-2xl opacity-20 rounded-2xl"></div>

            {/* Code box */}
            <div className="relative bg-black/70 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
              {/* fake window bar */}
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>

              <pre className="text-green-400 text-sm leading-relaxed">
                {lines.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
                <span className="animate-pulse">|</span>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
