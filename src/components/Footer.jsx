import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#06070f] px-6 py-10">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-indigo-500/[0.03] to-transparent" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-500">
            © 2026 Fatima Rahmani. All rights reserved.
          </p>
          <p className="mt-1 text-xs tracking-[0.25em] text-gray-600 uppercase">
            Frontend Developer
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Fatima-Rahmani79"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://linkedin.com/in/fatima-rahmani-556320365"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
