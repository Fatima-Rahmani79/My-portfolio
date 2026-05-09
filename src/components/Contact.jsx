import { motion } from "framer-motion";

const contacts = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <title xmlns="">mail-outline-rounded</title>
        <path
          fill="currentColor"
          d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zM20 8l-7.475 4.675q-.125.075-.262.113t-.263.037t-.262-.037t-.263-.113L4 8v10h16zm-8 3l8-5H4zM4 8v.25v-1.475v.025V6v.8v-.012V8.25zv10z"
        />
      </svg>
    ),
    title: "Email",
    value: "fatimarahmani.dev@gmail.com",
    link: "mailto:fatimarahmani.dev@gmail.com",
  },

  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <title xmlns="">github</title>
        <path
          fill="currentColor"
          d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
        />
      </svg>
    ),
    title: "GitHub",
    value: "github.com/Fatima-Rahmani79",
    link: "https://github.com/Fatima-Rahmani79",
  },

  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <title xmlns="">linkedin</title>
        <path
          fill="currentColor"
          d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
        />
      </svg>
    ),
    title: "LinkedIn",
    value: "Connect professionally",
    link: "#",
  },

  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <title xmlns="">map</title>
        <path
          fill="currentColor"
          d="M12 2C7.589 2 4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12c0-4.411-3.589-8-8-8m0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4"
        />
      </svg>
    ),
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
      {/* Ambient glow */}
      <div className="absolute top-0 left1/3 w-[500px] h-[500px] bg-indigo-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
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

          <h2 className="m2-5 text-4xl md:text-5xl font-semibold loading-tight">
            Let’s build something
            <br />
            meaningful together.
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed">
            Open to freelance projects, collaborations, and modern frontend
            experiences focused on clean interaction and thoughtful design.
          </p>

          {/* Availability */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

            <span className="text-sm text-gray-300">
              Available for selected collaborations
            </span>
          </div>
        </motion.div>

        {/* Main */}
        <div className="mt-20 grid drid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          {/* Left Side */}
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
                  rel="noopener noreferre"
                  className="
                        group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-black-20 backdrop-blur-xl p-5 transition-all duration-500 hover:border-white/20 hover:bg-black/30
                    "
                >
                  {/* glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-indigo-500/10 to-transparent pointer-events-none" />

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
                          <Icon size={20} className="text-indigo-300" />
                        </div>

                        <div>
                          <p className="text-sm text-gray-400">{item.title}</p>

                          <p className="text-white text-sm md:text-base mt-1">
                            {item.value}
                          </p>
                        </div>
                    </div>

                      <div
                        size={18}
                        className="
                        text-gray-500
                        transition-transform duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 26 26"
                        >
                          <title xmlns="">arrow-up-right-circle</title>
                          <g
                            fill="currentColor"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                          >
                            <path d="M10.852 8.952a.5.5 0 0 1 .543-.453l5.186.472a.5.5 0 0 1-.09.996l-5.186-.472a.5.5 0 0 1-.453-.543" />
                            <path d="M17.052 15.152a.5.5 0 0 1-.543-.453l-.471-5.185a.5.5 0 0 1 .995-.09l.472 5.185a.5.5 0 0 1-.453.543" />
                            <path d="M16.354 9.65a.5.5 0 0 1 0 .708l-6.536 6.535a.5.5 0 0 1-.707-.707l6.535-6.536a.5.5 0 0 1 .707 0" />
                            <path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" />
                          </g>
                        </svg>
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
