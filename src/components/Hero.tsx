import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <h1 className="hero-title">
          Un tuteur IA fait pour vous
        </h1>
        
        <p className="hero-subtitle">
          Apprenez avec un tuteur IA qui comprend vos PDF, vidéos et cours enregistrés
        </p>
        
        <div className="hero-buttons">
          <a href="#features" className="btn btn-secondary" onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('features');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
            Voir les fonctionnalités
          </a>
          <a href="https://chat.Instructo.be" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Commencer
          </a>
        </div>

        <div className="social-proof">
          <div className="tutor-image-placeholder" id="tutor-image-container">
            <img src="/tuteur_instructo_image.svg" alt="Tuteur Instructo" className="tutor-image" />
          </div>
          <p className="social-proof-text">Utilisé par des centaines d'étudiants partout en Belgique</p>
        </div>

        <div className="video-demo">
          <img 
            src="/demo-image.png"
            alt="Démo de la plateforme" 
            className="demo-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero; 