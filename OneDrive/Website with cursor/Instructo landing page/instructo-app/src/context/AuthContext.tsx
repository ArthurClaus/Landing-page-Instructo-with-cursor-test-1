import { createContext, useState, useContext, ReactNode } from 'react';

// Définition des types
interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

// Création du contexte
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook personnalisé pour utiliser le contexte
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth doit être utilisé à l\'intérieur d\'un AuthProvider');
  }
  return context;
};

// Fournisseur du contexte
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(() => {
    // Vérifier si l'utilisateur est déjà connecté (stocké dans localStorage)
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Vérifier si l'utilisateur est authentifié
  const isAuthenticated = !!user;

  // Fonction de connexion
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Dans une application réelle, vous feriez une requête API ici
      // Simulation d'une connexion réussie
      if (email && password) {
        // Utilisateur fictif pour la démonstration
        const mockUser: User = {
          id: '1',
          email,
          name: email.split('@')[0], // Utiliser la partie avant @ comme nom
        };
        
        // Stocker l'utilisateur dans localStorage
        localStorage.setItem('user', JSON.stringify(mockUser));
        setUser(mockUser);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Erreur de connexion:', error);
      return false;
    }
  };

  // Fonction d'inscription
  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      // Dans une application réelle, vous feriez une requête API ici
      // Simulation d'une inscription réussie
      if (name && email && password) {
        // Utilisateur fictif pour la démonstration
        const mockUser: User = {
          id: '1',
          email,
          name,
        };
        
        // Stocker l'utilisateur dans localStorage
        localStorage.setItem('user', JSON.stringify(mockUser));
        setUser(mockUser);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Erreur d\'inscription:', error);
      return false;
    }
  };

  // Fonction de déconnexion
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  // Valeur du contexte
  const value = {
    user,
    isAuthenticated,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext; 