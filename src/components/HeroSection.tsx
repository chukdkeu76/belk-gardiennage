import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
      >
        <source
          src="https://res.cloudinary.com/dkb1opktz/video/upload/v1733156399/fr7vsdiompuvrbpvfcpp.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          BELK GARDIENNAGE
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Votre Partenaire de Confiance en Sécurité
        </p>
        <Button size="lg" variant="outline" className="bg-primary/20 hover:bg-primary/30 border-primary">
          Contactez-nous
        </Button>
      </div>
    </section>
  );
}