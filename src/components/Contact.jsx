import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0B0B0F] text-white px-6 py-28"
    >
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-indigo-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx.auto">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="text-indigo-400 text-xs tracking-[0.35em] uppercase">
            Contact Me
          </p>

          <h2 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight">
            Let's Work Together
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed">
            I'm available for freelance projects and remote oppurtunities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
