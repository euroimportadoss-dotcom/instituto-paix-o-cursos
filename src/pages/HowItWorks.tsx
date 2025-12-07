import { MainLayout } from '@/components/layout/MainLayout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  UserPlus, 
  BookOpen, 
  PlayCircle, 
  Award, 
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  FileEdit,
  Clock,
  Send
} from 'lucide-react';

const HowItWorks = () => {
  const studentSteps = [
    {
      icon: UserPlus,
      title: 'Crie sua conta',
      description: 'Cadastre-se gratuitamente em menos de 1 minuto. Você só precisa de nome, e-mail e senha.',
    },
    {
      icon: BookOpen,
      title: 'Escolha seus cursos',
      description: 'Navegue pelo catálogo e encontre cursos do seu interesse. Filtre por categoria, nível ou duração.',
    },
    {
      icon: PlayCircle,
      title: 'Estude no seu ritmo',
      description: 'Assista às aulas quando e onde quiser. Pause, retome e reveja quantas vezes precisar.',
    },
    {
      icon: Award,
      title: 'Receba seu certificado',
      description: 'Ao concluir todas as aulas, gere seu certificado automaticamente. É reconhecido e verificável!',
    },
  ];

  const teacherSteps = [
    {
      icon: UserPlus,
      title: 'Cadastre-se como professor',
      description: 'Crie sua conta e solicite o perfil de professor voluntário. Nossa equipe analisará sua solicitação.',
    },
    {
      icon: FileEdit,
      title: 'Crie seu curso',
      description: 'Organize seu conteúdo em módulos e aulas. Adicione vídeos, textos e materiais de apoio.',
    },
    {
      icon: Send,
      title: 'Envie para aprovação',
      description: 'Quando seu curso estiver pronto, envie para análise. Nossa equipe verificará o conteúdo.',
    },
    {
      icon: GraduationCap,
      title: 'Impacte vidas',
      description: 'Após aprovação, seu curso fica disponível para milhares de alunos. Acompanhe o progresso deles!',
    },
  ];

  return (
    <MainLayout>
      {/* Hero */}
      <section className="gradient-hero py-16 lg:py-24 text-primary-foreground">
        <div className="container text-center">
          <Badge variant="featured" className="mb-6">Passo a Passo</Badge>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Como Funciona a Plataforma
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Uma plataforma simples e acessível, pensada para todos. 
            Veja como é fácil começar a estudar ou ensinar.
          </p>
        </div>
      </section>

      {/* For Students */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Para Alunos</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Comece a Estudar em 4 Passos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Estudar nunca foi tão fácil. Siga esses passos simples e comece a transformar sua vida hoje.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {studentSteps.map((step, index) => (
              <Card key={step.title} className="relative overflow-hidden group hover:shadow-glow transition-all">
                <CardContent className="pt-8 pb-6">
                  <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10">
                    {index + 1}
                  </div>
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl gradient-cta flex items-center justify-center mb-4 shadow-glow group-hover:scale-110 transition-transform">
                      <step.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link to="/register">
                Criar Minha Conta Grátis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* For Teachers */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Para Professores</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Compartilhe seu Conhecimento
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Seja um professor voluntário e ajude a transformar vidas através da educação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {teacherSteps.map((step, index) => (
              <Card key={step.title} className="relative overflow-hidden group hover:shadow-glow transition-all">
                <CardContent className="pt-8 pb-6">
                  <div className="absolute top-4 right-4 text-6xl font-bold text-secondary-foreground/10">
                    {index + 1}
                  </div>
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <step.icon className="h-7 w-7 text-secondary-foreground" />
                    </div>
                    <h3 className="font-heading text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/register?professor=true">
                Quero ser Professor Voluntário
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Benefícios</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Por que Escolher o Instituto?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: '100% Gratuito', description: 'Todos os cursos são completamente gratuitos. Sem taxas escondidas.' },
              { title: 'Certificado Válido', description: 'Certificados com código de verificação, reconhecidos no mercado.' },
              { title: 'Estude no seu Ritmo', description: 'Acesso 24h por dia, 7 dias por semana. Você controla seu tempo.' },
              { title: 'Professores Qualificados', description: 'Conteúdo criado por profissionais voluntários experientes.' },
              { title: 'Plataforma Acessível', description: 'Interface simples e fácil de usar, mesmo para iniciantes.' },
              { title: 'Suporte ao Aluno', description: 'Nossa equipe está sempre disponível para ajudar você.' },
            ].map((benefit) => (
              <div key={benefit.title} className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-hero text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Pronto para Começar?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Junte-se a milhares de pessoas que já estão transformando suas vidas através da educação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="heroOutline" asChild>
              <Link to="/cursos">Ver Cursos</Link>
            </Button>
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
              <Link to="/register">Criar Conta Grátis</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HowItWorks;
