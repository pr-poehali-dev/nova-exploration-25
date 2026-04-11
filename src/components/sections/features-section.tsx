import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function YearsCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let frame = 0
    const target = 10
    const interval = setInterval(() => {
      frame++
      setCount(Math.min(frame, target))
      if (frame >= target) clearInterval(interval)
    }, 120)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <motion.span
          className="font-serif text-7xl md:text-9xl text-foreground"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {count}
        </motion.span>
        <p className="text-muted-foreground text-xs tracking-widest uppercase mt-2">лет в тени</p>
      </div>
    </div>
  )
}

function SilhouetteAnimation() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-full p-4 flex items-center justify-center">
      <motion.div
        className="w-20 h-28 rounded-full border border-foreground/20 relative overflow-hidden"
        animate={{ borderColor: visible ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.05)" }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute inset-0 bg-foreground/5"
          animate={{ opacity: visible ? 0.05 : 0.3 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1/2 bg-foreground/10"
          animate={{ height: visible ? "50%" : "80%" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>
    </div>
  )
}

function StrokePulse() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-3">
      {[100, 60, 85, 40, 70].map((w, i) => (
        <motion.div
          key={i}
          className="h-px bg-foreground/40 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${w}%` }}
          transition={{ duration: 1.2, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: "140px" }}
        />
      ))}
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-xs uppercase tracking-[0.3em] mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          О художнике
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="bg-secondary rounded-none p-8 min-h-[280px] flex flex-col border border-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            data-clickable
          >
            <div className="flex-1">
              <YearsCounter />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Десятилетие</h3>
              <p className="text-muted-foreground text-sm mt-1">Мастер создаёт уже 10 лет — и ни одного публичного появления.</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-secondary rounded-none p-8 min-h-[280px] flex flex-col border border-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <SilhouetteAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Тайна</h3>
              <p className="text-muted-foreground text-sm mt-1">Никто не видел его лица. Только работы говорят за него.</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-secondary rounded-none p-8 min-h-[280px] flex flex-col border border-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <StrokePulse />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Авангард</h3>
              <p className="text-muted-foreground text-sm mt-1">Нестандартный стиль, узнаваемый с первого взгляда.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
