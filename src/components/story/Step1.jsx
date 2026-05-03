import { motion } from "framer-motion";
import { Brain, FileText, Lightbulb } from "lucide-react";

export default function Step1() {
  return (
    <section
      id="step1"
      className="min-h-screen flex items-center justify-center bg-[#0B0B0F] text-white px-6 relative overflow-hidden"
    >
      {/* subtle background glow */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-600 opacity-10 blur-[140px] rounded-full left-[-100px] top-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-violet-500 opacity-10 blur-[120px] rounded-full right-[-100px] bottom-[-100px]" />

      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        {/* LEFT TEXT */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold leading-tight"
          >
            Clients come with{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              messy ideas...
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 text-gray-400 max-w-md"
          >
            Unclear requirements, scattered notes, and a lot of guesswork.
          </motion.p>

          {/* small accent line */}
          <div className="mt-6 w-12 h-[2px] bg-gradient-to-r from-indigo-400 to-violet-400 rounded" />
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex items-center justify-center">
          {/* orbit circle */}
          <div className="absolute w-[300px] h-[300px] border border-white/5 rounded-full" />

          {/* CENTER */}
          <div
            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 
    flex items-center justify-center shadow-xl z-10"
          >
            <span className="text-white text-xl">💡</span>
          </div>

          {/* ICON 1 */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="absolute w-[300px] h-[300px]"
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 
      bg-white/5 border border-white/10 backdrop-blur-xl 
      p-4 rounded-2xl"
            >
              <span className="text-indigo-300">📄</span>
            </div>
          </motion.div>

          {/* ICON 2 */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="absolute w-[300px] h-[300px]"
          >
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 
      bg-white/5 border border-white/10 backdrop-blur-xl 
      p-4 rounded-2xl"
            >
              <span className="text-violet-300">🧠</span>
            </div>
          </motion.div>

          {/* ICON 3 */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute w-[220px] h-[220px]"
          >
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 
      bg-white/5 border border-white/10 backdrop-blur-xl 
      p-4 rounded-2xl"
            >
              <span className="text-indigo-200">💭</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
