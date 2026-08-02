import { motion } from "framer-motion";
import avatarImg from "../assets/avatarporto.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden bg-[var(--color-secondary)] text-[var(--color-text-primary)]"
    >
      {/* GLOW*/}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        className="absolute top-1/4 right-1/3 h-[450px] w-[450px] rounded-full bg-[var(--color-accent)]/10 blur-[150px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        className="absolute -bottom-10 left-1/3 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[130px] pointer-events-none"
      />

      {/* TECH GRID & NODE NETWORK  */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {/* Grid Lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px,transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Vector Nodes / Circuit Lines */}
        <svg
          className="w-full h-full stroke-cyan-400/20 fill-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Code Bracket */}
          <text
            x="100"
            y="150"
            className="fill-cyan-400/20 text-xs font-mono select-none"
          >
            &lt;/&gt;
          </text>

          {/* Network Lines */}
          <path
            d="M 200 150 L 350 250 L 500 180 M 350 250 L 450 400"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <circle cx="200" cy="150" r="3" className="fill-cyan-400/40" />
          <circle cx="350" cy="250" r="3" className="fill-cyan-400/40" />
          <circle cx="500" cy="180" r="3" className="fill-cyan-400/40" />

          {/* Right Side Lines */}
          <path d="M 1500 300 H 1800" strokeWidth="1" strokeDasharray="8 4" />
          <path d="M 1600 700 H 1850" strokeWidth="1" />
        </svg>
      </div>

      {/* CORNER BRACKETS  */}
      <div className="absolute top-6 left-6 h-24 w-24 border-l border-t border-cyan-400/15 pointer-events-none" />
      <div className="absolute top-6 right-6 h-24 w-24 border-r border-t border-purple-400/15 pointer-events-none" />
      <div className="absolute bottom-6 left-6 h-24 w-24 border-l border-b border-purple-400/15 pointer-events-none" />
      <div className="absolute bottom-6 right-6 h-24 w-24 border-r border-b border-cyan-400/15 pointer-events-none" />

      {/* Terminal Window */}
      <div className="absolute top-20 left-[15%] z-10 font-mono text-[10px] text-slate-500/40 animate-[float_8s_ease-in-out_infinite] will-change-transform">
        <div className="flex items-center gap-2 mb-1">
          <div className="h-1.5 w-1.5 rounded-full bg-red-400/60" />
          <div className="h-1.5 w-1.5 rounded-full bg-yellow-400/60" />
          <div className="h-1.5 w-1.5 rounded-full bg-green-400/60" />
        </div>
        <div>~/portfolio</div>
        <div className="text-cyan-400/60">$ whoami</div>
        <div className="text-slate-400/60">→ muhammad.rizki</div>
      </div>

      {/* Code Object */}
      <div className="absolute top-[30%] right-[8%] font-mono text-[10px] text-slate-500/40 animate-[float_10s_ease-in-out_infinite_2s] will-change-transform">
        <div>const developer = {"{"}</div>
        <div className="pl-3">name: "Muhammad",</div>
        <div className="pl-3">role: "Fullstack Developer",</div>
        <div className="pl-3">stack: ["PHP","React","Node"]</div>
        <div>{"};"}</div>
      </div>

      {/* Git Commands */}
      <div className="absolute bottom-[10%] left-[10%] font-mono text-[10px] text-slate-500/40 animate-[float_7s_ease-in-out_infinite_4s] will-change-transform">
        <div>$ git commit -m "init"</div>
        <div>$ git push origin main</div>
        <div className="text-green-400/60">✓ compiled successfully</div>
      </div>

      {/* BACKGROUND TYPOGRAPHY */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-heading uppercase tracking-tight text-[18vw] text-transparent stroke-white/5 stroke-1 pointer-events-none select-none"
        style={{
          WebkitTextStroke: "1px rgba(255,255,255,0.05)",
        }}
      >
        DEVELOPER
      </motion.h2>

      {/*  DESKTOP LAYOUT */}
      <div className="hidden lg:block relative h-full w-full">
        {/* MUHAMMAD */}
        <motion.div
          className="absolute left-[8%] xl:left-[10%] top-[28%] xl:top-[32%] z-20"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="font-heading uppercase leading-[0.85] tracking-tight text-[clamp(4.5rem,18vw,10rem)]">
            MUHAMMAD
          </h1>
          <p className="mt-2 font-body uppercase tracking-[0.25em] text-sm text-[var(--color-text-secondary)]">
            Informatics Student
          </p>
        </motion.div>

        {/* RIZKI */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="absolute right-[18%] xl:right-[24%] bottom-[18%] xl:bottom-[22%] text-right z-20"
        >
          <h1 className="font-heading uppercase leading-[0.85] tracking-tight text-[clamp(4.5rem,18vw,10rem)]">
            RIZKI
          </h1>
          <p className="mt-2 font-body uppercase tracking-[0.25em] text-sm text-[var(--color-text-secondary)]">
            Web Developer
          </p>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src={avatarImg}
              alt="Muhammad Rizki"
              className="w-[50vw] max-w-[650px] min-w-[480px] drop-shadow-[0_30px_40px_rgba(0,0,0,.45)] select-none"
              draggable={false}
            />
          </motion.div>
        </motion.div>


        <motion.div
          className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 hidden lg:flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Primary CTA */}
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[var(--color-accent)] to-amber-600 px-8 py-3 font-medium text-[var(--color-secondary)] shadow-lg shadow-[var(--color-accent)]/25 transition-all hover:shadow-xl hover:shadow-[var(--color-accent)]/40 hover:scale-105">
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
            <span className="relative z-10 flex items-center gap-2">
              View My Work
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
            </span>
          </a>

          {/* Secondary CTA */}
          <a
            href="#contact"
            className="group rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-card)] backdrop-blur-sm px-8 py-3 font-medium text-[var(--color-text-primary)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:scale-105 hover:bg-[var(--color-accent)]/10"
          >
            <span className="flex items-center gap-2">
              Get In Touch
              <svg
                className="h-4 w-4 transition-transform group-hover:rotate-12"
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
            </span>
          </a>
        </motion.div>
      </div>

      {/* ================= 7. MOBILE & TABLET LAYOUT ================= */}
      <div className="flex lg:hidden h-full items-center justify-center px-6">
        <div className="flex flex-col items-center text-center max-w-md">
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading uppercase leading-[0.9] tracking-tight text-[clamp(4rem,16vw,7rem)]">MUHAMMAD
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="font-heading uppercase leading-[0.9] tracking-tight text-[clamp(4rem,16vw,7rem)]">
            RIZKI
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.35,
            }}
            className="mt-3 text-sm tracking-[.35em] uppercase text-[var--color-text-secondary)]">Informatics Student • Web Developer</motion.p>

          {/* Avatar */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 25,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: {
                duration: 0.8,
                delay: 0.45,
              },
              scale: {
                duration: 0.8,
                delay: 0.45,
              },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="my-8"
          >
            <img
              src={avatarImg}
              alt="Muhammad Rizki"
              draggable={false}
              className="w-[300px] max-w-[500px] drop-shadow-[0_35px_50px_rgba(0,0,0,.45)]  select-none"/>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
            }}
            className="flex w-full gap-3 sm:flex-row sm:justify-center z-20">
            <a href="#projects" className="rounded-full bg-gradient-to-r from-[var(--color-accent)] to-amber-600 px-8 py-3 font-medium text-[var(--color-secondary)] shadow-lg shadow-[var(--color-accent)]/25 transition-all hover:shadow-xl hover:shadow-[var(--color-accent)]/40 hover:scale-105"> View Projects</a>

            <a href="#contact" className="rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-card)] backdrop-blur-sm px-8 py-3 font-medium text-[var(--color-text-primary)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:scale-105 hover:bg-[var(--color-accent)]/10]">Contact Me</a>
          </motion.div>
        </div>
      </div>

      {/* CUSTOM ANIMATIONS */}
      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translate(0, 0); 
          }
          25% { 
            transform: translate(8px, -12px); 
          }
          50% { 
            transform: translate(0, -20px); 
          }
          75% { 
            transform: translate(-8px, -12px); 
          }
        }
      `}</style>
    </section>
  );
}
