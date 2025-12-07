import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Loader2, ArrowLeft, Mail, KeyRound, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

type Step = 'email' | 'code' | 'success';

const ForgotPassword = () => {
  const [step, setStep] = useState<Step>('email');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { forgotPassword, resetPassword } = useAuth();
  const { toast } = useToast();

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: 'E-mail obrigatório',
        description: 'Por favor, informe seu e-mail.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    try {
      await forgotPassword(email);
      toast({
        title: 'Código enviado!',
        description: 'Verifique sua caixa de entrada e spam.',
      });
      setStep('code');
    } catch (error: any) {
      toast({
        title: 'Erro ao enviar código',
        description: error.response?.data?.message || 'Verifique o e-mail e tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!code || code.length !== 6) {
      toast({
        title: 'Código inválido',
        description: 'O código deve ter 6 dígitos.',
        variant: 'destructive',
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      toast({
        title: 'Senhas não conferem',
        description: 'As senhas digitadas não são iguais.',
        variant: 'destructive',
      });
      return;
    }

    if (newPassword.length < 6) {
      toast({
        title: 'Senha muito curta',
        description: 'A senha deve ter pelo menos 6 caracteres.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    try {
      await resetPassword(code, newPassword);
      toast({
        title: 'Senha alterada!',
        description: 'Sua senha foi alterada com sucesso.',
      });
      setStep('success');
    } catch (error: any) {
      toast({
        title: 'Erro ao redefinir senha',
        description: error.response?.data?.message || 'Código inválido ou expirado.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 gradient-warm">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-cta shadow-glow">
              <GraduationCap className="h-7 w-7 text-primary-foreground" />
            </div>
            <div className="text-left">
              <h1 className="font-heading text-xl font-bold">Instituto</h1>
              <p className="text-sm font-semibold text-primary -mt-1">Hudson Paixão</p>
            </div>
          </Link>
        </div>

        <Card className="shadow-card">
          {step === 'email' && (
            <>
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-heading text-2xl">Esqueceu sua senha?</CardTitle>
                <CardDescription>
                  Informe seu e-mail para receber um código de recuperação.
                </CardDescription>
              </CardHeader>
              
              <form onSubmit={handleSendCode}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isLoading}
                    />
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col gap-4">
                  <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      'Enviar Código'
                    )}
                  </Button>
                  
                  <Link to="/login" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1">
                    <ArrowLeft className="h-4 w-4" />
                    Voltar para o login
                  </Link>
                </CardFooter>
              </form>
            </>
          )}

          {step === 'code' && (
            <>
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <KeyRound className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-heading text-2xl">Digite o código</CardTitle>
                <CardDescription>
                  Enviamos um código de 6 dígitos para <strong>{email}</strong>
                </CardDescription>
              </CardHeader>
              
              <form onSubmit={handleResetPassword}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="code">Código de verificação</Label>
                    <Input
                      id="code"
                      type="text"
                      placeholder="000000"
                      value={code}
                      onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      disabled={isLoading}
                      className="text-center text-2xl tracking-widest"
                      maxLength={6}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="newPassword">Nova senha</Label>
                    <Input
                      id="newPassword"
                      type="password"
                      placeholder="••••••••"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirmar nova senha</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      disabled={isLoading}
                    />
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col gap-4">
                  <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Redefinindo...
                      </>
                    ) : (
                      'Redefinir Senha'
                    )}
                  </Button>
                  
                  <button
                    type="button"
                    onClick={() => setStep('email')}
                    className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Usar outro e-mail
                  </button>
                </CardFooter>
              </form>
            </>
          )}

          {step === 'success' && (
            <>
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="font-heading text-2xl">Senha alterada!</CardTitle>
                <CardDescription>
                  Sua senha foi alterada com sucesso. Agora você pode fazer login com sua nova senha.
                </CardDescription>
              </CardHeader>
              
              <CardFooter>
                <Button asChild className="w-full" size="lg">
                  <Link to="/login">Ir para o Login</Link>
                </Button>
              </CardFooter>
            </>
          )}
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6">
          <Link to="/" className="hover:text-primary">
            ← Voltar para a página inicial
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
