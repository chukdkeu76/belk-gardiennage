import {
  Sidebar,
  SidebarContent,
  SidebarTrigger,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Menu } from "lucide-react"
import { Button } from "./ui/button"

interface MobileNavProps {
  scrollToSection: (id: string) => void
}

export function MobileNav({ scrollToSection }: MobileNavProps) {
  return (
    <Sidebar>
      <SidebarTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SidebarTrigger>
      <SidebarContent className="w-[80vw] bg-background p-6">
        <SidebarHeader className="text-lg font-bold mb-4">Menu</SidebarHeader>
        <nav className="flex flex-col gap-4">
          <Button
            variant="ghost"
            className="justify-start"
            onClick={() => scrollToSection('services')}
          >
            Services
          </Button>
          <Button
            variant="ghost"
            className="justify-start"
            onClick={() => scrollToSection('values')}
          >
            Nos Valeurs
          </Button>
          <Button
            variant="ghost"
            className="justify-start"
            onClick={() => scrollToSection('partners')}
          >
            Partenaires
          </Button>
          <Button
            variant="ghost"
            className="justify-start"
            onClick={() => scrollToSection('about')}
          >
            À Propos
          </Button>
          <Button
            variant="ghost"
            className="justify-start"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </Button>
        </nav>
      </SidebarContent>
    </Sidebar>
  )
}