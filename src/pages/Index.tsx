import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ValuesSection } from "@/components/ValuesSection";
import { PartnersSection } from "@/components/PartnersSection";
import { ContactSection } from "@/components/ContactSection";
import { AboutSection } from "@/components/AboutSection";
import { useEffect } from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { JobApplicationForm } from "@/components/JobApplicationForm";
import { MobileNav } from "@/components/MobileNav";
import { SidebarProvider } from "@/components/ui/sidebar";

const Index = () => {
  useEffect(() => {
    console.log("Index page mounted");
    // Set dark mode as default
    document.documentElement.classList.add('dark');
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <header className="fixed w-full bg-background/80 backdrop-blur-sm border-b z-50">
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/6b7d37de-f269-4468-ba2e-6657f3a187ce.png" 
                alt="BELK Gardiennage" 
                className="h-20 md:h-24 w-auto transition-all duration-300 hover:scale-105"
              />
            </div>
            
            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    onClick={() => scrollToSection('services')}
                    className="bg-transparent hover:bg-primary/10"
                  >
                    Services
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    onClick={() => scrollToSection('values')}
                    className="bg-transparent hover:bg-primary/10"
                  >
                    Nos Valeurs
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    onClick={() => scrollToSection('partners')}
                    className="bg-transparent hover:bg-primary/10"
                  >
                    Partenaires
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    onClick={() => scrollToSection('about')}
                    className="bg-transparent hover:bg-primary/10"
                  >
                    À Propos
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    onClick={() => scrollToSection('contact')}
                    className="bg-transparent hover:bg-primary/10"
                  >
                    Contact
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

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
              <ThemeToggle />
              <MobileNav scrollToSection={scrollToSection} />
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
    </SidebarProvider>
  );
};

export default Index;