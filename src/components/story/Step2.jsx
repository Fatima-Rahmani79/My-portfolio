import { motion } from "framer-motion";

const cards = [
  { title: "Clean Layout", desc: "Simple & structured UI" },
  { title: "User Focus", desc: "Designed for real users" },
  { title: "Modern Style", desc: "Minimal & aesthetic" },
];

export default function Step2() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-[#0B0B0F] text-white px-4 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full" />

      {/* 👇 subtle transition hint */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-xs tracking-widest text-indigo-300 mb-4"
      >
        FROM CHAOS → TO CLARITY
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold"
      >
        I turn ideas into{" "}
        <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
          clean UI
        </span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-6 text-gray-400 max-w-xl"
      >
        From messy thoughts to structured, scalable interfaces.
      </motion.p>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-indigo-500/20 via-transparent to-violet-500/20"
          >
            {/* glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-indigo-500/30 to-violet-500/30 blur-xl rounded-2xl"></div>

            {/* card content */}
            <div className="relative bg-[#0B0B0F]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full transition duration-300 group-hover:border-indigo-400/40">
              {/* title */}
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>

              {/* desc */}
              <p className="text-gray-400 text-sm">{card.desc}</p>

              {/* subtle bottom line */}
              <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-indigo-400 to-violet-400 transition-all duration-500 group-hover:w-full"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
