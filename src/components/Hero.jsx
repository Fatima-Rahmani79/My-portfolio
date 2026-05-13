import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const code = `const developer = {
  name: 'Fatima Rahmani',
  role: 'Frontend Developer',
  skills: ['React', 'Next.js', 'Tailwind'],
};

function build() {
  return 'Clean & fast apps';
}`;

export default function Hero() {
  const [text, setText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    let timeout;

    const typeCode = () => {
      if (currentIndex > code.length) return;

      setText(code.slice(0, currentIndex));

      const currentChar = code[currentIndex - 1];

      let speed = 18;

      if (currentChar === "\n") speed = 90;
      else if (currentChar === " ") speed = 28;

      currentIndex += 1;

      timeout = window.setTimeout(typeCode, speed);
    };

    typeCode();

    return () => window.clearTimeout(timeout);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      className="
        relative overflow-hidden bg-[#06070f] text-white
      "
    >
      {/* background glow */}
      <div className="pointer-events-none absolute left-[-140px] top-[-140px] h-[420px] w-[420px] rounded-full bg-indigo-600/3 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-[-140px] right-[-140px] h-[360px] w-[360px] rounded-full bg-violet-500/3 blur-[140px]" />

      {/* container */}
      <div
        className="
          relative mx-auto max-w-7xl px-6

          pt-28 pb-16
          sm:px-8 sm:pt-32 sm:pb-20
          md:pt-36 md:pb-24
          lg:min-h-screen lg:px-10 lg:py-24

          flex items-center
        "
      >
        <div
          className="
            grid w-full items-center
            gap-14

            lg:grid-cols-[1.05fr_.95fr]
            lg:gap-16
          "
        >
          {/* LEFT */}
          <div
            className="
              w-full
              max-w-[680px]
              mx-auto
              text-center

              lg:mx-0
              lg:max-w-xl
              lg:text-left
            "
          >
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
                mb-5
                text-[11px]
                uppercase
                tracking-[0.35em]
                text-indigo-300
                sm:text-xs
              "
            >
              Frontend Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="
                font-bold tracking-tight

                text-4xl leading-[1.05]
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Fatima
              </span>{" "}
              👋
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="
                mx-auto mt-6
                max-w-md
                text-sm leading-relaxed text-gray-400

                sm:text-base
                lg:mx-0
              "
            >
              I build fast, scalable and modern web applications with React,
              Next.js, Tailwind CSS and smooth user experiences.
            </motion.p>

            {/* buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="
                mt-8
                flex flex-wrap items-center justify-center
                gap-4

                lg:justify-start
              "
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection("process")}
                className="
                  rounded-xl
                  bg-gradient-to-r
                  from-indigo-500 to-violet-500

                  px-6 py-3
                  text-sm font-medium text-white

                  shadow-lg shadow-indigo-500/20
                  transition
                "
              >
                Start Experience →
              </motion.button>

              <button
                onClick={() => scrollToSection("projects")}
                className="
                  rounded-xl
                  border border-white/10
                  bg-white/[0.04]

                  px-6 py-3
                  text-sm text-gray-200

                  transition
                  hover:border-white/20
                  hover:bg-white/[0.07]
                "
              >
                View Projects
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="
    mt-7
    flex items-center justify-center gap-4

    lg:justify-start
  "
            >
              <a
                href="https://github.com/Fatima-Rahmani79"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://linkedin.com/in/fatima-rahmani-556320365"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
            </motion.div>

            {/* scroll hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="
                mt-10 hidden
                text-sm text-gray-500
                lg:block
              "
            >
              ↓ Scroll to explore
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="
              flex w-full justify-center
              lg:justify-end
            "
          >
            <div
              className="
                relative w-full
                max-w-[620px]
              "
            >
              {/* glow */}
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-r from-indigo-500/20 to-violet-500/20 blur-3xl opacity-30" />

              {/* code panel */}
              <div
                className="
                  relative overflow-hidden
                  rounded-[28px]
                  border border-white/10
                  bg-white/[0.04]

                  p-5
                  shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                  backdrop-blur-2xl

                  sm:p-6
                  md:p-7
                "
              >
                {/* top bar */}
                <div className="mb-5 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500" />
                  <span className="h-3 w-3 rounded-full bg-green-500" />
                </div>

                {/* code */}
                <pre
                  className="
                    overflow-x-auto
                    whitespace-pre-wrap
                    break-words

                    font-mono
                    text-[13px]
                    leading-relaxed
                    text-sky-300

                    sm:text-sm
                    md:text-[15px]
                  "
                >
                  {text}
                  <span className="ml-1 animate-pulse text-white">|</span>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
