import { Link } from 'react-router-dom';
import { BookOpen, Award, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { MainLayout } from '@/components/layout/MainLayout';

const StudentDashboard = () => {
  const enrolledCourses = [
    { id: '1', title: 'Introdução à Informática', progress: 60, totalLessons: 11, completedLessons: 7 },
    { id: '2', title: 'Excel do Básico ao Avançado', progress: 25, totalLessons: 20, completedLessons: 5 },
  ];

  const certificates = [
    { id: '1', courseName: 'Marketing Digital', code: 'IH-2024-000456', issuedAt: '10/10/2024' },
  ];

  return (
    <MainLayout>
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="font-heading text-3xl font-bold mb-2">Área do Aluno</h1>
          <p className="text-muted-foreground">Acompanhe seu progresso e continue aprendendo.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader className="flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Meus Cursos
                </CardTitle>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/cursos">Ver todos</Link>
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {enrolledCourses.map((course) => (
                  <div key={course.id} className="p-4 border rounded-lg hover:shadow-soft transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{course.title}</h3>
                      <Badge variant="secondary">{course.progress}%</Badge>
                    </div>
                    <Progress value={course.progress} className="h-2 mb-2" />
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>{course.completedLessons}/{course.totalLessons} aulas</span>
                      <Button size="sm" asChild>
                        <Link to={`/aluno/cursos/${course.id}`}>
                          Continuar <ArrowRight className="h-3 w-3 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Certificados
                </CardTitle>
              </CardHeader>
              <CardContent>
                {certificates.length > 0 ? (
                  <div className="space-y-3">
                    {certificates.map((cert) => (
                      <div key={cert.id} className="p-3 border rounded-lg">
                        <p className="font-medium text-sm">{cert.courseName}</p>
                        <p className="text-xs text-muted-foreground">{cert.issuedAt}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Complete um curso para receber seu certificado.
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default StudentDashboard;
