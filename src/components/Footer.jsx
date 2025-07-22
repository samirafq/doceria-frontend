import { Heart, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-50 to-purple-50 border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-primary fill-current" />
              <span className="text-xl font-bold text-primary">Doce Encanto</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Criamos doces artesanais com muito amor e carinho. 
              Cada produto é feito especialmente para adoçar seus momentos especiais.
            </p>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contato</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>(84) 98175-1522</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>samiraaquinoff2017@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Água Nova, RN</span>
              </div>
            </div>
          </div>

          {/* Horário de Funcionamento */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Horário de Funcionamento</h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <div>Segunda a Sexta: 8h às 18h</div>
              <div>Sábado: 8h às 16h</div>
              <div>Domingo: 8h às 12h</div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Doceria Doce Encanto. 
            <p>
              Desenvolvido por Samira França
            </p>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

