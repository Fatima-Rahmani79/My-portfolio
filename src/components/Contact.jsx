import { motion } from "framer-motion";
import { GoMail } from "react-icons/go";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contacts = [
  {
    icon: GoMail,
    title: "Email",
    value: "fatima.rahmani79@gmail.com",
    link: "mailto:fatima.rahmani79@gmail.com",
  },
  {
    icon: FaGithub,
    title: "GitHub",
    value: "Fatima-Rahmani79",
    link: "https://github.com/Fatima-Rahmani79",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    value: "Connect professionally",
    link: "https://linkedin.com/in/fatima-rahmani-556320365",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0B0B0F] text-white px-2 sm:px-4 py-20"
    >
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-indigo-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-indigo-400 text-xs tracking-[0.35em] uppercase">
            Contact
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
            Let’s build something meaningful together.
          </h2>

          <p className="mt-5 text-gray-400 leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
            Open to freelance projects, collaborations, and modern frontend
            experiences focused on clean interaction and thoughtful design.
          </p>

          <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm backdrop-blur-xl">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-gray-300">
              Available for selected collaborations
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-2"
        >
          {contacts.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={index}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : "_self"}
                rel={
                  item.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-2 sm:p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:-translate-y-1"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent pointer-events-none" />

                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
                    <Icon size={20} className="text-indigo-300" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-gray-400">{item.title}</p>
                    <p className="mt-1 text-base sm:text-lg text-white break-words">
                      {item.value}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
