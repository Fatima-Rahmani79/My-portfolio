import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Goal Tracker Dashboard",
    desc: "Interactive productivity dashboard with progress tracking and clean visual hierarchy.",
    image: "/projects/goalTracker.png",
    live: "https://goal-tracker-dashboard.onrender.com/",
    code: "https://github.com/Fatima-Rahmani79/goal-tracker-dashboard",
  },
  {
    title: "TechStore",
    desc: "TechStore is a lightweight, responsive e-commerce frontend built with Vite, React, and Tailwind CSS.",
    image: "/projects/TechStore.png",
    live: "https://tech-store-rouge.vercel.app/",
    code: "https://github.com/Fatima-Rahmani79/TechStore",
  },
  {
    title: "NeoTechShop",
    desc: "Modern e-commerce experience focused on smooth interactions and responsive layouts.",
    image: "/projects/NeoTechShop.jpg",
    live: "https://fatima-rahmani79.github.io/NeoTechShop/",
    code: "https://github.com/Fatima-Rahmani79/NeoTechShop",
  },
  {
    title: "Afghanistan Cities Culture",
    desc: "Cultural storytelling platform showcasing Afghan cities through immersive UI design.",
    image: "/projects/AfghanCities.jpg",
    live: "https://fatima-rahmani79.github.io/afghanistan-cities-culture/",
    code: "https://github.com/Fatima-Rahmani79/afghanistan-cities-culture",
  },
  {
    title: "GirlsCode.af",
    desc: "Educational concept empowering girls in technology with modern interface design.",
    image: "/projects/GirlsCode.jpg",
    live: "https://fatima-rahmani79.github.io/GirlsCode.af/",
    code: "https://github.com/Fatima-Rahmani79/GirlsCode.af",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0B0B0F] px-6 py-24 text-white sm:px-8"
    >
      {/* <div className="pointer-events-none absolute left-[-120px] top-[10%] h-[320px] w-[320px] rounded-full bg-indigo-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-120px] right-[-120px] h-[280px] w-[280px] rounded-full bg-violet-500/10 blur-[120px]" /> */}
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-indigo-300">
            Selected Work
          </p>

          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl">
            Projects Showcase
          </h2>

          <p className="mt-4 leading-relaxed text-gray-400">
            A collection of interfaces focused on interaction, visual clarity,
            and modern user experience.
          </p>
        </div>

        <div className="flex flex-col gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index + 1} />
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
    offset: ["start 0.95", "end 0.35"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 120,
    damping: 18,
  });

  const smoothRotateY = useSpring(rotateY, {
    stiffness: 120,
    damping: 18,
  });

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rotateYValue = ((mouseX - rect.width / 2) / rect.width) * 10;
    const rotateXValue = -((mouseY - rect.height / 2) / rect.height) * 10;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex flex-col gap-6 md:items-center md:gap-8 ${
        isEven ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          opacity,
          scale,
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
          transformPerspective: 1200,
          transformStyle: "preserve-3d",
        }}
        className="group relative min-h-[320px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] will-change-transform transform-gpu md:min-h-[420px] md:w-1/2"
      >
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full  object-top transition duration-700 group-hover:scale-[1.03]"
          />
        </div>
      </motion.div>

      <motion.div className="w-full md:w-1/2">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-md hover:backdrop-blur-2xl sm:p-6">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />

          <div className="relative z-10">
            <p className="text-[10px] uppercase tracking-[0.35em] text-indigo-200">
              Project {index}
            </p>

            <h3 className="mt-3 text-xl font-semibold leading-tight md:text-2xl">
              {project.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-gray-300">
              {project.desc}
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-2 text-sm transition hover:scale-105"
              >
                Live
              </a>

              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/20 px-4 py-2 text-sm transition hover:border-white/40 hover:bg-white/5"
              >
                Code
              </a>
            </div>

            <div className="mt-5 h-[1px] w-0 bg-gradient-to-r from-indigo-400 to-violet-400 transition-all duration-500 group-hover:w-full" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
