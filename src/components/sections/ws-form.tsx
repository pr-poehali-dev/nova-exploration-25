import { useState } from "react"

const contactOptions = [
  "Телефонный звонок",
  "WhatsApp / Telegram",
  "Электронная почта",
]

export function WsForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    brideName: "",
    groomName: "",
    phone: "",
    email: "",
    contactMethod: "",
    weddingDate: "",
    city: "",
    expectations: "",
    hasStyle: "",
    styleDescription: "",
    comments: "",
    consent: false,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="form" className="py-28 px-6 md:px-16 bg-background">
        <div className="max-w-xl mx-auto text-center">
          <p
            className="text-foreground mb-4"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "2.5rem",
              fontWeight: 300,
            }}
          >
            Спасибо ✦
          </p>
          <p className="text-foreground/70 font-light leading-relaxed">
            Я получила вашу заявку и свяжусь с вами в ближайшее время.
            Пусть ваш день будет именно таким, каким вы его представляли.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="form" className="py-28 px-6 md:px-16 bg-background">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Начало пути
          </p>
          <h2
            className="text-foreground leading-[1.2] mb-4"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
            }}
          >
            Создадим ваш<br />
            <em>идеальный день</em>
          </h2>
          <p className="text-muted-foreground font-light text-sm">
            Расскажите немного о себе — и мы найдём время для знакомства
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Names row */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                Имя невесты
              </label>
              <input
                type="text"
                name="brideName"
                value={form.brideName}
                onChange={handleChange}
                placeholder="Анна"
                className="w-full bg-transparent border border-border px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/40 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                Имя жениха
              </label>
              <input
                type="text"
                name="groomName"
                value={form.groomName}
                onChange={handleChange}
                placeholder="Александр"
                className="w-full bg-transparent border border-border px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/40 transition-colors"
              />
            </div>
          </div>

          {/* Contact row */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                Номер телефона
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+7 (___) ___-__-__"
                className="w-full bg-transparent border border-border px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/40 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                Электронная почта
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="hello@example.com"
                className="w-full bg-transparent border border-border px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/40 transition-colors"
              />
            </div>
          </div>

          {/* Contact method */}
          <div>
            <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
              Предпочитаемый способ связи
            </label>
            <div className="flex flex-wrap gap-3">
              {contactOptions.map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setForm((p) => ({ ...p, contactMethod: opt }))}
                  className={`px-4 py-2 text-xs tracking-wide border transition-all ${
                    form.contactMethod === opt
                      ? "text-white border-transparent"
                      : "bg-transparent text-foreground border-border hover:border-foreground/30"
                  }`}
                  style={form.contactMethod === opt ? { background: "hsl(145, 20%, 32%)" } : undefined}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Wedding date + city */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                Предполагаемая дата свадьбы
              </label>
              <input
                type="date"
                name="weddingDate"
                value={form.weddingDate}
                onChange={handleChange}
                className="w-full bg-transparent border border-border px-4 py-3 text-sm font-light text-foreground focus:outline-none focus:border-foreground/40 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                Город проведения
              </label>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="Набережные Челны"
                className="w-full bg-transparent border border-border px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/40 transition-colors"
              />
            </div>
          </div>

          {/* Expectations */}
          <div>
            <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
              Ваши ожидания и пожелания
            </label>
            <textarea
              name="expectations"
              value={form.expectations}
              onChange={handleChange}
              placeholder="Расскажите, каким вы видите свой день..."
              rows={4}
              className="w-full bg-transparent border border-border px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/40 transition-colors resize-none"
            />
          </div>

          {/* Has style */}
          <div>
            <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
              Есть ли уже идея по стилю свадьбы?
            </label>
            <div className="flex gap-3 mb-3">
              {["Да", "Нет"].map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setForm((p) => ({ ...p, hasStyle: opt }))}
                  className={`px-6 py-2 text-xs tracking-wide border transition-all ${
                    form.hasStyle === opt
                      ? "text-white border-transparent"
                      : "bg-transparent text-foreground border-border hover:border-foreground/30"
                  }`}
                  style={form.hasStyle === opt ? { background: "hsl(345, 45%, 28%)" } : undefined}
                >
                  {opt}
                </button>
              ))}
            </div>
            {form.hasStyle === "Да" && (
              <input
                type="text"
                name="styleDescription"
                value={form.styleDescription}
                onChange={handleChange}
                placeholder="Коротко опишите идею..."
                className="w-full bg-transparent border border-border px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/40 transition-colors"
              />
            )}
          </div>

          {/* Comments */}
          <div>
            <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
              Дополнительные комментарии или вопросы
            </label>
            <textarea
              name="comments"
              value={form.comments}
              onChange={handleChange}
              placeholder="Всё, что хотите добавить..."
              rows={3}
              className="w-full bg-transparent border border-border px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/40 transition-colors resize-none"
            />
          </div>

          {/* Consent */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              name="consent"
              id="consent"
              checked={form.consent}
              onChange={handleChange}
              required
              className="mt-1 shrink-0 accent-stone-600"
            />
            <label htmlFor="consent" className="text-xs text-muted-foreground font-light leading-relaxed">
              Я согласна(-ен) на обработку персональных данных в соответствии с политикой конфиденциальности.
              Данные используются исключительно для связи и проведения консультации.
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-4 text-white text-xs tracking-[0.25em] uppercase hover:opacity-85 transition-opacity mt-4"
            style={{ background: "hsl(345, 45%, 28%)" }}
          >
            Записаться на консультацию
          </button>
        </form>
      </div>
    </section>
  )
}