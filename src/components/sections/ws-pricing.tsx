const plans = [
  {
    name: "Консультация",
    price: "Бесплатно",
    description: "Знакомство, обсуждение вашей ситуации, ответы на вопросы",
    highlight: false,
  },
  {
    name: "Частичное планирование",
    price: "от 5 000 ₽",
    description: "Помощь на конкретном этапе — выбор места, специалистов или декора",
    highlight: false,
  },
  {
    name: "Координация",
    price: "15 000 ₽",
    description: "Полное сопровождение в день торжества — от рассвета до последнего гостя",
    highlight: true,
  },
  {
    name: "Частичное планирование + Координация",
    price: "от 18 000 ₽",
    description: "Помощь в подготовке и личное присутствие в день свадьбы",
    highlight: false,
  },
  {
    name: "Полная организация",
    price: "от 30 000 ₽",
    description: "Весь путь от идеи до финального танца — под ключ",
    highlight: false,
  },
]

export function WsPricing() {
  return (
    <section id="pricing" className="py-28 px-6 md:px-16 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Стоимость
          </p>
          <h2
            className="text-foreground leading-[1.2]"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
            }}
          >
            Пакеты услуг
          </h2>
        </div>

        <div className="space-y-3">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 border transition-all duration-300 ${
                plan.highlight
                  ? "text-white border-transparent"
                  : "bg-background border-border hover:border-foreground/20"
              }`}
              style={plan.highlight ? { background: "hsl(345, 45%, 28%)" } : undefined}
            >
              <div className="flex-1">
                <h3
                  className={`mb-1 ${plan.highlight ? "text-white" : "text-foreground"}`}
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "1.25rem",
                    fontWeight: plan.highlight ? 500 : 400,
                  }}
                >
                  {plan.name}
                </h3>
                <p className={`text-sm font-light ${plan.highlight ? "text-white/75" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>
              <div className="shrink-0 text-right">
                <p
                  className={`tracking-wide ${plan.highlight ? "text-white" : "text-foreground"}`}
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "1.4rem",
                    fontWeight: 400,
                  }}
                >
                  {plan.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm font-light mt-8 leading-relaxed">
          Окончательная стоимость может варьироваться в зависимости от сложности мероприятия<br className="hidden md:block" />
          и ваших индивидуальных предпочтений. Первая консультация — всегда бесплатно.
        </p>

        <div className="text-center mt-10">
          <a
            href="#form"
            className="inline-block px-10 py-3 text-white text-xs tracking-[0.2em] uppercase hover:opacity-85 transition-opacity"
            style={{ background: "hsl(145, 20%, 32%)" }}
          >
            Обсудить на консультации
          </a>
        </div>
      </div>
    </section>
  )
}