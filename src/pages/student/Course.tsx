import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Play, CheckCircle, ArrowLeft, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MainLayout } from '@/components/layout/MainLayout';

const StudentCourse = () => {
  const { id } = useParams();
  const [currentLesson, setCurrentLesson] = useState('l1');

  const course = {
    title: 'Introdução à Informática',
    progress: 60,
    modules: [
      {
        id: 'm1', title: 'Módulo 1: Conhecendo o Computador',
        lessons: [
          { id: 'l1', title: 'O que é um computador?', completed: true },
          { id: 'l2', title: 'Partes do computador', completed: true },
          { id: 'l3', title: 'Ligando e desligando', completed: false },
        ]
      },
      {
        id: 'm2', title: 'Módulo 2: Sistema Operacional',
        lessons: [
          { id: 'l4', title: 'Área de trabalho', completed: false },
          { id: 'l5', title: 'Trabalhando com janelas', completed: false },
        ]
      }
    ]
  };

  return (
    <MainLayout showMascot={false}>
      <div className="container py-6">
        <Link to="/aluno" className="inline-flex items-center text-muted-foreground hover:text-primary mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" /> Voltar
        </Link>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Video/Content Area */}
          <div className="lg:col-span-2">
            <div className="aspect-video bg-foreground rounded-xl mb-4 flex items-center justify-center">
              <Play className="h-16 w-16 text-primary-foreground" />
            </div>
            <h1 className="font-heading text-2xl font-bold mb-2">{course.title}</h1>
            <Progress value={course.progress} className="h-2 mb-4" />
            <p className="text-muted-foreground">{course.progress}% concluído</p>
          </div>

          {/* Sidebar */}
          <div className="border rounded-xl p-4">
            <h2 className="font-semibold mb-4">Conteúdo do Curso</h2>
            <Accordion type="multiple" defaultValue={['m1']}>
              {course.modules.map((module) => (
                <AccordionItem key={module.id} value={module.id}>
                  <AccordionTrigger className="text-sm">{module.title}</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-1">
                      {module.lessons.map((lesson) => (
                        <li key={lesson.id}>
                          <button
                            onClick={() => setCurrentLesson(lesson.id)}
                            className={`w-full flex items-center gap-2 p-2 rounded text-sm text-left hover:bg-muted ${currentLesson === lesson.id ? 'bg-primary/10 text-primary' : ''}`}
                          >
                            {lesson.completed ? (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            ) : (
                              <Play className="h-4 w-4" />
                            )}
                            {lesson.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default StudentCourse;
