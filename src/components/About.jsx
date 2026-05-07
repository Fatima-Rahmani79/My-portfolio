import { motion } from "framer-motion";

const highlights = [
  {
    title: "Clean design",
    text: "Interfaces that feel modern, polished, and easy to use.",
  },
  {
    title: "Fast performance",
    text: "Optimized React experiences with fluid interactions.",
  },
  {
    title: "Real impact",
    text: "Building products that solve real problems for users.",
  },
];

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-[#0B0B0F] text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <p className="text-indigo-400 text-sm tracking-[0.35em] uppercase mb-4">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            I build thoughtful frontend experiences with a strong visual polish.
          </h2>
          <p className="mt-6 text-gray-400 max-w-3xl">
            I am a frontend developer focused on crafting clean, responsive user
            interfaces. I love turning bold ideas into interactive web experiences
            that feel fast, engaging, and easy to use.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 xl:grid-cols-[1.6fr_1fr] items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-6 text-gray-300"
          >
            <p>
              My work bridges clean code, smooth motion, and strong aesthetic
              structure. I enjoy collaborating with teams, refining UI flows, and
              creating products that users understand instantly.
            </p>
            <p>
              I specialize in React-powered pages and component-driven design,
              with a focus on performance, accessibility, and polished visual
              details.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20"
          >
            <h3 className="text-xl font-semibold mb-4">What I bring to the table</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-indigo-400 mb-2">
                  Experience
                </p>
                <p>React, Tailwind, responsive layouts, and polished UI interactions.</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-indigo-400 mb-2">
                  Approach
                </p>
                <p>Design-first development with accessible, maintainable component code.</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-indigo-400 mb-2">
                  Goal
                </p>
                <p>Create websites that feel fast, clear, and enjoyable to use.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
