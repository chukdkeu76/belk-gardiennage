const partners = [
  { name: "LFP France", image: "/partners/lfp.png" },
  { name: "Euro 2016", image: "/partners/euro2016.png" },
  { name: "IRB Rugby", image: "/partners/irb.png" },
  { name: "Carrefour", image: "/partners/carrefour.png" },
  { name: "IKEA", image: "/partners/ikea.png" }
];

export function PartnersSection() {
  return (
    <section className="py-20 bg-background" id="partners">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Partenaires</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-4">
              <img
                src="https://images.unsplash.com/photo-1438565434616-3ef039228b15"
                alt={partner.name}
                className="max-w-[120px] h-auto grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}