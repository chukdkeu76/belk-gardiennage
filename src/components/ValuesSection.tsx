import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Ear, Heart, Sparkles, Shield, Target, Users } from "lucide-react";

const values = [
  {
    title: "Écoute",
    description: "Proximité et attention aux besoins de nos clients. Nous nous engageons à comprendre vos besoins spécifiques et à y répondre de manière personnalisée.",
    icon: Ear
  },
  {
    title: "Respect",
    description: "Le fondement de toute relation durable. Nous valorisons chaque interaction avec nos clients et nos employés, créant un environnement de confiance mutuelle.",
    icon: Heart
  },
  {
    title: "Audace",
    description: "Innovation et recherche constante d'excellence. Nous repoussons les limites pour offrir des solutions de sécurité toujours plus efficaces.",
    icon: Sparkles
  },
  {
    title: "Professionnalisme",
    description: "Une équipe hautement qualifiée et formée aux dernières normes de sécurité. Notre expertise garantit une protection optimale.",
    icon: Shield
  },
  {
    title: "Performance",
    description: "Des objectifs clairs et des résultats mesurables. Nous nous engageons à atteindre l'excellence dans chaque mission.",
    icon: Target
  },
  {
    title: "Engagement Social",
    description: "Une entreprise citoyenne qui contribue au bien-être de la communauté. Nous créons des opportunités d'emploi et soutenons le développement local.",
    icon: Users
  }
];

export function ValuesSection() {
  return (
    <section className="py-20 bg-secondary" id="values">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
          Nos Valeurs
        </h2>
        <p className="text-center text-white/80 max-w-2xl mx-auto mb-12 text-lg">
          Chez BELK Gardiennage, nos valeurs sont le fondement de notre engagement envers l'excellence et la satisfaction client.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="bg-white/10 backdrop-blur border-none text-white hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <value.icon className="w-12 h-12 text-primary animate-pulse" />
                </div>
                <CardTitle className="text-xl md:text-2xl mb-2">{value.title}</CardTitle>
                <CardContent className="pt-2">
                  <p className="text-white/80 leading-relaxed">{value.description}</p>
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}