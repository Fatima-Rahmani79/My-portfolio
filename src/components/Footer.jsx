import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0F] border-t border-white/5 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <p className="text-sm text-gray-500">
          © 2026 Fatima Rahmani. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Fatima-Rahmani79"
            target="_blank"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://linkedin.com/in/fatima-rahmani-556320365"
            target="_blank"
            className="text-gray-400 hover:text-white transition"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
