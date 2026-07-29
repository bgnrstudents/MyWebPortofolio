import { useState } from "react";

export default function Navbar() {
  // state untuk menyimpan section yang sedang aktif default home
  const [activeSection, setActiveSection] = useState("home");
  // array untuk menyimpan semua section yang ada
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  
  ];
  return (
    <nav className="fixed top-3 left-1/2 bg-[var(--color-secondary)]/30 -translate-x-1/2 backdrop-blur-xs rounded-full z-50 ">
      <div className="px-6 py-3">
        <div className="flex gap-[5vw] md:gap-8 text-sm font-medium text-[var(--color-text-secondary)]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveSection(item.id)}
                className={`px-3 py-1.5 rounded-full transition-all duration-300 active:scale-95 ${
                  isActive
                    ? "text-[var(--color-accent)] bg-[var(--color-secondary)]/80 shadow-[0_0_12px_rgba(34,211,238,0.3)] font-semibold" // Style pas ACTIVE
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:shadow-[0_0_12px_rgba(34,211,238,0.3)] hover:bg-[var(--color-secondary)]/40" // Style pas NORMAL / HOVER
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
