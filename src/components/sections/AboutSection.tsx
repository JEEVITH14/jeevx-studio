import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

// Client logos - using placeholder images for now
const clients = [
  { name: "Client 1", logo: "https://via.placeholder.com/120x60/8639FF/FFFFFF?text=CLIENT" },
  { name: "Client 2", logo: "https://via.placeholder.com/120x60/8639FF/FFFFFF?text=BRAND" },
  { name: "Client 3", logo: "https://via.placeholder.com/120x60/8639FF/FFFFFF?text=COMPANY" },
  { name: "Client 4", logo: "https://via.placeholder.com/120x60/8639FF/FFFFFF?text=STUDIO" },
  { name: "Client 5", logo: "https://via.placeholder.com/120x60/8639FF/FFFFFF?text=AGENCY" },
  { name: "Client 6", logo: "https://via.placeholder.com/120x60/8639FF/FFFFFF?text=CORP" },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Client Logos Carousel */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-12">
              {/* First set */}
              {clients.map((client, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                  />
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {clients.map((client, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Our Story
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
              Founded on the principle that exceptional design can transform businesses, 
              Jeevx Studio combines artistic vision with strategic thinking to create 
              digital experiences that resonate and inspire.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              We've partnered with startups to established brands, helping them tell 
              their stories through compelling visuals and seamless user experiences 
              that drive real results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-2xl p-8 border border-primary/20">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">150+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
                
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">5+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}