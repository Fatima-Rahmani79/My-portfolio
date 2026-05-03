import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
        <div
          className="max-w-6xl mx-auto flex items-center justify-between 
  bg-white/10 backdrop-blur-2xl 
  border border-white/20 
  rounded-2xl px-6 py-3 
  shadow-lg shadow-black/30"
        >
          {/* Logo */}
          <div className="text-lg text-white font-semibold tracking-wide">
            Fatima Rahmani
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            {" "}
            <a href="#step1" className="hover:text-white transition">
              Story
            </a>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Status */}
            <div className="hidden md:flex items-center gap-2 text-xs text-green-300">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Available
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white p-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-6 right-6 z-40 
  bg-white/10 backdrop-blur-2xl 
  border border-white/20 
  rounded-2xl p-6 
  flex flex-col gap-4 text-center 
  text-gray-200 shadow-xl shadow-black/40"
          >
            <a
              className="hover:text-white transition text-lg"
              href="#step1"
              onClick={() => setOpen(false)}
            >
              Story
            </a>
            <a
              className="hover:text-white transition text-lg"
              href="#projects"
              onClick={() => setOpen(false)}
            >
              Projects
            </a>
            <a
              className="hover:text-white transition text-lg"
              href="#contact"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
