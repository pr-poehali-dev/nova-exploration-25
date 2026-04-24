const cream = "hsl(36, 28%, 94%)"
const sand = "hsl(36, 20%, 82%)"
const cherry = "hsl(345, 45%, 28%)"
const cherryLight = "hsl(345, 55%, 55%)"
const darkText = "hsl(30, 15%, 22%)"
const muteText = "hsl(30, 8%, 50%)"

export function WsStories() {
  return (
    <section className="py-20 px-6 md:px-16" style={{ background: "hsl(var(--surface))" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Wabi Sabi Studio
          </p>
          <h2
            className="text-foreground leading-[1.2]"
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 400 }}
          >
            Сохраните в сторис
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">

          {/* Карточка 1 — Обо мне */}
          <div
            className="overflow-hidden flex flex-col"
            style={{ aspectRatio: "9/16", background: cream, border: `1px solid ${sand}` }}
          >
            <div className="shrink-0" style={{ height: "33%" }}>
              <img
                src="https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/ca05874b-c9cf-439d-a9b3-a52d97e07d8c.jpg"
                alt="Катерина"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between p-4" style={{ background: cream }}>
              <span
                className="text-white text-[9px] tracking-[0.3em] uppercase px-2.5 py-1 font-semibold inline-block self-start"
                style={{ background: cherry }}
              >
                Обо мне
              </span>
              <div>
                <p className="text-[9px] tracking-[0.15em] uppercase mb-0.5 font-semibold" style={{ color: cherry }}>
                  Катерина Кузнецова
                </p>
                <p
                  className="leading-snug mb-3"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "0.78rem", fontStyle: "italic", fontWeight: 300, color: darkText }}
                >
                  Организатор и координатор свадебных торжеств
                </p>
                <p className="text-[8px] leading-relaxed mb-2 font-light" style={{ color: darkText }}>
                  Моя задача — подарить вам праздник и спокойствие в важный день. Чтобы вы думали только о друг друге, а не о том, приехал ли флорист и правильно ли расставлены столы.
                </p>
                <p className="text-[8px] leading-relaxed font-light" style={{ color: muteText }}>
                  Каждая свадьба для меня — это история. Ваша история. И я хочу, чтобы она была рассказана именно так, как вы об этом мечтали.
                </p>
                <div className="border-t pt-2.5 mt-3 space-y-1 text-center" style={{ borderColor: sand }}>
                  <p className="text-[8px] tracking-widest uppercase" style={{ color: muteText }}>Набережные Челны · Казань</p>
                  <p className="text-[8px] tracking-widest uppercase font-semibold" style={{ color: cherry }}>Консультация — бесплатно</p>
                </div>
              </div>
            </div>
          </div>

          {/* Карточка 2 — Услуги */}
          <div
            className="overflow-hidden flex flex-col"
            style={{ aspectRatio: "9/16", background: cream, border: `1px solid ${sand}` }}
          >
            <div className="shrink-0 relative" style={{ height: "33%" }}>
              <img
                src="https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/7f145795-54fe-4e93-b889-7bf1211b7b4b.jpg"
                alt="Услуги"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 20%" }}
              />
              <div className="absolute inset-0" style={{ background: "rgba(57,18,18,0.15)" }} />
            </div>
            <div className="flex-1 flex flex-col justify-between p-4" style={{ background: cream }}>
              <span
                className="text-white text-[9px] tracking-[0.3em] uppercase px-2.5 py-1 font-semibold inline-block self-start"
                style={{ background: cherry }}
              >
                Услуги
              </span>
              <div className="space-y-2.5">
                {[
                  { label: "Организатор", desc: "Свадьба под ключ — от идеи до последнего танца молодожёнов", price: "от 30 000 ₽" },
                  { label: "Координатор", desc: "Сопровождение в день торжества — вам остаётся только наслаждаться вашим торжеством", price: "15 000 ₽" },
                  { label: "Частичное планирование", desc: "Помогаю разобраться с самыми важными и необходимыми вопросами", price: "от 5 000 ₽" },
                ].map((s) => (
                  <div key={s.label} className="border-b pb-2" style={{ borderColor: sand }}>
                    <p className="text-[8px] tracking-[0.15em] uppercase mb-0.5 font-semibold" style={{ color: cherry }}>{s.label}</p>
                    <p className="text-[8px] leading-snug font-light mb-0.5" style={{ color: muteText }}>{s.desc}</p>
                    <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "0.75rem", color: darkText }}>{s.price}</p>
                  </div>
                ))}
                <p className="text-[8px] tracking-widest uppercase font-semibold text-center" style={{ color: cherry }}>Консультация — бесплатно</p>
              </div>
            </div>
          </div>

          {/* Карточка 3 — Подход */}
          <div
            className="overflow-hidden flex flex-col"
            style={{ aspectRatio: "9/16", background: cream, border: `1px solid ${sand}` }}
          >
            <div className="shrink-0" style={{ height: "33%" }}>
              <img
                src="https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/43bc7a47-a274-4b16-8f57-51c1c32969a1.jpg"
                alt="Подход"
                className="w-full h-full object-cover"
                style={{ filter: "grayscale(15%)", objectPosition: "center 25%" }}
              />
            </div>
            <div className="flex-1 flex flex-col justify-between p-4" style={{ background: cream }}>
              <span
                className="text-white text-[9px] tracking-[0.3em] uppercase px-2.5 py-1 font-semibold inline-block self-start"
                style={{ background: cherry }}
              >
                Подход
              </span>
              <div className="space-y-2">
                {[
                  { n: "01", title: "Вам стоит только сказать «Да»", text: "Все звонки и решения — на мне." },
                  { n: "02", title: "Экономия бюджета", text: "Грамотно, без лишних трат." },
                  { n: "03", title: "Всегда на связи", text: "Ни один вопрос не останется без ответа." },
                  { n: "04", title: "Ваш день — событие на всю жизнь", text: "Полная отдача и внимание к каждой детали." },
                ].map((r) => (
                  <div key={r.n} className="flex gap-2 border-b pb-2" style={{ borderColor: sand }}>
                    <span className="shrink-0 text-[8px] mt-0.5" style={{ color: cherryLight, fontFamily: "Cormorant Garamond, serif" }}>{r.n}</span>
                    <div>
                      <p className="leading-tight mb-0.5 font-medium" style={{ fontSize: "0.58rem", color: darkText }}>{r.title}</p>
                      <p className="leading-snug font-light" style={{ fontSize: "0.55rem", color: muteText }}>{r.text}</p>
                    </div>
                  </div>
                ))}
                <p className="text-[8px] tracking-widest uppercase text-center" style={{ color: muteText }}>Набережные Челны · Казань</p>
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