import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Recent Work", href: "#portfolio" },
  { name: "Process", href: "#process" },
  { name: "Our Story", href: "#about" },
  { name: "Careers", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold text-white"
          >
            JEEVX STUDIO
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => scrollToSection(item.href)}
                className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center">
            <Button
              onClick={() => scrollToSection("#contact")}
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}