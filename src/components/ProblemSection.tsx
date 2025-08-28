import { Button } from "@/components/ui/button";

export const ProblemSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="container mx-auto">
        {/* Main Question */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            VOCÊ ESTÁ PAGANDO{" "}
            <span className="text-primary border-b-2 border-primary pb-2">
              MAIS IMPOSTOS
            </span>{" "}
            DO QUE DEVERIA?
          </h2>
        </div>

        {/* Problem Description */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Manter um negócio lucrativo é um desafio, especialmente quando a carga tributária 
              pode comprometer seus resultados.
            </p>
            
            <div className="space-y-4">
              <p className="text-foreground font-medium">
                Muitos empreendedores acabam pagando mais impostos do que deveriam ou 
                enfrentam problemas como:
              </p>
              
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">•</span>
                  Regime tributário inadequado para seu negócio
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">•</span>
                  Falta de planejamento fiscal estratégico
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">•</span>
                  Documentação fiscal desorganizada
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">•</span>
                  Perdas de prazos importantes
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">•</span>
                  Multas e juros desnecessários
                </li>
              </ul>
            </div>

            {/* Money Icon Illustration */}
            <div className="flex items-center gap-4 p-6 bg-gradient-card rounded-lg shadow-card">
              <div className="text-4xl">💰</div>
              <div>
                <p className="text-primary font-semibold">
                  Economia média de 30-40% nos impostos
                </p>
                <p className="text-sm text-muted-foreground">
                  com planejamento adequado
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Solution */}
          <div className="bg-gradient-card p-8 rounded-2xl shadow-elegant">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-primary">
                Mas existe uma solução!
              </h3>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">
                  ANA RIJO
                </h4>
                <p className="text-lg font-medium text-primary">
                  CONTADORA
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Serviços completos e personalizados para sua necessidade, 
                desde a contabilidade geral até estratégias avançadas de 
                planejamento fiscal.
              </p>

              <Button 
                variant="cta" 
                size="lg"
                className="w-full text-lg py-6"
                onClick={() => window.open('https://api.whatsapp.com/send?phone=5514996803930', '_blank')}
              >
                📱 FALAR NO WHATSAPP
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};