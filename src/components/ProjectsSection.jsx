import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Goal Tracker Dashboard",
    desc: "Interactive productivity dashboard featuring progress tracking, structured layouts, and real-time visual feedback.",
    image: "./projects/goalTracker.png",

    live: "https://goal-tracker-dashboard.onrender.com/",
    code: "https://github.com/Fatima-Rahmani79/goal-tracker-dashboard",
  },

  {
    title: "NeoTechShop",
    desc: "A futuristic e-commerce interface combining smooth user experience, responsive layouts, and modern product presentation.",
    image: "./projects/NeoTechShop.jpg",

    live: "https://fatima-rahmani79.github.io/NeoTechShop/",
    code: "https://github.com/Fatima-Rahmani79/NeoTechShop",
  },
  {
    title: "Afghanistan Cities Culture",
    desc: "A cultural exploration platform showcasing Afghan cities through immersive layouts, galleries, and storytelling-focused UI.",
    image: "/projects/AfghanCities.jpg",

    live: "https://fatima-rahmani79.github.io/afghanistan-cities-culture/",
    code: "https://github.com/Fatima-Rahmani79/afghanistan-cities-culture",
  },

  {
    title: "GirlsCode.af",
    desc: "A modern educational concept focused on empowering girls in technology with clean design and inspiring interactions.",
    image: "./projects/GirlsCode.jpg",

    live: "https://fatima-rahmani79.github.io/GirlsCode.af/",
    code: "https://github.com/Fatima-Rahmani79/GirlsCode.af",
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-[#0B0B0F] text-white py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="mb-12 text-center">
          <p className="text-indigo-400 uppercase tracking-[0.3em] text-xs">
            Selected Work
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-semibold">
            Projects Showcase
          </h2>

          <p className="mt-3 text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            A compact grid layout focused on clarity, balance, and modern UI
            feel.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 1", "end 0.4"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const blur = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const blurValue = useMotionTemplate`blur(${blur}px)`;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 60, damping: 25 });
  const smoothY = useSpring(y, { stiffness: 60, damping: 25 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    x.set((e.clientX / innerWidth - 0.5) * 15);
    y.set((e.clientY / innerHeight - 0.5) * 15);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative group h-[400px] md:h-[440px] rounded-2xl overflow-hidden"
    >
      {/* IMAGE */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          opacity,
          scale,
          filter: blurValue,
        }}
        className="absolute inset-0"
      >
        <img
          src={project.image}
          className="w-full h-full object-fit scale-100 group-hover:scale-102 transition duration-700"
          alt={project.title}
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700  blur-3xl" />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex items-end p-5 md:p-6"
      >
        <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-black/30 backdrop-blur-2xl backdrop-blur-xl p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
          <p className="text-sm tracking-[0.3em] text-indigo-200 uppercase">
            Project {index}
          </p>

          <h3 className="mt-2 text-xl md:text-2xl font-semibold">
            {project.title}
          </h3>

          <p className="mt-2 text-gray-300 text-sm leading-relaxed">
            {project.desc}
          </p>

          {/* Buttons */}
          <div className="mt-4 flex gap-3">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm bg-indigo-500/90 rounded-lg hover:scale-105 transition"
            >
              Live
            </a>

            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm border border-white/20 rounded-lg hover:border-white/40 transition"
            >
              Code
            </a>
          </div>

          {/* underline */}
          <div className="mt-4 h-[1px] w-0 bg-gradient-to-r from-indigo-400 to-violet-400 group-hover:w-full transition-all duration-500" />
        </div>
      </motion.div>
    </div>
  );
}
