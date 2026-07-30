import { motion } from "framer-motion";
import { useState } from "react";
import aboutImg from "../assets/avatarporto.png";

export default function About() {
  const [activeHotspot, setActiveHotspot] = useState(null);

  const hotspots = [
    {
      id: 1,
      position: "top-[20%] left-[30%]",
      label: "Education",
      info: "Informatics Student",
    },
    {
      id: 2,
      position: "top-[40%] right-[25%]",
      label: "Skills",
      info: "React, Node.js, PHP",
    },
    {
      id: 3,
      position: "bottom-[30%] left-[35%]",
      label: "Experience",
      info: "2+ Years",
    },
  ];

  return (
    <section id="about" className="relative min-h-screen py-20 bg-[var(--color-secondary)] text-[var(--color-text-primary)] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
            Discover More
          </span>
          <h2 className="font-heading uppercase tracking-tight text-[clamp(3rem,8vw,6rem)] mt-4">
            About Me
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)]">
            Click on the hotspots to learn more
          </p>
        </motion.div>

        {/* Photo with Hotspots */}
        <motion.div
          className="relative max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Photo */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-[var(--color-border)] shadow-2xl">
            <img
              src={aboutImg}
              alt="Muhammad Rizki"
              className="w-full h-[500px] object-cover select-none"
              draggable={false}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)]/60 via-transparent to-transparent" />

            {/* Hotspots */}
            {hotspots.map((hotspot) => (
              <motion.div
                key={hotspot.id}
                className={`absolute ${hotspot.position} z-10`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + hotspot.id * 0.2 }}
              >
                <button
                  onClick={() => setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id)}
                  className="relative group"
                >
                  {/* Pulse Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-[var(--color-accent)]"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  {/* Dot */}
                  <div className="relative h-4 w-4 rounded-full bg-[var(--color-accent)] border-2 border-white shadow-lg" />

                  {/* Tooltip */}
                  {activeHotspot === hotspot.id && (
                    <motion.div
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-[var(--color-secondary)]/95 backdrop-blur-sm border border-[var(--color-accent)]/40 rounded-lg px-4 py-2 whitespace-nowrap shadow-xl"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="text-xs text-[var(--color-text-secondary)] mb-1">
                        {hotspot.label}
                      </div>
                      <div className="text-sm font-semibold text-[var(--color-accent)]">
                        {hotspot.info}
                      </div>
                    </motion.div>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
            I'm a passionate developer who loves creating digital experiences. 
            Hover over the photo to discover more about my journey, skills, and what drives me.
          </p>
        </motion.div>
      </div>
    </section>
  );
}