const reasons = [
  {
    number: "01",
    title: "Вы думаете только о «Да»",
    text: "Все переговоры, согласования, напоминания и контроль — на мне. Вы наслаждаетесь процессом.",
  },
  {
    number: "02",
    title: "Экономия бюджета",
    text: "Знаю, как оптимизировать смету без потери качества. Мои связи с поставщиками — ваша выгода.",
  },
  {
    number: "03",
    title: "Всегда на связи",
    text: "Любой вопрос «А что если...?» не остаётся в пустоте. Отвечаю быстро и по делу.",
  },
  {
    number: "04",
    title: "Ваша история — не шаблон",
    text: "Каждая свадьба уникальна. Я не предлагаю готовые сценарии — я строю ваш день с нуля.",
  },
]

export function WsWhy() {
  return (
    <section id="why" className="py-28 px-6 md:px-16" style={{ background: "hsl(var(--surface))" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Почему мне доверяют
            </p>
            <h2
              className="text-foreground leading-[1.2] mb-6"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
              }}
            >
              Подход,<br />
              <em>который меняет всё</em>
            </h2>
            <p className="text-foreground/70 font-light leading-relaxed">
              Я не просто организовываю мероприятия. Я беру на себя тревогу, которая сопровождает
              каждую пару в процессе подготовки — и превращаю её в лёгкость.
            </p>
          </div>

          <div className="space-y-8">
            {reasons.map((r) => (
              <div key={r.number} className="flex gap-6 items-start group">
                <p
                  className="text-muted-foreground/40 shrink-0 w-8 mt-0.5"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "0.9rem",
                    fontWeight: 300,
                    letterSpacing: "0.1em",
                  }}
                >
                  {r.number}
                </p>
                <div className="border-t border-border pt-5 flex-1">
                  <h4
                    className="text-foreground mb-2"
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "1.2rem",
                      fontWeight: 400,
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
          <div className="flex gap-12 animate-marquee whitespace-nowrap w-max">
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
                className="text-muted-foreground/50 text-xs tracking-[0.25em] uppercase"
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
