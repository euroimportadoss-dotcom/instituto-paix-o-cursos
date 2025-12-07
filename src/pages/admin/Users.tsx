import { useState } from 'react';
import { Shield, UserX, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MainLayout } from '@/components/layout/MainLayout';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const AdminUsers = () => {
  const { toast } = useToast();
  const [search, setSearch] = useState('');

  const users = [
    { id: '1', name: 'João Silva', email: 'joao@email.com', roles: ['ALUNO'], active: true },
    { id: '2', name: 'Maria Santos', email: 'maria@email.com', roles: ['PROFESSOR'], active: true },
    { id: '3', name: 'Carlos Lima', email: 'carlos@email.com', roles: ['ALUNO'], active: false },
  ];

  const toggleProfessor = (id: string) => {
    toast({ title: 'Perfil atualizado!', description: 'As permissões do usuário foram alteradas.' });
  };

  return (
    <MainLayout>
      <div className="container py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-heading text-3xl font-bold">Gerenciar Usuários</h1>
          <Input placeholder="Buscar usuário..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-64" />
        </div>

        <div className="space-y-4">
          {users.map((user) => (
            <Card key={user.id}>
              <CardContent className="flex items-center justify-between py-4">
                <div>
                  <h3 className="font-semibold">{user.name}</h3>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
                <div className="flex items-center gap-2">
                  {user.roles.map((role) => (
                    <Badge key={role} variant={role === 'PROFESSOR' ? 'default' : 'secondary'}>{role}</Badge>
                  ))}
                  <Badge variant={user.active ? 'success' : 'destructive'}>{user.active ? 'Ativo' : 'Bloqueado'}</Badge>
                  <Button size="sm" variant="outline" onClick={() => toggleProfessor(user.id)}>
                    <Shield className="h-4 w-4 mr-1" /> Perfil
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default AdminUsers;
