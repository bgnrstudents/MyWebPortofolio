import { motion, useScroll, useTransform } from "framer-motion";
import aboutImg from "../assets/avatarporto.png";

export default function About() {
  const { scrollYProgress } = useScroll();
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const photoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);

  return (
    <section
      id="about"
      className="relative min-h-screen bg-[var(--color-secondary)] text-[var(--color-text)] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Glow Orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-[var(--color-accent)]/5 blur-[150px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-cyan-400/5 blur-[130px] pointer-events-none"
      />

      {/* Noise Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px,transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative w-full px-6 lg:px-16 py-10">
        {/* Header - Enhanced */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Kicker Text */}
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-12 bg-[var(--color-accent)]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] font-medium">
              Get to know me
            </span>
          </div>

          {/* Main Title - Split Style */}
          <div className="flex items-baseline gap-6">
            <h2 className="font-heading uppercase tracking-tight text-[clamp(3rem,10vw,5rem)] leading-none">
              <span className="text-[var(--color-text-secondary)]">About</span>
              <span className="text-[var(--color-accent)]"> Me</span>
            </h2>
            <span className="h-px flex-1 bg-gradient-to-r from-[var(--color-accent)]/50 to-transparent" />
          </div>

          {/* Subtitle - Jarak Lebih Deket */}
          <p className="mt-2 text-sm text-[var(--color-text-secondary)] max-w-2xl">
            A glimpse into who I am, what I do, and what drives me forward.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          {/* Photo */}
          <motion.div
            className="lg:col-span-7 relative"
            style={{ y: photoY, scale: photoScale }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 border-l-2 border-t-2 border-[var(--color-accent)]/30" />
            <div className="absolute -bottom-8 -right-5 w-32 h-32 border-r-2 border-b-2 border-[var(--color-accent)]/30" />

            {/* Photo Container */}
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={aboutImg}
                alt="Muhammad Rizki"
                className="w-full h-[500px] lg:h-[600px] object-cover select-none"
                draggable={false}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)]/60 via-transparent to-transparent" />

              {/* Caption */}
              <motion.div className="absolute bottom-6 left-6 right-6 ">
                <div className="flex items-end justify-between ">
                  <div className="bg-[var(--color-secondary)]/80 backdrop-blur-sm p-4 rounded-sm border border-[var(--color-accent)]/30 rounded-sm p-4 backdrop-blur-sm">
                    <div className=" font-title text-xl font-bold uppercase tracking-wider text-[var(--color-text-secondary)] mb-2">
                      Muhammad Rizki
                    </div>
                    <div className="h-0.5 w-full bg-gradient-to-r from-[var(--color-accent)] to-transparent mt-1"/>
                    <div className="text-sm text-[var(--color-text-secondary)]">
                      Informatics Student & Fullstack Developer
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                className="absolute top-6 right-6 bg-[var(--color-accent)] text-[var(--color-secondary)] px-4 py-2 font-bold text-xs uppercase tracking-wider rotate-3 shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Available for Work
              </motion.div>
            </div>
          </motion.div>

          {/* Text Right Section */}
          <motion.div
            className="lg:col-span-5 lg:pt-20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Head Text - Lebih Impactful */}
            <div className="mb-6">
              <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-2">
                Introduction
              </div>
              <h3 className="font-title text-[clamp(1.7rem,5vw,2.7rem)] leading-tight">
                <span className="text-[var(--color-text-secondary)]">
                  Hello, I'm
                </span>{" "}
                <span className="relative z-10 font-bold text-[var(--color-accent)]">
                  Muhammad Rizki
                </span>
              </h3>
            </div>

            {/* Main Text */}
            <div className="space-y-6 text-[var(--color-text-secondary)] leading-relaxed">
              <p className="text-lg first-letter:text-5xl first-letter:font-heading first-letter:text-[var(--color-accent)] first-letter:float-left first-letter:mr-3 first-letter:mt-1 text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Perferendis, laborum nostrum. Vitae, tenetur? Dolores officia
                aliquid architecto asperiores fugiat ipsa fugit? Dolor hic
                cumque iusto fugiat magni eligendi fuga corporis. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                dolores enim qui fugit ab omnis minus porro, consequatur earum
                provident inventore ut recusandae iste debitis itaque voluptas
                sapiente libero repellendus?
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Sapiente enim aliquid aspernatur architecto, sequi sunt nemo
                deleniti exercitationem in, omnis officia harum autem? Nisi
                velit architecto libero voluptas quaerat voluptatum.
              </p>
            </div>

            {/* Buttons + Social Media */}
            <div className="mt-8 space-y-4">
              {/* Action Buttons */}
              <div className="flex justify-center gap-4 flex-wrap">
                <a
                  href="/CV.pdf"
                  target="_blank"
                  className="group inline-flex rounded-xs items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--color-accent)] to-amber-600 font-medium text-[var(--color-secondary)] shadow-lg shadow-[var(--color-accent)]/25 transition-all hover:shadow-xl hover:shadow-[var(--color-accent)]/40 hover:scale-105"
                >
                  Download CV
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-y-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-accent)]/40 text-[var(--color-text)] rounded-sm hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300 font-medium"
                >
                  Let's Talk
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3 justify-center">
                <div className="h-px w-16 bg-[var(--color-border)]" />
                <span className="text-xs uppercase tracking-wider text-[var(--color-text-secondary)]">
                  or connect with me
                </span>
                <div className="h-px w-16 bg-[var(--color-border)]" />
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-center gap-3">
                {/* GitHub */}
                <a
                  href="https://github.com/mhrizki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group h-10 w-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/mhrizki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group h-10 w-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://instagram.com/mhrizki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group h-10 w-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.797 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:rizki@example.com"
                  className="group h-10 w-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 transition-all duration-300"
                  aria-label="Email"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
