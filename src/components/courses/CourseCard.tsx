import { Link } from 'react-router-dom';
import { Clock, BarChart, Users, BookOpen } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Course, CourseLevel } from '@/types';

interface CourseCardProps {
  course: Course;
  showEnrollButton?: boolean;
  onEnroll?: (courseId: string) => void;
}

const levelLabels: Record<CourseLevel, string> = {
  INICIANTE: 'Iniciante',
  INTERMEDIARIO: 'Intermediário',
  AVANCADO: 'Avançado',
};

const levelColors: Record<CourseLevel, 'success' | 'warning' | 'destructive'> = {
  INICIANTE: 'success',
  INTERMEDIARIO: 'warning',
  AVANCADO: 'destructive',
};

export function CourseCard({ course, showEnrollButton = true, onEnroll }: CourseCardProps) {
  return (
    <Card className="group h-full flex flex-col overflow-hidden hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
      {/* Thumbnail */}
      <div className="relative h-40 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
        {course.thumbnail ? (
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <BookOpen className="h-12 w-12 text-primary/40" />
          </div>
        )}
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {course.isNew && <Badge variant="new">Novo</Badge>}
          {course.isFeatured && <Badge variant="featured">Destaque</Badge>}
        </div>
      </div>

      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading font-bold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
            {course.title}
          </h3>
        </div>
        <Badge variant="secondary" className="w-fit">
          {course.category}
        </Badge>
      </CardHeader>

      <CardContent className="flex-1 pb-4">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {course.description}
        </p>
        
        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{course.workloadHours}h</span>
          </div>
          <div className="flex items-center gap-1">
            <BarChart className="h-3.5 w-3.5" />
            <Badge variant={levelColors[course.level]} className="text-xs py-0">
              {levelLabels[course.level]}
            </Badge>
          </div>
          {course.teacher && (
            <div className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5" />
              <span>{course.teacher.name}</span>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="flex gap-2 w-full">
          <Button variant="outline" className="flex-1" asChild>
            <Link to={`/cursos/${course.id}`}>Ver detalhes</Link>
          </Button>
          {showEnrollButton && onEnroll && (
            <Button className="flex-1" onClick={() => onEnroll(course.id)}>
              Iniciar
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
