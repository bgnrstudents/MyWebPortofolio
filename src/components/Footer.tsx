import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/mhrizki",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/mhrizki",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://instagram.com/mhrizki",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.797 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[var(--color-secondary)] text-[var(--color-text)] overflow-hidden border-t border-[var(--color-border)]">
      {/* Background Glow Orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-[var(--color-accent)]/5 blur-[150px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-0 right-1/4 h-[350px] w-[350px] rounded-full bg-cyan-400/5 blur-[130px] pointer-events-none"
      />

      {/* Noise Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative w-full px-6 lg:px-16 py-16">
        {/* Big Name - Editorial Style */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-baseline gap-6 flex-wrap">
            <h2 className="font-heading uppercase tracking-tight text-[clamp(3rem,15vw,10rem)] leading-none">
              <span className="text-[var(--color-text-secondary)]">
                MUHAMMAD
              </span>
              <br />
              <span className="text-[var(--color-accent)]">RIZKI</span>
            </h2>
            <span className="hidden lg:block h-px flex-1 bg-gradient-to-r from-[var(--color-accent)]/50 to-transparent self-center" />
          </div>
          <p className="mt-4 text-sm text-[var(--color-text-secondary)] max-w-xl">
            Informatics Student & Fullstack Developer based in Indonesia.
            Crafting digital experiences with passion and precision.
          </p>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          {/* Navigation */}
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[var(--color-accent)]" />
                <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] font-medium">
                  Navigation
                </span>
              </div>
            </div>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300"
                  >
                    <span className="font-heading text-lg tracking-wide">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[var(--color-accent)]" />
                <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] font-medium">
                  Get In Touch
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <a
                href="mailto:rizki@example.com"
                className="block text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300"
              >
                rizki@example.com
              </a>
              <a
                href="tel:+6281234567890"
                className="block text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300"
              >
                +62 812 3456 7890
              </a>
              <div className="text-sm text-[var(--color-text-secondary)]">
                Indonesia 🇮🇩
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[var(--color-accent)]" />
                <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] font-medium">
                  Follow Me
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group h-11 w-11 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  whileHover={{ y: -3 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Copyright */}
          <div className="text-xs text-[var(--color-text-secondary)] text-center md:text-left">
            <span className="text-[var(--color-accent)]">©</span> {currentYear}{" "}
            Muhammad Rizki. All rights reserved.
            <span className="hidden md:inline mx-2 text-[var(--color-border)]">
              •
            </span>
            <span className="hidden md:inline">
              Crafted with passion & code
            </span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300"
          >
            <span>Back to Top</span>
            <div className="h-8 w-8 rounded-full border border-[var(--color-border)] flex items-center justify-center group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)]/10 transition-all duration-300">
              <svg
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </div>
          </button>
        </motion.div>
      </div>
    </footer>
  );
}
