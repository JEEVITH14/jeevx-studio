import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, Zap, Target } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Passion-Driven",
    description: "We pour our heart into every project, treating your vision as our own."
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "Cutting-edge solutions that push boundaries and exceed expectations."
  },
  {
    icon: Target,
    title: "Results Focused",
    description: "Every design decision is made with your goals and success in mind."
  }
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Jeevx Studio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're a creative studio that believes in the power of exceptional design to transform businesses. 
            Founded on the principle that every brand has a unique story worth telling, we combine artistic 
            vision with strategic thinking to create digital experiences that resonate and inspire.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              Our Story
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Born from a shared passion for design and technology, Jeevx Studio emerged as a response 
              to the growing need for authentic, impactful digital experiences. We've worked with startups 
              to established brands, helping them tell their stories through compelling visuals and 
              seamless user experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              What sets us apart is our collaborative approach. We don't just create for you – we create 
              with you, ensuring every project reflects your unique vision while leveraging our expertise 
              in design, development, and strategy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-2xl p-8 shadow-elegant">
              <div className="text-4xl font-bold gradient-text mb-2">500+</div>
              <div className="text-muted-foreground mb-4">Projects Completed</div>
              
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-muted-foreground mb-4">Happy Clients</div>
              
              <div className="text-4xl font-bold gradient-text mb-2">5+</div>
              <div className="text-muted-foreground">Years of Experience</div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-elegant transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}