// Types utilisateur
export interface User {
  id: string;
  name: string;
  email: string;
  role?: 'student' | 'teacher' | 'admin';
  createdAt: string;
}

// Types pour les cours
export interface Course {
  id: number | string;
  title: string;
  description: string;
  progress?: number;
  image: string;
  lastAccessed?: string;
  instructor?: string;
  duration?: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
}

// Types pour les témoignages
export interface Testimonial {
  id: number | string;
  name: string;
  role: string;
  company?: string;
  content: string;
  avatar?: string;
  rating?: number;
}

// Types pour la navigation
export interface NavItem {
  label: string;
  path: string;
  isProtected?: boolean;
}

// Types pour les fonctionnalités
export interface Feature {
  id: number | string;
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

// Types pour le pricing
export interface PricingPlan {
  id: number | string;
  name: string;
  price: number;
  frequency: 'monthly' | 'yearly';
  features: string[];
  isPopular?: boolean;
  badge?: string;
} 