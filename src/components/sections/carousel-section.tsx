import { motion } from "framer-motion"

const portfolioItems = [
  "/portfolio-website-design-preview-modern.jpg",
  "/fashion-photography-editorial-black-and-white.jpg",
  "/architecture-firm-website-minimal.jpg",
  "/design-agency-portfolio-dark-theme.jpg",
  "/artist-portfolio-website-creative.jpg",
  "/fashion-model-editorial-portrait-dramatic-lighting.jpg",
]

export function CarouselSection() {
  const items = [...portfolioItems, ...portfolioItems]

  return (
    <section className="bg-secondary py-24 overflow-hidden border-y border-border">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Работы, которые говорят сами за себя.
        </motion.h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] md:w-[400px] overflow-hidden shadow-2xl"
              data-clickable
            >
              <img
                src={src || "/placeholder.svg"}
                alt={`Работа ${(i % portfolioItems.length) + 1}`}
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
