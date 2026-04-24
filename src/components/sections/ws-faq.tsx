import { useState } from "react"
import Icon from "@/components/ui/icon"

const faqs = [
  {
    q: "Зачем мне координатор, если в ресторане уже есть банкетный менеджер?",
    a: "Банкетный менеджер следит за кухней, обслуживанием и работой зала — это его зона ответственности. Координатор думает о вас: следит за тем, чтобы фотограф был в нужном месте, ведущий не затянул речь, флорист приехал вовремя, а вы успели перевести дух перед выходом. Менеджер площадки — за еду. Я — за вас как пару.",
  },
  {
    q: "Мы уже начали организовывать свадьбу сами. Вы можете подключиться на любом этапе?",
    a: "Конечно. Именно для этого существует услуга «Частичное планирование» — я подключаюсь там, где вы застряли или чувствуете неуверенность. Не нужно начинать с нуля. Просто расскажите, что уже сделано, и мы продолжим вместе.",
  },
  {
    q: "Как рассчитывается стоимость? Могут ли быть скрытые расходы?",
    a: "Нет. На первой консультации я формирую смету: вы видите все статьи расходов заранее. Моё вознаграждение фиксировано и прописывается в договоре. Если что-то меняется по вашей инициативе — обсуждаем и согласовываем отдельно, без сюрпризов.",
  },
  {
    q: "Что если что-то пойдёт не по плану в день свадьбы?",
    a: "Именно поэтому я и нужна. Моя главная компетенция — решать проблемы так, чтобы вы об этом не узнали. Опоздал флорист, сломался реквизит, гость потерялся — всё это моя работа, а не ваша головная боль.",
  },
  {
    q: "Вы работаете только в Набережных Челнах и Казани?",
    a: "Преимущественно да, но готова обсудить выездные мероприятия. Напишите — найдём решение.",
  },
]

export function WsFaq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-28 px-6 md:px-16" style={{ background: "hsl(var(--surface))" }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Вопросы и ответы
          </p>
          <h2
            className="text-foreground leading-[1.2]"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
            }}
          >
            Частые вопросы
          </h2>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <button
                className="w-full flex items-start justify-between gap-4 py-6 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <p
                  className={`text-foreground font-light leading-snug pr-4 transition-opacity ${open === i ? "opacity-100" : "opacity-75"}`}
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "1.1rem",
                    fontWeight: open === i ? 500 : 400,
                  }}
                >
                  {faq.q}
                </p>
                <Icon
                  name={open === i ? "Minus" : "Plus"}
                  size={16}
                  className="text-muted-foreground shrink-0 mt-1"
                />
              </button>
              {open === i && (
                <div className="pb-6 pr-8">
                  <p className="text-foreground/70 font-light text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
