import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, Gift, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Home = () => {
  const features = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Feito com Amor",
      description: "Cada doce é preparado artesanalmente com ingredientes selecionados e muito carinho."
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Qualidade Premium",
      description: "Utilizamos apenas os melhores ingredientes para garantir sabor e qualidade únicos."
    },
    {
      icon: <Gift className="h-8 w-8 text-primary" />,
      title: "Momentos Especiais",
      description: "Perfeito para aniversários, casamentos, festas e qualquer ocasião especial."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Entrega Rápida",
      description: "Entregamos seus doces fresquinhos no conforto da sua casa."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Bem-vindo à
              <span className="text-primary block mt-2">Doceria Doce Encanto</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Delícias artesanais feitas com amor para adoçar seus momentos mais especiais. 
              Descubra sabores únicos que vão encantar seu paladar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button size="lg" className="text-lg px-8 py-6">
                  Ver Produtos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Criar Conta
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Por que escolher a Doce Encanto?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Combinamos tradição, qualidade e inovação para criar experiências doces inesquecíveis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <div className="flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Nossos Produtos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Uma seleção especial dos nossos doces mais queridos pelos clientes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Product Preview Cards */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 rounded-t-lg flex items-center justify-center">
                  <div className="text-8xl">🧁</div>
                </div>
                <div className="p-6 text-center space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">Cupcakes</h3>
                  <p className="text-muted-foreground">Deliciosos cupcakes com coberturas especiais</p>
                  <p className="text-2xl font-bold text-primary">A partir de R$ 8,00</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 rounded-t-lg flex items-center justify-center">
                  <div className="text-8xl">🍰</div>
                </div>
                <div className="p-6 text-center space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">Bolos</h3>
                  <p className="text-muted-foreground">Bolos artesanais para todas as ocasiões</p>
                  <p className="text-2xl font-bold text-primary">A partir de R$ 35,00</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 rounded-t-lg flex items-center justify-center">
                  <div className="text-8xl">🍫</div>
                </div>
                <div className="p-6 text-center space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">Docinhos</h3>
                  <p className="text-muted-foreground">Brigadeiros, beijinhos e muito mais</p>
                  <p className="text-2xl font-bold text-primary">A partir de R$ 2,50</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Link to="/products">
              <Button size="lg" className="text-lg px-8 py-6">
                Ver Todos os Produtos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Pronto para adoçar seu dia?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Cadastre-se agora e receba ofertas especiais diretamente no seu e-mail. 
            Seja o primeiro a saber sobre nossos novos sabores!
          </p>
          <Link to="/register">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
              Cadastrar Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

