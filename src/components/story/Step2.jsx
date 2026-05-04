import { motion } from "framer-motion";
import { icons } from "lucide-react";

const cards = [
  {
    title: "Clean Layout",
    desc: "Simple & structured UI",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.9em"
        height="2.9em"
        viewBox="0 0 24 24"
      >
        <title xmlns="">layout-outline</title>
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M8.93 4.47a17.5 17.5 0 0 0-3.86 0a.666.666 0 0 0-.586.577a16.8 16.8 0 0 0 0 3.907a.666.666 0 0 0 .587.576c1.271.142 2.587.142 3.858 0a.666.666 0 0 0 .587-.576c.152-1.298.152-2.61 0-3.908a.666.666 0 0 0-.587-.576M4.903 2.98a19 19 0 0 1 4.192 0c.99.11 1.793.89 1.91 1.892a18.3 18.3 0 0 1 0 4.256a2.166 2.166 0 0 1-1.91 1.893c-1.382.154-2.81.154-4.192 0a2.166 2.166 0 0 1-1.91-1.893a18.3 18.3 0 0 1 0-4.256a2.166 2.166 0 0 1 1.91-1.892M8.93 14.47a17.5 17.5 0 0 0-3.86 0a.666.666 0 0 0-.586.576a16.8 16.8 0 0 0 0 3.908a.666.666 0 0 0 .587.576c1.271.142 2.587.142 3.858 0a.666.666 0 0 0 .587-.576c.152-1.298.152-2.61 0-3.908a.666.666 0 0 0-.587-.576m-4.026-1.49a19 19 0 0 1 4.192 0c.99.11 1.793.89 1.91 1.892a18.3 18.3 0 0 1 0 4.256a2.166 2.166 0 0 1-1.91 1.892c-1.382.155-2.81.155-4.192 0a2.166 2.166 0 0 1-1.91-1.892a18.3 18.3 0 0 1 0-4.256a2.166 2.166 0 0 1 1.91-1.892M18.93 4.47a17.5 17.5 0 0 0-3.86 0a.666.666 0 0 0-.586.577a16.8 16.8 0 0 0 0 3.907a.666.666 0 0 0 .587.576c1.271.142 2.587.142 3.858 0a.666.666 0 0 0 .587-.576c.152-1.298.152-2.61 0-3.908a.666.666 0 0 0-.587-.576m-4.026-1.49a19 19 0 0 1 4.192 0c.99.11 1.793.89 1.91 1.892a18.3 18.3 0 0 1 0 4.256a2.166 2.166 0 0 1-1.91 1.893c-1.382.154-2.81.154-4.192 0a2.166 2.166 0 0 1-1.91-1.893a18.3 18.3 0 0 1 0-4.256a2.166 2.166 0 0 1 1.91-1.892m4.027 11.49a17.5 17.5 0 0 0-3.86 0a.666.666 0 0 0-.586.576a16.8 16.8 0 0 0 0 3.908a.666.666 0 0 0 .587.576c1.271.142 2.587.142 3.858 0a.666.666 0 0 0 .587-.576c.152-1.298.152-2.61 0-3.908a.666.666 0 0 0-.587-.576m-4.026-1.49a19 19 0 0 1 4.192 0c.99.11 1.793.89 1.91 1.892a18.3 18.3 0 0 1 0 4.256a2.166 2.166 0 0 1-1.91 1.892c-1.382.155-2.81.155-4.192 0a2.166 2.166 0 0 1-1.91-1.892a18.3 18.3 0 0 1 0-4.256a2.166 2.166 0 0 1 1.91-1.892"
          clip-rule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: "User Focus",
    desc: "Designed for real users",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.9em"
        height="2.9em"
        viewBox="0 0 24 24"
      >
        <title xmlns="">focus</title>
        <g fill="none" stroke="currentColor" stroke-width="1.5">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.325 8.3V6.45a2.775 2.775 0 0 0-2.775-2.775h-2.775m0 16.65h2.775a2.775 2.775 0 0 0 2.775-2.775V15.7m-16.65 0v1.85a2.775 2.775 0 0 0 2.775 2.775h2.775m0-16.65H6.45A2.775 2.775 0 0 0 3.675 6.45V8.3"
          />
          <path d="M12 8a4 4 0 1 1 0 8a4 4 0 0 1 0-8Z" />
        </g>
      </svg>
    ),
  },
  {
    title: "Modern Style",
    desc: "Minimal & aesthetic",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.9em"
        height="2.9em"
        viewBox="0 0 24 24"
      >
        <title xmlns="">style</title>
        <g fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M13 21v-8h8v8zm2-6h4v4h-4zM3 11V3h8v8zm2-6h4v4H5z"
            clip-rule="evenodd"
          />
          <path d="M18 6v6h-2V8h-4V6zm-6 12H6v-6h2v4h4z" />
        </g>
      </svg>
    ),
  },
];

export default function Step2() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-[#0B0B0F] text-white px-4 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute w-[350px] h-[350px] bg-indigo-500/20 blur-[100px] rounded-full" />

      {/* 👇 subtle transition hint */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-xs tracking-widest text-indigo-300 mb-4"
      >
        FROM CHAOS → TO CLARITY
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold"
      >
        I turn ideas into{" "}
        <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
          clean UI
        </span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-6 text-gray-400 max-w-xl"
      >
        From messy thoughts to structured, scalable interfaces.
      </motion.p>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative isolate z-0 p-[1px] rounded-2xl"
          >
            {/* glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 
                bg-gradient-to-br from-indigo-500/30 to-violet-500/30 blur-xl rounded-2xl 
                pointer-events-none"
            />

            {/* card */}
            <div
              className="relative z-10 backdrop-blur-xl border border-white/10 
                rounded-2xl p-6 h-full bg-white/5
                transition duration-300 group-hover:border-indigo-400/40"
            >
              {/* ICON */}
              <div
                className="flex items-center justify-center mb-4 
                  text-indigo-400 group-hover:text-white transition
                  text-2xl"
              >
                {card.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>

              {/* DESC */}
              <p className="text-gray-400 text-sm">{card.desc}</p>

              {/* LINE */}
              <div
                className="mt-6 h-[2px] w-0 bg-gradient-to-r 
                  from-indigo-400 to-violet-400 
                  transition-all duration-500 group-hover:w-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
