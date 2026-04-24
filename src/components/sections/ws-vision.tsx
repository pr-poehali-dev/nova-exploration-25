import { useState, useEffect } from "react"

const quotes = [
  {
    text: "«Любовь — это когда двое едины. Когда мужчина и женщина превращаются в ангела. Это — небо!»",
    author: "Виктор Гюго, Собор Парижской Богоматери",
  },
  {
    text: "«Тот, кто любит, должен разделять участь того, кого он любит.»",
    author: "Михаил Булгаков, Мастер и Маргарита",
  },
  {
    text: "«Любовь не знает логики, она выше разума. Это существованье возвышенное, венец бытия, и редкому человеку она даётся.»",
    author: "Джек Лондон, Мартин Иден",
  },
  {
    text: "«Если человек умер, его нельзя перестать любить, чёрт возьми. Особенно если он был лучше всех живых.»",
    author: "Джером Дэвид Сэлинджер, Над пропастью во ржи",
  },
  {
    text: "«Любящее сердце стоит больше, чем вся мудрость на свете.»",
    author: "Чарльз Диккенс, Дэвид Копперфилд",
  },
  {
    text: "«Я лучше разделю одну смертную жизнь с тобой, чем проживу все эпохи мира в одиночестве.»",
    author: "Арвен, Властелин колец",
  },
  {
    text: "«Вы пленили мою бедную душу, и я люблю вас… И с этой минуты не хочу с вами расставаться.»",
    author: "Джейн Остин, Гордость и предубеждение",
  },
  {
    text: "«Я верю в одну вещь. Всегда нужно признаваться в любви тому, кого любишь.»",
    author: "Господин Никто",
  },
  {
    text: "«Полюбить человека, отвечающего тебе взаимностью, — это само по себе чудо.»",
    author: "P. S. Я люблю тебя",
  },
  {
    text: "«Я так счастлива, что не верю ни в горе, ни в смерть. Жить не означает ждать, когда буря стихнет.»",
    author: "Королёк — птичка певчая",
  },
]

function QuoteCarousel() {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setIndex((i) => (i + 1) % quotes.length)
        setFade(true)
      }, 500)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const q = quotes[index]

  return (
    <div className="text-center mt-20">
      <div className="ornament-divider max-w-lg mx-auto mb-8">
        <span className="text-sm" style={{ color: "hsl(345, 45%, 28%)" }}>✦</span>
      </div>
      <div
        style={{
          transition: "opacity 0.5s ease",
          opacity: fade ? 1 : 0,
          minHeight: "8rem",
        }}
      >
        <blockquote
          className="max-w-2xl mx-auto leading-relaxed px-4"
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)",
            fontStyle: "italic",
            fontWeight: 300,
            color: "hsl(345, 45%, 28%)",
          }}
        >
          {q.text}
        </blockquote>
        <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase mt-4">
          — {q.author}
        </p>
      </div>
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {quotes.map((_, i) => (
          <button
            key={i}
            onClick={() => { setFade(false); setTimeout(() => { setIndex(i); setFade(true) }, 300) }}
            className="w-1.5 h-1.5 rounded-full transition-all"
            style={{
              background: i === index ? "hsl(345, 45%, 28%)" : "hsl(345, 45%, 28%, 0.25)",
              transform: i === index ? "scale(1.4)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </div>
  )
}

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

        {/* Rotating Quotes */}
        <QuoteCarousel />
      </div>
    </section>
  )
}