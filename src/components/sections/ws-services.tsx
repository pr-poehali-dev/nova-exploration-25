import React, { useState } from "react"
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
            <span style={{ color: "hsl(345, 45%, 28%)" }}>Думаем</span> за вас.<br />
            <em><span style={{ color: "hsl(345, 45%, 28%)" }}>Контролируем</span> за вас.</em>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-12 justify-center">
          {[
            { key: "organizer", label: "Организатор", sub: "Полный цикл" },
            { key: "partial", label: "Частичное планирование", sub: "Помощь на этапе" },
            { key: "coordinator", label: "Координатор", sub: "День торжества" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key as typeof active)}
              className="px-6 py-4 text-left border transition-all duration-300"
              style={
                active === tab.key
                  ? { background: "hsl(345, 45%, 28%)", borderColor: "hsl(345, 45%, 28%)", color: "white" }
                  : { background: "hsl(var(--background))", borderColor: "hsl(var(--border))", color: "hsl(var(--foreground))" }
              }
            >
              <p
                className="text-xs tracking-[0.15em] uppercase mb-0.5"
                style={{ color: active === tab.key ? "rgba(255,255,255,0.65)" : undefined }}
              >
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
          <div className="wabi-card p-8 flex flex-col">
            {active === "organizer" && (
              <>
                <h3
                  className="mb-2"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.5rem", fontWeight: 400, color: "hsl(345, 45%, 28%)" }}
                >
                  Свадебный организатор
                </h3>
                <p className="text-muted-foreground text-sm mb-8">
                  Для тех, кто хочет <span className="font-medium text-foreground/80">наслаждаться</span> каждым моментом подготовки — не теряясь в деталях
                </p>
                <ul className="space-y-5 flex-1">
                  {organizer.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <Icon name={item.icon} size={16} className="mt-0.5 shrink-0" style={{ color: "hsl(345, 45%, 28%)" } as React.CSSProperties} />
                      <span className="text-foreground/80 font-light text-sm leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-border">
                  <a href="#form" className="text-xs tracking-[0.2em] uppercase font-semibold hover:opacity-70 transition-opacity" style={{ color: "hsl(345, 45%, 28%)" }}>
                    Выбрать этот пакет →
                  </a>
                </div>
              </>
            )}
            {active === "partial" && (
              <>
                <h3
                  className="mb-2"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.5rem", fontWeight: 400, color: "hsl(345, 45%, 28%)" }}
                >
                  Частичное планирование
                </h3>
                <p className="text-muted-foreground text-sm mb-8">
                  Когда начали сами, но <span className="font-medium text-foreground/80">застряли</span> на каком-то этапе и задаётесь вопросом «что делать дальше?»
                </p>
                <ul className="space-y-5 flex-1">
                  {partial.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <Icon name={item.icon} size={16} className="mt-0.5 shrink-0" style={{ color: "hsl(345, 45%, 28%)" } as React.CSSProperties} />
                      <span className="text-foreground/80 font-light text-sm leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-border">
                  <a href="#form" className="text-xs tracking-[0.2em] uppercase font-semibold hover:opacity-70 transition-opacity" style={{ color: "hsl(345, 45%, 28%)" }}>
                    Выбрать этот пакет →
                  </a>
                </div>
              </>
            )}
            {active === "coordinator" && (
              <>
                <h3
                  className="mb-2"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.5rem", fontWeight: 400, color: "hsl(345, 45%, 28%)" }}
                >
                  Координатор на день торжества
                </h3>
                <p className="text-muted-foreground text-sm mb-8">
                  Вы всё подготовили сами — но в день свадьбы хотите быть <span className="font-medium text-foreground/80">гостем, а не менеджером</span>
                </p>
                <ul className="space-y-5 flex-1">
                  {coordinator.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <Icon name={item.icon} size={16} className="mt-0.5 shrink-0" style={{ color: "hsl(345, 45%, 28%)" } as React.CSSProperties} />
                      <span className="text-foreground/80 font-light text-sm leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-border">
                  <a href="#form" className="text-xs tracking-[0.2em] uppercase font-semibold hover:opacity-70 transition-opacity" style={{ color: "hsl(345, 45%, 28%)" }}>
                    Выбрать этот пакет →
                  </a>
                </div>
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