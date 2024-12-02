import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ValuesSection } from "@/components/ValuesSection";
import { PartnersSection } from "@/components/PartnersSection";
import { ContactSection } from "@/components/ContactSection";
import { AboutSection } from "@/components/AboutSection";
import { useEffect, useState } from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { JobApplicationForm } from "@/components/JobApplicationForm";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    console.log("Index page mounted");
    document.documentElement.classList.add('dark');
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const NavLinks = () => (
    <>
      <div className="flex flex-col lg:flex-row gap-4">
        <Button 
          variant="ghost" 
          onClick={() => scrollToSection('services')}
          className="w-full text-left justify-start lg:justify-center"
        >
          Services
        </Button>
        <Button 
          variant="ghost" 
          onClick={() => scrollToSection('values')}
          className="w-full text-left justify-start lg:justify-center"
        >
          Nos Valeurs
        </Button>
        <Button 
          variant="ghost" 
          onClick={() => scrollToSection('partners')}
          className="w-full text-left justify-start lg:justify-center"
        >
          Partenaires
        </Button>
        <Button 
          variant="ghost" 
          onClick={() => scrollToSection('about')}
          className="w-full text-left justify-start lg:justify-center"
        >
          À Propos
        </Button>
        <Button 
          variant="ghost" 
          onClick={() => scrollToSection('contact')}
          className="w-full text-left justify-start lg:justify-center"
        >
          Contact
        </Button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed w-full bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/6b7d37de-f269-4468-ba2e-6657f3a187ce.png" 
              alt="BELK Gardiennage" 
              className="h-16 md:h-20 w-auto transition-all duration-300 hover:scale-105"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            <NavLinks />
          </div>

          <div className="flex items-center gap-4">
            <JobApplicationForm 
              trigger={
                <Button 
                  variant="outline"
                  className="hidden md:flex bg-primary/20 hover:bg-primary/30 border-primary"
                >
                  Postuler Pour "Agent Sécurité Belk"
                </Button>
              }
            />
            
            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <NavLinks />
                  <JobApplicationForm 
                    trigger={
                      <Button 
                        variant="outline"
                        className="w-full md:hidden bg-primary/20 hover:bg-primary/30 border-primary"
                      >
                        Postuler Pour "Agent Sécurité Belk"
                      </Button>
                    }
                  />
                </nav>
              </SheetContent>
            </Sheet>
            
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main>
        <HeroSection />
        <div id="services">
          <ServicesSection />
        </div>
        <div id="values">
          <ValuesSection />
        </div>
        <div id="partners">
          <PartnersSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
    </div>
  );
};

export default Index;