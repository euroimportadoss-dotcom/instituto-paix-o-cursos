import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthResponse, UserRole } from '@/types';
import { api } from '@/services/api';

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  hasRole: (role: UserRole) => boolean;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (code: string, newPassword: string) => Promise<void>;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  cpf?: string;
  phone?: string;
  birthDate?: string;
  requestProfessorRole?: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem('ihp_token');
    const storedUser = localStorage.getItem('ihp_user');
    
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
      api.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
    }
    
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post<AuthResponse>('/auth/login', { email, password });
      const { user: userData, token: authToken } = response.data;
      
      setUser(userData);
      setToken(authToken);
      
      localStorage.setItem('ihp_token', authToken);
      localStorage.setItem('ihp_user', JSON.stringify(userData));
      api.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
    } catch (error) {
      throw error;
    }
  };

  const register = async (data: RegisterData) => {
    try {
      const response = await api.post<AuthResponse>('/auth/register', data);
      const { user: userData, token: authToken } = response.data;
      
      setUser(userData);
      setToken(authToken);
      
      localStorage.setItem('ihp_token', authToken);
      localStorage.setItem('ihp_user', JSON.stringify(userData));
      api.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('ihp_token');
    localStorage.removeItem('ihp_user');
    delete api.defaults.headers.common['Authorization'];
  };

  const hasRole = (role: UserRole): boolean => {
    return user?.roles.includes(role) || false;
  };

  const forgotPassword = async (email: string) => {
    await api.post('/auth/forgot-password', { email });
  };

  const resetPassword = async (code: string, newPassword: string) => {
    await api.post('/auth/reset-password', { code, newPassword });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isLoading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        hasRole,
        forgotPassword,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
