import { Search, Filter, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { CourseFilters as FilterType, CourseLevel } from '@/types';

interface CourseFiltersProps {
  filters: FilterType;
  onFilterChange: (filters: FilterType) => void;
  categories: string[];
}

const levelOptions: { value: CourseLevel | ''; label: string }[] = [
  { value: '', label: 'Todos os níveis' },
  { value: 'INICIANTE', label: 'Iniciante' },
  { value: 'INTERMEDIARIO', label: 'Intermediário' },
  { value: 'AVANCADO', label: 'Avançado' },
];

const workloadOptions = [
  { value: '', label: 'Qualquer duração' },
  { value: '0-10', label: 'Até 10 horas' },
  { value: '10-30', label: '10 a 30 horas' },
  { value: '30-60', label: '30 a 60 horas' },
  { value: '60-', label: 'Mais de 60 horas' },
];

export function CourseFilters({ filters, onFilterChange, categories }: CourseFiltersProps) {
  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  const handleSearchChange = (search: string) => {
    onFilterChange({ ...filters, search });
  };

  const handleCategoryChange = (category: string) => {
    onFilterChange({ ...filters, category: category || undefined });
  };

  const handleLevelChange = (level: string) => {
    onFilterChange({ ...filters, level: level as CourseLevel || undefined });
  };

  const handleWorkloadChange = (value: string) => {
    if (!value) {
      onFilterChange({ ...filters, minWorkload: undefined, maxWorkload: undefined });
      return;
    }
    
    const [min, max] = value.split('-').map(v => v ? parseInt(v) : undefined);
    onFilterChange({ ...filters, minWorkload: min, maxWorkload: max });
  };

  const clearFilters = () => {
    onFilterChange({});
  };

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar cursos..."
          value={filters.search || ''}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Filter selects */}
      <div className="flex flex-wrap gap-3">
        <Select value={filters.category || ''} onValueChange={handleCategoryChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Todas as categorias</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.level || ''} onValueChange={handleLevelChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Nível" />
          </SelectTrigger>
          <SelectContent>
            {levelOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={
            filters.minWorkload !== undefined || filters.maxWorkload !== undefined
              ? `${filters.minWorkload || ''}-${filters.maxWorkload || ''}`
              : ''
          }
          onValueChange={handleWorkloadChange}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Duração" />
          </SelectTrigger>
          <SelectContent>
            {workloadOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {activeFiltersCount > 0 && (
          <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-1">
            <X className="h-4 w-4" />
            Limpar ({activeFiltersCount})
          </Button>
        )}
      </div>

      {/* Active filters display */}
      {activeFiltersCount > 0 && (
        <div className="flex flex-wrap gap-2">
          {filters.search && (
            <Badge variant="secondary" className="gap-1">
              Busca: {filters.search}
              <button onClick={() => handleSearchChange('')}>
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {filters.category && (
            <Badge variant="secondary" className="gap-1">
              {filters.category}
              <button onClick={() => handleCategoryChange('')}>
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {filters.level && (
            <Badge variant="secondary" className="gap-1">
              {levelOptions.find((o) => o.value === filters.level)?.label}
              <button onClick={() => handleLevelChange('')}>
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
        </div>
      )}
    </div>
  );
}
