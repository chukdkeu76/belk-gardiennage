import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import { useState } from "react";

export function JobApplicationForm({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    education: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:belkgardiennage@gmail.com?subject=Candidature Agent Sécurité - ${formData.name}&body=Nom: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ATéléphone: ${formData.phone}%0D%0A%0D%0AExpérience:%0D%0A${formData.experience}%0D%0A%0D%0AFormation:%0D%0A${formData.education}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = mailtoLink;
    setOpen(false);
    toast({
      title: "Candidature envoyée",
      description: "Nous vous contacterons bientôt.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Postuler Pour "Agent Sécurité Belk"</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
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
            <Textarea
              placeholder="Votre expérience professionnelle"
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              required
            />
          </div>
          <div>
            <Textarea
              placeholder="Votre formation"
              value={formData.education}
              onChange={(e) => setFormData({ ...formData, education: e.target.value })}
              required
            />
          </div>
          <div>
            <Textarea
              placeholder="Message complémentaire"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <Button type="submit" className="w-full">Envoyer</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}