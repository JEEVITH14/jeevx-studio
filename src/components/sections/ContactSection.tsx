import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG, type EmailTemplateParams } from '@/lib/emailjs-config'

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "hello@jeevxstudio.com",
    href: "mailto:hello@jeevxstudio.com"
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: MapPin,
    title: "Location",
    content: "San Francisco, CA",
    href: "#"
  }
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const templateParams: EmailTemplateParams = {
      from_name: `${formData.get('firstName')} ${formData.get('lastName')}`,
      from_email: formData.get('email') as string,
      company: formData.get('company') as string || 'Not specified',
      message: formData.get('message') as string,
      to_name: 'JeevX Studio Team'
    }

    try {
      // Debug: Log the configuration and template params
      console.log('EmailJS Config:', {
        SERVICE_ID: EMAILJS_CONFIG.SERVICE_ID,
        TEMPLATE_ID: EMAILJS_CONFIG.TEMPLATE_ID,
        PUBLIC_KEY: EMAILJS_CONFIG.PUBLIC_KEY ? '***configured***' : 'missing'
      })
      console.log('Template Params:', templateParams)

      // Validate configuration
      if (!EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID || !EMAILJS_CONFIG.PUBLIC_KEY) {
        throw new Error('EmailJS configuration is incomplete')
      }

      console.log('About to send email...')
      
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        EMAILJS_CONFIG.PUBLIC_KEY,
        templateParams,
      )

      console.log('EmailJS Result - Full Object:', result)
      console.log('EmailJS Result - Status:', result.status)
      console.log('EmailJS Result - Text:', result.text)
      console.log('EmailJS Result - Type of status:', typeof result.status)

      // Success - no toast message needed
      console.log('Email sent successfully, no confirmation message shown')
      
      console.log('Resetting form...')
      e.currentTarget.reset()
      
      console.log('Email sending completed successfully!')
      
    } catch (error) {
      console.error('EmailJS Error Details:', error)
      console.error('Error type:', typeof error)
      console.error('Error message:', error instanceof Error ? error.message : 'Unknown error')
      
      let errorMessage = "Please try again or contact us directly."
      
      // Provide more specific error messages
      if (error instanceof Error) {
        console.log('Processing error message:', error.message)
        if (error.message.includes('configuration is incomplete')) {
          errorMessage = "Email service is not properly configured."
        } else if (error.message.includes('Service not found')) {
          errorMessage = "Email service ID is invalid. Please check configuration."
        } else if (error.message.includes('Template not found')) {
          errorMessage = "Email template ID is invalid. Please check configuration."
        } else if (error.message.includes('Invalid public key')) {
          errorMessage = "Email public key is invalid. Please check configuration."
        }
      }

      // Error logged to console only, no user notification
      console.log('Email sending failed, but no error message shown to user')
    } finally {
      console.log('Setting isSubmitting to false')
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's Create Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch with us and let's discuss 
            how we can help elevate your brand.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-8">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={info.title} className="flex items-center group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{info.title}</div>
                    <a 
                      href={info.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {info.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-gradient-to-br from-primary/5 to-purple-600/5 rounded-2xl border border-primary/20">
              <h4 className="font-semibold mb-3">Ready to Start?</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We typically respond within 2-4 hours during business hours. 
                For urgent inquiries, please call us directly.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName" 
                    name="firstName" 
                    required 
                    className="mt-2"
                    placeholder="John"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName" 
                    name="lastName" 
                    required 
                    className="mt-2"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  className="mt-2"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <Label htmlFor="company">Company (Optional)</Label>
                <Input 
                  id="company" 
                  name="company" 
                  className="mt-2"
                  placeholder="Your Company"
                />
              </div>



              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  required 
                  className="mt-2 min-h-[120px]"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-primary-foreground py-3 text-lg group"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}