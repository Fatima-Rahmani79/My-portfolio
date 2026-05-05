import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const codeText = `const app = {
  name: 'Dashboard',
  stack: ['React', 'Tailwind'],
};

function buildApp() {
  return 'UI Ready 🚀';
}`;

export default function Step3() {
  const ref = useRef(null);

  // 👉 detect when section is visible
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [text, setText] = useState("");

  useEffect(() => {
    if (!isInView) return;

    let i = 0;

    const interval = setInterval(() => {
      i++;

      setText(codeText.slice(0, i));

      if (i >= codeText.length) {
        clearInterval(interval);
      }
    }, 20); // speed typing

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section ref={ref} className="h-[200vh] bg-[#0B0B0F] text-white relative">
      <div className="sticky top-0 h-screen flex items-center justify-center px-6">
        <motion.div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Turning ideas into{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                real products
              </span>
            </h2>

            <p className="mt-6 text-gray-400 text-lg">
              Not just writing code — I structure, refine, and transform raw
              ideas into scalable applications.
            </p>
          </div>

          {/* RIGHT */}
          <div className="rounded-2xl border border-white/10 bg-[#0D1117] shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#161B22] border-b border-white/5">
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="w-3 h-3 bg-yellow-500 rounded-full" />
              <span className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="ml-4 text-xs text-gray-400">app.js</span>
            </div>

            <div className="p-6 font-mono text-sm whitespace-pre-wrap">
              <div dangerouslySetInnerHTML={{ __html: highlight(text) }} />
              <span className="animate-pulse text-indigo-400">|</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* highlight */
function highlight(text) {
  if (!text) return "";

  return text
    .replace(
      /(const|function|return)/g,
      `<span class="text-indigo-400">$1</span>`,
    )
    .replace(/('.*?')/g, `<span class="text-green-400">$1</span>`)
    .replace(/(\{|\}|\[|\])/g, `<span class="text-violet-400">$1</span>`)
    .replace(
      /(Dashboard|React|Tailwind)/g,
      `<span class="text-yellow-400">$1</span>`,
    );
}
