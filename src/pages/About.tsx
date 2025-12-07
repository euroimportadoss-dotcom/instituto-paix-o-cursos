import { MainLayout } from '@/components/layout/MainLayout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { GraduationCap, Heart, Target, Users, Award, HandHeart } from 'lucide-react';

const About = () => {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="gradient-hero py-16 lg:py-24 text-primary-foreground">
        <div className="container text-center">
          <Badge variant="featured" className="mb-6">Sobre Nós</Badge>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Instituto Hudson Paixão
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Transformando vidas através da educação gratuita e de qualidade. 
            Nosso compromisso é democratizar o acesso ao conhecimento.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 -mt-8">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="mx-auto w-14 h-14 rounded-2xl gradient-cta flex items-center justify-center mb-4 shadow-glow">
                  <Target className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">Nossa Missão</h3>
                <p className="text-muted-foreground">
                  Oferecer educação gratuita e de qualidade para pessoas de baixa renda, 
                  promovendo a inclusão social através do conhecimento.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="mx-auto w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-4">
                  <GraduationCap className="h-7 w-7 text-secondary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">Nossa Visão</h3>
                <p className="text-muted-foreground">
                  Ser referência em educação acessível em Belo Horizonte, 
                  transformando milhares de vidas através de cursos gratuitos e de qualidade.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="mx-auto w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-4">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">Nossos Valores</h3>
                <p className="text-muted-foreground">
                  Compromisso social, excelência educacional, inclusão, 
                  transparência e respeito às pessoas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Hudson Paixão */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">O Fundador</Badge>
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                Vereador Hudson Paixão
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Hudson Paixão é vereador de Belo Horizonte, eleito pela confiança de milhares de cidadãos 
                que acreditam em seu trabalho focado no desenvolvimento social e na educação.
              </p>
              
              <p>
                Natural de Belo Horizonte, Hudson sempre acreditou que a educação é o caminho mais 
                seguro para a transformação social. Com uma trajetória marcada pelo compromisso com 
                as comunidades mais vulneráveis, ele idealizou o Instituto Hudson Paixão como forma 
                de devolver à sociedade as oportunidades que recebeu.
              </p>

              <p>
                O Instituto nasceu do sonho de criar uma plataforma onde qualquer pessoa, independente 
                de sua condição financeira, pudesse ter acesso a cursos de qualidade para se qualificar 
                para o mercado de trabalho ou empreender.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 italic text-foreground">
                "A educação é a arma mais poderosa que você pode usar para mudar o mundo. 
                Por isso, nosso Instituto oferece cursos 100% gratuitos para quem mais precisa."
                <footer className="text-sm mt-2 not-italic">— Hudson Paixão</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Nosso Impacto</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Números que Transformam
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Users, value: '2.500+', label: 'Alunos Impactados' },
              { icon: GraduationCap, value: '45', label: 'Cursos Disponíveis' },
              { icon: Award, value: '1.200+', label: 'Certificados Emitidos' },
              { icon: HandHeart, value: '30+', label: 'Professores Voluntários' },
            ].map((stat) => (
              <Card key={stat.label} className="text-center">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <p className="font-heading text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-hero text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Faça Parte dessa Transformação
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Seja como aluno, professor voluntário ou parceiro, você pode fazer a diferença 
            na vida de milhares de pessoas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="heroOutline" asChild>
              <Link to="/cursos">Ver Cursos</Link>
            </Button>
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
              <Link to="/register">Começar Agora</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
