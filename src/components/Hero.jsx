import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const code = `const developer = {
  name: 'Fatima Rahmani',
  role: 'Frontend Developer',
  skills: ['React', 'Tailwind'],
};

function build() {
  return 'Clean & fast apps';
}`;

export default function Hero() {
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    let timeoutId;

    const type = () => {
      if (i > code.length) return;

      setText(code.slice(0, i));
      const currentChar = code[i - 1];

      let speed = 20;
      if (currentChar === "\n") speed = 120;
      else if (currentChar === " ") speed = 40;

      i += 1;
      timeoutId = window.setTimeout(type, speed);
    };

    type();

    return () => window.clearTimeout(timeoutId);
  }, []);

  const scrollToStory = () => {
    document
      .getElementById("process")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#06070f] text-white px-6 relative overflow-hidden">
      <div className="pointer-events-none absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-indigo-600/18 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-[-120px] right-[-120px] h-[340px] w-[340px] rounded-full bg-violet-500/18 blur-[140px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-18">
        <div className="max-w-2xl text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-xs uppercase tracking-[0.35em] text-indigo-300"
          >
            Frontend Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Fatima
            </span>{" "}
            👋
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-gray-400 sm:text-base lg:mx-0"
          >
            I build fast, scalable and modern web apps with React, Next.js,
            Tailwind, and smooth interactions.
          </motion.p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <motion.button
              onClick={scrollToStory}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 text-sm font-medium shadow-lg shadow-indigo-500/20 transition"
            >
              Start Experience →
            </motion.button>

            <button
              onClick={scrollToProjects}
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm text-gray-200 transition hover:bg-white/10"
            >
              View Projects
            </button>
          </div>

          <div className="mt-10 hidden text-sm text-gray-500 lg:block">
            ↓ Scroll to explore
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-[560px]">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/20 to-violet-500/20 blur-2xl opacity-30" />

            <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-7">
              <div className="mb-5 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-sky-300 sm:text-[15px]">
                {text}
                <span className="ml-1 animate-pulse text-white">|</span>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
