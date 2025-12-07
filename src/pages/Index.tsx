import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  BarChart,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MainLayout } from '@/components/layout/MainLayout';
import { CourseCard } from '@/components/courses/CourseCard';
import { Course } from '@/types';

// Mock courses for demo
const featuredCourses: Course[] = [
  {
    id: '1',
    title: 'Introdução à Informática para Iniciantes',
    description: 'Aprenda os conceitos básicos de informática, uso do computador, internet e ferramentas do dia a dia.',
    category: 'Informática',
    level: 'INICIANTE',
    workloadHours: 20,
    status: 'APPROVED',
    teacherId: '1',
    teacher: { id: '1', name: 'Maria Silva', email: '', roles: ['PROFESSOR'], createdAt: '', updatedAt: '' },
    isNew: true,
    isFeatured: true,
    createdAt: '',
    updatedAt: '',
  },
  {
    id: '2',
    title: 'Empreendedorismo: Como Iniciar seu Negócio',
    description: 'Descubra como transformar suas ideias em um negócio de sucesso. Plano de negócios, finanças e marketing.',
    category: 'Negócios',
    level: 'INTERMEDIARIO',
    workloadHours: 40,
    status: 'APPROVED',
    teacherId: '2',
    teacher: { id: '2', name: 'João Santos', email: '', roles: ['PROFESSOR'], createdAt: '', updatedAt: '' },
    isFeatured: true,
    createdAt: '',
    updatedAt: '',
  },
  {
    id: '3',
    title: 'Marketing Digital para Pequenos Negócios',
    description: 'Aprenda a divulgar seu negócio na internet usando redes sociais, Google e outras ferramentas.',
    category: 'Marketing',
    level: 'INICIANTE',
    workloadHours: 15,
    status: 'APPROVED',
    teacherId: '3',
    teacher: { id: '3', name: 'Ana Costa', email: '', roles: ['PROFESSOR'], createdAt: '', updatedAt: '' },
    isNew: true,
    createdAt: '',
    updatedAt: '',
  },
];

const stats = [
  { label: 'Alunos', value: '2.500+', icon: Users },
  { label: 'Cursos', value: '45', icon: BookOpen },
  { label: 'Certificados', value: '1.200+', icon: Award },
  { label: 'Horas de Conteúdo', value: '500+', icon: Clock },
];

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero py-20 lg:py-32">
        <div className="absolute inset-0 bg-hero-pattern opacity-50" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <Badge variant="featured" className="mb-6 animate-fade-in">
              100% Gratuito
            </Badge>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              Educação que Transforma Vidas
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              O Instituto Hudson Paixão oferece cursos gratuitos para pessoas de baixa renda. 
              Qualifique-se para o mercado de trabalho e alcance seus sonhos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Button size="xl" variant="heroOutline" asChild>
                <Link to="/cursos">
                  Ver Cursos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="xl" variant="hero" className="bg-background text-foreground hover:bg-background/90" asChild>
                <Link to="/register">
                  Criar Conta Grátis
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[200%] h-48 bg-background rounded-[100%]" />
      </section>

      {/* Stats Section */}
      <section className="py-12 -mt-8 relative z-10">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card key={stat.label} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <p className="font-heading text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Como Funciona</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Simples e Acessível para Todos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nossa plataforma foi pensada para ser fácil de usar, mesmo para quem nunca estudou online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* For Students */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-cta shadow-glow">
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold">Para Alunos</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  'Crie sua conta gratuitamente',
                  'Escolha os cursos que te interessam',
                  'Estude no seu ritmo, quando e onde quiser',
                  'Acompanhe seu progresso em tempo real',
                  'Receba seu certificado ao concluir',
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
              
              <Button asChild>
                <Link to="/register">Quero me Cadastrar</Link>
              </Button>
            </div>

            {/* For Teachers */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary shadow-soft">
                  <BookOpen className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold">Para Professores</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  'Cadastre-se como professor voluntário',
                  'Crie e organize seu curso com módulos e aulas',
                  'Adicione vídeos, textos e materiais de apoio',
                  'Envie para aprovação do Instituto',
                  'Acompanhe o progresso dos seus alunos',
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary-foreground shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" asChild>
                <Link to="/register?professor=true">Quero ser Professor</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <Badge variant="secondary" className="mb-4">Cursos em Destaque</Badge>
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                Comece sua Jornada Hoje
              </h2>
            </div>
            <Button variant="outline" asChild>
              <Link to="/cursos">
                Ver Todos os Cursos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} showEnrollButton={false} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 gradient-hero text-primary-foreground">
        <div className="container text-center">
          <Star className="h-12 w-12 mx-auto mb-6 animate-pulse" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Pronto para Transformar sua Vida?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Junte-se a milhares de alunos que já estão se qualificando com nossos cursos gratuitos. 
            O conhecimento pode abrir portas que você nem imaginava.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="heroOutline" asChild>
              <Link to="/cursos">Explorar Cursos</Link>
            </Button>
            <Button size="xl" className="bg-background text-foreground hover:bg-background/90" asChild>
              <Link to="/register">Começar Agora</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Hudson Paixão Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Sobre o Vereador Hudson Paixão
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Hudson Paixão é vereador de Belo Horizonte comprometido com a educação e o desenvolvimento social. 
              O Instituto Hudson Paixão nasceu do sonho de democratizar o acesso ao conhecimento, 
              oferecendo cursos gratuitos para quem mais precisa.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Através desta plataforma, jovens e adultos de todas as idades podem se qualificar para o mercado de trabalho, 
              empreender e conquistar uma vida melhor. Nossa missão é transformar vidas através da educação.
            </p>
            <Button variant="outline" asChild>
              <Link to="/sobre">Conheça Nossa História</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
