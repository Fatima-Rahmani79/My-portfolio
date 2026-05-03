import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { id: "step1", label: "Story" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";

      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 200 && rect.bottom >= 200) {
          current = link.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
        <div
          className="max-w-6xl mx-auto flex items-center justify-between 
        bg-white/10 backdrop-blur-2xl border border-white/20 
        rounded-2xl px-6 py-3 shadow-lg"
        >
          {/* Logo */}
          <div className="text-lg text-white font-semibold tracking-wide">
            Fatima Rahmani
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={`relative transition ${
                  active === link.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}

                {/* underline animation */}
                {active === link.id && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-purple-400 to-blue-400 rounded"
                  />
                )}
              </a>
            ))}
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-lg text-white"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-6 right-6 z-40 
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
              onClick={() => setOpen(false)}
            >
              Story
            </a>
            <a
              className="hover:text-white transition text-lg"
              href="#projects"
              onClick={() => setOpen(false)}
              onClick={() => setOpen(false)}
            >
              Projects
            </a>
            <a
              className="hover:text-white transition text-lg"
              href="#contact"
              onClick={() => setOpen(false)}
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
