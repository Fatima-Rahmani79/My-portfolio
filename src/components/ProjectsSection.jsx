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
    <section id="projects" className="bg-[#0B0B0F] text-white py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 uppercase tracking-[0.35em] text-xs">
            Selected Work
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold">
            Projects Showcase
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-400 leading-relaxed">
            A collection of interfaces focused on interaction, visual clarity,
            and modern user experience.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
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

  // scroll reveal
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "end 0.35"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);

  // mouse tilt
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
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rotateYValue = ((mouseX - width / 2) / width) * 10;
    const rotateXValue = -((mouseY - height / 2) / height) * 10;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
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
      className="
        relative
        h-[400px]
        md:h-[460px]
        rounded-3xl
        overflow-hidden
        border
        border-white/10
        bg-[#111]
        group
        will-change-transform
        transform-gpu
      "
    >
      {/* IMAGE */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            h-full
            object-cover
            object-top
            transition-transform
            duration-700
            group-hover:scale-[1.02]
          "
        />

        {/* overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/50
            via-black/15
            to-transparent
          "
        />

        {/* glow */}
        <div
          className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition
            duration-700
            bg-indigo-500/10
          "
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-end p-5 md:p-6">
        <div
          className="
            relative
            isolate
            w-full
            max-w-sm
            rounded-2xl
            border
            border-white/10
            bg-black/20
            backdrop-blur-xl
            overflow-hidden
            p-6
            shadow-[0_20px_80px_rgba(0,0,0,0.45)]
          "
        >
          {/* glass effect */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-white/10
              via-white/5
              to-transparent
              pointer-events-none
            "
          />

          {/* border glow */}
          <div
            className="
              absolute
              inset-0
              rounded-2xl
              ring-1
              ring-white/10
              pointer-events-none
            "
          />

          {/* content */}
          <div className="relative z-10">
            <p className="text-xs tracking-[0.35em] text-indigo-200 uppercase">
              Project {index}
            </p>

            <h3 className="mt-3 text-2xl md:text-3xl font-semibold leading-tight">
              {project.title}
            </h3>

            <p className="mt-3 text-gray-300 text-sm leading-relaxed">
              {project.desc}
            </p>

            {/* buttons */}
            <div className="mt-5 flex gap-3">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-4
                  py-2
                  text-sm
                  rounded-lg
                  bg-gradient-to-r
                  from-indigo-500
                  to-violet-500
                  hover:scale-105
                  transition
                "
              >
                Live
              </a>

              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-4
                  py-2
                  text-sm
                  rounded-lg
                  border
                  border-white/20
                  hover:border-white/40
                  hover:bg-white/5
                  transition
                "
              >
                Code
              </a>
            </div>

            {/* underline */}
            <div
              className="
                mt-5
                h-[1px]
                w-0
                bg-gradient-to-r
                from-indigo-400
                to-violet-400
                group-hover:w-full
                transition-all
                duration-500
              "
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
