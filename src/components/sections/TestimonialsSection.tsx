import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Star, Quote } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "JeevX Studio transformed our brand identity completely. Their attention to detail and creative vision exceeded our expectations. The new website has increased our conversion rate by 40%.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, EcoLife",
    content: "Working with JeevX Studio was a game-changer for our business. They understood our vision and brought it to life with stunning visuals and seamless functionality.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director, StyleCo",
    content: "The motion graphics they created for our campaign were absolutely phenomenal. The engagement on our social media increased by 300%. Highly recommend their services!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Product Manager, InnovateCorp",
    content: "JeevX Studio delivered an exceptional user experience that exceeded our expectations. Their attention to detail and user-centered design approach resulted in a 60% increase in user engagement.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Creative Director, ArtFlow",
    content: "The branding work JeevX Studio created for us perfectly captured our company's essence. The logo and visual identity have become instantly recognizable in our industry.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Startup Founder, TechVentures",
    content: "As a startup, we needed a website that could scale with our growth. JeevX Studio built us a robust, scalable solution that looks professional and converts visitors into customers.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 7,
    name: "Maria Garcia",
    role: "E-commerce Manager, FashionHub",
    content: "Our online store redesign by JeevX Studio resulted in a 45% increase in sales. The user experience is intuitive, and the design perfectly represents our brand aesthetic.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 8,
    name: "Alex Kim",
    role: "UX Lead, DigitalFlow",
    content: "The mobile app design JeevX Studio created for us is not only beautiful but incredibly functional. User testing shows a 70% improvement in task completion rates.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face"
  }
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [api, setApi] = useState<any>(null)

  // Continuous auto-play functionality
  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 3000) // Change slide every 3 seconds for better readability

    return () => clearInterval(interval)
  }, [api])

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about 
            working with JeevX Studio.
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
                      <Carousel
              setApi={setApi}
              className="w-full"
              opts={{
                align: "start",
                loop: true,
                skipSnaps: false,
                dragFree: true,
                containScroll: "trimSnaps",
                duration: 15,
                slidesToScroll: 1,
              }}
            >
            <CarouselContent className="-ml-4 md:-ml-6 lg:-ml-8">
              {testimonials.map((testimonial, index) => (
                <CarouselItem 
                  key={testimonial.id} 
                  className="pl-4 md:pl-6 lg:pl-8 basis-full sm:basis-4/5 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative p-8 md:p-10 bg-card rounded-3xl border border-border hover:shadow-elegant transition-all duration-500 group h-full mx-2 hover:scale-105 hover:border-primary/30"
                  >
                    {/* Quote icon */}
                    <div className="absolute top-6 right-6 md:top-8 md:right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-6 md:mb-8">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-current text-yellow-400 mr-1" />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-muted-foreground leading-relaxed mb-8 md:mb-10 italic text-base md:text-lg line-clamp-6">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover mr-4 md:mr-5 border-2 border-border group-hover:border-primary/30 transition-colors duration-300"
                      />
                      <div>
                        <div className="font-semibold text-foreground text-base md:text-lg">{testimonial.name}</div>
                        <div className="text-muted-foreground text-sm md:text-base">{testimonial.role}</div>
                      </div>
                    </div>

                                         {/* Enhanced hover effect gradient */}
                     <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-orange-600/5 to-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
                     
                     {/* Subtle glow effect on hover */}
                     <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-transparent to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-20" />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}