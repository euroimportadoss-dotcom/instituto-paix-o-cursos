// User types
export type UserRole = 'ADMIN' | 'PROFESSOR' | 'ALUNO';

export interface User {
  id: string;
  name: string;
  email: string;
  roles: UserRole[];
  cpf?: string;
  phone?: string;
  birthDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

// Course types
export type CourseStatus = 'DRAFT' | 'PENDING' | 'APPROVED' | 'REJECTED';
export type CourseLevel = 'INICIANTE' | 'INTERMEDIARIO' | 'AVANCADO';

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: CourseLevel;
  workloadHours: number;
  status: CourseStatus;
  rejectionReason?: string;
  teacherId: string;
  teacher?: User;
  modules?: Module[];
  isFeatured?: boolean;
  isNew?: boolean;
  thumbnail?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Module {
  id: string;
  courseId: string;
  title: string;
  order: number;
  lessons?: Lesson[];
}

export type ContentType = 'TEXT' | 'VIDEO' | 'IMAGE' | 'MIXED';

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  description?: string;
  contentType: ContentType;
  textContent?: string;
  videoUrl?: string;
  order: number;
}

// Enrollment types
export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  course?: Course;
  enrollmentDate: string;
  completedAt?: string;
  progress?: LessonProgress[];
}

export interface LessonProgress {
  id: string;
  enrollmentId: string;
  lessonId: string;
  status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';
  lastAccessedAt?: string;
}

// Certificate types
export interface Certificate {
  id: string;
  userId: string;
  courseId: string;
  course?: Course;
  code: string;
  issuedAt: string;
  pdfUrl?: string;
}

// API response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Filter types
export interface CourseFilters {
  category?: string;
  level?: CourseLevel;
  status?: CourseStatus;
  minWorkload?: number;
  maxWorkload?: number;
  search?: string;
}

// Mascot tips
export interface MascotTip {
  id: string;
  text: string;
  category: 'welcome' | 'study' | 'course' | 'certificate' | 'general';
}
