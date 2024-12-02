import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    title: "Agent de Sécurité",
    description: "La Sécurité des biens et des personnes est l'objet principal de notre métier. Nous disposons des Moyens humains les plus pointus et des moyens humains les plus pointus et des méthodes les plus modernes pour vus permettre d'exercer votre activité en toute quiétude 24h/24 et 7j/7 Faites nous confiance, nous en serons digne.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
  },
  {
    title: "Agent Sécurité Incendie",
    description: "Nos agents sont sélectionnés pour leur sens de la prévention et leur maîtrise à des situations à haut risques. Ils ont tous été formés par des organismes reconnus. Ils suivent très régulièrement des stages de formation continue et ils participent à des entraînements sur feu réel. Même si leurs taches courantes se limitent le plus souvent à la surveillance des équipements et alarmes, ils sont potentiellement armés pour faire face à toutes les situations.",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
  },
  {
    title: "Agent Cynophile",
    description: "Pour tous les sites sensibles: Centres de recherche, Centres commerciaux, Parking, Choppers, Entrepôts, Immeubles & Résidences. Des équipes professionnelles, dynamiques et commenter sont en mesure de prévenir les situates risque et d'intervenir rapidement dans toutes les circonstances. Les équipes cynophiles sont particulièrement indiquées pour ces types de missions.",
    image: "https://images.unsplash.com/photo-1567459169668-95d355371bda"
  },
  {
    title: "Le Rondier Intervenant",
    description: "En cas de déclenchement d'une alarme sur un site surveillé à distance, nos équipes mobiles spécialisées interviennent immédiatement sur place pour faire un état des lieux, avertir le PC de sécurité des faits constatés, et intervenir si nécessaire avec les forces de l'ordre.",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a"
  },
  {
    title: "Chantier Public",
    description: "Nous proposons à nous clients une gamme complète d'équipements de haute technologie alliant performance et excellent rapport qualité/prix. Ces équipements permettent de multiplier les points de Surveillance sans augmenter le coût en effectif.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
  },
  {
    title: "Événement-concert",
    description: "Pour Vous événements d'importance et d'envergure: Concerts, galas, soirées privées, congrès, rassemblements de toutes natures, BELK Gardiennage vous propose le meilleur service pour assurer l'indispensable qualité de l'acceuil et la surveillance nécessaire pour vous assurer une sécurité discrète.",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea"
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-background" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-sm text-justify">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}