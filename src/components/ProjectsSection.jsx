import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
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
  const containerRef = useRef(null);

  // progress indicator
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="projects-container bg-[#0B0B0F] text-white relative"
    >
      {/* 🔥 Progress line */}
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="fixed right-6 top-0 w-[3px] h-full bg-gradient-to-b from-indigo-400 to-violet-500 origin-top z-50"
      />

      {projects.map((project, i) => (
        <Project key={i} project={project} />
      ))}
    </section>
  );
}

function Project({ project }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // 🎯 focus effect
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const blur = useTransform(scrollYProgress, [0, 0.5, 1], [6, 0, 6]);

  // 🎯 parallax mouse
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;

    const moveX = (e.clientX / innerWidth - 0.5) * 40;
    const moveY = (e.clientY / innerHeight - 0.5) * 40;

    x.set(moveX);
    y.set(moveY);
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="project-section h-screen flex items-center justify-center relative"
    >
      {/* IMAGE */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          opacity,
          // filter: blur.to((b) => `blur(${b}px)`),
        }}
        className="absolute w-[80%] h-[70%] rounded-3xl overflow-hidden"
      >
        <img
          src={project.image}
          alt=""
          className="w-full h-full object-cover"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* TEXT */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-6xl grid md:grid-cols-2 gap-12 items-center px-6"
      >
        {/* LEFT */}
        <div className="text-left">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            {project.title}
          </h2>

          <p className="mt-6 text-gray-400 text-lg max-w-md">{project.desc}</p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-xl hover:scale-105 transition">
              Live
            </button>

            <button className="px-6 py-3 border border-white/20 rounded-xl hover:border-white/40 transition">
              Code
            </button>
          </div>
        </div>

        {/* RIGHT spacer چون تصویر absolute هست */}
        <div />
      </motion.div>
    </section>
  );
}
