import { motion } from "framer-motion";

export default function Step4() {
  return (
    <section className="min-h-screen bg-[#0B0B0F] text-white px-6 flex items-center justify-center relative overflow-hidden">
      {/* background glow */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full" />

      <div className="max-w-6xl w-full text-center">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold"
        >
          Delivering products that{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            drive results
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-400 max-w-xl mx-auto"
        >
          Fast, scalable, and built to solve real problems — not just look good.
        </motion.p>

        {/* DASHBOARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-14 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl shadow-2xl"
        >
          {/* header */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Overview</h3>
            <span className="text-xs text-indigo-400">Last 7 days</span>
          </div>

          {/* stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {[
              { label: "Revenue", value: "$24,540" },
              { label: "Users", value: "1,240" },
              { label: "Growth", value: "+18%" },
              { label: "Tasks", value: "23" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-indigo-400/40 transition"
              >
                <p className="text-xs text-gray-400">{item.label}</p>
                <p className="text-lg font-bold mt-1">{item.value}</p>
              </motion.div>
            ))}
          </div>

          {/* fake chart */}
          <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-6">
            <div className="h-24 flex items-end gap-2">
              {[30, 60, 40, 80, 55, 90, 70].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: h }}
                  transition={{ delay: i * 0.05 }}
                  className="flex-1 bg-gradient-to-t from-indigo-500 to-violet-400 rounded-md"
                />
              ))}
            </div>
          </div>

          {/* tasks */}
          <div className="space-y-3">
            {["Design system", "Build components", "Deploy project"].map(
              (task, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-between bg-white/5 p-4 rounded-xl border border-white/10"
                >
                  <span className="text-sm">{task}</span>
                  <span className="w-3 h-3 bg-green-400 rounded-full" />
                </motion.div>
              ),
            )}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <p className="text-gray-400 mb-4">Want something like this?</p>

          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 hover:scale-105 transition shadow-lg">
            Let’s build it 🚀
          </button>
        </motion.div>
      </div>
    </section>
  );
}
