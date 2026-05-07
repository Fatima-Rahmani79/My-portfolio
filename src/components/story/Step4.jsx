// import { motion } from "framer-motion";

// export default function Step4() {
//   return (
//     <section className="min-h-screen bg-[#0B0B0F] text-white px-6 flex items-center justify-center relative overflow-hidden">
//       {/* background glow */}
//       <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full" />

//       <div className="max-w-6xl w-full text-center">
//         {/* TITLE */}
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-3xl md:text-5xl font-bold"
//         >
//           Delivering products that{" "}
//           <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
//             drive results
//           </span>
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="mt-6 text-gray-400 max-w-xl mx-auto"
//         >
//           Fast, scalable, and built to solve real problems — not just look good.
//         </motion.p>

//         {/* DASHBOARD */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9, y: 40 }}
//           whileInView={{ opacity: 1, scale: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//           className="mt-14 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl shadow-2xl"
//         >
//           {/* header */}
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="text-lg font-semibold">Overview</h3>
//             <span className="text-xs text-indigo-400">Last 7 days</span>
//           </div>

//           {/* stats */}
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//             {[
//               { label: "Revenue", value: "$24,540" },
//               { label: "Users", value: "1,240" },
//               { label: "Growth", value: "+18%" },
//               { label: "Tasks", value: "23" },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ y: -6 }}
//                 className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-indigo-400/40 transition"
//               >
//                 <p className="text-xs text-gray-400">{item.label}</p>
//                 <p className="text-lg font-bold mt-1">{item.value}</p>
//               </motion.div>
//             ))}
//           </div>

//           {/* fake chart */}
//           <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-6">
//             <div className="h-24 flex items-end gap-2">
//               {[30, 60, 40, 80, 55, 90, 70].map((h, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ height: 0 }}
//                   whileInView={{ height: h }}
//                   transition={{ delay: i * 0.05 }}
//                   className="flex-1 bg-gradient-to-t from-indigo-500 to-violet-400 rounded-md"
//                 />
//               ))}
//             </div>
//           </div>

//           {/* tasks */}
//           <div className="space-y-3">
//             {["Design system", "Build components", "Deploy project"].map(
//               (task, i) => (
//                 <motion.div
//                   key={i}
//                   whileHover={{ scale: 1.02 }}
//                   className="flex items-center justify-between bg-white/5 p-4 rounded-xl border border-white/10"
//                 >
//                   <span className="text-sm">{task}</span>
//                   <span className="w-3 h-3 bg-green-400 rounded-full" />
//                 </motion.div>
//               ),
//             )}
//           </div>
//         </motion.div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           className="mt-12"
//         >
//           <p className="text-gray-400 mb-4">Want something like this?</p>

//           <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 hover:scale-105 transition shadow-lg">
//             Let’s build it 🚀
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

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
    title: "Afghanistan Cities Culture",
    desc: "A cultural exploration platform showcasing Afghan cities through immersive layouts, galleries, and storytelling-focused UI.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "GirlsCode.af",
    desc: "A modern educational concept focused on empowering girls in technology with clean design and inspiring interactions.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Goal Tracker Dashboard",
    desc: "Interactive productivity dashboard featuring progress tracking, structured layouts, and real-time visual feedback.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "NeoTechShop",
    desc: "A futuristic e-commerce interface combining smooth user experience, responsive layouts, and modern product presentation.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Step4() {
  return (
    <section className="bg-[#0B0B0F] text-white py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="mb-14 text-center">
          <p className="text-indigo-400 uppercase tracking-[0.35em] text-xs">
            Selected Work
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
            Projects Showcase
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            A collection of interfaces focused on modern aesthetics, smooth
            interaction, and thoughtful user experience.
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
    offset: ["start 0.9", "start 0.2"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const blur = useTransform(scrollYProgress, [0, 1], [6, 0]);

  const blurValue = useMotionTemplate`blur(${blur}px)`;

  // mouse parallax
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 120,
    damping: 20,
  });

  const smoothRotateY = useSpring(rotateY, {
    stiffness: 120,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateAmountX = ((mouseY - centerY) / centerY) * -8;
    const rotateAmountY = ((mouseX - centerX) / centerX) * 8;

    rotateX.set(rotateAmountX);
    rotateY.set(rotateAmountY);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        opacity,
        scale,
      }}
      className="relative group h-[400px] md:h-[440px] rounded-3xl overflow-hidden"
    >
      {/* IMAGE */}
      <motion.div
        style={{
          filter: blurValue,
        }}
        className="absolute inset-0"
      >
        <img
          src={project.image}
          className="w-full h-full object-cover scale-105 group-hover:scale-110 transition duration-700"
          alt={project.title}
        />

        {/* overlays */}
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </motion.div>

      {/* glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-indigo-500/10 blur-3xl" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-end p-5 md:p-7">
        {/* glass card */}
        <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/8 backdrop-blur-xl p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
          <p className="text-xs tracking-[0.35em] text-indigo-300 uppercase">
            Project {index}
          </p>

          <h3 className="mt-3 text-2xl md:text-3xl font-semibold leading-tight">
            {project.title}
          </h3>

          <p className="mt-4 text-gray-300 text-sm leading-relaxed">
            {project.desc}
          </p>

          {/* buttons */}
          <div className="mt-6 flex gap-3">
            <button className="px-4 py-2 text-sm rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 hover:scale-105 transition">
              Live
            </button>

            <button className="px-4 py-2 text-sm rounded-xl border border-white/15 hover:border-white/40 transition">
              Code
            </button>
          </div>

          {/* animated underline */}
          <div className="mt-5 h-[2px] w-0 bg-gradient-to-r from-indigo-400 to-violet-400 group-hover:w-full transition-all duration-700" />
        </div>
      </div>
    </motion.div>
  );
}
