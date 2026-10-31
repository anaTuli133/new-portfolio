import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode, FaInstagram } from "react-icons/fa";
import { HiMenuAlt3, HiX, HiSun, HiMoon } from "react-icons/hi";
import { portfolioData } from "../data/portfolio";
import { Ext } from "./ui";

// Navigation Order
export const NAV = [
  "Home",
  "About",
  "Education",
  "Experience",
  "Research",
  "Projects", 
  "Skills",
  "Certifications",
  "Activities",
  "Contact",
];

const useActive = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
      }
    );

    NAV.forEach((item) => {
      const el = document.getElementById(item.toLowerCase());
      if (el) io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return active;
};

const Links = ({ active, onPick }) => (
  <nav aria-label="Sections" className="flex flex-col">
    {NAV.map((item) => {
      const isActive = active === item.toLowerCase();

      return (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={onPick}
          className={`group flex items-center gap-3 py-1.5 text-sm font-medium transition-colors ${
            isActive
              ? "text-ink"
              : "text-mute hover:text-ink"
          }`}
        >
          <span className="w-8 flex">
            <span
              className={`h-px transition-all duration-300 ${
                isActive
                  ? "w-8 bg-accent"
                  : "w-4 bg-line group-hover:w-6"
              }`}
            />
          </span>

          {item}
        </a>
      );
    })}
  </nav>
);

const Socials = () => {
  const s = portfolioData.personal.social;

  return (
    <div className="flex gap-4 text-lg text-mute">
      {[
        [FaLinkedin, s.linkedin, "LinkedIn"],
        [FaGithub, s.github, "GitHub"],
        [FaCode, s.leetcode, "LeetCode"],
        [FaInstagram, s.instagram, "Instagram"],
      ].map(([Icon, href, label]) => (
        <Ext
          key={label}
          href={href}
          aria-label={label}
          className="hover:text-accent transition-colors"
        >
          <Icon />
        </Ext>
      ))}
    </div>
  );
};

export default function Sidebar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const active = useActive();

  const { name } = portfolioData.personal;

  const Toggle = (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="w-9 h-9 grid place-items-center rounded-lg border border-line text-mute hover:text-accent hover:border-accent transition-colors"
    >
      {theme === "dark" ? <HiSun /> : <HiMoon />}
    </button>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed inset-y-0 left-0 w-80 flex-col justify-between p-10 border-r border-line">
        <div>
          {/* Logo-ti ekhon ektu compact vabe rakha holo */}
          <div className="mb-10">
            <img
              src="/analogo2.png"
              alt="Ana Logo"
              className="w-28 h-12 object-contain"
            />
          </div>

          <Links active={active} />
        </div>

        <div className="flex items-center justify-between">
          <Socials />
          {Toggle}
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 inset-x-0 z-40 flex items-center justify-between h-14 px-5 bg-bg/90 backdrop-blur border-b border-line">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/profile4.png"
            alt={name}
            className="w-8 h-8 rounded-full object-cover object-top border border-line"
          />
          <span className="font-display font-bold text-sm">{name}</span>
        </a>

        <div className="flex items-center gap-2">
          {Toggle}

          <button
            onClick={() => setOpen(!open)}
            className="w-9 h-9 grid place-items-center text-xl"
            aria-label="Menu"
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden fixed inset-x-0 top-14 z-30 bg-bg border-b border-line p-6 max-h-[80vh] overflow-y-auto shadow-xl"
          >
            <Links
              active={active}
              onPick={() => setOpen(false)}
            />

            <div className="mt-6">
              <Socials />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}