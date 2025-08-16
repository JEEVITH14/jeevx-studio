import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Code, Palette, Sparkles, X, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
    features: ["Landing Pages", "Portfolio Websites", "Static Websites", "E-commerce Solutions"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop&crop=center&q=90",
    detailedDescription: "Transform your business with cutting-edge web solutions. We specialize in creating responsive, fast-loading websites and web applications that drive results. Our development process focuses on user experience, performance optimization, and scalable architecture.",
    detailedFeatures: [
      "Landing Pages & Sales Funnels",
      "Portfolio & Personal Websites",
      "Static Websites & Brochure Sites",
      "E-commerce Solutions",
      "Content Management Systems",
      "API Development & Integration",
      "Database Design & Optimization",
      "Performance Optimization",
      "Security Implementation",
      "Mobile-first Responsive Design"
    ],
    process: [
      "Discovery & Planning",
      "Design & Prototyping", 
      "Development & Testing",
      "Deployment & Launch",
      "Maintenance & Support"
    ],

  },
  {
    icon: Palette,
    title: "Branding",
    description: "Complete brand identity design that captures your essence and resonates with your target audience.",
    features: ["Logo Design", "Brand Guidelines", "Color Palettes", "Typography"],
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=500&fit=crop&crop=center&q=90",
    detailedDescription: "Build a powerful brand identity that sets you apart from the competition. We create comprehensive branding solutions that tell your story and connect with your audience on a deeper level.",
    detailedFeatures: [
      "Logo Design & Variations",
      "Brand Identity Guidelines",
      "Color Palette Development",
      "Typography Selection",
      "Business Card Design",
      "Letterhead & Stationery",
      "Brand Voice & Messaging",
      "Visual Style Guide",
      "Brand Application Examples",
      "Digital Asset Creation"
    ],
    process: [
      "Brand Research & Analysis",
      "Concept Development",
      "Design Iterations",
      "Finalization & Guidelines",
      "Brand Implementation"
    ],

  },
  {
    icon: Sparkles,
    title: "Graphic Design",
    description: "Eye-catching visual designs for print and digital media that communicate your message effectively.",
    features: ["Print Design", "Digital Graphics", "UI/UX Design", "Marketing Materials"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop&crop=center&q=90",
    detailedDescription: "Create stunning visual content that captures attention and drives engagement. From print materials to digital graphics, we deliver designs that make an impact and achieve your marketing goals.",
    detailedFeatures: [
      "Print Design (Brochures, Flyers, Posters)",
      "Digital Graphics (Social Media, Banners)",
      "UI/UX Design for Applications",
      "Marketing Collateral Design",
      "Infographic Creation",
      "Presentation Design",
      "Packaging Design",
      "Illustration & Icons",
      "Photo Editing & Manipulation",
      "Design Templates & Systems"
    ],
    process: [
      "Brief & Requirements",
      "Concept & Sketching",
      "Design Development",
      "Revisions & Refinement",
      "Final Delivery"
    ],

  }
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null)

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
    setSelectedService(null)
  }

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-glow hover:border-primary/20 transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 opacity-60" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Detail Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-border"
            >
              {/* Modal Header with Image */}
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-8 right-8">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/90 backdrop-blur-sm">
                      <selectedService.icon className="w-8 h-8 text-primary" />
                    </div>
                                         <div>
                       <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>
                     </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="p-8">
                <div className="space-y-8">
                  {/* Description */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3">About This Service</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedService.detailedDescription}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">What's Included</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedService.detailedFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Our Process</h3>
                    <div className="grid md:grid-cols-5 gap-4">
                      {selectedService.process.map((step, index) => (
                        <div key={index} className="text-center">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-orange-600/10 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="font-bold text-primary">{index + 1}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="text-center pt-6 border-t border-border">
                    <p className="text-muted-foreground mb-4">
                      Ready to get started with {selectedService.title}?
                    </p>
                    <Button 
                      onClick={scrollToContact}
                      className="bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90 text-white px-8 py-3 rounded-xl font-semibold"
                    >
                      Get Started Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}