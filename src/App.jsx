import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import { Hero, About } from "./components/Intro";
import { Experience, Projects } from "./components/Work";
import Research from "./components/Research";
import { Skills, Education, Activities } from "./components/Background";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Sidebar
        theme={theme}
        toggleTheme={() =>
          setTheme((t) => (t === "dark" ? "light" : "dark"))
        }
      />

      <main className="lg:ml-80 px-6 sm:px-10 lg:px-16 pt-14 lg:pt-0">
        <div className="max-w-5xl mx-auto">
          <Hero />
          <About />
          <Education />
          <Experience />
          <Research />
          <Projects />
          <Skills />
          <Certifications />
          <Activities />
          <Contact />

          <footer className="py-10 border-t border-line text-sm text-mute flex flex-col items-center justify-center gap-3 text-center">
            <img src="/analogo2.png" alt="Ana Logo" className="w-16 h-8 object-contain opacity-80" />
            <p>© 2026 Anamika Saha. All rights reserved.</p>
          </footer>
        </div>
      </main>
    </>
  );
}