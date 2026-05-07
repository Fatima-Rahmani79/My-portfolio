import { motion } from "framer-motion";
import { Code2, Rocket, Layers3 } from "lucide-react";

const skills = [
  {
    title: "Frontend",
    desc: "React, Tailwind, Framer Motion",
    icon: Code2,
    progress: 90,
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "UI / UX",
    desc: "Modern layouts, responsive design, interactions",
    icon: Code2,
    progress: 85,
    color: "from-indigo-400 to-violet-500",
  },
  {
    title: "Tools",
    desc: "Git, GitHub, VS Code, Figma",
    icon: Layers3,
    progress: 80,
    color: "from-sky-400 to-cyan-500",
  },
  {
    title: "Deployment",
    desc: "Vercel, Render, GitHub Pages",
    icon: Rocket,
    progress: 75,
    color: "from-fuchsia-400 to-pink-500",
  },
];

export default function SkillsSection() {
  return (
    <section className="relative bg-[#0B0B0F] text-white py-28 px-6 overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_40%)]" />

      <div className="relative max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-indigo-400 uppercase tracking-[0.35em] text-xs">
            Skills & Technologies
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold">
            Tools I Work With
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Technologies and tools I use to build responsive, modern, and
            interactive web experiences.
          </p>
        </div>

        {/* DESKTOP LINE */}
        <div className="hidden md:block absolute top-[170px] left-0 w-full border-t border-dashed border-white/10" />

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          {skills.map((skill, i) => (
            <SkillCard key={i} skill={skill} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, index }) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
      }}
      className="relative group"
    >
      {/* NUMBER */}
      <div
        className="
          absolute
          -left-2
          top-[72px]
          hidden
          md:flex
          items-center
          justify-center
          w-10
          h-10
          rounded-full
          bg-[#111827]
          border
          border-white/10
          text-lg
          font-semibold
          text-white
          z-20
        "
      >
        {index}
      </div>

      {/* CARD */}
      <div
        className="
          relative
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-6
          overflow-hidden
          transition
          duration-500
          hover:border-white/20
          hover:-translate-y-2
        "
      >
        {/* glow */}
        <div
          className={`
            absolute inset-0 opacity-0 group-hover:opacity-100
            bg-gradient-to-br ${skill.color}
            blur-3xl transition duration-700
          `}
        />

        {/* ICON */}
        <div
          className="
            relative
            z-10
            w-16
            h-16
            rounded-2xl
            border
            border-white/10
            bg-black/30
            backdrop-blur-xl
            flex
            items-center
            justify-center
            shadow-[0_10px_40px_rgba(0,0,0,0.35)]
          "
        >
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* TEXT */}
        <div className="relative z-10 mt-6">
          <h3 className="text-2xl font-semibold leading-tight">
            {skill.title}
          </h3>

          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            {skill.desc}
          </p>
        </div>

        {/* PROGRESS */}
        <div className="relative z-10 mt-8">
          <div className="flex justify-between text-xs text-gray-400 mb-2">
            <span>Experience</span>
            <span>{skill.progress}%</span>
          </div>

          <div className="h-2 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.progress}%` }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: index * 0.15,
              }}
              className={`
                h-full rounded-full
                bg-gradient-to-r ${skill.color}
              `}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
