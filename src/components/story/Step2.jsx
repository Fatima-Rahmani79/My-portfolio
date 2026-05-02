import { motion } from "framer-motion";

const cards = [
  { title: "Clean Layout", desc: "Simple & structured UI" },
  { title: "User Focus", desc: "Designed for real users" },
  { title: "Modern Style", desc: "Minimal & aesthetic" },
];

export default function Step2() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center bg-[#0B0B0F] text-white px-4 relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute w-[400px] h-[400px] bg-blue-500 opacity-20 blur-[120px] rounded-full"></div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold"
      >
        I turn ideas into <span className="text-blue-400">clean UI</span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-6 text-gray-400 max-w-xl"
      >
        I design interfaces that are simple, intuitive, and beautiful.
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
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="text-gray-400 mt-2">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
