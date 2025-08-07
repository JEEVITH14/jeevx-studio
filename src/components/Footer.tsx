import { motion } from "framer-motion"
import { Heart, Twitter, Instagram, Linkedin, Dribbble } from "lucide-react"

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Dribbble, href: "#", label: "Dribbble" },
]

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "#services" },
      { name: "Branding", href: "#services" },
      { name: "Motion Graphics", href: "#services" },
      { name: "Graphic Design", href: "#services" },
    ]
  },
  {
    title: "Company", 
    links: [
      { name: "About", href: "#about" },
      { name: "Process", href: "#process" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Contact", href: "#contact" },
    ]
  }
]

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gradient-to-t from-accent/20 to-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">Jeevx Studio</h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                We're a creative studio that believes in the power of exceptional design 
                to transform businesses and create meaningful connections.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5 text-primary" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Links */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * sectionIndex }}
            >
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-muted-foreground text-sm flex items-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" fill="currentColor" /> by Jeevx Studio
          </p>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            © 2024 Jeevx Studio. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}