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
      className="relative overflow-hidden bg-[#06070f] px-6 py-24 text-white"
    >
      {/* <div className="pointer-events-none absolute top-0 left-1/3 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[120px]" /> */}

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-indigo-300">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Let’s build something meaningful together.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
            Open to freelance projects, collaborations, and modern frontend
            experiences focused on clean interaction and thoughtful design.
          </p>

          <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-gray-300">
              Available for selected collaborations
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {contacts.map((item, index) => {
            const Icon = item.icon;
            const isExternal = item.link.startsWith("http");

            return (
              <a
                key={index}
                href={item.link}
                target={isExternal ? "_blank" : "_self"}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent" />

                <div className="relative z-10 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
                    <Icon size={20} className="text-indigo-300" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-gray-400">{item.title}</p>
                    <p className="mt-1 break-words text-base text-white sm:text-lg">
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
