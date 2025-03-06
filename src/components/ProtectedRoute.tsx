import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * Composant qui protège les routes nécessitant une authentification
 * Si l'utilisateur n'est pas authentifié, il est redirigé vers la page de connexion
 */
const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  // Afficher un indicateur de chargement pendant la vérification de l'authentification
  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Chargement...</p>
      </div>
    );
  }

  // Rediriger vers la page de connexion si non authentifié
  if (!isAuthenticated) {
    // Stocker l'URL actuelle pour pouvoir y revenir après connexion
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  // Si authentifié, afficher les routes enfants
  return <Outlet />;
};

export default ProtectedRoute; 