const partners = [
  { 
    name: "LFP France", 
    image: "https://upload.wikimedia.org/wikipedia/fr/thumb/1/14/Ligue_de_Football_Professionnel_%28logo%29.svg/1200px-Ligue_de_Football_Professionnel_%28logo%29.svg.png" 
  },
  { 
    name: "Euro 2016", 
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/UEFA_Euro_2016_Logo.svg/1200px-UEFA_Euro_2016_Logo.svg.png" 
  },
  { 
    name: "IRB Rugby World Cup", 
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Rugby_World_Cup.svg/1200px-Rugby_World_Cup.svg.png" 
  },
  { 
    name: "Assistance Publique Hôpitaux de Marseille", 
    image: "https://upload.wikimedia.org/wikipedia/fr/thumb/f/f7/Logo_AP-HM.svg/1200px-Logo_AP-HM.svg.png" 
  },
  { 
    name: "Festival de Cannes", 
    image: "https://upload.wikimedia.org/wikipedia/fr/thumb/7/79/Festival_de_Cannes_Logo.svg/1200px-Festival_de_Cannes_Logo.svg.png" 
  },
  { 
    name: "Super U", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Logo_Super_U_2009.svg/2560px-Logo_Super_U_2009.svg.png" 
  },
  { 
    name: "New Yorker", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/New_Yorker.svg/2560px-New_Yorker.svg.png" 
  },
  { 
    name: "Auchan", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Logo_Auchan.svg/2560px-Logo_Auchan.svg.png" 
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Carrefour_logo.svg/2560px-Carrefour_logo.svg.png" 
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