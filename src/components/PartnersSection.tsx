const partners = [
  { 
    name: "LFP France", 
    image: "/placeholder.svg"
  },
  { 
    name: "Euro 2016", 
    image: "/placeholder.svg"
  },
  { 
    name: "IRB Rugby World Cup", 
    image: "/placeholder.svg"
  },
  { 
    name: "Assistance Publique Hôpitaux de Marseille", 
    image: "/placeholder.svg"
  },
  { 
    name: "Festival de Cannes", 
    image: "/placeholder.svg"
  },
  { 
    name: "Super U", 
    image: "/placeholder.svg"
  },
  { 
    name: "New Yorker", 
    image: "/placeholder.svg"
  },
  { 
    name: "Auchan", 
    image: "/placeholder.svg"
  },
  { 
    name: "Formula One", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/2560px-F1.svg.png" 
  },
  { 
    name: "Audi", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/2560px-Audi-Logo_2016.svg.png" 
  },
  { 
    name: "Carrefour", 
    image: "/placeholder.svg"
  },
  { 
    name: "IKEA", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ikea_logo.svg/2560px-Ikea_logo.svg.png" 
  }
];

export function PartnersSection() {
  return (
    <section className="py-20 bg-background" id="partners">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Partenaires</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-4 hover:scale-105 transition-transform">
              <img
                src={partner.image}
                alt={partner.name}
                className="max-w-[150px] h-auto grayscale hover:grayscale-0 transition-all"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}