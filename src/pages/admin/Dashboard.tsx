import { Users, BookOpen, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MainLayout } from '@/components/layout/MainLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total de Alunos', value: '2.547', icon: Users, color: 'text-blue-500' },
    { label: 'Cursos Ativos', value: '45', icon: BookOpen, color: 'text-green-500' },
    { label: 'Aguardando Aprovação', value: '8', icon: Clock, color: 'text-amber-500' },
    { label: 'Certificados Emitidos', value: '1.234', icon: CheckCircle, color: 'text-primary' },
  ];

  return (
    <MainLayout>
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="font-heading text-3xl font-bold mb-2">Painel Administrativo</h1>
          <p className="text-muted-foreground">Gerencie a plataforma do Instituto Hudson Paixão.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-muted ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader><CardTitle>Ações Rápidas</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/admin/cursos">Gerenciar Cursos</Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/admin/usuarios">Gerenciar Usuários</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default AdminDashboard;
