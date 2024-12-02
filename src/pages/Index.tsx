import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSelector } from "@/components/LanguageSelector";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed w-full bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/09609e9c-29aa-4911-9fc5-acaaa7de68c6.png" alt="BELK Gardiennage" className="h-12" />
          </div>
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              BELK GARDIENNAGE
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Votre Partenaire de Confiance en Sécurité
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Contactez-nous
            </Button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-digital-surveillance-system-2352-large.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Surveillance 24/7
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Nous assurons une surveillance continue de vos biens avec les technologies les plus avancées et une équipe hautement qualifiée.
              </p>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <img
                src="/lovable-uploads/be6a3db5-0508-4601-93cd-bd2de4ee12c5.png"
                alt="Security Operations"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Nos Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Contactez-nous</h2>
            <p className="mb-4">+212 7 043 256 36</p>
            <p className="mb-4">belgardiennage@gmail.com</p>
            <p>Siège Social/Résidence El Kaoutar 5 Mag N°4 Bir Rami, Kénitra</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: "Agent de Sécurité",
    description: "Protection des biens et des personnes 24h/24 et 7j/7",
  },
  {
    title: "Sécurité Incendie",
    description: "Agents formés pour la prévention et la gestion des risques",
  },
  {
    title: "Événementiel",
    description: "Sécurité discrète pour vos événements d'importance",
  },
];

export default Index;