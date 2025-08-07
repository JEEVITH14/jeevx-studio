import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#portfolio" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

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

  // Animation variants - optimized for speed
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
        duration: 0.4
      }
    }
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 25,
        delay: 0.1
      }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 350,
        damping: 25,
        delay: 0.2
      }
    }
  }

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border/50 shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text cursor-pointer"
          >
            Jeevx Studio
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 250,
                  damping: 20,
                  delay: 0.05 * index + 0.15
                }}
                whileHover={{ 
                  scale: 1.05,
                  color: "hsl(267, 84%, 61%)",
                  transition: { duration: 0.15 }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="relative text-muted-foreground hover:text-primary transition-all duration-300 group"
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </motion.button>
            ))}
          </div>

          <motion.div 
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-primary-foreground transition-all duration-300 hover:shadow-glow"
            >
              Let's Connect
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}