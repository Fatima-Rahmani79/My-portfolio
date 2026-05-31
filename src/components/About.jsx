import { motion } from "framer-motion";

const highlights = [
  "Responsive Interfaces",
  "Modern UI Motion",
  "React & Tailwind",
  "Clean Architecture",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0B0B0F] text-white px-6 py-28 sm:px-8"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className=" text-center"
        >
          <p className="text-indigo-400 text-xs tracking-[0.35em] uppercase">
            About Me
          </p>

          <h2 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight">
            Building modern interfaces
            <br />
            that feel smooth, fast, and intentional.
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed">
            I'm Fatima, a frontend developer with 2 years of hands-on experience
            building web applications with HTML, CSS, JavaScript, React, and
            Next.js. I'm self-taught — which means I've learned by doing,
            breaking things, and rebuilding them better. I enjoy the full
            journey from a rough idea to a polished, working interface. I'm
            currently deepening my skills through daily coding challenges and
            real projects, and I'm open to freelance work, collaborations, and
            junior opportunities where I can keep growing while contributing
            real value. If you have a project in mind or just want to connect —
            I'd love to hear from you.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-6"
          >
            {/* glass card */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                border border-white/10
                bg-black/20
                backdrop-blur-xl
                p-7 md:p-9
                shadow-[0_20px_80px_rgba(0,0,0,0.35)]
                transition-all duration-500
                hover:border-white/20
                hover:bg-black/30
              "
            >
              {/* glow */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  hover:opacity-100
                  transition
                  duration-700
                  bg-gradient-to-br
                  from-indigo-500/10
                  to-transparent
                  pointer-events-none
                "
              />

              <div className="relative z-10">
                <p className="text-md uppercase tracking-[0.3em] text-indigo-300">
                  Philosophy
                </p>

                <p className="mt-6 text-xl text-gray-300 leading-relaxed">
                  My approach combines clean structure, thoughtful motion, and
                  modern visual systems to create interfaces that feel intuitive
                  and engaging.
                </p>

                <p className="mt-6 text-gray-400 leading-relaxed">
                  I enjoy transforming ideas into polished digital products with
                  strong attention to interaction details, responsiveness, and
                  user experience flow.
                </p>
              </div>
            </div>

            {/* pills */}
            <div className="flex flex-wrap gap-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="
                    mt-1.5
                    rounded-full
                    border border-white/10
                    bg-white/[0.04]
                    backdrop-blur-xl
                    px-4 py-2
                    text-sm text-gray-300
                    transition-all duration-300
                    hover:border-white/20
                    hover:bg-white/[0.08]
                  "
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              border border-white/10
              bg-black/20
              backdrop-blur-xl
              p-8
              shadow-[0_20px_80px_rgba(0,0,0,0.35)]
            "
          >
            {/* glow */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-violet-500/10
                to-transparent
                pointer-events-none
              "
            />

            <div className="relative z-10">
              <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">
                Focus Areas
              </p>

              <div className="mt-8 space-y-7">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white">Frontend Development</span>
                    <span className="text-gray-400 text-sm">90%</span>
                  </div>

                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full w-[90%] rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white">UI / UX Design</span>
                    <span className="text-gray-400 text-sm">85%</span>
                  </div>

                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white">Motion & Interaction</span>
                    <span className="text-gray-400 text-sm">80%</span>
                  </div>

                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full w-[80%] rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white">Responsive Design</span>
                    <span className="text-gray-400 text-sm">95%</span>
                  </div>

                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full w-[95%] rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 flex flex-wrap justify-center ">
          <a
            href="/Fatima_Rahmani_Resume.pdf"
            download="Fatima-Rahmani-Resume.pdf"
            className="button-primary inline-flex items-center gap-2"
          >
            Download Resume
            <span className="text-base">⬇</span>
          </a>
        </div>
      </div>
    </section>
  );
}
