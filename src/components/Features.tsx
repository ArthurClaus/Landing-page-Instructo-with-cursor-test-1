// import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🧠',
      title: 'Apprentissage adaptatif',
      description: 'Notre IA analyse votre style d\'apprentissage et adapte ses explications pour maximiser votre compréhension.'
    },
    {
      icon: '💬',
      title: 'Conversations naturelles',
      description: 'Posez des questions comme à un vrai tuteur. Notre IA comprend le contexte et répond de manière conversationnelle.'
    },
    {
      icon: '📚',
      title: 'Multiples matières',
      description: 'De la physique à la littérature, en passant par les mathématiques et l\'histoire, Instructo couvre un large éventail de sujets.'
    },
    {
      icon: '📝',
      title: 'Exercices pratiques',
      description: 'Renforcez vos connaissances avec des exercices personnalisés générés en fonction de votre niveau et de vos objectifs.'
    },
    {
      icon: '📊',
      title: 'Suivi des progrès',
      description: 'Visualisez votre progression et identifiez vos points forts et vos axes d\'amélioration grâce à des analyses détaillées.'
    },
    {
      icon: '🔄',
      title: 'Révisions intelligentes',
      description: 'Notre système vous rappelle de réviser les concepts au moment optimal pour une mémorisation à long terme.'
    }
  ];

  return (
    <section id="features" className="features-section section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Fonctionnalités</span>
          <h2 className="section-title">Comment Instructo vous aide à apprendre</h2>
          <p className="section-description">
            Notre tuteur IA combine les dernières avancées en intelligence artificielle avec des méthodes pédagogiques éprouvées pour offrir une expérience d'apprentissage optimale.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="features-demo">
          <div className="demo-content">
            <h3>Voyez Instructo en action</h3>
            <p>
              Découvrez comment notre tuteur IA peut vous aider à maîtriser des concepts complexes avec des explications claires et personnalisées.
            </p>
            <ul className="demo-list">
              <li>Explications adaptées à votre niveau</li>
              <li>Réponses instantanées à vos questions</li>
              <li>Exemples concrets et analogies</li>
              <li>Correction détaillée de vos exercices</li>
            </ul>
            <a href="#demo" className="button">Essayer la démo</a>
          </div>
          <div className="demo-image">
            <img src="/features-demo.png" alt="Instructo AI Tutor demo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 