import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
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

  {
    icon: MapPin,
    title: "Location",
    value: "Afghanistan",
    link: "#",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0B0B0F] text-white px-6 py-28"
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
          className="max-w-2xl"
        >
          <p className="text-indigo-400 text-xs tracking-[0.35em] uppercase">
            Contact
          </p>

          <h2 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight">
            Let’s build something
            <br />
            meaningful together.
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed">
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

        {/* MAIN */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="grid gap-4"
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
                    rounded-[1.7rem]
                    border border-white/10
                    bg-black/20
                    backdrop-blur-xl
                    p-5
                    transition-all duration-500
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
                          w-12 h-12
                          rounded-2xl
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

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              border border-white/10
              bg-black/20
              backdrop-blur-xl
              p-7 md:p-8
              shadow-[0_20px_80px_rgba(0,0,0,0.35)]
            "
          >
            {/* glow */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-violet-500/10
                to-transparent
                pointer-events-none
              "
            />

            <div className="relative z-10">
              <h3 className="text-2xl font-semibold">Send a message</h3>

              <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                Have an idea, project, or collaboration in mind? Feel free to
                reach out.
              </p>

              <form className="mt-8 space-y-5">
                {/* name */}
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="
                      w-full
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.03]
                      px-5 py-4
                      text-white
                      outline-none
                      transition-all duration-300
                      focus:border-indigo-400
                      focus:bg-white/[0.05]
                      focus:ring-2
                      focus:ring-indigo-500/20
                    "
                  />
                </div>

                {/* email */}
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="
                      w-full
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.03]
                      px-5 py-4
                      text-white
                      outline-none
                      transition-all duration-300
                      focus:border-indigo-400
                      focus:bg-white/[0.05]
                      focus:ring-2
                      focus:ring-indigo-500/20
                    "
                  />
                </div>

                {/* message */}
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Tell me about your project..."
                    className="
                      w-full
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.03]
                      px-5 py-4
                      text-white
                      outline-none
                      resize-none
                      transition-all duration-300
                      focus:border-indigo-400
                      focus:bg-white/[0.05]
                      focus:ring-2
                      focus:ring-indigo-500/20
                    "
                  />
                </div>

                {/* button */}
                <button
                  type="submit"
                  className="
                    w-full
                    rounded-2xl
                    bg-gradient-to-r
                    from-indigo-500
                    to-violet-500
                    px-6 py-4
                    font-medium
                    transition-all duration-300
                    hover:scale-[1.02]
                    hover:shadow-[0_10px_40px_rgba(99,102,241,0.35)]
                  "
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* FOOTER */}
        <div className="mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-gray-500">
            Designed & developed by Fatima Rahmani.
          </p>
        </div>
      </div>
    </section>
  );
}
