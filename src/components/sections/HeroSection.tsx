import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Creative Studio</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Where Imagination
          <br />
          <span className="gradient-text">Meets Interface</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          We craft digital experiences that captivate, inspire, and convert. 
          From stunning websites to compelling brand identities, we bring your vision to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("#portfolio")}
            className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-primary-foreground px-8 py-4 text-lg group"
          >
            View Our Work
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("#contact")}
            className="px-8 py-4 text-lg border-2 hover:bg-accent"
          >
            Let's Connect
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20"
        >
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <span>Web Development</span>
            <span>•</span>
            <span>Branding</span>
            <span>•</span>
            <span>Motion Graphics</span>
            <span>•</span>
            <span>Design</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}