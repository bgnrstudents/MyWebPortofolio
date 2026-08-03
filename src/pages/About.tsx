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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
