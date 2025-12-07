import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-cta">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-background">Instituto</h3>
                <p className="text-xs font-semibold text-primary -mt-1">Hudson Paixão</p>
              </div>
            </Link>
            <p className="text-sm text-background/70">
              Transformando vidas através da educação. Cursos gratuitos e de qualidade para todos.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-background/10 hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-background/10 hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-background/10 hover:bg-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/cursos" className="text-sm text-background/70 hover:text-primary transition-colors">
                  Ver Cursos
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-sm text-background/70 hover:text-primary transition-colors">
                  Sobre o Instituto
                </Link>
              </li>
              <li>
                <Link to="/como-funciona" className="text-sm text-background/70 hover:text-primary transition-colors">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link to="/certificado/verificar" className="text-sm text-background/70 hover:text-primary transition-colors">
                  Verificar Certificado
                </Link>
              </li>
            </ul>
          </div>

          {/* For Students */}
          <div>
            <h4 className="font-heading font-bold mb-4">Para Você</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/register" className="text-sm text-background/70 hover:text-primary transition-colors">
                  Seja um Aluno
                </Link>
              </li>
              <li>
                <Link to="/register?professor=true" className="text-sm text-background/70 hover:text-primary transition-colors">
                  Seja um Professor
                </Link>
              </li>
              <li>
                <Link to="/termos" className="text-sm text-background/70 hover:text-primary transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="text-sm text-background/70 hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-sm text-background/70">
                  Câmara Municipal de Belo Horizonte<br />
                  Av. dos Andradas, 3100 - Santa Efigênia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:contato@ihp.edu.br" className="text-sm text-background/70 hover:text-primary transition-colors">
                  contato@ihp.edu.br
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+553132222222" className="text-sm text-background/70 hover:text-primary transition-colors">
                  (31) 3222-2222
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Instituto Hudson Paixão. Todos os direitos reservados.
          </p>
          <p className="text-sm text-background/50">
            Vereador <span className="text-primary font-semibold">Hudson Paixão</span> - Belo Horizonte/MG
          </p>
        </div>
      </div>
    </footer>
  );
}
