import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    regime: '',
    faturamento: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.nome || !formData.email || !formData.whatsapp || !formData.regime) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Create WhatsApp message
    const message = `Olá! Gostaria de solicitar um diagnóstico fiscal gratuito.

*Dados:*
Nome: ${formData.nome}
Email: ${formData.email}
WhatsApp: ${formData.whatsapp}
Regime Tributário: ${formData.regime}
Faturamento Médio: ${formData.faturamento}

Aguardo o contato!`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=5514996803930&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Redirecionando...",
      description: "Você será direcionado para o WhatsApp para finalizar o contato.",
    });
  };

  return (
    <section id="contato" className="py-20 px-4 md:px-8 bg-background">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            SOLICITE SEU DIAGNÓSTICO GRATUITO
          </h2>
          <p className="text-lg text-muted-foreground">
            Preencha os dados abaixo e descubra como economizar nos impostos
          </p>
        </div>

        {/* Form */}
        <Card className="p-8 bg-gradient-card shadow-elegant">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nome */}
            <div className="space-y-2">
              <Label htmlFor="nome" className="text-foreground font-medium">
                Nome completo *
              </Label>
              <Input
                id="nome"
                type="text"
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
                className="bg-input border-border text-foreground"
                placeholder="Digite seu nome completo"
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">
                E-mail *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="bg-input border-border text-foreground"
                placeholder="seu@email.com"
                required
              />
            </div>

            {/* WhatsApp */}
            <div className="space-y-2">
              <Label htmlFor="whatsapp" className="text-foreground font-medium">
                DDD + WhatsApp *
              </Label>
              <Input
                id="whatsapp"
                type="tel"
                value={formData.whatsapp}
                onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                className="bg-input border-border text-foreground"
                placeholder="(11) 99999-9999"
                required
              />
            </div>

            {/* Regime Tributário */}
            <div className="space-y-2">
              <Label className="text-foreground font-medium">
                Regime tributário *
              </Label>
              <Select onValueChange={(value) => setFormData({...formData, regime: value})}>
                <SelectTrigger className="bg-input border-border text-foreground">
                  <SelectValue placeholder="Selecione o regime tributário" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="simples">Simples Nacional</SelectItem>
                  <SelectItem value="presumido">Lucro Presumido</SelectItem>
                  <SelectItem value="mei">MEI</SelectItem>
                  <SelectItem value="real">Lucro Real</SelectItem>
                  <SelectItem value="nao-sei">Não sei informar</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Faturamento */}
            <div className="space-y-2">
              <Label htmlFor="faturamento" className="text-foreground font-medium">
                Faturamento médio mensal (opcional)
              </Label>
              <Input
                id="faturamento"
                type="text"
                value={formData.faturamento}
                onChange={(e) => setFormData({...formData, faturamento: e.target.value})}
                className="bg-input border-border text-foreground"
                placeholder="Ex: R$ 50.000,00"
              />
            </div>

            {/* Submit Button */}
            <Button 
              type="submit"
              variant="cta" 
              size="lg"
              className="w-full text-lg py-6 mt-8"
            >
              📱 ENVIAR E FALAR NO WHATSAPP
            </Button>
          </form>

          {/* Security Note */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            Seus dados estão seguros e serão usados apenas para contato profissional.
          </p>
        </Card>
      </div>
    </section>
  );
};