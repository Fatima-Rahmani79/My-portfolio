import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  const [lines, setLines] = useState([]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1.5, 0]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -40]);

  // typing effect (reset each time)
  useEffect(() => {
    if (!isInView) return;

    setLines([]);
    let i = 0;

    const interval = setInterval(() => {
      if (i >= codeLines.length) {
        clearInterval(interval);
        return;
      }

      setLines((prev) => [...prev, codeLines[i]]);
      i++;
    }, 180);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="min-h-[140vh] flex flex-col items-center justify-center bg-[#0B0B0F] text-white px-4 relative overflow-hidden"
    >
      {/* glow */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full" />

      {/* title */}
      <motion.h2 className="text-3xl md:text-5xl font-bold text-center z-10">
        Then I write{" "}
        <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
          clean, scalable code
        </span>
      </motion.h2>

      {/* CODE EDITOR */}
      <motion.div
        style={{ opacity, y }}
        className="mt-14 w-full max-w-3xl z-10"
      >
        <div className="rounded-2xl border border-white/10 bg-[#0D1117] shadow-2xl overflow-hidden">
          {/* top bar */}
          <div className="flex items-center gap-2 px-4 py-2 bg-[#161B22] border-b border-white/5">
            <span className="w-3 h-3 bg-red-500 rounded-full" />
            <span className="w-3 h-3 bg-yellow-500 rounded-full" />
            <span className="w-3 h-3 bg-green-500 rounded-full" />
            <span className="ml-4 text-xs text-gray-400">app.js</span>
          </div>

          {/* code */}
          <div className="flex text-sm font-mono">
            {/* line numbers */}
            <div className="px-3 py-4 text-gray-500 text-right select-none">
              {lines.map((_, i) => (
                <div key={i}>{String(i + 1).padStart(2, "0")}</div>
              ))}
            </div>

            {/* code content */}
            <div className="px-4 py-4 flex-1 text-left">
              {lines.map((line, i) => (
                <div
                  key={i}
                  className="whitespace-pre"
                  dangerouslySetInnerHTML={{ __html: highlight(line) }}
                />
              ))}

              {/* cursor */}
              <span className="inline-block w-[8px] h-[18px] bg-indigo-400 ml-1 animate-pulse" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* 🎨 fake syntax highlight */
function highlight(line) {
  return line
    .replace(
      /(const|function|return)/g,
      `<span class="text-indigo-400">$1</span>`,
    )
    .replace(/('.*?')/g, `<span class="text-green-400">$1</span>`)
    .replace(/(\[|\]|\{|\})/g, `<span class="text-violet-400">$1</span>`)
    .replace(
      /(Dashboard|React|Tailwind)/g,
      `<span class="text-yellow-400">$1</span>`,
    );
}
