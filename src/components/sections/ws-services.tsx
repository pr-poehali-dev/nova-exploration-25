import { useState } from "react"
import Icon from "@/components/ui/icon"

const organizer = [
  { icon: "MessageCircle", text: "Консультации по всем аспектам торжества" },
  { icon: "MapPin", text: "Подбор локации и декора под ваши желания, продумывание всех деталей" },
  { icon: "Calculator", text: "Составление сметы мероприятия" },
  { icon: "Users", text: "Подбор свадебных специалистов: ведущие, флористы, фотографы, визажист, кейтеринг и др." },
  { icon: "Clock", text: "Создание тайминга мероприятия" },
  { icon: "Star", text: "Сопровождение в день торжества с утра до ухода последнего гостя" },
]

const partial = [
  { icon: "Puzzle", text: "Помощь в организации отдельных элементов (выбор места, специалистов, декор)" },
  { icon: "HelpCircle", text: "Поддержка на любом этапе — когда застряли и не знаете «что дальше»" },
  { icon: "CheckCircle", text: "Гибкий формат: берём ровно столько, сколько нужно" },
]

const coordinator = [
  { icon: "CalendarCheck", text: "Полное сопровождение в день торжества" },
  { icon: "ListChecks", text: "Контроль за выполнением таймлайна" },
  { icon: "Shield", text: "Решение любых организационных и непредвиденных ситуаций" },
  { icon: "Users2", text: "Взаимодействие с гостями и всеми специалистами" },
]

export function WsServices() {
  const [active, setActive] = useState<"organizer" | "partial" | "coordinator">("organizer")

  return (
    <section id="services" className="py-28 px-6 md:px-16" style={{ background: "hsl(var(--surface))" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Услуги
          </p>
          <h2
            className="text-foreground leading-[1.2]"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
            }}
          >
            Мы думаем за вас.<br />
            <em>Мы контролируем за вас.</em>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-12 justify-center">
          {[
            { key: "organizer", label: "Организатор", sub: "Full Service" },
            { key: "partial", label: "Частичное планирование", sub: "Помощь на этапе" },
            { key: "coordinator", label: "Координатор", sub: "День торжества" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key as typeof active)}
              className={`px-6 py-4 text-left border transition-all duration-300 ${
                active === tab.key
                  ? "bg-foreground text-background border-foreground"
                  : "bg-background text-foreground border-border hover:border-foreground/30"
              }`}
            >
              <p className={`text-xs tracking-[0.15em] uppercase mb-0.5 ${active === tab.key ? "text-background/60" : "text-muted-foreground"}`}>
                {tab.sub}
              </p>
              <p
                className="leading-tight"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "1.1rem",
                  fontWeight: active === tab.key ? 500 : 400,
                }}
              >
                {tab.label}
              </p>
            </button>
          ))}
        </div>

        {/* Content cards */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Service list */}
          <div className="wabi-card p-8">
            {active === "organizer" && (
              <>
                <h3
                  className="text-foreground mb-2"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.5rem", fontWeight: 400 }}
                >
                  Свадебный организатор
                </h3>
                <p className="text-muted-foreground text-sm mb-8">
                  Для тех, кто хочет наслаждаться каждым моментом подготовки — не теряясь в деталях
                </p>
                <ul className="space-y-5">
                  {organizer.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <Icon name={item.icon} size={16} className="text-muted-foreground mt-0.5 shrink-0" />
                      <span className="text-foreground/80 font-light text-sm leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {active === "partial" && (
              <>
                <h3
                  className="text-foreground mb-2"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.5rem", fontWeight: 400 }}
                >
                  Частичное планирование
                </h3>
                <p className="text-muted-foreground text-sm mb-8">
                  Когда начали сами, но застряли на каком-то этапе и задаётесь вопросом «что делать дальше?»
                </p>
                <ul className="space-y-5">
                  {partial.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <Icon name={item.icon} size={16} className="text-muted-foreground mt-0.5 shrink-0" />
                      <span className="text-foreground/80 font-light text-sm leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {active === "coordinator" && (
              <>
                <h3
                  className="text-foreground mb-2"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.5rem", fontWeight: 400 }}
                >
                  Координатор на день торжества
                </h3>
                <p className="text-muted-foreground text-sm mb-8">
                  Вы всё подготовили сами — но в день свадьбы хотите быть гостем, а не менеджером
                </p>
                <ul className="space-y-5">
                  {coordinator.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <Icon name={item.icon} size={16} className="text-muted-foreground mt-0.5 shrink-0" />
                      <span className="text-foreground/80 font-light text-sm leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* Visual side */}
          <div className="relative">
            <img
              src="https://cdn.poehali.dev/projects/2a0a2c2e-9d24-43e5-b790-5299a6e10c49/bucket/13efd93d-1ca2-4787-a753-a6c3014c219f.jpg"
              alt="Эстетика"
              className="w-full object-cover"
              style={{ aspectRatio: "3/4", filter: "sepia(15%) contrast(95%)" }}
            />
            <div className="absolute bottom-6 left-6 right-6 bg-background/90 p-5 border border-border">
              <p
                className="text-foreground/80 leading-relaxed"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "1.05rem",
                  fontStyle: "italic",
                  fontWeight: 300,
                }}
              >
                «Ваша единственная забота — сказать "Да".»
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
