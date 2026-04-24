export function WsStories() {
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

          {/* Карточка 1 — Обо мне */}
          <div
            className="relative overflow-hidden flex flex-col"
            style={{ aspectRatio: "9/16", background: "hsl(36, 20%, 95%)", border: "1px solid hsl(36, 12%, 82%)" }}
          >
            <div className="absolute inset-0">
              <img
                src="https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/ca05874b-c9cf-439d-a9b3-a52d97e07d8c.jpg"
                alt="Катерина"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(18,8,8,0.92) 40%, rgba(18,8,8,0.1) 100%)" }} />
            </div>
            <div className="relative z-10 flex flex-col justify-between h-full p-5">
              <div className="flex items-center justify-between">
                <span className="text-white/90 text-[9px] tracking-[0.3em] uppercase px-2.5 py-1 font-semibold" style={{ background: "hsl(345, 45%, 28%)" }}>
                  Обо мне
                </span>
                <span className="text-white/40 text-[9px] tracking-widest uppercase">wabi sabi</span>
              </div>
              <div>
                <p className="text-white/55 text-[9px] tracking-[0.2em] uppercase mb-2">
                  Набережные Челны · Казань
                </p>
                <p
                  className="text-white leading-tight mb-1.5"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.4rem", fontWeight: 400 }}
                >
                  Катерина<br />Кузнецова
                </p>
                <p
                  className="text-white/65 leading-snug mb-5"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "0.78rem", fontStyle: "italic", fontWeight: 300 }}
                >
                  Организатор и координатор свадебных торжеств
                </p>
                <div className="border-t border-white/15 pt-4 space-y-1.5">
                  <p className="text-white/50 text-[9px] tracking-widest uppercase">Первая консультация — бесплатно</p>
                  <p className="text-white/35 text-[8px] tracking-widest uppercase">@kateandtheend</p>
                </div>
              </div>
            </div>
          </div>

          {/* Карточка 2 — Услуги */}
          <div
            className="relative overflow-hidden flex flex-col"
            style={{ aspectRatio: "9/16", background: "hsl(36, 20%, 95%)", border: "1px solid hsl(36, 12%, 82%)" }}
          >
            <div className="absolute inset-0">
              <img
                src="https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/7f145795-54fe-4e93-b889-7bf1211b7b4b.jpg"
                alt="Услуги"
                className="w-full h-full object-cover"
                style={{ filter: "brightness(28%)" }}
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(18,8,8,0.98) 50%, rgba(18,8,8,0.4) 100%)" }} />
            </div>
            <div className="relative z-10 flex flex-col justify-between h-full p-5">
              <div className="flex items-center justify-between">
                <span className="text-white/90 text-[9px] tracking-[0.3em] uppercase px-2.5 py-1 font-semibold" style={{ background: "hsl(345, 45%, 28%)" }}>
                  Услуги
                </span>
                <span className="text-white/40 text-[9px] tracking-widest uppercase">wabi sabi</span>
              </div>
              <div>
                <p
                  className="text-white leading-tight mb-5"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", fontWeight: 400 }}
                >
                  Что я<br />предлагаю
                </p>

                <div className="space-y-3 mb-5">
                  <div className="border-b border-white/10 pb-3">
                    <p className="text-white/90 text-[10px] tracking-[0.15em] uppercase mb-1.5" style={{ color: "hsl(345, 55%, 55%)" }}>Организатор</p>
                    <p className="text-white/65 text-[9px] leading-relaxed font-light">
                      Свадьба под ключ — от идеи до финального танца. Локация, декор, команда, тайминг.
                    </p>
                    <p className="text-white/80 text-[10px] mt-1.5" style={{ fontFamily: "Cormorant Garamond, serif" }}>от 30 000 ₽</p>
                  </div>
                  <div className="border-b border-white/10 pb-3">
                    <p className="text-[10px] tracking-[0.15em] uppercase mb-1.5" style={{ color: "hsl(345, 55%, 55%)" }}>Координатор</p>
                    <p className="text-white/65 text-[9px] leading-relaxed font-light">
                      Полное сопровождение в день торжества. Вы — только наслаждаетесь.
                    </p>
                    <p className="text-white/80 text-[10px] mt-1.5" style={{ fontFamily: "Cormorant Garamond, serif" }}>15 000 ₽</p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.15em] uppercase mb-1.5" style={{ color: "hsl(345, 55%, 55%)" }}>Частичное планирование</p>
                    <p className="text-white/65 text-[9px] leading-relaxed font-light">
                      Помощь там, где застряли. Без лишнего.
                    </p>
                    <p className="text-white/80 text-[10px] mt-1.5" style={{ fontFamily: "Cormorant Garamond, serif" }}>от 5 000 ₽</p>
                  </div>
                </div>

                <div className="border-t border-white/15 pt-3">
                  <p className="text-white/40 text-[9px] tracking-widest uppercase">Консультация — бесплатно</p>
                </div>
              </div>
            </div>
          </div>

          {/* Карточка 3 — Подход */}
          <div
            className="relative overflow-hidden flex flex-col"
            style={{ aspectRatio: "9/16", background: "hsl(36, 20%, 95%)", border: "1px solid hsl(36, 12%, 82%)" }}
          >
            <div className="absolute inset-0">
              <img
                src="https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/43bc7a47-a274-4b16-8f57-51c1c32969a1.jpg"
                alt="Подход"
                className="w-full h-full object-cover"
                style={{ filter: "brightness(28%)" }}
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(18,8,8,0.98) 50%, rgba(18,8,8,0.3) 100%)" }} />
            </div>
            <div className="relative z-10 flex flex-col justify-between h-full p-5">
              <div className="flex items-center justify-between">
                <span className="text-white/90 text-[9px] tracking-[0.3em] uppercase px-2.5 py-1 font-semibold" style={{ background: "hsl(345, 45%, 28%)" }}>
                  Подход
                </span>
                <span className="text-white/40 text-[9px] tracking-widest uppercase">wabi sabi</span>
              </div>
              <div>
                <p
                  className="text-white leading-tight mb-5"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", fontWeight: 400 }}
                >
                  Почему<br />доверяют
                </p>

                <div className="space-y-3.5 mb-5">
                  {[
                    { n: "01", title: "Вам стоит только сказать «Да»", text: "Все звонки, решения и контроль — на мне." },
                    { n: "02", title: "Экономия бюджета", text: "Грамотное распределение без лишних трат." },
                    { n: "03", title: "Всегда на связи", text: "Любой вопрос не останется без ответа." },
                    { n: "04", title: "Ваш день — событие на всю жизнь", text: "Отношусь к нему с полной отдачей." },
                  ].map((r) => (
                    <div key={r.n} className="flex gap-2.5 items-start">
                      <span
                        className="shrink-0 text-[8px] tracking-widest mt-0.5"
                        style={{ color: "hsl(345, 55%, 45%)", fontFamily: "Cormorant Garamond, serif" }}
                      >
                        {r.n}
                      </span>
                      <div>
                        <p className="text-white/85 text-[9px] leading-tight mb-0.5" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "0.65rem" }}>{r.title}</p>
                        <p className="text-white/45 text-[8px] leading-snug font-light">{r.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/15 pt-3">
                  <p className="text-white/40 text-[9px] tracking-widest uppercase">Набережные Челны · Казань</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <p className="text-center text-muted-foreground text-xs font-light mt-8 tracking-wide">
          Сохраните или сделайте скриншот — поделитесь с теми, кто планирует свадьбу
        </p>
      </div>
    </section>
  )
}
