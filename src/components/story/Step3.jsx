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
  const isInView = useInView(ref, { once: true, margin: "-300px" });

  const [text, setText] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    let i = 0;

    const type = () => {
      if (i >= codeText.length) {
        setTypingDone(true);
        return;
      }

      setText(codeText.slice(0, i));
      i++;

      // ⛏️ realistic typing speed
      const delay =
        codeText[i] === "\n"
          ? 80
          : codeText[i] === " "
            ? 20
            : 30 + Math.random() * 40;

      setTimeout(type, delay);
    };

    type();
  }, [isInView]);

  return (
    <section ref={ref} className="bg-[#0B0B0F] text-white relative">
      <div className="sticky top-0 h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center"
        >
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
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

            <p className="mt-4 text-gray-500 text-sm">
              Every line has a purpose. Every interaction is intentional.
            </p>
          </motion.div>

          {/* RIGHT - CODE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="relative rounded-2xl border border-white/10 bg-[#0D1117] shadow-2xl overflow-hidden"
          >
            {/* glow */}
            <div className="absolute inset-0 opacity-30 blur-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 pointer-events-none" />

            {/* top bar */}
            <div className="flex items-center gap-2 px-4 py-2 bg-[#161B22] border-b border-white/5">
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="w-3 h-3 bg-yellow-500 rounded-full" />
              <span className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="ml-4 text-xs text-gray-400">app.js</span>
            </div>

            {/* code */}
            <div className="p-6 font-mono text-sm whitespace-pre-wrap relative z-10">
              <div dangerouslySetInnerHTML={{ __html: highlight(text) }} />

              {/* cursor */}
              {!typingDone && (
                <span className="inline-block w-[4px] h-[18px] bg-indigo-400 ml-1 animate-pulse align-middle" />
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* syntax highlight */
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
