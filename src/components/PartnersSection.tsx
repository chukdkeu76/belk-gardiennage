const partners = [
  { 
    name: "LFP France", 
    image: "/lovable-uploads/1e2e5694-62b9-4677-afec-82a962cd1e41.png"
  },
  { 
    name: "Euro 2016", 
    image: "/lovable-uploads/453154d5-65ad-4442-9092-2db0fb6d3db6.png"
  },
  { 
    name: "IRB Rugby World Cup", 
    image: "/lovable-uploads/bf476ba8-a179-496a-88f9-9942a8477603.png"
  },
  { 
    name: "Assistance Publique Hôpitaux de Marseille", 
    image: "/lovable-uploads/1e4f96b7-1269-4fe4-9ad2-8f03a0930e5b.png"
  },
  { 
    name: "Festival de Cannes", 
    image: "/lovable-uploads/af10c8d8-5c39-4d69-afd4-9012eeacb56b.png"
  },
  { 
    name: "Super U", 
    image: "/lovable-uploads/1e2e5694-62b9-4677-afec-82a962cd1e41.png"
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