import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export function QuoteForm() {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    details: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:belkgardiennage@gmail.com?subject=Demande de devis - ${formData.service}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AService: ${formData.service}%0D%0A%0D%0ADétails:%0D%0A${formData.details}`;
    window.location.href = mailtoLink;
    setOpen(false);
    toast({
      title: "Demande envoyée",
      description: "Nous vous contacterons bientôt avec un devis personnalisé.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-primary/20 hover:bg-primary/30 border-primary">
          Demander un Devis
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Demander un Devis</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4 md:col-span-1">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Votre téléphone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <div>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez un service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="agent-securite">Agent de Sécurité</SelectItem>
                    <SelectItem value="agent-incendie">Agent Sécurité Incendie</SelectItem>
                    <SelectItem value="agent-cynophile">Agent Cynophile</SelectItem>
                    <SelectItem value="rondier">Le Rondier Intervenant</SelectItem>
                    <SelectItem value="chantier">Chantier Public</SelectItem>
                    <SelectItem value="evenement">Événement-concert</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Textarea
                  placeholder="Détails de votre demande"
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full">Envoyer la demande</Button>
            </form>
          </div>
          <div className="space-y-4 bg-secondary/5 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Pourquoi Choisir BELK Gardiennage?</h3>
            <ul className="space-y-2 text-sm">
              <li>✓ Services personnalisés selon vos besoins spécifiques</li>
              <li>✓ Rapport qualité-prix optimal</li>
              <li>✓ Équipe professionnelle et expérimentée</li>
              <li>✓ Solutions flexibles et adaptables</li>
              <li>✓ Disponibilité 24/7</li>
              <li>✓ Équipements de dernière génération</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              Nous vous proposerons une solution sur mesure adaptée à vos besoins et à votre budget. Notre équipe d'experts est là pour vous conseiller et vous accompagner dans votre projet.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}