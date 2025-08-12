import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Search, Palette, Code, Rocket } from "lucide-react"

const processSteps = [
  {
    icon: Search,
    number: "01",
    title: "Discover",
    description: "We dive deep into your brand, goals, and target audience to understand your unique needs and challenges.",
    details: ["Research & Analysis", "Brand Audit", "Competitor Study", "Goal Definition"]
  },
  {
    icon: Palette,
    number: "02", 
    title: "Design",
    description: "Our creative team crafts stunning visuals and user experiences that align with your brand identity.",
    details: ["Wireframing", "Visual Design", "Prototyping", "User Testing"]
  },
  {
    icon: Code,
    number: "03",
    title: "Build",
    description: "We bring designs to life with clean, efficient code and cutting-edge technologies for optimal performance.",
    details: ["Development", "Integration", "Optimization", "Quality Assurance"]
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch",
    description: "We ensure a smooth launch and provide ongoing support to help your project succeed in the market.",
    details: ["Deployment", "Training", "Support", "Monitoring"]
  }
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We follow a proven methodology that ensures every project is delivered 
            on time, on budget, and exceeds expectations.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent transform -translate-y-1/2" />

          <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative text-center group"
              >
                {/* Step number and icon */}
                <div className="relative mx-auto mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/10 to-orange-600/10 rounded-full flex items-center justify-center group-hover:from-primary/20 group-hover:to-orange-600/20 transition-all duration-300 border border-border group-hover:border-primary/30">
                    <step.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {step.description}
                </p>

                <ul className="space-y-2 text-sm">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center justify-center text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-60" />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Arrow for large screens */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-8">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-6 h-px bg-border" />
                      <div className="w-0 h-0 border-l-4 border-l-border border-y-2 border-y-transparent ml-1" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}