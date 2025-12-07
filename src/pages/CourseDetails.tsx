import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Clock, 
  BarChart, 
  Users, 
  BookOpen, 
  CheckCircle2, 
  Play,
  ChevronDown,
  ArrowLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { MainLayout } from '@/components/layout/MainLayout';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Course, Module, Lesson } from '@/types';

// Mock course data
const mockCourse: Course & { modules: (Module & { lessons: Lesson[] })[] } = {
  id: '1',
  title: 'Introdução à Informática para Iniciantes',
  description: 'Aprenda os conceitos básicos de informática, uso do computador, internet e ferramentas do dia a dia. Este curso foi desenvolvido especialmente para pessoas que nunca tiveram contato com computadores ou que desejam reforçar seus conhecimentos básicos.',
  category: 'Informática',
  level: 'INICIANTE',
  workloadHours: 20,
  status: 'APPROVED',
  teacherId: '1',
  teacher: { id: '1', name: 'Maria Silva', email: 'maria@email.com', roles: ['PROFESSOR'], createdAt: '', updatedAt: '' },
  isNew: true,
  isFeatured: true,
  createdAt: '',
  updatedAt: '',
  modules: [
    {
      id: 'm1',
      courseId: '1',
      title: 'Módulo 1: Conhecendo o Computador',
      order: 1,
      lessons: [
        { id: 'l1', moduleId: 'm1', title: 'O que é um computador?', description: 'Conceitos básicos', contentType: 'VIDEO', order: 1 },
        { id: 'l2', moduleId: 'm1', title: 'Partes do computador', description: 'Monitor, teclado, mouse, CPU', contentType: 'VIDEO', order: 2 },
        { id: 'l3', moduleId: 'm1', title: 'Ligando e desligando o computador', description: 'Procedimentos corretos', contentType: 'TEXT', order: 3 },
      ],
    },
    {
      id: 'm2',
      courseId: '1',
      title: 'Módulo 2: Sistema Operacional Windows',
      order: 2,
      lessons: [
        { id: 'l4', moduleId: 'm2', title: 'Área de trabalho e menu iniciar', description: '', contentType: 'VIDEO', order: 1 },
        { id: 'l5', moduleId: 'm2', title: 'Trabalhando com janelas', description: '', contentType: 'VIDEO', order: 2 },
        { id: 'l6', moduleId: 'm2', title: 'Criando e organizando pastas', description: '', contentType: 'MIXED', order: 3 },
        { id: 'l7', moduleId: 'm2', title: 'Salvando e abrindo arquivos', description: '', contentType: 'VIDEO', order: 4 },
      ],
    },
    {
      id: 'm3',
      courseId: '1',
      title: 'Módulo 3: Navegando na Internet',
      order: 3,
      lessons: [
        { id: 'l8', moduleId: 'm3', title: 'O que é a internet?', description: '', contentType: 'TEXT', order: 1 },
        { id: 'l9', moduleId: 'm3', title: 'Usando o navegador', description: '', contentType: 'VIDEO', order: 2 },
        { id: 'l10', moduleId: 'm3', title: 'Fazendo pesquisas no Google', description: '', contentType: 'VIDEO', order: 3 },
        { id: 'l11', moduleId: 'm3', title: 'Segurança na internet', description: '', contentType: 'MIXED', order: 4 },
      ],
    },
  ],
};

const levelLabels = {
  INICIANTE: 'Iniciante',
  INTERMEDIARIO: 'Intermediário',
  AVANCADO: 'Avançado',
};

const CourseDetails = () => {
  const { id } = useParams();
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // In a real app, fetch course by id
  const course = mockCourse;

  const totalLessons = course.modules.reduce((acc, mod) => acc + mod.lessons.length, 0);

  const handleEnroll = () => {
    if (!isAuthenticated) {
      toast({
        title: 'Faça login para continuar',
        description: 'Você precisa ter uma conta para se matricular.',
      });
      navigate('/login');
      return;
    }
    
    // In a real app, call API to enroll
    toast({
      title: 'Matrícula realizada!',
      description: 'Você foi matriculado no curso com sucesso.',
    });
    navigate(`/aluno/cursos/${course.id}`);
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="gradient-hero py-12 lg:py-16">
        <div className="container">
          <Link to="/cursos" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para cursos
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 text-primary-foreground">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="featured">{course.category}</Badge>
                {course.isNew && <Badge variant="new">Novo</Badge>}
              </div>
              
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {course.title}
              </h1>
              
              <p className="text-lg opacity-90 mb-6">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{course.workloadHours} horas</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart className="h-5 w-5" />
                  <span>{levelLabels[course.level]}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  <span>{course.modules.length} módulos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  <span>{totalLessons} aulas</span>
                </div>
              </div>

              {course.teacher && (
                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-primary-foreground/20">
                  <div className="h-12 w-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Professor(a)</p>
                    <p className="font-semibold">{course.teacher.name}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Enrollment Card */}
            <div className="lg:col-span-1">
              <Card className="shadow-card sticky top-24">
                <CardHeader>
                  <CardTitle className="text-center">
                    <span className="text-3xl font-bold text-primary">Gratuito</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button size="lg" className="w-full" onClick={handleEnroll}>
                    {isAuthenticated ? 'Iniciar Curso' : 'Entrar para Iniciar'}
                  </Button>
                  
                  <div className="space-y-3 pt-4 border-t">
                    <p className="text-sm font-medium">Este curso inclui:</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {course.workloadHours} horas de conteúdo
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {totalLessons} aulas em vídeo e texto
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Acesso vitalício
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Certificado de conclusão
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="font-heading text-2xl font-bold mb-6">Conteúdo do Curso</h2>
            
            <div className="mb-4 text-sm text-muted-foreground">
              {course.modules.length} módulos • {totalLessons} aulas • {course.workloadHours} horas no total
            </div>

            <Accordion type="multiple" className="space-y-4">
              {course.modules.map((module) => (
                <AccordionItem 
                  key={module.id} 
                  value={module.id}
                  className="border rounded-lg px-4 data-[state=open]:shadow-soft"
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3 text-left">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-sm">
                        {module.order}
                      </div>
                      <div>
                        <p className="font-semibold">{module.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {module.lessons.length} aulas
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 pb-2">
                      {module.lessons.map((lesson) => (
                        <li 
                          key={lesson.id}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <Play className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{lesson.title}</span>
                          {lesson.contentType === 'VIDEO' && (
                            <Badge variant="secondary" className="ml-auto text-xs">
                              Vídeo
                            </Badge>
                          )}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CourseDetails;
