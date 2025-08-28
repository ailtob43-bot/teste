export const Footer = () => {
  return (
    <footer className="bg-secondary py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              Ana Rijo Contabilidade
            </h3>
            <p className="text-muted-foreground">
              Sua parceira contábil para crescimento seguro e economia real.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                CRC: [Número do registro]
              </p>
              <p className="text-sm text-muted-foreground">
                CNPJ: [CNPJ da empresa]
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              Serviços
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Contabilidade Completa</li>
              <li>Planejamento Tributário</li>
              <li>Abertura de Empresas</li>
              <li>Consultoria Fiscal</li>
              <li>Regularização Fiscal</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              Contato
            </h3>
            <div className="space-y-3">
              <button 
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                onClick={() => window.open('https://api.whatsapp.com/send?phone=5514996803930', '_blank')}
              >
                📱 (14) 99680-3930
              </button>
              <p className="text-muted-foreground">
                📧 contato@oramocontabilidade.com.br
              </p>
              <p className="text-muted-foreground">
                📍 [Endereço da empresa]
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Ana Rijo Contabilidade. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};