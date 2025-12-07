import { useState } from 'react';
import { Check, X, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MainLayout } from '@/components/layout/MainLayout';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const statusVariants = { PENDING: 'warning', APPROVED: 'success', REJECTED: 'destructive' } as const;

const AdminCourses = () => {
  const { toast } = useToast();
  const [filter, setFilter] = useState('PENDING');

  const courses = [
    { id: '1', title: 'Novo Curso de Python', teacher: 'Carlos Lima', status: 'PENDING' as const },
    { id: '2', title: 'Introdução ao Design', teacher: 'Ana Paula', status: 'PENDING' as const },
  ];

  const handleApprove = (id: string) => {
    toast({ title: 'Curso aprovado!', description: 'O curso foi publicado na plataforma.' });
  };

  const handleReject = (id: string) => {
    toast({ title: 'Curso reprovado', description: 'O professor será notificado.' });
  };

  return (
    <MainLayout>
      <div className="container py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-heading text-3xl font-bold">Gerenciar Cursos</h1>
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-48"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="PENDING">Aguardando Aprovação</SelectItem>
              <SelectItem value="APPROVED">Aprovados</SelectItem>
              <SelectItem value="REJECTED">Reprovados</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          {courses.map((course) => (
            <Card key={course.id}>
              <CardContent className="flex items-center justify-between py-4">
                <div>
                  <h3 className="font-semibold">{course.title}</h3>
                  <p className="text-sm text-muted-foreground">Professor: {course.teacher}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={statusVariants[course.status]}>{course.status}</Badge>
                  <Button size="sm" variant="outline"><Eye className="h-4 w-4" /></Button>
                  <Button size="sm" variant="success" onClick={() => handleApprove(course.id)}><Check className="h-4 w-4" /></Button>
                  <Button size="sm" variant="destructive" onClick={() => handleReject(course.id)}><X className="h-4 w-4" /></Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default AdminCourses;
