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
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    let i = 0;

    const type = () => {
      if (i >= codeText.length) {
        setDone(true);
        return;
      }

      setText(codeText.slice(0, i + 1));
      i++;

      setTimeout(type, 10 + Math.random() * 20);
    };

    type();
  }, [isInView]);

  return (
    <section ref={ref} className="h-[220vh] bg-[#0B0B0F] text-white relative">
      <div className="absolute inset-0 bg-indigo-500/10 blur-2xl opacity-30 rounded-2xl" />
      <div className="sticky top-0 h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Turning code into{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                real experience
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="mt-6 text-gray-400"
            >
              Watch how structure transforms into something interactive.
            </motion.p>

            {/* message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={done ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-5 text-left"
            >
              <p className="text-lg text-white">Code is just the beginning —</p>

              <p className="text-lg font-semibold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                experience is what matters.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <div className="relative h-[400px]">
            {/* CODE */}
            <motion.div
              animate={
                done
                  ? {
                      opacity: 0,
                      scale: 0.85,
                      y: -60,
                      filter: "blur(10px)",
                    }
                  : { opacity: 1 }
              }
              transition={{ duration: 0.7 }}
              className="absolute inset-0 rounded-2xl border border-white/10 bg-[#0D1117] shadow-2xl overflow-hidden"
            >
              {/* top bar */}
              <div className="flex items-center gap-2 px-4 py-2 bg-[#161B22] border-b border-white/5">
                <span className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="w-3 h-3 bg-yellow-500 rounded-full" />
                <span className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="ml-4 text-xs text-gray-400">app.js</span>
              </div>

              {/* code */}
              <div className="p-6 font-mono text-sm whitespace-pre-wrap">
                <div dangerouslySetInnerHTML={{ __html: highlight(text) }} />
                {!done && (
                  <span className="animate-pulse text-indigo-400">|</span>
                )}
              </div>
            </motion.div>

            {/* DASHBOARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 60 }}
              animate={
                done
                  ? {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute inset-0 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl shadow-2xl"
            >
              {/* header */}
              <div className="flex justify-between mb-4">
                <h3 className="text-sm font-semibold">Dashboard</h3>
                <span className="text-xs text-green-400 animate-pulse">
                  Live
                </span>
              </div>

              {/* stats */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {["Users", "Revenue", "Tasks"].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={done ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/5 p-3 rounded-lg text-center"
                  >
                    <p className="text-xs text-gray-400">{item}</p>
                    <p className="text-sm font-bold mt-1">
                      {i === 0 && "1,240"}
                      {i === 1 && "$3,200"}
                      {i === 2 && "18"}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* animated bars */}
              <div className="flex items-end gap-2 h-20">
                {[40, 70, 50, 90, 60].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={done ? { height: h } : {}}
                    transition={{ delay: i * 0.1 }}
                    className="flex-1 bg-gradient-to-t from-indigo-500 to-violet-400 rounded"
                  />
                ))}
              </div>

              {/* progress */}
              <div className="mt-4">
                <div className="w-full h-2 bg-white/10 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={done ? { width: "75%" } : {}}
                    transition={{ duration: 1 }}
                    className="h-full bg-gradient-to-r from-indigo-400 to-violet-400"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
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
