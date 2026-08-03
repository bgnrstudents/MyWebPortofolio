import { motion } from "framer-motion";
import { useState } from "react";

// Ganti import sesuai gambar project lu
import project1Img from "../assets/avatarporto.png";
import project2Img from "../assets/avatarporto.png";
import project3Img from "../assets/avatarporto.png";
import project4Img from "../assets/avatarporto.png";
import project5Img from "../assets/avatarporto.png";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web",
      description: "Full-stack marketplace dengan payment gateway & real-time inventory.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: project1Img,
      github: "https://github.com/mhrizki/ecommerce",
      live: "https://ecommerce-demo.com",
      featured: true,
      year: "2025",
    },
    {
      id: 2,
      title: "Finance Tracker",
      category: "Mobile",
      description: "Mobile app buat tracking pengeluaran harian.",
      tech: ["React Native", "Firebase"],
      image: project2Img,
      github: "https://github.com/mhrizki/finance",
      live: "https://finance-demo.com",
      featured: false,
      year: "2025",
    },
    {
      id: 3,
      title: "Portfolio Dashboard",
      category: "Web",
      description: "Admin dashboard dengan analytics & data visualization.",
      tech: ["Next.js", "Tailwind", "Chart.js"],
      image: project3Img,
      github: "https://github.com/mhrizki/dashboard",
      live: "https://dashboard-demo.com",
      featured: false,
      year: "2024",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[var(--color-secondary)] text-[var(--color-text)] overflow-hidden"
    >
      {/* Background Glow Orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-[var(--color-accent)]/5 blur-[150px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/3 left-1/4 h-[400px] w-[400px] rounded-full bg-cyan-400/5 blur-[130px] pointer-events-none"
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

      <div className="relative w-full px-6 lg:px-16">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Kicker Text */}
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-12 bg-[var(--color-accent)]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] font-medium">
              Selected Works
            </span>
          </div>

          {/* Main Title */}
          <div className="flex items-baseline gap-6">
            <h2 className="font-heading uppercase tracking-tight text-[clamp(3rem,10vw,5rem)] leading-none">
              <span className="text-[var(--color-text-secondary)]">Featured</span>
              <span className="text-[var(--color-accent)]"> Projects</span>
            </h2>
            <span className="h-px flex-1 bg-gradient-to-r from-[var(--color-accent)]/50 to-transparent" />
          </div>

          {/* Subtitle */}
          <p className="mt-2 text-sm text-[var(--color-text-secondary)] max-w-2xl">
            A collection of projects that showcase my skills and passion for building digital products.
          </p>
        </motion.div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[280px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                project.featured
                  ? "md:col-span-2 md:row-span-2"
                  : "md:col-span-2 md:row-span-1"
              }`}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)] via-[var(--color-secondary)]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

              {/* Project Number - Editorial Touch */}
              <div className="absolute top-4 left-4 font-heading text-5xl text-[var(--color-accent)]/30 group-hover:text-[var(--color-accent)]/60 transition-colors duration-500">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Year Badge */}
              <div className="absolute top-4 right-4 bg-[var(--color-secondary)]/70 backdrop-blur-sm border border-[var(--color-border)] rounded-full px-3 py-1 text-xs font-medium text-[var(--color-text-secondary)]">
                {project.year}
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Category Tag */}
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/30 rounded-full text-xs font-medium text-[var(--color-accent)]">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-title text-2xl lg:text-3xl text-[var(--color-text-primary)] font-bold mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-500">
                  {project.title}
                </h3>

                {/* Description - Muncul saat hover */}
                <motion.p
                  className="text-sm text-[var(--color-text-secondary)] mb-4 overflow-hidden"
                  initial={{ opacity: 0, height: 0 }}
                  animate={
                    hoveredProject === project.id
                      ? { opacity: 1, height: "auto" }
                      : { opacity: 0, height: 0 }
                  }
                  transition={{ duration: 0.4 }}
                >
                  {project.description}
                </motion.p>

                {/* Tech Stack - Muncul saat hover */}
                <motion.div
                  className="flex flex-wrap gap-2 mb-4 overflow-hidden"
                  initial={{ opacity: 0, height: 0 }}
                  animate={
                    hoveredProject === project.id
                      ? { opacity: 1, height: "auto" }
                      : { opacity: 0, height: 0 }
                  }
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[var(--color-card)] border border-[var(--color-border)] rounded text-xs text-[var(--color-text-secondary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                {/* Action Links - Muncul saat hover */}
                <motion.div
                  className="flex gap-3 overflow-hidden"
                  initial={{ opacity: 0, height: 0 }}
                  animate={
                    hoveredProject === project.id
                      ? { opacity: 1, height: "auto" }
                      : { opacity: 0, height: 0 }
                  }
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[var(--color-accent)] text-[var(--color-secondary)] rounded text-xs font-medium hover:bg-amber-500 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live Demo
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-text-primary)] rounded text-xs font-medium hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Source
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </motion.div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-[var(--color-accent)]/0 group-hover:border-[var(--color-accent)]/50 rounded-lg transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}