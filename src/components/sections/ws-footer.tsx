export function WsFooter() {
  return (
    <footer className="py-12 md:py-16 px-5 md:px-16 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-12">
          <div>
            <p
              className="text-foreground tracking-[0.2em] uppercase mb-4"
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem", fontWeight: 300 }}
            >
              Wabi Sabi Studio
            </p>
            <p className="text-muted-foreground font-light text-sm leading-relaxed">
              Организатор и координатор свадебных торжеств.<br />
              Набережные Челны · Казань
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Услуги
            </p>
            <ul className="space-y-2">
              {[
                "Полная организация",
                "Частичное планирование",
                "Координация на день",
                "Консультация (бесплатно)",
              ].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-foreground/65 font-light text-sm hover:text-foreground transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Связаться
            </p>
            <ul className="space-y-3 text-foreground/65 font-light text-sm">
              <li>
                <a href="tel:+79959815904" className="hover:text-foreground transition-colors">
                  +7 995 981-59-04
                </a>
              </li>
              <li>
                <a href="mailto:loarnoar@gmail.com" className="hover:text-foreground transition-colors">
                  loarnoar@gmail.com
                </a>
              </li>
              <li>
                <a href="https://t.me/kateandtheend" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  Telegram: @kateandtheend
                </a>
              </li>
              <li>
                <a href="#form" className="hover:text-foreground transition-colors" style={{ color: "hsl(345, 45%, 28%)" }}>
                  Оставить заявку →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs font-light tracking-wide">
            © 2026 Wabi Sabi Studio — начало пути.
          </p>
          <p
            className="text-muted-foreground/50 text-xs tracking-[0.2em]"
            style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic" }}
          >
            обещаю танцевать с тобой сквозь жизнь
          </p>
        </div>
      </div>
    </footer>
  )
}