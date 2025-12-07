import { useState, useMemo } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { CourseCard } from '@/components/courses/CourseCard';
import { CourseFilters } from '@/components/courses/CourseFilters';
import { Badge } from '@/components/ui/badge';
import { Course, CourseFilters as FilterType } from '@/types';

// Mock courses
const allCourses: Course[] = [
  {
    id: '1',
    title: 'Introdução à Informática para Iniciantes',
    description: 'Aprenda os conceitos básicos de informática, uso do computador, internet e ferramentas do dia a dia.',
    category: 'Informática',
    level: 'INICIANTE',
    workloadHours: 20,
    status: 'APPROVED',
    teacherId: '1',
    teacher: { id: '1', name: 'Maria Silva', email: '', roles: ['PROFESSOR'], createdAt: '', updatedAt: '' },
    isNew: true,
    isFeatured: true,
    createdAt: '',
    updatedAt: '',
  },
  {
    id: '2',
    title: 'Empreendedorismo: Como Iniciar seu Negócio',
    description: 'Descubra como transformar suas ideias em um negócio de sucesso. Plano de negócios, finanças e marketing.',
    category: 'Negócios',
    level: 'INTERMEDIARIO',
    workloadHours: 40,
    status: 'APPROVED',
    teacherId: '2',
    teacher: { id: '2', name: 'João Santos', email: '', roles: ['PROFESSOR'], createdAt: '', updatedAt: '' },
    isFeatured: true,
    createdAt: '',
    updatedAt: '',
  },
  {
    id: '3',
    title: 'Marketing Digital para Pequenos Negócios',
    description: 'Aprenda a divulgar seu negócio na internet usando redes sociais, Google e outras ferramentas.',
    category: 'Marketing',
    level: 'INICIANTE',
    workloadHours: 15,
    status: 'APPROVED',
    teacherId: '3',
    teacher: { id: '3', name: 'Ana Costa', email: '', roles: ['PROFESSOR'], createdAt: '', updatedAt: '' },
    isNew: true,
    createdAt: '',
    updatedAt: '',
  },
  {
    id: '4',
    title: 'Excel do Básico ao Avançado',
    description: 'Domine o Microsoft Excel com fórmulas, gráficos, tabelas dinâmicas e automação com VBA.',
    category: 'Informática',
    level: 'INTERMEDIARIO',
    workloadHours: 30,
    status: 'APPROVED',
    teacherId: '1',
    teacher: { id: '1', name: 'Maria Silva', email: '', roles: ['PROFESSOR'], createdAt: '', updatedAt: '' },
    createdAt: '',
    updatedAt: '',
  },
  {
    id: '5',
    title: 'Atendimento ao Cliente e Vendas',
    description: 'Técnicas de atendimento, comunicação eficaz e estratégias de vendas para se destacar no mercado.',
    category: 'Negócios',
    level: 'INICIANTE',
    workloadHours: 12,
    status: 'APPROVED',
    teacherId: '4',
    teacher: { id: '4', name: 'Pedro Lima', email: '', roles: ['PROFESSOR'], createdAt: '', updatedAt: '' },
    createdAt: '',
    updatedAt: '',
  },
  {
    id: '6',
    title: 'Finanças Pessoais e Educação Financeira',
    description: 'Aprenda a organizar suas finanças, fazer um orçamento, poupar dinheiro e planejar o futuro.',
    category: 'Finanças',
    level: 'INICIANTE',
    workloadHours: 8,
    status: 'APPROVED',
    teacherId: '5',
    teacher: { id: '5', name: 'Carla Oliveira', email: '', roles: ['PROFESSOR'], createdAt: '', updatedAt: '' },
    isNew: true,
    createdAt: '',
    updatedAt: '',
  },
  {
    id: '7',
    title: 'Desenvolvimento Web com HTML, CSS e JavaScript',
    description: 'Crie sites do zero aprendendo as tecnologias fundamentais da web: HTML, CSS e JavaScript.',
    category: 'Programação',
    level: 'INTERMEDIARIO',
    workloadHours: 60,
    status: 'APPROVED',
    teacherId: '6',
    teacher: { id: '6', name: 'Lucas Mendes', email: '', roles: ['PROFESSOR'], createdAt: '', updatedAt: '' },
    isFeatured: true,
    createdAt: '',
    updatedAt: '',
  },
  {
    id: '8',
    title: 'Gestão de Projetos para Iniciantes',
    description: 'Fundamentos de gestão de projetos, metodologias ágeis, planejamento e controle.',
    category: 'Gestão',
    level: 'INICIANTE',
    workloadHours: 25,
    status: 'APPROVED',
    teacherId: '2',
    teacher: { id: '2', name: 'João Santos', email: '', roles: ['PROFESSOR'], createdAt: '', updatedAt: '' },
    createdAt: '',
    updatedAt: '',
  },
];

const categories = ['Informática', 'Negócios', 'Marketing', 'Finanças', 'Programação', 'Gestão'];

const Courses = () => {
  const [filters, setFilters] = useState<FilterType>({});

  const filteredCourses = useMemo(() => {
    return allCourses.filter((course) => {
      if (filters.search) {
        const search = filters.search.toLowerCase();
        if (
          !course.title.toLowerCase().includes(search) &&
          !course.description.toLowerCase().includes(search) &&
          !course.category.toLowerCase().includes(search)
        ) {
          return false;
        }
      }

      if (filters.category && course.category !== filters.category) {
        return false;
      }

      if (filters.level && course.level !== filters.level) {
        return false;
      }

      if (filters.minWorkload !== undefined && course.workloadHours < filters.minWorkload) {
        return false;
      }

      if (filters.maxWorkload !== undefined && course.workloadHours > filters.maxWorkload) {
        return false;
      }

      return true;
    });
  }, [filters]);

  return (
    <MainLayout>
      <div className="container py-8 lg:py-12">
        {/* Header */}
        <div className="mb-8">
          <Badge variant="secondary" className="mb-4">Catálogo de Cursos</Badge>
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Todos os Cursos Disponíveis
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Explore nosso catálogo de cursos gratuitos e comece a transformar sua vida hoje mesmo.
            Todos os cursos são 100% online e você estuda no seu ritmo.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <CourseFilters 
            filters={filters} 
            onFilterChange={setFilters} 
            categories={categories}
          />
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-6">
          {filteredCourses.length} {filteredCourses.length === 1 ? 'curso encontrado' : 'cursos encontrados'}
        </p>

        {/* Course grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} showEnrollButton={false} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground mb-4">
              Nenhum curso encontrado com os filtros selecionados.
            </p>
            <button
              onClick={() => setFilters({})}
              className="text-primary hover:underline"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Courses;
