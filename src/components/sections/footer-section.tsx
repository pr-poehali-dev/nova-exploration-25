import { motion } from "framer-motion"

const footerLinks = [
  { label: "Галерея", href: "#" },
  { label: "Выставка", href: "#" },
  { label: "Манифест", href: "#" },
]

export function FooterSection() {
  return (
    <footer className="relative bg-background px-6 py-24 overflow-hidden border-t border-border">
      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          <div>
            <motion.h2
              className="text-6xl md:text-8xl font-serif text-foreground tracking-wider"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              МАСТЕР.
            </motion.h2>

            <nav className="flex flex-wrap gap-6 mt-8">
              {footerLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-widest"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  data-clickable
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Выставка «Кисть» — событие, которого ждали 10 лет.
              <br />
              Только работы. Никакого имени. Только след.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs tracking-widest uppercase">Мастер. Все права защищены.</p>
          <p className="text-muted-foreground text-xs tracking-widest uppercase">Выставка «Кисть»</p>
        </div>
      </div>
    </footer>
  )
}
