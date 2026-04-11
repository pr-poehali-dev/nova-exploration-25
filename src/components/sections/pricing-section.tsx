import { motion } from "framer-motion"

export function PricingSection() {
  return (
    <section className="bg-secondary px-6 py-32 border-y border-border">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-muted-foreground text-xs uppercase tracking-[0.3em] mb-6">Выставка</p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground leading-none">
            Кисть
          </h2>
          <div className="mt-8 w-px h-24 bg-border mx-auto" />
          <p className="text-muted-foreground text-sm mt-8 max-w-sm mx-auto leading-relaxed">
            Первое появление Мастера в публичном пространстве. Только работы. Никакого лица. Никакой биографии.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {[
            { value: "47", label: "Новых работ" },
            { value: "1", label: "Ночь открытия" },
            { value: "∞", label: "Интерпретаций" },
          ].map(({ value, label }, i) => (
            <div key={i} className="bg-secondary px-8 py-10 flex flex-col items-center">
              <span className="font-serif text-5xl md:text-6xl text-foreground">{value}</span>
              <span className="text-muted-foreground text-xs uppercase tracking-widest mt-3">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
