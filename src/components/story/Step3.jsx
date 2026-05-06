import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const codeText = `const site = {
  name: 'Modern Landing',
  stack: ['React', 'Tailwind'],
};

function launch() {
  return 'Live Experience 🚀';
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

      setTimeout(type, 15 + Math.random() * 35);
    };

    type();
  }, [isInView]);

  return (
    <section ref={ref} className="h-[220vh] bg-[#0B0B0F] text-white relative">
      <div className="sticky top-0 h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              From code to{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                real websites
              </span>
            </h2>

            <p className="mt-6 text-gray-400">
              I transform simple logic into engaging digital experiences.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={done ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-5"
            >
              <p className="text-sm text-gray-400">Not just code —</p>
              <p className="text-lg font-semibold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                real products people interact with.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="relative h-[420px]">
            {/* CODE */}
            <motion.div
              animate={
                done
                  ? {
                      opacity: 0,
                      scale: 0.9,
                      y: -80,
                      filter: "blur(12px)",
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
                <span className="ml-4 text-xs text-gray-400">site.js</span>
              </div>

              {/* code */}
              <div className="p-6 font-mono text-sm whitespace-pre-wrap">
                <div dangerouslySetInnerHTML={{ __html: highlight(text) }} />
                {!done && (
                  <span className="animate-pulse text-indigo-400">|</span>
                )}
              </div>
            </motion.div>

            {/* MINI WEBSITE */}
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
              transition={{ duration: 0.9, delay: 0.3 }}
              className="absolute inset-0 bg-white text-black rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* NAVBAR */}
              <div className="flex justify-between items-center px-6 py-3 border-b">
                <h3 className="font-bold">Brand</h3>
                <div className="flex gap-4 text-sm">
                  <span className="hover:text-indigo-500 cursor-pointer">
                    Home
                  </span>
                  <span className="hover:text-indigo-500 cursor-pointer">
                    About
                  </span>
                  <span className="hover:text-indigo-500 cursor-pointer">
                    Contact
                  </span>
                </div>
              </div>

              {/* HERO */}
              <div className="p-6 flex flex-col justify-center h-full">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={done ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="text-2xl font-bold mb-3"
                >
                  Build modern websites
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={done ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6 }}
                  className="text-gray-600 mb-4"
                >
                  Clean design. Smooth experience. Real impact.
                </motion.p>

                <motion.button
                  initial={{ scale: 0 }}
                  animate={done ? { scale: 1 } : {}}
                  transition={{ delay: 0.7, type: "spring" }}
                  className="self-start px-4 py-2 bg-indigo-600 text-white rounded-lg hover:scale-105 transition"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
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
      /(Modern|React|Tailwind)/g,
      `<span class="text-yellow-400">$1</span>`,
    );
}
