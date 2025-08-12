import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Eye, X, Calendar, Users, Globe, Code } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    category: "Web Development",
    description: "Modern portfolio website with seamless user experience and advanced features.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    color: "from-orange-500 to-orange-600",
    fullDescription: "A comprehensive portfolio website built with modern technologies. Features include user authentication, product catalog, shopping cart, payment integration, order management, and admin dashboard. The platform is fully responsive and optimized for performance.",
    technologies: ["React", "Node.js", "Tailwind CSS", "Framer Motion", "Lucide React", "TypeScript", "Vercel", "GitHub"],
    duration: "1 month",
    team: "1 developer",
    liveUrl: "https://jeevith-thunderjoe.vercel.app/",
    githubUrl: "https://github.com/JEEVITH14/jeevith-thunderjoe-portfolio"
  },
  {
    id: 2,
    title: "Esperanza college cultural poster",
    category: "Graphic Design",
    description: "Complete event poster for a cultural event.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    color: "from-orange-500 to-orange-600",
    fullDescription: "Complete event poster for a cultural event.",
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Corel Draw", "Canva"],
    duration: "6 weeks",
    team: "2 designers",
    liveUrl: "https://drive.google.com/drive/folders/1hSC6fYSJI7MdnbLbpBoUl_oqD8aJgJbb?usp=drive_link",
    githubUrl: null
  },

  {
    id: 3,
    title: "Ecommerce website",
    category: "UI/UX Design",
    description: "Ecommerce website design for a fitness tracking application.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
    color: "from-orange-500 to-orange-600",
    fullDescription: "Comprehensive mobile app design including user research, wireframes, high-fidelity mockups, and interactive prototypes. The design focuses on user experience and accessibility for fitness enthusiasts.",
    technologies: ["Figma", "Sketch", "Principle"],
    duration: "8 weeks",
    team: "3 designers",
    liveUrl: "https://www.figma.com/proto/aVjeGLZNSYbLaryOKFBl4M/Full-E-Commerce-Website-UI-UX-Design--Community-?node-id=34-213&t=n73iWcpyRca0xOrI-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A3&starting-point-node-id=34%3A213",
    githubUrl: null
  },
  {
    id: 4,
    title: "Corporate Website",
    category: "Web Development",
    description: "Professional corporate website with advanced functionality.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
    color: "from-orange-500 to-orange-600",
    fullDescription: "Modern corporate website built with performance and SEO in mind. Features include content management system, blog functionality, contact forms, analytics integration, and multilingual support.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Strapi", "Framer Motion", "Lucide React", "Vercel", "GitHub"],
    duration: "2 months",
    team: "3 developers",
    liveUrl: "https://jeevx-studio.vercel.app/",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "instragram marketing poster",
    category: "Graphic Design",
    description: "Complete marketing campaign design for instagram.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    color: "from-orange-500 to-orange-600",
    fullDescription: "End-to-end marketing campaign design including social media graphics, email templates, banner ads, print materials, and brand guidelines. The campaign achieved 150% increase in engagement.",
    technologies: ["Adobe Creative Suite", "Canva Pro"],
    duration: "5 weeks",
    team: "2 designers",
    liveUrl: "https://drive.google.com/drive/folders/1P2ExlpaqLKPUw2qFqRo1kg2VsPxYhPq9?usp=sharing",
    githubUrl: null
  }
]

const categories = ["All", "Web Development", "Branding", "UI/UX Design", "Graphic Design"]

export function PortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  const openProjectDetail = (project) => {
    setSelectedProject(project)
  }

  const closeProjectDetail = () => {
    setSelectedProject(null)
  }

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
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:shadow-glow transition-all duration-500 cursor-pointer"
              onClick={() => openProjectDetail(project)}
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
                    <button 
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation()
                        openProjectDetail(project)
                      }}
                    >
                      <Eye className="w-5 h-5 text-white" />
                    </button>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                    )}
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

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeProjectDetail}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-card rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={closeProjectDetail}
              className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal content */}
            <div className="relative">
              {/* Hero image */}
              <div className="relative h-80 overflow-hidden rounded-t-2xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${selectedProject.color} opacity-30`} />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-sm text-white/80 font-medium mb-2">{selectedProject.category}</div>
                  <h2 className="text-3xl font-bold">{selectedProject.title}</h2>
                </div>
              </div>

              {/* Project details */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left column - Description */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {selectedProject.fullDescription}
                    </p>
                    
                    <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right column - Project info */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-primary" />
                        <div>
                          <div className="text-sm text-muted-foreground">Duration</div>
                          <div className="font-medium">{selectedProject.duration}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-primary" />
                        <div>
                          <div className="text-sm text-muted-foreground">Team Size</div>
                          <div className="font-medium">{selectedProject.team}</div>
                        </div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="mt-8 space-y-3">
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                        >
                          <Globe className="w-4 h-4 mr-2" />
                          View Live Project
                        </a>
                      )}
                      
                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors"
                        >
                          <Code className="w-4 h-4 mr-2" />
                          View Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}