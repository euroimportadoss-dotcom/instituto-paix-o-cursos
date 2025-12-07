import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Save, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MainLayout } from '@/components/layout/MainLayout';
import { useToast } from '@/hooks/use-toast';

const TeacherCourseEditor = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const isNew = !id || id === 'novo';

  const [form, setForm] = useState({
    title: '', description: '', category: '', level: '', workloadHours: ''
  });

  const handleSave = () => {
    toast({ title: 'Curso salvo!', description: 'Seu curso foi salvo como rascunho.' });
  };

  const handleSubmit = () => {
    toast({ title: 'Enviado para aprovação!', description: 'Seu curso será analisado pela equipe.' });
  };

  return (
    <MainLayout showMascot={false}>
      <div className="container py-8">
        <Link to="/professor" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" /> Voltar
        </Link>

        <div className="flex justify-between items-center mb-8">
          <h1 className="font-heading text-3xl font-bold">{isNew ? 'Novo Curso' : 'Editar Curso'}</h1>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleSave}><Save className="h-4 w-4 mr-2" /> Salvar</Button>
            <Button onClick={handleSubmit}><Send className="h-4 w-4 mr-2" /> Enviar para Aprovação</Button>
          </div>
        </div>

        <Card>
          <CardHeader><CardTitle>Informações do Curso</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Título</Label>
                <Input placeholder="Ex: Introdução à Informática" value={form.title} onChange={(e) => setForm({...form, title: e.target.value})} />
              </div>
              <div className="space-y-2">
                <Label>Categoria</Label>
                <Select value={form.category} onValueChange={(v) => setForm({...form, category: v})}>
                  <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="informatica">Informática</SelectItem>
                    <SelectItem value="negocios">Negócios</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Descrição</Label>
              <Textarea placeholder="Descreva seu curso..." value={form.description} onChange={(e) => setForm({...form, description: e.target.value})} rows={4} />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Nível</Label>
                <Select value={form.level} onValueChange={(v) => setForm({...form, level: v})}>
                  <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="INICIANTE">Iniciante</SelectItem>
                    <SelectItem value="INTERMEDIARIO">Intermediário</SelectItem>
                    <SelectItem value="AVANCADO">Avançado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Carga Horária (horas)</Label>
                <Input type="number" placeholder="Ex: 20" value={form.workloadHours} onChange={(e) => setForm({...form, workloadHours: e.target.value})} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default TeacherCourseEditor;
