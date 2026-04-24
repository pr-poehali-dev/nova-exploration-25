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
  { src: "https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/012eedee-91ff-4b8b-9133-8b15355a30a1.jpg", caption: "Фата на ветру" },
  { src: "https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/735a4fdc-a0f6-4113-a44e-54f23a34b17b.jpg", caption: "Смеяться вместе" },
  { src: "https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/d48172b9-5ad3-45e0-affe-193769bee577.jpg", caption: "Утро невесты" },
  { src: "https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/c491c222-2134-40ff-8bf2-fd00189cda73.jpg", caption: "Атмосфера утра" },
  { src: "https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/538cb872-0a69-41a9-9496-214d056797d9.jpg", caption: "Лёгкость" },
  { src: "https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/07baa306-c81f-4e47-ad8e-bc22cdf60482.jpg", caption: "Перед выходом" },
  { src: "https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/faa44aa2-85ed-463e-89e6-2fb35a82fee1.jpg", caption: "Сборы с подружками" },
  { src: "https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/158876b5-a5cc-43fc-a2c1-68c3822410a3.jpg", caption: "Последний танец" },
  { src: "https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/f8ec9bbb-2343-408d-abdc-b2fcdad093bc.jpg", caption: "Танцевальная ночь" },
  { src: "https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/9a897430-05fe-46d5-87d0-e14b4b5fc765.jpg", caption: "За здоровье молодых" },
  { src: "https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/3674fe24-41a1-4fa6-8a47-65e3ac4f585b.jpg", caption: "Объятия" },
  { src: "https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/dfe17705-4801-466e-81b4-7102d074fb6a.jpg", caption: "Самый весёлый гость" },
  { src: "https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/ece42f75-9d2a-48ad-940f-43eb58b8909a.jpg", caption: "Первый поцелуй" },
  { src: "https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/429a3e00-d2ee-48e3-aba9-1445eea45126.jpg", caption: "Друзья жениха" },

  { src: "https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/bd867ec4-da1e-41ff-9c83-b0aae952ab3b.jpg", caption: "Стиль жениха" },
  { src: "https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/be3228ed-3a6a-4540-9ee5-8d43c4f8aa3d.jpg", caption: "Шнуровка платья" },
  { src: "https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/202a28ff-983a-4682-9eb7-6f71d13c04c1.jpg", caption: "Тени влюблённых" },
  { src: "https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/4734a532-ba90-410e-aef6-a00faa3837fd.jpg", caption: "В этом году замуж" },
]

export function WsVision() {
  return (
    <section id="vision" className="py-28 px-6 md:px-16 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Атмосфера
          </p>
          <h2
            className="text-foreground leading-[1.2]"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
            }}
          >
            Именно так выглядит<br />
            <em>день, о котором мечтают</em>
          </h2>
        </div>

        {/* Photo marquee strip */}
        <div className="overflow-hidden -mx-6 md:-mx-16">
          <div
            className="flex gap-4"
            style={{
              animation: "visionMarquee 65s linear infinite",
              width: "max-content",
            }}
          >
            {[...moodImages, ...moodImages].map((img, i) => (
              <div
                key={i}
                className="group relative shrink-0 overflow-hidden"
                style={{ width: "260px" }}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{
                    height: "340px",
                    filter: "contrast(97%) brightness(98%)",
                    transform: (img as { rotate?: boolean }).rotate ? "rotate(90deg) scale(1.4)" : undefined,
                    transformOrigin: "center center",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p
                  className="absolute bottom-4 left-4 right-4 text-white/0 group-hover:text-white/90 transition-all duration-300 text-sm font-light italic"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {img.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes visionMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>

        {/* Rotating Quotes */}
        <QuoteCarousel />
      </div>
    </section>
  )
}