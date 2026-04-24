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
                  src="https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/files/5b8f5aa6-8605-481b-8a39-aac66e299407.jpg"
                  alt="Организатор"
                  className="w-full object-cover"
                  style={{ aspectRatio: "3/4", filter: "sepia(8%) contrast(97%)" }}
                />
              </div>
              {/* Floating quote card */}
              <div
                className="absolute -bottom-6 -right-6 md:-right-12 bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-5 max-w-[220px] z-20 shadow-sm"
              >
                <p
                  className="text-foreground/80 leading-relaxed"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "0.95rem",
                    fontStyle: "italic",
                    fontWeight: 300,
                  }}
                >
                  «Я занимаюсь всем важным и сложным — а вы просто наслаждаетесь вашим вечером.»
                </p>
              </div>
              {/* Decorative stripe patch */}
              <div
                className="absolute -top-4 -left-4 w-16 h-20 opacity-25 border"
                style={{
                  borderColor: "hsl(145, 20%, 32%)",
                  backgroundImage: `repeating-linear-gradient(
                    90deg,
                    hsl(145, 20%, 32%) 0px,
                    hsl(145, 20%, 32%) 2px,
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
              className="mb-8 leading-[1.2]"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "hsl(30, 15%, 18%)",
              }}
            >
              Человек,<br />
              <em style={{ color: "hsl(345, 45%, 28%)" }}>который думает за вас</em>
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
            <div className="mt-10 pt-8 border-t border-border">
              <a
                href="#form"
                className="inline-block px-8 py-3 text-white text-xs tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
                style={{ background: "hsl(145, 20%, 32%)" }}
              >
                Познакомимся?
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}