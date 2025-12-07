import { useState, useEffect } from 'react';
import { X, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MascotTip } from '@/types';

const mascotTips: MascotTip[] = [
  { id: '1', text: 'Bem-vindo ao Instituto Hudson Paixão! Aqui você encontra cursos gratuitos para transformar sua vida.', category: 'welcome' },
  { id: '2', text: 'Dica de estudo: faça pausas de 5 minutos a cada 25 minutos de estudo. Isso ajuda a fixar o conteúdo!', category: 'study' },
  { id: '3', text: 'Para se matricular, basta criar uma conta e clicar em "Iniciar Curso" na página do curso desejado.', category: 'course' },
  { id: '4', text: 'Ao concluir todas as aulas de um curso, você pode gerar seu certificado automaticamente!', category: 'certificate' },
  { id: '5', text: 'Nossos professores são voluntários que doam seu tempo para transformar vidas através da educação.', category: 'general' },
  { id: '6', text: 'Anote os pontos principais de cada aula. Fazer resumos ajuda muito na memorização!', category: 'study' },
  { id: '7', text: 'Está com dúvidas? Reveja as aulas quantas vezes precisar. O aprendizado é seu!', category: 'study' },
  { id: '8', text: 'Você pode verificar a autenticidade de qualquer certificado na área "Verificar Certificado".', category: 'certificate' },
];

export function Mascot() {
  const [isMinimized, setIsMinimized] = useState(() => {
    return localStorage.getItem('ihp_mascot_minimized') === 'true';
  });
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    localStorage.setItem('ihp_mascot_minimized', String(isMinimized));
  }, [isMinimized]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isMinimized) {
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentTipIndex((prev) => (prev + 1) % mascotTips.length);
          setIsAnimating(false);
        }, 300);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [isMinimized]);

  const currentTip = mascotTips[currentTipIndex];

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full gradient-cta shadow-glow hover:scale-110 transition-all duration-300 group"
        aria-label="Abrir assistente"
      >
        <MessageCircle className="h-6 w-6 text-primary-foreground group-hover:animate-bounce-soft" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 animate-slide-in-right">
      {/* Speech Bubble */}
      <Card className={`w-72 p-4 shadow-card transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm leading-relaxed">{currentTip.text}</p>
          <Button
            variant="ghost"
            size="iconSm"
            onClick={() => setIsMinimized(true)}
            className="shrink-0"
            aria-label="Minimizar assistente"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Tip navigation */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t">
          <div className="flex gap-1">
            {mascotTips.slice(0, 5).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTipIndex(index)}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  index === currentTipIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
                aria-label={`Dica ${index + 1}`}
              />
            ))}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs text-muted-foreground"
          >
            {isExpanded ? (
              <>
                <ChevronDown className="h-3 w-3 mr-1" />
                Ver menos
              </>
            ) : (
              <>
                <ChevronUp className="h-3 w-3 mr-1" />
                Ver todas as dicas
              </>
            )}
          </Button>
        </div>

        {/* Expanded tips */}
        {isExpanded && (
          <div className="mt-3 pt-3 border-t max-h-48 overflow-y-auto space-y-2">
            {mascotTips.map((tip, index) => (
              <button
                key={tip.id}
                onClick={() => setCurrentTipIndex(index)}
                className={`w-full text-left text-xs p-2 rounded-lg transition-colors ${
                  index === currentTipIndex
                    ? 'bg-primary/10 text-primary'
                    : 'hover:bg-muted'
                }`}
              >
                {tip.text}
              </button>
            ))}
          </div>
        )}
      </Card>

      {/* Mascot Character */}
      <div className="relative">
        {/* Speech pointer */}
        <div className="absolute -top-2 right-6 w-4 h-4 bg-card rotate-45 shadow-sm" />
        
        {/* Character body */}
        <div className="relative flex flex-col items-center animate-float">
          {/* Head */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-200 to-amber-300 shadow-md flex items-center justify-center relative overflow-hidden">
            {/* Eyes */}
            <div className="absolute top-5 left-3 w-2 h-3 bg-foreground rounded-full" />
            <div className="absolute top-5 right-3 w-2 h-3 bg-foreground rounded-full" />
            {/* Smile */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-6 h-3 border-b-2 border-foreground rounded-b-full" />
            {/* Shine */}
            <div className="absolute top-2 left-4 w-2 h-2 bg-white/40 rounded-full" />
          </div>
          
          {/* Body with shirt */}
          <div className="relative -mt-2 w-20 h-12 gradient-cta rounded-2xl flex items-center justify-center shadow-md">
            <span className="text-[6px] font-bold text-primary-foreground text-center leading-tight">
              HUDSON<br />PAIXÃO
            </span>
            {/* Arms */}
            <div className="absolute -left-2 top-3 w-6 h-3 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full rotate-12 animate-wave origin-right" />
            <div className="absolute -right-2 top-3 w-6 h-3 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full -rotate-12" />
          </div>
          
          {/* Legs */}
          <div className="flex gap-1 -mt-1">
            <div className="w-4 h-6 bg-foreground/80 rounded-b-lg" />
            <div className="w-4 h-6 bg-foreground/80 rounded-b-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
