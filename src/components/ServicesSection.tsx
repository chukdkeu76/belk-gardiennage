import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    title: "Agent de Sécurité",
    description: "Protection des biens et des personnes 24h/24 et 7j/7",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
  },
  {
    title: "Sécurité Incendie",
    description: "Agents formés pour la prévention et la gestion des risques",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
  },
  {
    title: "Événementiel",
    description: "Sécurité discrète pour vos événements d'importance",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a"
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-background" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}