import { Button } from "@/components/ui/button";
import { useState } from "react";

export function LanguageSelector() {
  const [language, setLanguage] = useState("fr");

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "ar" : "fr");
    // In a real app, this would trigger language change throughout the app
  };

  return (
    <Button variant="ghost" onClick={toggleLanguage}>
      {language === "fr" ? "عربي" : "Français"}
    </Button>
  );
}