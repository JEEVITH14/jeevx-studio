import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1920&h=1080&fit=crop"
          alt="Creative workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white max-w-5xl mx-auto"
        >
          Grow your business with expert
          <br />
          <span className="text-primary">creative solutions</span>,
          <br />
          design & development.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("#about")}
            className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 text-lg"
          >
            See how we can help
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection("#about")}
            className="text-white/60 hover:text-white transition-colors duration-300"
          >
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}