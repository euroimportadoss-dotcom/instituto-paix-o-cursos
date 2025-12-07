import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Search, CheckCircle, XCircle, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MainLayout } from '@/components/layout/MainLayout';
import { Badge } from '@/components/ui/badge';

const VerifyCertificate = () => {
  const { codigo } = useParams();
  const [searchCode, setSearchCode] = useState(codigo || '');
  const [result, setResult] = useState<'valid' | 'invalid' | null>(null);

  const handleVerify = () => {
    // Mock verification
    if (searchCode.startsWith('IH-')) {
      setResult('valid');
    } else {
      setResult('invalid');
    }
  };

  return (
    <MainLayout>
      <div className="container py-16">
        <div className="max-w-xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">Verificação</Badge>
          <h1 className="font-heading text-3xl font-bold mb-4">Verificar Certificado</h1>
          <p className="text-muted-foreground mb-8">
            Digite o código do certificado para verificar sua autenticidade.
          </p>

          <div className="flex gap-2 mb-8">
            <Input
              placeholder="Ex: IH-2025-000123"
              value={searchCode}
              onChange={(e) => setSearchCode(e.target.value)}
              className="text-center"
            />
            <Button onClick={handleVerify}>
              <Search className="h-4 w-4 mr-2" />
              Verificar
            </Button>
          </div>

          {result === 'valid' && (
            <Card className="border-green-500">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-600">Certificado Válido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-left">
                <p><strong>Aluno:</strong> João da Silva</p>
                <p><strong>Curso:</strong> Introdução à Informática</p>
                <p><strong>Carga Horária:</strong> 20 horas</p>
                <p><strong>Data de Emissão:</strong> 15/11/2024</p>
                <p><strong>Professor:</strong> Maria Silva</p>
              </CardContent>
            </Card>
          )}

          {result === 'invalid' && (
            <Card className="border-destructive">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                  <XCircle className="h-8 w-8 text-destructive" />
                </div>
                <CardTitle className="text-destructive">Certificado Não Encontrado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  O código informado não corresponde a nenhum certificado válido.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default VerifyCertificate;
