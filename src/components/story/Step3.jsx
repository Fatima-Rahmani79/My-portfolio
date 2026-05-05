import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const codeLines = [
  "const app = {",
  "  name: 'Dashboard',",
  "  stack: ['React', 'Tailwind'],",
  "};",
  "",
  "function buildApp() {",
  "  return 'UI Ready 🚀';",
  "}",
];

export default function Step3() {
  const [displayedLines, setDisplayedLines] = useState([]);
  const ref = useRef(null);

  // 🔥 smoother scroll timing
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });

  const codeOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const uiOpacity = useTransform(scrollYProgress, [0.3, 1], [0, 1]);
  const uiScale = useTransform(scrollYProgress, [0.3, 1], [0.92, 1]);

  // ✅ FIXED typing effect
  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      if (i < codeLines.length) {
        setDisplayedLines((prev) => [...prev, codeLines[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 220);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className="min-h-[160vh] flex flex-col items-center justify-center bg-[#0B0B0F] text-white px-4 relative overflow-hidden"
    >
      {/* glow bg */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full" />

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-bold text-center z-10"
      >
        From code to{" "}
        <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
          real dashboard
        </span>
      </motion.h2>

      {/* CODE */}
      <motion.div
        style={{ opacity: codeOpacity }}
        className="mt-10 w-full max-w-xl z-10"
      >
        <div className="bg-black/70 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur">
          <pre className="text-green-400 text-sm font-mono leading-relaxed">
            {displayedLines.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </pre>
        </div>
      </motion.div>

      {/* DASHBOARD */}
      <motion.div
        style={{ opacity: uiOpacity, scale: uiScale }}
        className="mt-16 w-full max-w-5xl z-10"
      >
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl shadow-2xl">
          {/* HEADER */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Dashboard</h3>
            <div className="flex items-center gap-2 text-xs text-green-400">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Live
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { label: "Users", value: "1,240" },
              { label: "Revenue", value: "$3,200" },
              { label: "Tasks", value: "18" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white/5 p-4 rounded-xl border border-white/10 transition hover:border-indigo-400/40"
              >
                <p className="text-sm text-gray-400">{item.label}</p>
                <p className="text-lg font-bold mt-1">{item.value}</p>
              </motion.div>
            ))}
          </div>

          {/* TASK LIST */}
          <div className="space-y-3">
            {[
              { name: "Design system", done: true },
              { name: "Build components", done: true },
              { name: "Deploy project", done: false },
            ].map((task, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-between bg-white/5 p-4 rounded-xl border border-white/10"
              >
                <span className="text-sm">{task.name}</span>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: i * 0.25,
                    type: "spring",
                    stiffness: 180,
                  }}
                  className={`w-4 h-4 rounded-full ${
                    task.done ? "bg-green-400" : "bg-gray-500"
                  }`}
                />
              </motion.div>
            ))}
          </div>

          {/* PROGRESS */}
          <div className="mt-6">
            <p className="text-sm text-gray-400 mb-2">Project progress</p>

            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "70%" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-indigo-400 to-violet-400"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-20 text-center z-10"
      >
        <p className="text-gray-400 mb-4">Want something like this?</p>

        <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 hover:scale-105 transition shadow-lg">
          Let’s build it 🚀
        </button>
      </motion.div>
    </section>
  );
}
