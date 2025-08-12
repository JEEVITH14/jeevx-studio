import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/sections/HeroSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { PortfolioSection } from "@/components/sections/PortfolioSection"
import { ProcessSection } from "@/components/sections/ProcessSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { Footer } from "@/components/Footer"


const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
