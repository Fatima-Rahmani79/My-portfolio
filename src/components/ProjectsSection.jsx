import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Modern Dashboard",
    desc: "Clean UI with smooth interactions and scalable structure.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
  },
  {
    title: "Landing Experience",
    desc: "Conversion-focused landing with strong visual hierarchy.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166",
  },
  {
    title: "Product Interface",
    desc: "Interactive UI built with performance and UX in mind.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-[#0B0B0F] text-white">
      {projects.map((project, i) => (
        <Project key={i} project={project} index={i} />
      ))}
    </section>
  );
}

function Project({ project, index }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 🎯 animations
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1.1]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={ref}
      className="h-[120vh] flex items-center justify-center relative"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center w-full">
        {/* IMAGE */}
        <motion.div
          style={{ scale }}
          className="absolute w-[80%] h-[70%] rounded-3xl overflow-hidden"
        >
          <img
            src={project.image}
            alt=""
            className="w-full h-full object-cover"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </motion.div>

        {/* TEXT */}
        <motion.div
          style={{ opacity, y }}
          className="relative z-10 text-center max-w-xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold">{project.title}</h2>

          <p className="mt-4 text-gray-300">{project.desc}</p>

          <div className="mt-6 flex justify-center gap-4">
            <button className="px-5 py-2 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-lg hover:scale-105 transition">
              Live
            </button>

            <button className="px-5 py-2 border border-white/20 rounded-lg hover:border-white/40 transition">
              Code
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
