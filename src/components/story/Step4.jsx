import { motion } from "framer-motion";

export default function Step4() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center bg-[#0B0B0F] text-white px-4 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-green-500 opacity-20 blur-[140px] rounded-full"></div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold"
      >
        The final product 🚀
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-6 text-gray-400 max-w-xl"
      >
        A fast, clean and user-friendly web app ready for real users.
      </motion.p>

      {/* Project Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.03 }}
        className="mt-10 bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 w-full max-w-2xl shadow-2xl"
      >
        {/* Fake preview */}
        <div className="h-[180px] bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl mb-6 flex items-center justify-center text-white font-semibold">
          Project Preview
        </div>

        <h3 className="text-xl font-semibold">Habit Tracker App</h3>
        <p className="text-gray-400 mt-2">
          Track your habits, build consistency, and stay productive with a clean
          UI.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4 justify-center">
          <a href="#" className="px-5 py-2 bg-green-500 rounded-xl">
            View Live
          </a>
          <a href="#" className="px-5 py-2 border border-white/20 rounded-xl">
            Case Study
          </a>
        </div>
      </motion.div>
    </section>
  );
}
