import { Button } from "./ui/button";

export function ContactSection() {
  return (
    <section className="py-20 bg-secondary text-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contactez Nous</h2>
          <div className="space-y-4 mb-8">
            <p className="flex items-center justify-center gap-2">
              <span>+212 7 043 256 36</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span>belgardiennage@gmail.com</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span>Siège Social/Résidence El Kaoutar 5 Mag N°4 Bir Rami, Kénitra</span>
            </p>
          </div>
          <Button size="lg" variant="outline" className="bg-primary/20 hover:bg-primary/30 border-primary">
            Envoyez un message
          </Button>
        </div>
      </div>
    </section>
  );
}