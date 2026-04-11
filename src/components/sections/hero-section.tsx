import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const images = [
  "/fashion-photography-editorial-black-and-white.jpg",
  "/artist-portfolio-website-creative.jpg",
  "/design-agency-portfolio-dark-theme.jpg",
]

// Дата выставки — 24 часа от первого открытия сайта
const EXHIBITION_DATE_KEY = "master_exhibition_date"

function getExhibitionDate(): Date {
  if (typeof window === "undefined") {
    const d = new Date()
    d.setHours(d.getHours() + 24)
    return d
  }
  const stored = localStorage.getItem(EXHIBITION_DATE_KEY)
  if (stored) {
    return new Date(stored)
  }
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
      const now = new Date()
      const diff = target.getTime() - now.getTime()
      if (diff <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 })
        return
      }
      const totalSeconds = Math.floor(diff / 1000)
      setTimeLeft({
        hours: Math.floor(totalSeconds / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60,
      })
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
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, -15])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, 0])
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 15])
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const x3 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  const { hours, minutes, seconds } = useCountdown()

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background px-6 py-24"
    >
      {/* Stacked images */}
      <div className="relative flex items-center justify-center">
        <motion.div
          className="absolute w-[280px] md:w-[320px] aspect-[3/4] rounded-none overflow-hidden shadow-2xl"
          style={{ rotate: rotate1, x: x1, y, zIndex: 1 }}
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0 0 0 0)" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={images[0] || "/placeholder.svg"}
            alt="Работа Мастера"
            className="w-full h-full object-cover grayscale"
          />
        </motion.div>

        <motion.div
          className="relative w-[280px] md:w-[320px] aspect-[3/4] rounded-none overflow-hidden shadow-2xl"
          style={{ rotate: rotate2, y, zIndex: 2 }}
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0 0 0 0)" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={images[1] || "/placeholder.svg"}
            alt="Работа Мастера"
            className="w-full h-full object-cover grayscale"
          />
        </motion.div>

        <motion.div
          className="absolute w-[280px] md:w-[320px] aspect-[3/4] rounded-none overflow-hidden shadow-2xl"
          style={{ rotate: rotate3, x: x3, y, zIndex: 1 }}
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0 0 0 0)" }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={images[2] || "/placeholder.svg"}
            alt="Работа Мастера"
            className="w-full h-full object-cover grayscale"
          />
        </motion.div>
      </div>

      {/* Title overlay */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-center text-foreground mix-blend-difference tracking-wider">
          МАСТЕР
        </h1>
      </motion.div>

      {/* Countdown bottom */}
      <motion.div
        className="absolute bottom-12 left-0 right-0 z-20 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <p className="text-muted-foreground text-xs uppercase tracking-[0.3em]">
          До открытия выставки <em className="not-italic text-foreground">Кисть</em>
        </p>
        <div className="flex items-center gap-4 md:gap-8">
          {[
            { label: "часов", value: pad(hours) },
            { label: "минут", value: pad(minutes) },
            { label: "секунд", value: pad(seconds) },
          ].map(({ label, value }, i) => (
            <div key={i} className="flex flex-col items-center">
              <motion.span
                key={value}
                className="text-4xl md:text-6xl font-serif text-foreground tabular-nums"
                initial={{ opacity: 0.4, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {value}
              </motion.span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">{label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 opacity-0"
        animate={{ opacity: 0 }}
      />
    </section>
  )
}
