import { Card } from "@/components/ui/card";

export const ServicesSection = () => {
  const services = [
    {
      icon: "📊",
      title: "Contabilidade Completa",
      description: "Escrituração fiscal, balancetes mensais e demonstrações contábeis."
    },
    {
      icon: "📋",
      title: "Planejamento Tributário", 
      description: "Análise e otimização da carga fiscal da sua empresa."
    },
    {
      icon: "🏢",
      title: "Abertura de Empresas",
      description: "Constituição de empresas com escolha do melhor regime tributário."
    },
    {
      icon: "📑",
      title: "Obrigações Acessórias",
      description: "Entrega de todas as declarações no prazo correto."
    },
    {
      icon: "💼",
      title: "Consultoria Fiscal",
      description: "Orientação especializada para tomada de decisões estratégicas."
    },
    {
      icon: "⚖️",
      title: "Regularização Fiscal",
      description: "Solução para pendências e regularização de débitos."
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-muted/20">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            NOSSOS SERVIÇOS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas em contabilidade para o crescimento 
            sustentável do seu negócio
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-center space-y-4">
                <div className="text-5xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Precisa de algum desses serviços?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg shadow-elegant transition-all duration-300 hover:shadow-glow"
              onClick={() => window.open('https://api.whatsapp.com/send?phone=5514996803930', '_blank')}
            >
              💬 CONVERSAR NO WHATSAPP
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};