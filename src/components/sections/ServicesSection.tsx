import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Palette, Play, Sparkles } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and applications built with modern technologies for optimal performance and user experience.",
    features: ["React & Next.js", "Mobile Responsive", "SEO Optimized", "Fast Loading"]
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Complete brand identity design that captures your essence and resonates with your target audience.",
    features: ["Logo Design", "Brand Guidelines", "Color Palettes", "Typography"]
  },
  {
    icon: Play,
    title: "Motion Graphics",
    description: "Engaging animations and motion graphics that bring your content to life and captivate viewers.",
    features: ["2D Animation", "Video Editing", "Visual Effects", "Interactive Media"]
  },
  {
    icon: Sparkles,
    title: "Graphic Design",
    description: "Eye-catching visual designs for print and digital media that communicate your message effectively.",
    features: ["Print Design", "Digital Graphics", "UI/UX Design", "Marketing Materials"]
  }
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive suite of creative services to help your brand stand out 
            in the digital landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:shadow-glow hover:border-primary/20 transition-all duration-500"
            >
              <div className="relative mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-purple-600/10 group-hover:from-primary/20 group-hover:to-purple-600/20 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 opacity-60" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}