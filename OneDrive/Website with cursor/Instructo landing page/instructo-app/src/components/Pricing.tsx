import React, { useState } from 'react';
import './Pricing.css';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const togglePricing = () => {
    setIsAnnual(!isAnnual);
  };

  const plans = [
    {
      name: 'Gratuit',
      description: 'Pour découvrir les fonctionnalités de base',
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        'Accès limité au tuteur IA',
        '5 sessions par mois',
        'Sujets de base',
        'Pas de suivi de progression',
        'Support par email'
      ],
      cta: 'Commencer gratuitement',
      highlighted: false
    },
    {
      name: 'Étudiant',
      description: 'Pour les étudiants qui veulent réussir',
      monthlyPrice: 9.99,
      annualPrice: 7.99,
      features: [
        'Accès illimité au tuteur IA',
        'Sessions illimitées',
        'Tous les sujets disponibles',
        'Suivi de progression basique',
        'Exercices personnalisés',
        'Support prioritaire'
      ],
      cta: 'Commencer l\'essai gratuit',
      highlighted: true
    },
    {
      name: 'Pro',
      description: 'Pour les professionnels et enseignants',
      monthlyPrice: 19.99,
      annualPrice: 16.99,
      features: [
        'Tout ce qui est inclus dans Étudiant',
        'Analyses avancées de progression',
        'Création de cours personnalisés',
        'Partage de ressources',
        'Intégration avec d\'autres outils',
        'Support dédié 24/7'
      ],
      cta: 'Commencer l\'essai gratuit',
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="pricing-section section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Tarifs</span>
          <h2 className="section-title">Choisissez le plan qui vous convient</h2>
          <p className="section-description">
            Des formules adaptées à tous les besoins, avec un essai gratuit de 7 jours pour les plans payants.
          </p>
        </div>

        <div className="pricing-toggle">
          <span className={!isAnnual ? 'active' : ''}>Mensuel</span>
          <label className="switch">
            <input type="checkbox" checked={isAnnual} onChange={togglePricing} />
            <span className="slider round"></span>
          </label>
          <span className={isAnnual ? 'active' : ''}>Annuel <span className="discount">-20%</span></span>
        </div>

        <div className="pricing-plans">
          {plans.map((plan, index) => (
            <div 
              className={`pricing-plan ${plan.highlighted ? 'highlighted' : ''}`} 
              key={index}
            >
              {plan.highlighted && <div className="popular-badge">Populaire</div>}
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              <div className="plan-price">
                <span className="currency">€</span>
                <span className="amount">{isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                <span className="period">/ mois</span>
              </div>
              {isAnnual && plan.annualPrice > 0 && (
                <p className="annual-note">Facturé annuellement (€{(plan.annualPrice * 12).toFixed(2)})</p>
              )}
              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className={`plan-cta ${plan.highlighted ? 'highlighted' : ''}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="pricing-guarantee">
          <div className="guarantee-icon">🔒</div>
          <div className="guarantee-content">
            <h4>Garantie satisfait ou remboursé</h4>
            <p>Essayez Instructo pendant 30 jours. Si vous n'êtes pas satisfait, nous vous remboursons intégralement.</p>
          </div>
        </div>

        <div className="pricing-faq">
          <h3 className="faq-title">Questions fréquentes</h3>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Puis-je changer de formule à tout moment ?</h4>
              <p>Oui, vous pouvez passer à une formule supérieure ou inférieure à tout moment. Le changement prendra effet à la prochaine période de facturation.</p>
            </div>
            <div className="faq-item">
              <h4>Comment fonctionne l'essai gratuit ?</h4>
              <p>Vous pouvez essayer les formules payantes pendant 7 jours sans engagement. Aucune carte bancaire n'est requise pour l'essai.</p>
            </div>
            <div className="faq-item">
              <h4>Y a-t-il des réductions pour les établissements scolaires ?</h4>
              <p>Oui, nous proposons des tarifs spéciaux pour les écoles et universités. Contactez notre équipe commerciale pour plus d'informations.</p>
            </div>
            <div className="faq-item">
              <h4>Comment puis-je annuler mon abonnement ?</h4>
              <p>Vous pouvez annuler votre abonnement à tout moment depuis votre espace personnel. L'annulation prendra effet à la fin de la période en cours.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 