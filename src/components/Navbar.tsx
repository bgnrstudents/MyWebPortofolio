import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset navbar + buffer

      // Cari section mana yang lagi active
      let currentSection = "home";
      
      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          
          // Kalau scroll position ada di dalam section ini
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = item.id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const offset = 80;
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-3 left-1/2 bg-[var(--color-secondary)]/30 -translate-x-1/2 backdrop-blur-xs rounded-full z-50">
      <div className="px-6 py-3">
        <div className="flex gap-[5vw] md:gap-8 text-sm font-medium text-[var(--color-text-secondary)]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`px-3 py-1.5 rounded-full transition-all duration-300 active:scale-95 ${
                  isActive
                    ? "text-[var(--color-accent)] bg-[var(--color-secondary)]/80 shadow-[0_0_12px_rgba(34,211,238,0.3)] font-semibold"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:shadow-[0_0_12px_rgba(34,211,238,0.3)] hover:bg-[var(--color-secondary)]/40"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}