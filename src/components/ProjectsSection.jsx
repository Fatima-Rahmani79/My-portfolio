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
    title: "Modern Dashboard",
    desc: "Clean UI with smooth interactions and scalable structure.",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Landing Experience",
    desc: "Conversion-focused landing with strong visual hierarchy.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Product Interface",
    desc: "Interactive UI built with performance and UX in mind.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Analytics Panel",
    desc: "Data-rich interface with clean structure and clarity.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
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
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 0.97]);
  const blur = useTransform(scrollYProgress, [0, 0.5, 1], [6, 0, 6]);
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
      className="relative group h-[380px] md:h-[420px] rounded-2xl overflow-hidden"
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
          className="w-full h-full object-cover"
          alt={project.title}
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex items-end p-5 md:p-6"
      >
        <div className="w-full max-w-sm">
          <p className="text-xs tracking-[0.3em] text-indigo-300 uppercase">
            Project {index}
          </p>

          <h3 className="mt-2 text-xl md:text-2xl font-semibold">
            {project.title}
          </h3>

          <p className="mt-2 text-gray-300 text-sm leading-relaxed">
            {project.desc}
          </p>

          <div className="mt-4 flex gap-3">
            <button className="px-4 py-2 text-sm bg-indigo-500/90 rounded-lg hover:scale-105 transition">
              Live
            </button>
            <button className="px-4 py-2 text-sm border border-white/20 rounded-lg hover:border-white/40 transition">
              Code
            </button>
          </div>

          {/* underline */}
          <div className="mt-4 h-[1px] w-0 bg-gradient-to-r from-indigo-400 to-violet-400 group-hover:w-full transition-all duration-500" />
        </div>
      </motion.div>
    </div>
  );
}
