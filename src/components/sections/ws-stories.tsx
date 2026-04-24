export function WsStories() {
  const stories = [
    {
      type: "photo",
      tag: "Знакомство",
      title: "Катерина Кузнецова",
      subtitle: "Организатор и координатор свадебных торжеств",
      body: "Набережные Челны · Казань",
      image: "https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/ca05874b-c9cf-439d-a9b3-a52d97e07d8c.jpg",
      cta: null,
    },
    {
      type: "organizer",
      tag: "Организатор",
      title: "Свадьба под ключ",
      subtitle: null,
      body: null,
      image: "https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/7f145795-54fe-4e93-b889-7bf1211b7b4b.jpg",
      points: [
        "Подбор локации и декора",
        "Составление сметы мероприятия",
        "Команда специалистов под ключ",
        "Тайминг и сопровождение в день",
      ],
      price: "от 30 000 ₽",
      cta: "Записаться",
    },
    {
      type: "coordinator",
      tag: "Координатор",
      title: "День торжества",
      subtitle: null,
      body: null,
      image: "https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/ece42f75-9d2a-48ad-940f-43eb58b8909a.jpg",
      points: [
        "Контроль тайминга весь день",
        "Решение любых ситуаций",
        "Взаимодействие с командой",
        "Вы — только наслаждаетесь",
      ],
      price: "15 000 ₽",
      cta: "Записаться",
    },
  ]

  return (
    <section className="py-20 px-6 md:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Wabi Sabi Studio
          </p>
          <h2
            className="text-foreground leading-[1.2]"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              fontWeight: 400,
            }}
          >
            Сохраните в сторис
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden flex flex-col"
              style={{
                aspectRatio: "9/16",
                background: "hsl(36, 18%, 92%)",
                border: "1px solid hsl(36, 12%, 82%)",
              }}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                  style={{ filter: story.type === "photo" ? "none" : "brightness(35%) contrast(110%)" }}
                />
                {story.type !== "photo" && (
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(30,15,15,0.95) 60%, rgba(30,15,15,0.5) 100%)" }} />
                )}
                {story.type === "photo" && (
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,10,10,0.85) 45%, rgba(20,10,10,0.15) 100%)" }} />
                )}
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-between h-full p-5">
                {/* Top tag */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-white/90 text-[9px] tracking-[0.3em] uppercase px-2.5 py-1"
                    style={{ background: "hsl(345, 45%, 28%)", fontWeight: 600 }}
                  >
                    {story.tag}
                  </span>
                  <span className="text-white/40 text-[9px] tracking-widest uppercase">
                    wabi sabi
                  </span>
                </div>

                {/* Bottom content */}
                <div>
                  {story.type === "photo" ? (
                    <>
                      <p
                        className="text-white/60 text-[9px] tracking-[0.2em] uppercase mb-2"
                      >
                        {story.body}
                      </p>
                      <p
                        className="text-white leading-tight mb-1"
                        style={{
                          fontFamily: "Cormorant Garamond, serif",
                          fontSize: "1.3rem",
                          fontWeight: 400,
                        }}
                      >
                        {story.title}
                      </p>
                      <p
                        className="text-white/70 leading-snug"
                        style={{
                          fontFamily: "Cormorant Garamond, serif",
                          fontSize: "0.8rem",
                          fontStyle: "italic",
                          fontWeight: 300,
                        }}
                      >
                        {story.subtitle}
                      </p>
                      <div className="mt-4 pt-4 border-t border-white/20">
                        <p className="text-white/50 text-[9px] tracking-widest uppercase">
                          Первая консультация — бесплатно
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <p
                        className="text-white leading-tight mb-3"
                        style={{
                          fontFamily: "Cormorant Garamond, serif",
                          fontSize: "1.25rem",
                          fontWeight: 400,
                        }}
                      >
                        {story.title}
                      </p>
                      <ul className="space-y-1.5 mb-4">
                        {story.points?.map((p, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span style={{ color: "hsl(345, 55%, 55%)" }} className="text-xs mt-0.5 shrink-0">✦</span>
                            <span className="text-white/75 text-[10px] leading-snug font-light">{p}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between pt-3 border-t border-white/15">
                        <span
                          className="text-white/90"
                          style={{
                            fontFamily: "Cormorant Garamond, serif",
                            fontSize: "1rem",
                            fontWeight: 300,
                          }}
                        >
                          {story.price}
                        </span>
                        <span
                          className="text-white text-[9px] tracking-[0.2em] uppercase px-3 py-1.5"
                          style={{ background: "hsl(345, 45%, 28%)" }}
                        >
                          {story.cta}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-xs font-light mt-8 tracking-wide">
          Сохраните или сделайте скриншот — поделитесь с теми, кто планирует свадьбу
        </p>
      </div>
    </section>
  )
}
