import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Eye } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Development",
    description: "Modern e-commerce platform with seamless user experience and advanced features.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    color: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "Brand Identity Design",
    category: "Branding",
    description: "Complete brand identity for a sustainable fashion company.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    color: "from-green-500 to-teal-600"
  },
  {
    id: 3,
    title: "Product Launch Video",
    category: "Motion Graphics",
    description: "Animated product launch video with stunning visual effects.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
    color: "from-pink-500 to-red-600"
  },
  {
    id: 4,
    title: "Mobile App Design",
    category: "UI/UX Design",
    description: "Intuitive mobile app design for a fitness tracking application.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    color: "from-orange-500 to-yellow-600"
  },
  {
    id: 5,
    title: "Corporate Website",
    category: "Web Development",
    description: "Professional corporate website with advanced functionality.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    color: "from-indigo-500 to-blue-600"
  },
  {
    id: 6,
    title: "Marketing Campaign",
    category: "Graphic Design",
    description: "Complete marketing campaign design for product launch.",
    image: "https://images.unsplash.com/photo-1611224923908-60cee1a68e81?w=600&h=400&fit=crop",
    color: "from-purple-500 to-pink-600"
  }
]

const categories = ["All", "Web Development", "Branding", "Motion Graphics", "UI/UX Design", "Graphic Design"]

export function PortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our portfolio of successful projects and see how we've helped brands 
            transform their digital presence.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-accent hover:bg-accent/80 text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:shadow-glow transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                      <Eye className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}