import { WsHero } from "@/components/sections/ws-hero"
import { WsAbout } from "@/components/sections/ws-about"
import { WsServices } from "@/components/sections/ws-services"
import { WsPricing } from "@/components/sections/ws-pricing"
import { WsWhy } from "@/components/sections/ws-why"
import { WsVision } from "@/components/sections/ws-vision"
import { WsFaq } from "@/components/sections/ws-faq"
import { WsForm } from "@/components/sections/ws-form"
import { WsFooter } from "@/components/sections/ws-footer"
import Icon from "@/components/ui/icon"

const Index = () => {
  return (
    <main className="bg-background overflow-x-hidden">
      <WsHero />
      <WsAbout />
      <WsServices />
      <WsPricing />
      <WsWhy />
      <WsVision />
      <WsFaq />
      <WsForm />
      <WsFooter />

      {/* Плавающая кнопка Telegram — только на мобиле */}
      <a
        href="https://t.me/kateandtheend"
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-5 right-5 z-50 flex items-center gap-2 px-4 py-3 shadow-lg transition-opacity hover:opacity-90"
        style={{ background: "hsl(345, 45%, 28%)", color: "#fff", borderRadius: "2px" }}
      >
        <Icon name="Send" size={17} />
        <span className="text-xs tracking-[0.15em] uppercase font-semibold">Написать в Telegram</span>
      </a>
    </main>
  )
}

export default Index