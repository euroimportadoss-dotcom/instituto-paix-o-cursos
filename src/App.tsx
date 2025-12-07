import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";

// Pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import VerifyCertificate from "./pages/VerifyCertificate";
import StudentDashboard from "./pages/student/Dashboard";
import StudentCourse from "./pages/student/Course";
import TeacherDashboard from "./pages/teacher/Dashboard";
import TeacherCourseEditor from "./pages/teacher/CourseEditor";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminCourses from "./pages/admin/Courses";
import AdminUsers from "./pages/admin/Users";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/esqueci-senha" element={<ForgotPassword />} />
            <Route path="/cursos" element={<Courses />} />
            <Route path="/cursos/:id" element={<CourseDetails />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/como-funciona" element={<HowItWorks />} />
            <Route path="/certificado/verificar" element={<VerifyCertificate />} />
            <Route path="/certificado/verificar/:codigo" element={<VerifyCertificate />} />
            
            {/* Student routes */}
            <Route path="/aluno" element={<StudentDashboard />} />
            <Route path="/aluno/cursos/:id" element={<StudentCourse />} />
            
            {/* Teacher routes */}
            <Route path="/professor" element={<TeacherDashboard />} />
            <Route path="/professor/cursos/novo" element={<TeacherCourseEditor />} />
            <Route path="/professor/cursos/:id" element={<TeacherCourseEditor />} />
            
            {/* Admin routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/cursos" element={<AdminCourses />} />
            <Route path="/admin/usuarios" element={<AdminUsers />} />
            
            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
