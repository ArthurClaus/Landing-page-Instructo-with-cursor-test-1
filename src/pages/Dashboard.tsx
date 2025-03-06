import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../components/Navbar.css';
import './Dashboard.css';

// Type pour les statistiques de l'utilisateur
interface UserStats {
  coursesCompleted: number;
  lessonsCompleted: number;
  hoursLearned: number;
  streakDays: number;
}

// Type pour les cours recommandés
interface RecommendedCourse {
  id: string;
  title: string;
  image: string;
  progress: number;
  duration: string;
}

/**
 * Tableau de bord de l'utilisateur connecté
 */
const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState<UserStats>({
    coursesCompleted: 0,
    lessonsCompleted: 0,
    hoursLearned: 0,
    streakDays: 0
  });
  const [recommendedCourses, setRecommendedCourses] = useState<RecommendedCourse[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simuler le chargement des données utilisateur
  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        // Simuler un délai réseau
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Statistiques fictives pour la démonstration
        setStats({
          coursesCompleted: 3,
          lessonsCompleted: 27,
          hoursLearned: 12,
          streakDays: 5
        });
        
        // Cours recommandés fictifs
        setRecommendedCourses([
          {
            id: '1',
            title: 'Introduction à l\'Intelligence Artificielle',
            image: '/course-ai.jpg',
            progress: 45,
            duration: '2h 30min'
          },
          {
            id: '2',
            title: 'Apprendre Python pour les débutants',
            image: '/course-python.jpg',
            progress: 25,
            duration: '3h 15min'
          },
          {
            id: '3',
            title: 'Mathématiques pour le Machine Learning',
            image: '/course-math.jpg',
            progress: 10,
            duration: '4h 45min'
          }
        ]);
      } catch (error) {
        console.error('Erreur lors du chargement des données:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadDashboardData();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (isLoading) {
    return (
      <div className="dashboard-loading">
        <div className="loading-spinner"></div>
        <p>Chargement de votre tableau de bord...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="container dashboard-header-content">
          <h1>Tableau de bord</h1>
          <div className="dashboard-user-info">
            <span className="user-greeting">Bonjour, {user?.name || 'Utilisateur'} 👋</span>
            <button className="logout-button" onClick={handleLogout}>
              Se déconnecter
            </button>
          </div>
        </div>
      </header>
      
      <div className="container dashboard-content">
        <section className="dashboard-section">
          <h2>Votre progression</h2>
          <div className="stats-cards">
            <div className="stat-card">
              <div className="stat-value">{stats.coursesCompleted}</div>
              <div className="stat-label">Cours complétés</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{stats.lessonsCompleted}</div>
              <div className="stat-label">Leçons terminées</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{stats.hoursLearned}h</div>
              <div className="stat-label">Temps d'apprentissage</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{stats.streakDays} jours</div>
              <div className="stat-label">Série actuelle</div>
            </div>
          </div>
        </section>
        
        <section className="dashboard-section">
          <h2>Continuer l'apprentissage</h2>
          <div className="courses-grid">
            {recommendedCourses.map(course => (
              <div key={course.id} className="course-card">
                <div className="course-image-container">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    onError={(e) => {
                      // Fallback en cas d'image manquante
                      (e.target as HTMLImageElement).src = "https://via.placeholder.com/280x160?text=Instructo";
                    }}
                  />
                  <div className="course-progress-bar">
                    <div 
                      className="course-progress-fill" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="course-info">
                  <h3 className="course-title">{course.title}</h3>
                  <div className="course-meta">
                    <span className="course-progress">{course.progress}% terminé</span>
                    <span className="course-duration">{course.duration}</span>
                  </div>
                  <button className="course-continue-btn">
                    Continuer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard; 