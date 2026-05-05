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

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // 👉 scroll lock feeling
  const opacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  // 👉 typing based on scroll
  const [text, setText] = useState("");

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const clamped = Math.min(
        codeText.length,
        Math.floor(v * codeText.length),
      );
      setText(codeText.slice(0, clamped));
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={ref} className="h-[200vh] bg-[#0B0B0F] text-white relative">
      {/* sticky container (scroll lock effect) */}
      <div className="sticky top-0 h-screen flex items-center justify-center px-6">
        <motion.div
          style={{ opacity, y }}
          className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center"
        >
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Turning ideas into{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                real products
              </span>
            </h2>

            <p className="mt-6 text-gray-400 text-lg">
              Not just writing code — I structure, refine, and transform raw
              ideas into scalable, production-ready applications.
            </p>

            <p className="mt-4 text-gray-500">
              Every line has a purpose. Every interaction is intentional.
            </p>
          </div>

          {/* RIGHT CODE EDITOR */}
          <div className="rounded-2xl border border-white/10 bg-[#0D1117] shadow-2xl overflow-hidden">
            {/* top bar */}
            <div className="flex items-center gap-2 px-4 py-2 bg-[#161B22] border-b border-white/5">
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="w-3 h-3 bg-yellow-500 rounded-full" />
              <span className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="ml-4 text-xs text-gray-400">app.js</span>
            </div>

            {/* code */}
            <div className="p-6 font-mono text-sm text-left whitespace-pre-wrap">
              <div dangerouslySetInnerHTML={{ __html: highlight(text) }} />
              <span className="animate-pulse text-indigo-400">|</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* syntax highlight (character safe) */
function highlight(text) {
  if (!text) return "";

  return text
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
