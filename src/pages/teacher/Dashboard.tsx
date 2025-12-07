import { Link } from 'react-router-dom';
import { Plus, BookOpen, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MainLayout } from '@/components/layout/MainLayout';

const statusLabels = { DRAFT: 'Rascunho', PENDING: 'Aguardando', APPROVED: 'Aprovado', REJECTED: 'Reprovado' };
const statusVariants = { DRAFT: 'secondary', PENDING: 'warning', APPROVED: 'success', REJECTED: 'destructive' } as const;

const TeacherDashboard = () => {
  const courses = [
    { id: '1', title: 'Introdução à Informática', status: 'APPROVED' as const, students: 156 },
    { id: '2', title: 'Excel Avançado', status: 'PENDING' as const, students: 0 },
    { id: '3', title: 'Word Básico', status: 'DRAFT' as const, students: 0 },
  ];

  return (
    <MainLayout>
      <div className="container py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-heading text-3xl font-bold mb-2">Área do Professor</h1>
            <p className="text-muted-foreground">Gerencie seus cursos e acompanhe seus alunos.</p>
          </div>
          <Button asChild>
            <Link to="/professor/cursos/novo"><Plus className="h-4 w-4 mr-2" /> Novo Curso</Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="hover:shadow-soft transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <Badge variant={statusVariants[course.status]}>{statusLabels[course.status]}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Users className="h-4 w-4" />{course.students} alunos</span>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to={`/professor/cursos/${course.id}`}>Editar Curso</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default TeacherDashboard;
