export function WsAbout() {
  return (
    <section id="about" className="py-28 px-6 md:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo collage */}
          <div className="relative">
            <div className="relative w-full max-w-sm mx-auto md:mx-0">
              {/* Main image */}
              <div className="photo-tape relative z-10">
                <img
                  src="https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/33cd5a2c-0ed0-490a-92eb-b5a0305aad3f.jpg"
                  alt="Организатор"
                  className="w-full object-cover grayscale"
                  style={{ aspectRatio: "3/4" }}
                />
              </div>
              {/* Floating quote card */}
              <div
                className="absolute -bottom-6 -right-6 md:-right-12 bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-5 max-w-[200px] z-20 shadow-sm"
              >
                <p
                  className="text-foreground/80 leading-relaxed"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "1rem",
                    fontStyle: "italic",
                    fontWeight: 300,
                  }}
                >
                  «За безупречным торжеством стоят сотни звонков и решений.»
                </p>
              </div>
              {/* Decorative stripe patch */}
              <div
                className="absolute -top-4 -left-4 w-16 h-20 opacity-30 border border-stone-400"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    90deg,
                    hsl(220 30% 55%) 0px,
                    hsl(220 30% 55%) 2px,
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
              className="text-foreground mb-8 leading-[1.2]"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
              }}
            >
              Человек,<br />
              <em>который думает за вас</em>
            </h2>
            <div className="space-y-5 text-foreground/70 font-light leading-relaxed text-[15px]">
              <p>
                Я — организатор и координатор свадебных торжеств. Я знаю, что за безупречным
                праздником стоят сотни звонков, таблиц, согласований и решений, принятых в
                последнюю минуту.
              </p>
              <p>
                Моя задача — подарить вам лёгкость. Чтобы в день свадьбы вы думали только
                о друг друге, а не о том, приехал ли флорист и правильно ли расставлены
                столы.
              </p>
              <p>
                Каждая свадьба для меня — это история. Вашa история. И я хочу, чтобы она
                была рассказана именно так, как вы об этом мечтали.
              </p>
            </div>
            <div className="mt-10 pt-8 border-t border-border flex gap-12">
              <div>
                <p
                  className="text-foreground"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "2.2rem",
                    fontWeight: 300,
                  }}
                >
                  50+
                </p>
                <p className="text-muted-foreground text-xs tracking-widest uppercase mt-1">
                  Пар доверились
                </p>
              </div>
              <div>
                <p
                  className="text-foreground"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "2.2rem",
                    fontWeight: 300,
                  }}
                >
                  5+
                </p>
                <p className="text-muted-foreground text-xs tracking-widest uppercase mt-1">
                  Лет в профессии
                </p>
              </div>
              <div>
                <p
                  className="text-foreground"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "2.2rem",
                    fontWeight: 300,
                  }}
                >
                  2
                </p>
                <p className="text-muted-foreground text-xs tracking-widest uppercase mt-1">
                  Города
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
