import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const EXHIBITION_DATE_KEY = "master_exhibition_date"

function getExhibitionDate(): Date {
  if (typeof window === "undefined") {
    const d = new Date()
    d.setHours(d.getHours() + 24)
    return d
  }
  const stored = localStorage.getItem(EXHIBITION_DATE_KEY)
  if (stored) return new Date(stored)
  const target = new Date()
  target.setHours(target.getHours() + 24)
  localStorage.setItem(EXHIBITION_DATE_KEY, target.toISOString())
  return target
}

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const target = getExhibitionDate()
    const tick = () => {
      const diff = target.getTime() - Date.now()
      if (diff <= 0) { setTimeLeft({ hours: 0, minutes: 0, seconds: 0 }); return }
      const s = Math.floor(diff / 1000)
      setTimeLeft({ hours: Math.floor(s / 3600), minutes: Math.floor((s % 3600) / 60), seconds: s % 60 })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return timeLeft
}

function pad(n: number) {
  return String(n).padStart(2, "0")
}

export function HeroSection() {
  const { hours, minutes, seconds } = useCountdown()

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-background overflow-hidden">
      {/* МАСТЕР */}
      <motion.h1
        className="text-[18vw] md:text-[20vw] font-serif text-foreground tracking-widest leading-none select-none"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        МАСТЕР
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-6 text-sm md:text-base text-muted-foreground uppercase tracking-[0.35em]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        До открытия выставки{" "}
        <span className="text-foreground italic font-serif normal-case tracking-normal text-base md:text-lg">
          «Кисть»
        </span>
      </motion.p>

      {/* Countdown */}
      <motion.div
        className="mt-10 flex items-end gap-6 md:gap-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        {[
          { label: "часов", value: pad(hours) },
          { label: "минут", value: pad(minutes) },
          { label: "секунд", value: pad(seconds) },
        ].map(({ label, value }, i) => (
          <div key={i} className="flex flex-col items-center">
            <motion.span
              key={value}
              className="text-6xl md:text-8xl lg:text-9xl font-serif text-foreground tabular-nums leading-none"
              initial={{ opacity: 0.3, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              {value}
            </motion.span>
            <span className="text-[9px] md:text-[11px] text-muted-foreground uppercase tracking-[0.3em] mt-2">
              {label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
