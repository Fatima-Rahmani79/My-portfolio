import { motion } from "framer-motion";

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
          {/* ORBIT (dotted circle) */}
          <div className="absolute w-[300px] h-[300px] border border-dashed border-indigo-400/20 rounded-full" />
          <div className="absolute w-2 h-2 bg-violet-400 rounded-full top-12 left-20 blur-sm" />
          <div className="absolute w-2 h-2 bg-indigo-400 rounded-full bottom-16 right-16 blur-sm" />

          {/* CENTER GLOW */}
          <div className="absolute w-[400px] h-[400px] bg-indigo-500/10 blur-3xl rounded-full" />

          {/* CARD 1 - Cloud */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 6.5 }}
            className="absolute top-6 left-1/2 -translate-x-1/2 
              bg-white/5 backdrop-blur-xl 
              border border-indigo-400/30 
              p-6 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.5em"
              height="2.5em"
              viewBox="0 0 16 16"
            >
              <title xmlns="">thinking</title>
              <path
                fill="currentColor"
                d="M3 15a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4-1.5c0 .827-.673 1.5-1.5 1.5S4 14.327 4 13.5S4.673 12 5.5 12s1.5.673 1.5 1.5m-1 0a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0m10-7.25c0 1.792-1.57 3.25-3.5 3.25h-.095c-.368 1.437-1.771 2.501-3.405 2.501c-1.5 0-2.821-.903-3.304-2.18c-.382.118-.787.18-1.196.18c-1.93 0-3.5-1.346-3.5-3c0-1.538 1.357-2.81 3.1-2.98q-.099-.378-.1-.77C4 1.459 5.57.001 7.5.001c1.017 0 1.979.411 2.64 1.115q.418-.115.86-.115c1.487 0 2.723.984 2.959 2.295C15.192 3.821 16 4.972 16 6.25m-1 0c0-.946-.666-1.798-1.656-2.118a.5.5 0 0 1-.346-.453C12.955 2.738 12.077 2 11 2q-.436 0-.837.161a.5.5 0 0 1-.587-.164C9.109 1.373 8.333 1 7.5 1C6.121 1 5 2.01 5 3.25c0 .358.092.701.271 1.019a.5.5 0 0 1-.479.746a3 3 0 0 0-.293-.014c-1.379 0-2.5.897-2.5 2s1.121 2 2.5 2c.463 0 .916-.104 1.311-.299a.5.5 0 0 1 .451.004a.5.5 0 0 1 .265.366c.174 1.1 1.237 1.929 2.474 1.929c1.301 0 2.396-.914 2.492-2.081a.497.497 0 0 1 .573-.454q.212.033.435.034c1.379 0 2.5-1.01 2.5-2.25"
              />
            </svg>
          </motion.div>

          {/* CARD 2 - Think */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="absolute left-16 -translate-y-1/2 rotate-[-15deg]
              bg-white/5 backdrop-blur-xl 
              border border-violet-400/30 
              p-6 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.5em"
              height="2.5em"
              viewBox="0 0 32 32"
            >
              <title xmlns="">idea</title>
              <path
                fill="currentColor"
                d="M6.813 2.406L5.405 3.812L7.5 5.906L8.906 4.5zm18.375 0L23.093 4.5L24.5 5.906l2.094-2.093zM16 3.03q-.495.004-1 .064h-.03c-4.056.465-7.284 3.742-7.845 7.78c-.448 3.25.892 6.197 3.125 8.095a5.24 5.24 0 0 1 1.75 3.03v6h2.28c.348.597.983 1 1.72 1s1.372-.403 1.72-1H20v-4h.094v-1.188c0-1.466.762-2.944 2-4.093C23.75 17.06 25 14.705 25 12c0-4.94-4.066-9.016-9-8.97m0 2c3.865-.054 7 3.11 7 6.97c0 2.094-.97 3.938-2.313 5.28l.032.032A7.8 7.8 0 0 0 18.279 22h-4.374c-.22-1.714-.955-3.373-2.344-4.563c-1.767-1.5-2.82-3.76-2.468-6.312c.437-3.15 2.993-5.683 6.125-6.03a7 7 0 0 1 .78-.064zM2 12v2h3v-2zm25 0v2h3v-2zM7.5 20.094l-2.094 2.093l1.407 1.407L8.905 21.5zm17 0L23.094 21.5l2.093 2.094l1.407-1.407zM14 24h4v2h-4z"
              />
            </svg>
          </motion.div>

          {/* CARD 3 - File */}
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ repeat: Infinity, duration: 7 }}
            className="absolute right-8 top-1/2 -translate-y-1/2 rotate-[12deg]
              bg-white/5 backdrop-blur-xl 
              border border-indigo-300/30 
              p-6 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.5em"
              height="2.5em"
              viewBox="0 0 20 20"
            >
              <title xmlns="">file</title>
              <g fill="currentColor">
                <path d="M6.5 12a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zm0 3a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1z" />
                <path
                  fill-rule="evenodd"
                  d="M11.185 1H4.5A1.5 1.5 0 0 0 3 2.5v15A1.5 1.5 0 0 0 4.5 19h11a1.5 1.5 0 0 0 1.5-1.5V7.202a1.5 1.5 0 0 0-.395-1.014l-4.314-4.702A1.5 1.5 0 0 0 11.185 1M4 2.5a.5.5 0 0 1 .5-.5h6.685a.5.5 0 0 1 .369.162l4.314 4.702a.5.5 0 0 1 .132.338V17.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5z"
                  clip-rule="evenodd"
                />
                <path d="M11 7h5.5a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 1 0z" />
              </g>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
