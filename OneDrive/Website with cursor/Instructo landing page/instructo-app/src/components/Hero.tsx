import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Apprenez plus vite avec votre tuteur IA personnel
          </h1>
          <p className="hero-subtitle">
            Instructo est un tuteur virtuel basé sur ChatGPT qui vous aide à maîtriser n'importe quel sujet à votre rythme, avec des explications personnalisées et un suivi adapté à votre style d'apprentissage.
          </p>
          <div className="hero-cta">
            <a href="#pricing" className="button hero-button">
              Commencer gratuitement
            </a>
            <a href="#demo" className="hero-link">
              Voir une démo <span className="arrow">→</span>
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">10k+</span>
              <span className="stat-label">Étudiants</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Sujets</span>
            </div>
            <div className="stat">
              <span className="stat-number">4.9/5</span>
              <span className="stat-label">Satisfaction</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-container">
            <img 
              src="/hero-image.png" 
              alt="Instructo AI Tutor interface" 
              className="main-image"
            />
            <div className="floating-element floating-element-1">
              <div className="floating-card">
                <div className="floating-icon">🎓</div>
                <div className="floating-text">Apprentissage personnalisé</div>
              </div>
            </div>
            <div className="floating-element floating-element-2">
              <div className="floating-card">
                <div className="floating-icon">⚡</div>
                <div className="floating-text">Réponses instantanées</div>
              </div>
            </div>
            <div className="floating-element floating-element-3">
              <div className="floating-card">
                <div className="floating-icon">📊</div>
                <div className="floating-text">Suivi des progrès</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-shape"></div>
    </section>
  );
};

export default Hero; 