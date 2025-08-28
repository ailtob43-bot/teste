import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-accountant.jpg";
import logoCircle from "@/assets/logo-circle.png";

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 md:px-8">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8">
          {/* Logo */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-glow">
              <img 
                src={logoCircle} 
                alt="Logo Orámo Contabilidade" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Professional Name */}
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              ANA RIJO
            </h2>
            <p className="text-lg text-muted-foreground font-medium">
              CONTADORA
            </p>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              SUA PARCEIRA CONTÁBIL PARA
            </h1>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                CRESCIMENTO SEGURO
              </span>
            </h1>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              E ECONOMIA REAL
            </h1>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-8 py-6 rounded-lg"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
              👆 QUERO MEU DIAGNÓSTICO FISCAL GRATUITO AGORA!
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-96 md:w-96 md:h-[500px] rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="Ana Rijo - Contadora Profissional" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl shadow-glow pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};