import { motion } from "framer-motion";

export default function Hero() {
  const scrollToStory = () => {
    document.getElementById("step1").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center text-center bg-[#0B0B0F] text-white relative overflow-hidden">
      {/* Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-20 blur-[120px] rounded-full"></div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold"
      >
        Hi, I'm Fatima 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-lg text-gray-300"
      >
        I build real web products that matter
      </motion.p>

      <motion.button
        onClick={scrollToStory}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-6 py-3 bg-purple-600 rounded-xl shadow-lg"
      >
        Start Experience →
      </motion.button>
    </section>
  );
}
