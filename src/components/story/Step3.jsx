import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const codeText = `const app = {
  name: 'Dashboard',
  stack: ['React', 'Tailwind'],
};

function buildApp() {
  return 'UI Ready 🚀';
}`;

export default function Step3() {
  const ref = useRef(null);

  const [text, setText] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const [started, setStarted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const codeOpacity = useTransform(scrollYProgress, [0, 1], [1.3, 0]);
  const codeY = useTransform(scrollYProgress, [0, 0.5], [0, -30]);

  const indexRef = useRef(0);

  // شروع وقتی وارد view شد
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.4 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [started]);

  // تایپینگ امن
  useEffect(() => {
    if (!started) return;

    setText("");
    setTypingDone(false);
    indexRef.current = 0;

    const interval = setInterval(() => {
      const i = indexRef.current;

      // ✅ جلوگیری از undefined
      if (i >= codeText.length) {
        clearInterval(interval);
        setTypingDone(true);
        return;
      }

      const char = codeText.charAt(i); // بهتر از []

      setText((prev) => prev + char);

      indexRef.current += 1;
    }, 18);

    return () => clearInterval(interval);
  }, [started]);

  return (
    <section
      ref={ref}
      className="min-h-[160vh] flex flex-col items-center justify-center bg-[#0B0B0F] text-white px-4 relative overflow-hidden"
    >
      {/* glow */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full" />

      {/* title */}
      <motion.h2 className="text-3xl md:text-5xl font-bold text-center z-10">
        From code to{" "}
        <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
          real dashboard
        </span>
      </motion.h2>

      {/* CODE */}
      <motion.div
        style={{ opacity: codeOpacity, y: codeY }}
        className="w-full max-w-xl"
      >
        <div className="bg-black/70 border border-white/10 rounded-2xl p-6 mt-12">
          <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
            {text}
            <span className="animate-pulse">|</span>
          </pre>
        </div>
      </motion.div>

      {/* DASHBOARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={
          typingDone
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0, scale: 0.9, y: 40 }
        }
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-16 w-full max-w-5xl z-10"
      >
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl shadow-2xl">
          {/* header */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Dashboard</h3>
            <div className="flex items-center gap-2 text-xs text-green-400">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Live
            </div>
          </div>

          {/* stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { label: "Users", value: "1,240" },
              { label: "Revenue", value: "$3,200" },
              { label: "Tasks", value: "18" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-indigo-400/40 transition"
              >
                <p className="text-sm text-gray-400">{item.label}</p>
                <p className="text-lg font-bold mt-1">{item.value}</p>
              </motion.div>
            ))}
          </div>

          {/* tasks */}
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
                <div
                  className={`w-4 h-4 rounded-full ${
                    task.done ? "bg-green-400" : "bg-gray-500"
                  }`}
                />
              </motion.div>
            ))}
          </div>

          {/* progress */}
          <div className="mt-6">
            <p className="text-sm text-gray-400 mb-2">Project progress</p>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={typingDone ? { width: "70%" } : { width: 0 }}
                transition={{ duration: 1 }}
                className="h-full bg-gradient-to-r from-indigo-400 to-violet-400"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
