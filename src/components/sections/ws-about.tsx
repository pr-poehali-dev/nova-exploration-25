export function WsAbout() {
  return (
    <section id="about" className="py-28 px-6 md:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo collage */}
          <div className="relative">
            <div className="relative w-full max-w-sm mx-auto md:mx-0">
              {/* Main image with tape */}
              <div className="relative z-10">
                {/* Tape strip top-left */}
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 z-20"
                  style={{ width: "64px", height: "20px", background: "rgba(210, 190, 160, 0.55)", transform: "translateX(-50%) rotate(-1deg)" }}
                />
                <img
                  src="https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/ca05874b-c9cf-439d-a9b3-a52d97e07d8c.jpg"
                  alt="Организатор"
                  className="w-full object-cover object-top"
                  style={{ aspectRatio: "3/4" }}
                />
              </div>
              {/* Floating quote card */}
              <div
                className="absolute -bottom-6 -right-6 md:-right-12 bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-5 max-w-[220px] z-20 shadow-sm"
              >
                <p
                  className="leading-relaxed"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "0.95rem",
                    fontStyle: "italic",
                    fontWeight: 300,
                    color: "hsl(345, 45%, 28%)",
                  }}
                >
                  «Я займусь всеми важными и сложными вопросами — а вам остаётся лишь наслаждаться вашим прекрасным вечером.»
                </p>
              </div>
              {/* Decorative stripe patch */}
              <div
                className="absolute -top-4 -left-4 w-16 h-20 opacity-20 border"
                style={{
                  borderColor: "hsl(345, 45%, 28%)",
                  backgroundImage: `repeating-linear-gradient(
                    90deg,
                    hsl(345, 45%, 28%) 0px,
                    hsl(345, 45%, 28%) 2px,
                    transparent 2px,
                    transparent 8px
                  )`,
                }}
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Обо мне
            </p>
            <h2
              className="mb-2 leading-[1.2]"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "hsl(30, 15%, 18%)",
              }}
            >
              Человек,<br />
              <em style={{ color: "hsl(345, 45%, 28%)" }}>который позаботится о важном дне</em>
            </h2>
            <p
              className="mb-8 font-light"
              style={{ color: "hsl(345, 45%, 28%)", fontSize: "1.05rem", fontFamily: "Cormorant Garamond, serif", fontStyle: "italic" }}
            >
              Катерина Кузнецова
            </p>
            <div className="space-y-5 text-foreground/70 font-light leading-relaxed text-[15px]">
              <p>
                Я — организатор и координатор свадебных торжеств. Я знаю, что за безупречным
                праздником стоят сотни звонков, таблиц, согласований и решений, принятых в
                последнюю минуту.
              </p>
              <p>
                Моя задача — подарить вам <span style={{ color: "hsl(345, 45%, 28%)" }}>праздник и спокойствие</span> в важный день.
                Чтобы вы думали только о друг друге, а не о том, приехал ли флорист и
                правильно ли расставлены столы.
              </p>
              <p>
                Каждая свадьба для меня — это <span style={{ color: "hsl(345, 45%, 28%)" }}>история</span>. Ваша история. И я хочу, чтобы она
                была рассказана именно так, как вы об этом мечтали.
              </p>
            </div>
            <div className="mt-10 pt-8 border-t border-border">
              <a
                href="#form"
                className="inline-block text-xs tracking-[0.2em] uppercase hover:opacity-70 transition-opacity"
                style={{ color: "hsl(345, 45%, 28%)" }}
              >
                Записаться на бесплатную консультацию →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}