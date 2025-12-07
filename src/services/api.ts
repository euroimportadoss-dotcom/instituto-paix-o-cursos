import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('ihp_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('ihp_token');
      localStorage.removeItem('ihp_user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authApi = {
  login: (email: string, password: string) => 
    api.post('/auth/login', { email, password }),
  
  register: (data: {
    name: string;
    email: string;
    password: string;
    cpf?: string;
    phone?: string;
    birthDate?: string;
    requestProfessorRole?: boolean;
  }) => api.post('/auth/register', data),
  
  forgotPassword: (email: string) => 
    api.post('/auth/forgot-password', { email }),
  
  resetPassword: (code: string, newPassword: string) => 
    api.post('/auth/reset-password', { code, newPassword }),
};

// Courses API
export const coursesApi = {
  getAll: (params?: Record<string, string | number>) => 
    api.get('/courses', { params }),
  
  getById: (id: string) => 
    api.get(`/courses/${id}`),
  
  getPublic: (params?: Record<string, string | number>) => 
    api.get('/courses', { params: { ...params, status: 'APPROVED' } }),
};

// Student API
export const studentApi = {
  getMyCourses: () => 
    api.get('/student/courses'),
  
  getCourseDetails: (id: string) => 
    api.get(`/student/courses/${id}`),
  
  enroll: (courseId: string) => 
    api.post(`/student/courses/${courseId}/enroll`),
  
  updateLessonProgress: (lessonId: string, status: string) => 
    api.post(`/student/lessons/${lessonId}/progress`, { status }),
  
  getMyCertificates: () => 
    api.get('/student/certificates'),
  
  generateCertificate: (courseId: string) => 
    api.post(`/student/courses/${courseId}/certificate`),
};

// Teacher API
export const teacherApi = {
  getMyCourses: () => 
    api.get('/teacher/courses'),
  
  createCourse: (data: any) => 
    api.post('/teacher/courses', data),
  
  updateCourse: (id: string, data: any) => 
    api.put(`/teacher/courses/${id}`, data),
  
  deleteCourse: (id: string) => 
    api.delete(`/teacher/courses/${id}`),
  
  submitForApproval: (id: string) => 
    api.post(`/teacher/courses/${id}/submit-for-approval`),
  
  getEnrolledStudents: (courseId: string) => 
    api.get(`/teacher/courses/${courseId}/students`),
  
  // Module operations
  createModule: (courseId: string, data: any) => 
    api.post(`/teacher/courses/${courseId}/modules`, data),
  
  updateModule: (moduleId: string, data: any) => 
    api.put(`/teacher/modules/${moduleId}`, data),
  
  deleteModule: (moduleId: string) => 
    api.delete(`/teacher/modules/${moduleId}`),
  
  // Lesson operations
  createLesson: (moduleId: string, data: any) => 
    api.post(`/teacher/modules/${moduleId}/lessons`, data),
  
  updateLesson: (lessonId: string, data: any) => 
    api.put(`/teacher/lessons/${lessonId}`, data),
  
  deleteLesson: (lessonId: string) => 
    api.delete(`/teacher/lessons/${lessonId}`),
};

// Admin API
export const adminApi = {
  getDashboard: () => 
    api.get('/admin/dashboard'),
  
  getCourses: (params?: Record<string, string>) => 
    api.get('/admin/courses', { params }),
  
  approveCourse: (id: string) => 
    api.post(`/admin/courses/${id}/approve`),
  
  rejectCourse: (id: string, reason: string) => 
    api.post(`/admin/courses/${id}/reject`, { reason }),
  
  getUsers: (params?: Record<string, string>) => 
    api.get('/admin/users', { params }),
  
  updateUserRoles: (userId: string, roles: string[]) => 
    api.put(`/admin/users/${userId}/roles`, { roles }),
  
  toggleUserStatus: (userId: string) => 
    api.post(`/admin/users/${userId}/toggle-status`),
  
  getSettings: () => 
    api.get('/admin/settings'),
  
  updateSettings: (data: any) => 
    api.put('/admin/settings', data),
};

// Certificate verification API
export const certificateApi = {
  verify: (code: string) => 
    api.get(`/certificates/${code}`),
};
