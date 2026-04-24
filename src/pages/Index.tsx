import { WsHero } from "@/components/sections/ws-hero"
import { WsAbout } from "@/components/sections/ws-about"
import { WsServices } from "@/components/sections/ws-services"
import { WsPricing } from "@/components/sections/ws-pricing"
import { WsWhy } from "@/components/sections/ws-why"
import { WsVision } from "@/components/sections/ws-vision"
import { WsFaq } from "@/components/sections/ws-faq"
import { WsForm } from "@/components/sections/ws-form"
import { WsFooter } from "@/components/sections/ws-footer"

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
    </main>
  )
}

export default Index
