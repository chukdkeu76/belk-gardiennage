import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Ear, Heart, Sparkles } from "lucide-react";

const values = [
  {
    title: "Écoute",
    description: "Proximité et attention aux besoins de nos clients",
    icon: Ear
  },
  {
    title: "Respect",
    description: "Le fondement de toute relation durable",
    icon: Heart
  },
  {
    title: "Audace",
    description: "Innovation et recherche constante d'excellence",
    icon: Sparkles
  }
];

export function ValuesSection() {
  return (
    <section className="py-20 bg-secondary" id="values">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Nos Valeurs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur border-none text-white">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <value.icon className="w-12 h-12 text-primary" />
                </div>
                <CardTitle>{value.title}</CardTitle>
                <CardContent className="pt-4">
                  <p>{value.description}</p>
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}