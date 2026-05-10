import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contacts = [
  {
    icon: Mail,
    title: "Email",
    value: "fatimarahmani.dev@gmail.com",
    link: "mailto:fatimarahmani.dev@gmail.com",
  },

  {
    icon: FaGithub,
    title: "GitHub",
    value: "github.com/Fatima-Rahmani79",
    link: "https://github.com/Fatima-Rahmani79",
  },

  {
    icon: FaLinkedin,
    title: "LinkedIn",
    value: "Connect professionally",
    link: "#",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0B0B0F] text-white px-6 py-24"
    >
      {/* ambient glow */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-indigo-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* HEADER */}
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

          <h2 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight">
            Let’s build something meaningful together.
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Open to freelance projects, collaborations, and modern frontend
            experiences focused on clean interaction and thoughtful design.
          </p>

          {/* availability */}
          <div
            className="
              mt-8
              inline-flex
              items-center
              gap-3
              rounded-full
              border border-white/10
              bg-white/[0.04]
              px-4 py-2
              backdrop-blur-xl
            "
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

            <span className="text-sm text-gray-300">
              Available for selected collaborations
            </span>
          </div>
        </motion.div>

        {/* CONTACT GRID */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-14 grid gap-4 lg:grid-cols-3 sm:grid-cols-1"
        >
          {contacts.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.5rem]
                  border border-white/10
                  bg-black/20
                  backdrop-blur-xl
                  p-5
                  transition-all duration-300
                  hover:border-white/20
                  hover:bg-black/30
                "
              >
                {/* glow */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-700
                    bg-gradient-to-br
                    from-indigo-500/10
                    to-transparent
                    pointer-events-none
                  "
                />

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className="
                        w-11 h-11
                        rounded-xl
                        bg-white/[0.05]
                        border border-white/10
                        flex items-center justify-center
                      "
                    >
                      <Icon size={20} className="text-indigo-300" />
                    </div>

                    <div>
                      <p className="text-sm text-gray-400">{item.title}</p>

                      <p className="text-white text-sm md:text-base mt-1">
                        {item.value}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="
                      text-gray-500
                      transition-transform duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </div>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
