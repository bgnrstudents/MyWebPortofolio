export default function Navbar() {
  return (
  <nav className="fixed top-2 left-1/2 -translate-x-1/2 backdrop-blur-md z-50 ">
  <div className="px-6 py-3">
    <div className="flex gap-[5vw] text-sm font-medium text-slate-300">
      <a href="#home" className="hover:text-cyan-400 transition">Home</a>
      <a href="#about" className="hover:text-cyan-400 transition">About</a>
      <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
      <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
    </div>
  </div>
</nav>
  )
}