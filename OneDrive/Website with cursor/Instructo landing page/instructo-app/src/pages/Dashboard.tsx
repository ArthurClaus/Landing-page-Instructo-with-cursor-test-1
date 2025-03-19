import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import './Dashboard.css';

// Type pour les cours fictifs
interface Course {
  id: number;
  title: string;
  progress: number;
  image: string;
  lastAccessed: string;
}

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler le chargement des cours depuis une API
    const fetchCourses = () => {
      setIsLoading(true);
      
      // Données fictives de cours
      const mockCourses: Course[] = [
        {
          id: 1,
          title: 'Introduction à l\'Intelligence Artificielle',
          progress: 75,
          image: 'https://via.placeholder.com/300x200?text=IA',
          lastAccessed: '2023-06-15'
        },
        {
          id: 2,
          title: 'Programmation Python Avancée',
          progress: 45,
          image: 'https://via.placeholder.com/300x200?text=Python',
          lastAccessed: '2023-06-10'
        },
        {
          id: 3,
          title: 'Apprentissage Automatique pour Débutants',
          progress: 20,
          image: 'https://via.placeholder.com/300x200?text=ML',
          lastAccessed: '2023-06-05'
        },
        {
          id: 4,
          title: 'Traitement du Langage Naturel',
          progress: 10,
          image: 'https://via.placeholder.com/300x200?text=NLP',
          lastAccessed: '2023-06-01'
        }
      ];
      
      // Simuler un délai de chargement
      setTimeout(() => {
        setCourses(mockCourses);
        setIsLoading(false);
      }, 1000);
    };
    
    fetchCourses();
  }, []);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="dashboard-brand">
          <h1>Instructo</h1>
        </div>
        <div className="dashboard-user">
          <span className="user-greeting">Bonjour, {user?.name || 'Utilisateur'}</span>
          <button className="logout-button" onClick={handleLogout}>
            Se déconnecter
          </button>
        </div>
      </header>
      
      <main className="dashboard-content">
        <section className="dashboard-welcome">
          <h2>Bienvenue sur votre tableau de bord</h2>
          <p>Continuez votre apprentissage là où vous vous êtes arrêté</p>
        </section>
        
        <section className="dashboard-stats">
          <div className="stat-card">
            <h3>Cours en cours</h3>
            <p className="stat-value">{courses.length}</p>
          </div>
          <div className="stat-card">
            <h3>Heures d'apprentissage</h3>
            <p className="stat-value">12.5</p>
          </div>
          <div className="stat-card">
            <h3>Certificats</h3>
            <p className="stat-value">2</p>
          </div>
        </section>
        
        <section className="dashboard-courses">
          <div className="section-header">
            <h2>Mes cours</h2>
            <button className="view-all-button">Voir tout</button>
          </div>
          
          {isLoading ? (
            <div className="loading-courses">Chargement de vos cours...</div>
          ) : (
            <div className="courses-grid">
              {courses.map(course => (
                <div className="course-card" key={course.id}>
                  <div className="course-image">
                    <img src={course.image} alt={course.title} />
                  </div>
                  <div className="course-info">
                    <h3>{course.title}</h3>
                    <div className="course-progress">
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <span className="progress-text">{course.progress}% complété</span>
                    </div>
                    <p className="last-accessed">
                      Dernier accès: {new Date(course.lastAccessed).toLocaleDateString('fr-FR')}
                    </p>
                    <button className="continue-button">Continuer</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
        
        <section className="dashboard-recommendations">
          <h2>Recommandé pour vous</h2>
          <div className="recommendations-grid">
            <div className="recommendation-card">
              <h3>Traitement des Données avec Pandas</h3>
              <p>Apprenez à manipuler et analyser des données efficacement</p>
              <button className="start-button">Commencer</button>
            </div>
            <div className="recommendation-card">
              <h3>Visualisation de Données avec Matplotlib</h3>
              <p>Créez des graphiques et visualisations impressionnants</p>
              <button className="start-button">Commencer</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard; 