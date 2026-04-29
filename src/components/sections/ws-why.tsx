const reasons = [
  {
    number: "01",
    title: "Стоит только сказать «Да»",
    text: "Все переговоры, согласования, напоминания и контроль — на мне. Вам остаётся лишь наслаждаться моментом.",
    accent: "cherry",
  },
  {
    number: "02",
    title: "Экономия вашего бюджета",
    text: "Помогу распределить бюджет грамотно — без лишних трат и неприятных сюрпризов в конце.",
    accent: "cherry",
  },
  {
    number: "03",
    title: "Всегда на связи",
    text: "Любой вопрос «А что если...?» не останется без ответа. Отвечу быстро и по делу.",
    accent: "cherry",
  },
  {
    number: "04",
    title: "Ваш день — воспоминание, которое останется с вами навсегда",
    text: "Свадьба — это не просто праздник. Это день, который вы будете помнить всегда. Я отношусь к нему именно так — с полной отдачей, вниманием к каждой детали и уважением к вашей истории.",
    accent: "cherry",
  },
]

export function WsWhy() {
  return (
    <section id="why" className="py-16 md:py-28 px-5 md:px-16" style={{ background: "hsl(var(--surface))" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Почему мне доверяют
            </p>
            <h2
              className="leading-[1.2] mb-6"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "hsl(30, 15%, 18%)",
              }}
            >
              Подход,<br />
              <em style={{ color: "hsl(345, 45%, 28%)" }}>который меняет всё</em>
            </h2>
            <p className="text-foreground/70 font-light leading-relaxed mb-8">
              Я не просто организовываю мероприятия. Я беру на себя <span style={{ color: "hsl(345, 45%, 28%)" }}>тревогу</span>, которая сопровождает
              каждую пару в процессе подготовки — и превращаю её в <span style={{ color: "hsl(345, 45%, 28%)" }}>лёгкость</span>.
            </p>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/43bc7a47-a274-4b16-8f57-51c1c32969a1.jpg"
                alt="Атмосфера свадьбы"
                className="w-full object-cover"
                style={{ aspectRatio: "4/3", filter: "contrast(96%) brightness(99%)" }}
              />
            </div>
          </div>

          <div className="space-y-8">
            {reasons.map((r) => (
              <div key={r.number} className="flex gap-6 items-start group">
                <p
                  className="shrink-0 w-8 mt-0.5"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "0.9rem",
                    fontWeight: 300,
                    letterSpacing: "0.1em",
                    color: "hsl(345, 45%, 28%)",
                    opacity: 0.7,
                  }}
                >
                  {r.number}
                </p>
                <div
                  className="pt-5 flex-1"
                  style={{
                    borderTop: "1px solid hsl(345 45% 28% / 0.2)",
                  }}
                >
                  <h4
                    className="mb-2"
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "1.2rem",
                      fontWeight: 400,
                      color: "hsl(345, 45%, 28%)",
                    }}
                  >
                    {r.title}
                  </h4>
                  <p className="text-foreground/65 font-light text-sm leading-relaxed">{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee strip */}
        <div className="mt-20 overflow-hidden border-t border-b border-border py-5">
          <div className="flex gap-12 whitespace-nowrap w-max" style={{ animation: "marquee 65s linear infinite" }}>
            {Array(6).fill([
              "Организация свадьбы",
              "·",
              "Координация торжества",
              "·",
              "Набережные Челны",
              "·",
              "Казань",
              "·",
              "Wabi Sabi Studio",
              "·",
            ]).flat().map((item, i) => (
              <span
                key={i}
                className="text-xs tracking-[0.25em] uppercase"
                style={{ color: "hsl(345, 45%, 28%)" }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}