import { useEffect, useRef, useState } from "react"

export function WsHero() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/960f0e4e-d492-40af-9a87-fbefc7835564.jpg"
          alt="Атмосфера"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/60" />
      </div>

      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 md:px-16 pt-8">
        <div
          className="text-white tracking-[0.25em] uppercase"
          style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 700, fontSize: "1.1rem" }}
        >
          wabi sabi studio
        </div>
        <nav className="hidden md:flex gap-8 text-xs tracking-widest uppercase font-bold text-white">
          <a href="#about" className="transition-opacity hover:opacity-70">Обо мне</a>
          <a href="#services" className="transition-opacity hover:opacity-70">Услуги</a>
          <a href="#pricing" className="transition-opacity hover:opacity-70">Цены</a>
          <a href="#form" className="transition-opacity hover:opacity-70">Консультация</a>
        </nav>
      </header>

      {/* Hero content */}
      <div className="relative z-10 px-8 md:px-16 pb-20 md:pb-28">
        <div
          className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-white text-xs tracking-[0.3em] uppercase mb-6 font-bold">
            Набережные Челны · Казань
          </p>
          <h1
            className="text-white leading-[1.1] mb-6"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2.8rem, 7vw, 6rem)",
              fontWeight: 300,
            }}
          >
            Ваше спокойствие —<br />
            моя главная задача.
          </h1>
          <p className="text-white text-base md:text-lg font-light tracking-wide max-w-md mb-10">
            Организатор и координатор свадебных торжеств
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#form"
              className="inline-block px-8 py-3 text-white text-xs tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
              style={{ background: "hsl(345, 45%, 28%)" }}
            >
              Записаться на консультацию
            </a>
            <a
              href="#services"
              className="inline-block px-8 py-3 border border-white/50 text-white/80 text-xs tracking-[0.2em] uppercase hover:border-white hover:text-white transition-colors"
            >
              Об услугах
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 md:right-16 z-10 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-white/30 animate-float" />
        <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase rotate-90 origin-center translate-y-6">
          вниз
        </span>
      </div>
    </section>
  )
}