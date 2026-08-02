import { motion, useScroll, useTransform } from "framer-motion";
import aboutImg from "../assets/avatarporto.png";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[var(--color-secondary)] text-[var(--color-text)] flex flex-col items-center justify-center "
    >
      <div className="relative w-full px-16">
        {/* Header  */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center gap-4">
            <h2 className="font-heading uppercase tracking-tight text-[clamp(3rem,10vw,5rem)] leading-none">
              About Me
            </h2>
            <span className="h-px flex-1 bg-gradient-to-r from-[var(--color-accent)] to-transparent" />
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-8 mb-32">
          {/* Photo */}
          <motion.div
            className="lg:col-span-7 relative"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 border-l-2 border-t-2 border-[var(--color-accent)]/30" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 border-r-2 border-b-2 border-[var(--color-accent)]/30" />

            {/* Photo Container */}
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={aboutImg}
                alt="Muhammad Rizki"
                className="w-full h-[600px] lg:h-[700px] object-cover select-none"
                draggable={false}
              />
              {/* overlay */}
              <div className="absolute bottom-6 left-6 bg-[var(--color-secondary)]/80 backdrop-blur-sm p-4 rounded-sm">
                <div className="flex items-end justify-between">
                  <div>
                    <div className=" uppercase tracking-wider text-[var(--color-text-secondary)] mb-2">
                      Muhammad Rizki
                    </div>
                    <div className="text-sm text-[var(--color-text-secondary)]">
                      Informatics Student & Fullstack Developer
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* BIO - Text */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
