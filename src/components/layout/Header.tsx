import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut, BookOpen, GraduationCap, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/contexts/AuthContext';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout, hasRole } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/sobre', label: 'Sobre o Instituto' },
    { href: '/como-funciona', label: 'Como Funciona' },
    { href: '/cursos', label: 'Ver Cursos' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-cta shadow-glow">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="hidden sm:block">
            <h1 className="font-heading text-lg font-bold text-foreground">Instituto</h1>
            <p className="text-xs font-semibold text-primary -mt-1">Hudson Paixão</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons / User Menu */}
        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative h-10 w-10 rounded-full">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <User className="h-5 w-5" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-3 py-2">
                  <p className="font-medium">{user?.name}</p>
                  <p className="text-xs text-muted-foreground">{user?.email}</p>
                </div>
                <DropdownMenuSeparator />
                
                {hasRole('ALUNO') && (
                  <DropdownMenuItem onClick={() => navigate('/aluno')}>
                    <BookOpen className="mr-2 h-4 w-4" />
                    Área do Aluno
                  </DropdownMenuItem>
                )}
                
                {hasRole('PROFESSOR') && (
                  <DropdownMenuItem onClick={() => navigate('/professor')}>
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Área do Professor
                  </DropdownMenuItem>
                )}
                
                {hasRole('ADMIN') && (
                  <DropdownMenuItem onClick={() => navigate('/admin')}>
                    <Settings className="mr-2 h-4 w-4" />
                    Administração
                  </DropdownMenuItem>
                )}
                
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden sm:flex items-center gap-3">
              <Button variant="ghost" onClick={() => navigate('/login')}>
                Entrar
              </Button>
              <Button onClick={() => navigate('/register')}>
                Criar Conta
              </Button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background animate-slide-up">
          <nav className="container py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {!isAuthenticated && (
              <div className="flex flex-col gap-2 pt-3 border-t">
                <Button variant="outline" onClick={() => { navigate('/login'); setMobileMenuOpen(false); }}>
                  Entrar
                </Button>
                <Button onClick={() => { navigate('/register'); setMobileMenuOpen(false); }}>
                  Criar Conta
                </Button>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
