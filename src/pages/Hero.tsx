import avatarImg from "../assets/avatarporto.png";


export default function Hero() {
  return (
    <section id="home" className="relative h-screen overflow-hidden bg-[var(--color-secondary)] text-[var(--color-text-primary)]">
     
      {/*  Background Glow  */}
      <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[140px]" />
      <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-[var(--color-accent)]/10 blur-[120px]" />

      {/* Background Typography */}
      <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-heading uppercase tracking-tight text-[18vw] text-white/5 pointer-events-none select-none">
        DEVELOPER
      </h2>

      {/* Desktop Layout */}
      <div className="hidden lg:block relative h-full w-full">
        {/* MUHAMMAD */}
        <div className="absolute left-[8%] xl:left-[10%] top-[28%] xl:top-[32%] z-10">
          <h1 className="font-heading uppercase leading-[0.85] tracking-tight text-[clamp(4.5rem,18vw,10rem)]">
            MUHAMMAD
          </h1>
          <p className="mt-2 font-body uppercase tracking-[0.25em] text-sm text-[var(--color-text-secondary)]">
            Informatics Student
          </p>
        </div>

        {/* RIZKI */}
        <div className="absolute right-[18%] xl:right-[24%] bottom-[18%] xl:bottom-[22%] text-right z-10">
          <h1 className="font-heading uppercase leading-[0.85] tracking-tight text-[clamp(4.5rem,18vw,10rem)]">
            RIZKI
          </h1>
          <p className="mt-2 font-body uppercase tracking-[0.25em] text-sm text-[var(--color-text-secondary)] animate-bounce">
            Web Developer
          </p>
        </div>

        {/* Avatar */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20">
          <img
            src={avatarImg}
            alt="Muhammad Rizki"
            className="w-[50vw] max-w-[650px] min-w-[480px] drop-shadow-[0_30px_40px_rgba(0,0,0,.45)] select-none"
            draggable={false}
          />
        </div>
      </div>
      

      {/* Mobile & Tablet Layout  */}
      <div className="flex lg:hidden h-full flex-col items-center justify-center px-6">
        {/* MUHAMMAD */}
        <div className="mb-4 text-center">
          <h1 className="font-heading uppercase leading-none tracking-tight text-[clamp(5rem,12vw,5rem)]">
            MUHAMMAD
          </h1>
          <p className="mt-1 font-body uppercase tracking-[0.2em] text-xs text-[var(--color-text-secondary)]">
            Informatics Student
          </p>
        </div>

        {/* Avatar */}
        <img
          src={avatarImg}
          alt="Muhammad Rizki"
          className="w-[70vw] max-w-[400px] drop-shadow-[0_25px_35px_rgba(0,0,0,.45)] select-none my-4"
          draggable={false}
        />

        {/* RIZKI */}
        <div className="mt-4 text-center">
          <h1 className="font-heading uppercase leading-none tracking-tight text-[clamp(5rem,12vw,5rem)]">
            RIZKI
          </h1>
          <p className="mt-1 font-body uppercase tracking-[0.2em] text-xs text-[var(--color-text-secondary)]">
            Web Developer
          </p>
        </div>
      </div>
    </section>
  );
}