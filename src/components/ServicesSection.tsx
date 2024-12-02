import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Shield, Briefcase, Dog, Car, Construction, Megaphone } from "lucide-react";

const services = [
  {
    title: "Agent de Sécurité",
    description: "La Sécurité des biens et des personnes est l'objet principal de notre métier. Nous disposons des Moyens humains les plus pointus et des moyens humains les plus pointus et des méthodes les plus modernes pour vus permettre d'exercer votre activité en toute quiétude 24h/24 et 7j/7 Faites nous confiance, nous en serons digne.",
    icon: Shield
  },
  {
    title: "Agent Sécurité Incendie",
    description: "Nos agents sont sélectionnés pour leur sens de la prévention et leur maîtrise à des situations à haut risques. Ils ont tous été formés par des organismes reconnus. Ils suivent très régulièrement des stages de formation continue et ils participent à des entraînements sur feu réel. Même si leurs taches courantes se limitent le plus souvent à la surveillance des équipements et alarmes, ils sont potentiellement armés pour faire face à toutes les situations.",
    icon: Briefcase
  },
  {
    title: "Agent Cynophile",
    description: "Pour tous les sites sensibles: Centres de recherche, Centres commerciaux, Parking, Choppers, Entrepôts, Immeubles & Résidences. Des équipes professionnelles, dynamiques et commenter sont en mesure de prévenir les situates risque et d'intervenir rapidement dans toutes les circonstances. Les équipes cynophiles sont particulièrement indiquées pour ces types de missions.",
    icon: Dog
  },
  {
    title: "Le Rondier Intervenant",
    description: "En cas de déclenchement d'une alarme sur un site surveillé à distance, nos équipes mobiles spécialisées interviennent immédiatement sur place pour faire un état des lieux, avertir le PC de sécurité des faits constatés, et intervenir si nécessaire avec les forces de l'ordre.",
    icon: Car
  },
  {
    title: "Chantier Public",
    description: "Nous proposons à nous clients une gamme complète d'équipements de haute technologie alliant performance et excellent rapport qualité/prix. Ces équipements permettent de multiplier les points de Surveillance sans augmenter le coût en effectif.",
    icon: Construction
  },
  {
    title: "Événement-concert",
    description: "Pour Vous événements d'importance et d'envergure: Concerts, galas, soirées privées, congrès, rassemblements de toutes natures, BELK Gardiennage vous propose le meilleur service pour assurer l'indispensable qualité de l'acceuil et la surveillance nécessaire pour vous assurer une sécurité discrète.",
    icon: Megaphone
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
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <service.icon className="w-16 h-16 text-primary" />
                </div>
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