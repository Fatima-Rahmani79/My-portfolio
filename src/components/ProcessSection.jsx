import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { LayoutGrid, Crosshair, MonitorSmartphone } from "lucide-react";

const codeText = `const site = {
  name: 'Modern Landing',
  stack: ['React', 'Tailwind'],
};

function launch() {
  return 'Live Experience 🚀';
};`;

const step2Cards = [
  {
    title: "Clean Layout",
    desc: "Simple & structured UI",
    icon: LayoutGrid,
  },
  {
    title: "User Focus",
    desc: "Designed for real users",
    icon: Crosshair,
  },
  {
    title: "Modern Style",
    desc: "Minimal & aesthetic",
    icon: MonitorSmartphone,
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    let i = 0;
    let timeoutId;

    const type = () => {
      if (i >= codeText.length) {
        setDone(true);
        return;
      }

      setText(codeText.slice(0, i + 1));
      i += 1;
      timeoutId = window.setTimeout(type, 18 + Math.random() * 28);
    };

    type();

    return () => window.clearTimeout(timeoutId);
  }, [isInView]);

  return (
    <section
      ref={ref}
      id="process"
      className="relative overflow-hidden bg-[#0B0B0F] px-6 py-16 text-white sm:px-8 lg:py-20"
    >
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-indigo-300">
            My Process
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            How I Work
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-gray-400 sm:text-base">
            My workflow from idea to product.
          </p>
        </motion.div>

        <div className="mt-10 space-y-6 lg:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid items-center gap-8 rounded-[2rem] border border-white/5 bg-white/[0.02] p-5 sm:p-6 lg:grid-cols-2"
          >
            <div className="text-center lg:text-left">
              <p className="text-xs uppercase tracking-[0.35em] text-indigo-300">
                01
              </p>

              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                Clients come with{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  messy ideas...
                </span>
              </h3>

              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-gray-400 lg:mx-0 sm:text-base">
                Unclear requirements, scattered notes, and a lot of guesswork.
              </p>
            </div>

            <div className="relative flex h-[200px] items-center justify-center sm:h-[240px]">
              {/* <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 26, ease: "linear" }}
                className="absolute h-[180px] w-[180px] sm:h-[220px] sm:w-[220px]"
              >
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-400/20" />
              </motion.div> */}

              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 6.5 }}
                className="absolute top-0 left-1/2 -translate-x-1/2 rounded-2xl border border-indigo-400/30 bg-white/5 p-3 backdrop-blur-xl sm:p-4"
              >
                <CloudIcon />
              </motion.div>

              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
                className="absolute left-4 bottom-10 rounded-2xl border rotate-[-10deg] border-violet-400/30 bg-white/5 p-3 backdrop-blur-xl sm:left-16 sm:p-4"
              >
                <LightbulbIcon />
              </motion.div>

              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 7 }}
                className="absolute right-4 top-1/2 -translate-y-1/2 rotate-[12deg] rounded-2xl border border-indigo-300/30 bg-white/5 p-3 backdrop-blur-xl sm:right-10 sm:p-4"
              >
                <FileIcon />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-white/5 bg-white/[0.02] px-5 py-8 sm:px-6"
          >
            <div className="text-start">
              <p className="text-xs uppercase tracking-[0.35em] text-indigo-300">
                02
              </p>

              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                I turn ideas into{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  clean UI
                </span>
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
                From messy thoughts to structured, scalable interfaces.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              {step2Cards.map((card, i) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.55 }}
                    whileHover={{ y: -3 }}
                    className="group relative isolate overflow-hidden rounded-2xl border border-white/10 bg-[#111318] p-[1px]"
                  >
                    <div className="relative z-10 flex h-full min-h-[175px] flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
                      <div className="flex items-center justify-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-indigo-300 transition duration-300 group-hover:text-white">
                          <Icon className="h-7 w-7" />
                        </div>
                      </div>

                      <div className="mt-5 text-center">
                        <h4 className="text-lg font-semibold">{card.title}</h4>
                        <p className="mt-2 text-sm text-gray-400">
                          {card.desc}
                        </p>
                      </div>

                      <div className="mt-auto pt-5">
                        <div className="h-[2px] w-0 rounded-full bg-gradient-to-r from-indigo-400 to-violet-400 transition-all duration-500 group-hover:w-full" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-8 rounded-[2rem] border border-white/5 bg-white/[0.02] p-5 sm:p-6 lg:grid-cols-2"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-indigo-300">
                03
              </p>

              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                From code to{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  real websites
                </span>
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
                I transform simple logic into engaging digital experiences.
              </p>

              <div className="mt-5">
                <p className="text-sm text-gray-300">Not just code —</p>
                <p className="text-sm font-semibold text-indigo-300">
                  real products people interact with.
                </p>
              </div>
            </div>

            <div className="relative mx-auto h-[300px] w-full max-w-[520px]">
              <motion.div
                animate={
                  done
                    ? { opacity: 0, scale: 1.03, y: -10, filter: "blur(8px)" }
                    : { opacity: 1, scale: 1, y: 0 }
                }
                transition={{ duration: 0.7 }}
                className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 bg-[#0D1117] shadow-2xl"
              >
                <div className="flex items-center gap-2 border-b border-white/5 bg-[#161B22] px-4 py-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500" />
                  <span className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="ml-3 text-xs text-gray-400">site.js</span>
                </div>

                <div className="p-5 font-mono text-sm leading-relaxed text-left">
                  <div dangerouslySetInnerHTML={{ __html: highlight(text) }} />
                  {!done && (
                    <span className="animate-pulse text-indigo-400">|</span>
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={done ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.18, ease: "easeOut" }}
                className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 bg-[#0D1117] shadow-2xl"
              >
                <div className="relative flex items-center justify-between border-b border-white/5 px-5 py-4">
                  <h4 className="text-sm font-semibold tracking-wide text-indigo-400">
                    MyProduct
                  </h4>

                  <div className="flex gap-5 text-xs text-gray-400">
                    <span>Home</span>
                    <span>Features</span>
                    <span>Pricing</span>
                  </div>
                </div>

                <div className="relative flex h-[calc(100%-57px)] flex-col justify-center p-6">
                  <motion.h4
                    initial={{ opacity: 0, y: 18 }}
                    animate={done ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.25 }}
                    className="text-2xl font-bold leading-snug sm:text-3xl"
                  >
                    Build interfaces that{" "}
                    <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                      feel alive
                    </span>
                  </motion.h4>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={done ? { opacity: 1 } : {}}
                    transition={{ delay: 0.35 }}
                    className="mt-3 max-w-md text-sm text-gray-400"
                  >
                    Smooth animations. Clean structure. Thoughtful UX.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={done ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.45 }}
                    className="mt-6 flex gap-3"
                  >
                    <button className="rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-2 text-sm text-white transition hover:scale-105">
                      Get Started
                    </button>

                    <button className="rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:border-white/30">
                      Live Demo
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CloudIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="3em"
      height="3em"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M3 15a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4-1.5c0 .827-.673 1.5-1.5 1.5S4 14.327 4 13.5S4.673 12 5.5 12s1.5.673 1.5 1.5m-1 0a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0m10-7.25c0 1.792-1.57 3.25-3.5 3.25h-.095c-.368 1.437-1.771 2.501-3.405 2.501c-1.5 0-2.821-.903-3.304-2.18c-.382.118-.787.18-1.196.18c-1.93 0-3.5-1.346-3.5-3c0-1.538 1.357-2.81 3.1-2.98q-.099-.378-.1-.77C4 1.459 5.57.001 7.5.001c1.017 0 1.979.411 2.64 1.115q.418-.115.86-.115c1.487 0 2.723.984 2.959 2.295C15.192 3.821 16 4.972 16 6.25m-1 0c0-.946-.666-1.798-1.656-2.118a.5.5 0 0 1-.346-.453C12.955 2.738 12.077 2 11 2q-.436 0-.837.161a.5.5 0 0 1-.587-.164C9.109 1.373 8.333 1 7.5 1C6.121 1 5 2.01 5 3.25c0 .358.092.701.271 1.019a.5.5 0 0 1-.479.746a3 3 0 0 0-.293-.014c-1.379 0-2.5.897-2.5 2s1.121 2 2.5 2c.463 0 .916-.104 1.311-.299a.5.5 0 0 1 .451.004a.5.5 0 0 1 .265.366c.174 1.1 1.237 1.929 2.474 1.929c1.301 0 2.396-.914 2.492-2.081a.497.497 0 0 1 .573-.454q.212.033.435.034c1.379 0 2.5-1.01 2.5-2.25"
      />
    </svg>
  );
}

function LightbulbIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="3em"
      height="3em"
      viewBox="0 0 32 32"
    >
      <path
        fill="currentColor"
        d="M6.813 2.406L5.405 3.812L7.5 5.906L8.906 4.5zm18.375 0L23.093 4.5L24.5 5.906l2.094-2.093zM16 3.03q-.495.004-1 .064h-.03c-4.056.465-7.284 3.742-7.845 7.78c-.448 3.25.892 6.197 3.125 8.095a5.24 5.24 0 0 1 1.75 3.03v6h2.28c.348.597.983 1 1.72 1s1.372-.403 1.72-1H20v-4h.094v-1.188c0-1.466.762-2.944 2-4.093C23.75 17.06 25 14.705 25 12c0-4.94-4.066-9.016-9-8.97m0 2c3.865-.054 7 3.11 7 6.97c0 2.094-.97 3.938-2.313 5.28l.032.032A7.8 7.8 0 0 0 18.279 22h-4.374c-.22-1.714-.955-3.373-2.344-4.563c-1.767-1.5-2.82-3.76-2.468-6.312c.437-3.15 2.993-5.683 6.125-6.03a7 7 0 0 1 .78-.064zM2 12v2h3v-2zm25 0v2h3v-2zM7.5 20.094l-2.094 2.093l1.407 1.407L8.905 21.5zm17 0L23.094 21.5l2.093 2.094l1.407-1.407zM14 24h4v2h-4z"
      />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="3em"
      height="3em"
      viewBox="0 0 20 20"
    >
      <path
        fill="currentColor"
        d="M6.5 12a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zm0 3a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.185 1H4.5A1.5 1.5 0 0 0 3 2.5v15A1.5 1.5 0 0 0 4.5 19h11a1.5 1.5 0 0 0 1.5-1.5V7.202a1.5 1.5 0 0 0-.395-1.014l-4.314-4.702A1.5 1.5 0 0 0 11.185 1M4 2.5a.5.5 0 0 1 .5-.5h6.685a.5.5 0 0 1 .369.162l4.314 4.702a.5.5 0 0 1 .132.338V17.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11 7h5.5a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 1 0z"
      />
    </svg>
  );
}

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
