import { motion } from "framer-motion";

export default function Step1() {
  return (
    <section
      id="step1"
      className="h-screen flex flex-col items-center justify-center text-center bg-[#0B0B0F] text-white px-4"
    >
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold"
      >
        Clients come with{" "}
        <span className="text-purple-500">messy ideas...</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-6 text-gray-400 max-w-xl"
      >
        Unclear requirements, scattered thoughts, and a lot of confusion.
      </motion.p>

      {/* Floating Icons */}
      <div className="relative mt-12 w-[300px] h-[200px]">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute left-0 bg-white/10 p-4 rounded-xl backdrop-blur"
        >
          💭
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute right-0 bg-white/10 p-4 rounded-xl backdrop-blur"
        >
          📄
        </motion.div>
      </div>
    </section>
  );
}
