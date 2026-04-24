const moodImages = [
  {
    src: "https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/13efd93d-1ca2-4787-a753-a6c3014c219f.jpg",
    caption: "Детали, которые остаются в памяти",
    rotate: "-2deg",
    size: "tall",
  },
  {
    src: "https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/33cd5a2c-0ed0-490a-92eb-b5a0305aad3f.jpg",
    caption: "История двоих",
    rotate: "1.5deg",
    size: "normal",
  },
  {
    src: "https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/960f0e4e-d492-40af-9a87-fbefc7835564.jpg",
    caption: "Атмосфера, которую я создаю",
    rotate: "-1deg",
    size: "wide",
  },
  {
    src: "https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/9f92fc2f-c1f3-42a9-a35d-f58a1d5ef311.jpg",
    caption: "Каждый символ — ваш",
    rotate: "2deg",
    size: "normal",
  },
]

export function WsVision() {
  return (
    <section id="vision" className="py-28 px-6 md:px-16 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Моё видение
          </p>
          <h2
            className="text-foreground leading-[1.2]"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
            }}
          >
            Эстетика,<br />
            <em>которую я несу в каждую свадьбу</em>
          </h2>
        </div>

        {/* Collage grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {moodImages.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden cursor-pointer"
              style={{
                transform: `rotate(${img.rotate})`,
                transition: "transform 0.4s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "rotate(0deg) scale(1.02)"
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = `rotate(${img.rotate}) scale(1)`
              }}
            >
              <div className="photo-tape relative">
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full object-cover"
                  style={{
                    aspectRatio: img.size === "tall" ? "2/3" : img.size === "wide" ? "4/3" : "3/4",
                    filter: "sepia(10%) contrast(95%) brightness(97%)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-3 left-3 right-3 text-white/0 group-hover:text-white/90 transition-all duration-300 text-xs font-light italic" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="text-center mt-20">
          <div className="ornament-divider max-w-lg mx-auto mb-8">
            <span className="text-muted-foreground text-sm">✦</span>
          </div>
          <blockquote
            className="text-foreground/80 max-w-xl mx-auto leading-relaxed"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            «A woman's heart should be so hidden in God that a man has to seek Him — just to find her.»
          </blockquote>
          <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase mt-4">— Maya Angelou</p>
        </div>
      </div>
    </section>
  )
}
