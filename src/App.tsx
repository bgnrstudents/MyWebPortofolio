import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Footer from './components/footer'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* 1. Navbar tetap di atas (Fixed) */}
      <Navbar />
      {/* 2. Konten halaman */}
      <Hero />
      <About />
      <Project />
      <Contact />

      {/* 3. Footer di paling bawah */}
      <Footer />
    </div>
  )
}