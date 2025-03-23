// import React from 'react';
import './legal.css';

const Terms = () => {
  return (
    <div className="legal-container">
      <h1>Conditions Générales d'Utilisation</h1>
      
      <section className="legal-section">
        <h2>1. Acceptation des Conditions</h2>
        <p>
          Instructo (un service exploité par [VOTRE_ENTREPRISE]) accessible sur instructo.ai propose ces Conditions Générales d'Utilisation pour régir l'utilisation de notre service. En accédant ou en utilisant Instructo (ci-après dénommé "le Service"), vous acceptez d'être lié par ces Conditions. Si vous n'acceptez pas une quelconque partie de ces conditions, vous ne pouvez pas utiliser notre service.
        </p>
      </section>

      <section className="legal-section">
        <h2>2. Description du Service</h2>
        <p>
          Instructo fournit des outils d'assistance pédagogique propulsés par l'intelligence artificielle. Le Service est sujet à modification à notre discrétion.
        </p>
      </section>

      <section className="legal-section">
        <h2>3. Comptes Utilisateurs</h2>
        <p>
          Nous utilisons un système d'authentification sécurisé. En créant un compte, vous vous engagez à fournir des informations exactes et complètes. Vous êtes responsable du maintien de la sécurité de votre compte et de toutes les activités qui s'y déroulent.
        </p>
      </section>

      <section className="legal-section">
        <h2>4. Paiement et Abonnement</h2>
        <p>
          Nous utilisons des processeurs de paiement sécurisés pour le traitement des paiements. En vous abonnant à nos services payants, vous acceptez de payer tous les frais conformément aux conditions tarifaires en vigueur au moment de la souscription. Vous êtes responsable de fournir des informations de facturation actuelles, complètes et exactes.
        </p>
        
        <h3>4.1 Politique de Remboursement</h3>
        <p>
          Instructo ne propose pas de remboursement pour les achats ou abonnements, sauf dans les cas où des problèmes techniques de notre part ont gravement impacté ou empêché la fourniture du service. Si vous pensez être éligible à un remboursement en raison de problèmes techniques, veuillez nous contacter à support@instructo.ai avec des informations détaillées sur les problèmes rencontrés. Toutes les demandes de remboursement seront évaluées au cas par cas.
        </p>
      </section>

      <section className="legal-section">
        <h2>5. Confidentialité et Sécurité des Données</h2>
        <p>
          Nous stockons les informations non sensibles telles que les emails et les noms d'utilisateur. Les informations sensibles, y compris les détails de paiement, sont gérées de manière sécurisée par nos processeurs de paiement. Nous mettons en œuvre des pratiques appropriées de collecte, de stockage et de traitement des données pour protéger vos informations personnelles. Pour plus de détails, veuillez consulter notre Politique de Confidentialité.
        </p>
      </section>

      <section className="legal-section">
        <h2>6. Droits de Propriété Intellectuelle</h2>
        <p>
          Le Service et son contenu original, ses fonctionnalités et son interface sont la propriété d'Instructo et sont protégés par les lois internationales sur le droit d'auteur, les marques, les brevets, les secrets commerciaux et autres lois sur la propriété intellectuelle.
        </p>
      </section>

      <section className="legal-section">
        <h2>7. Résiliation</h2>
        <p>
          Nous pouvons résilier ou suspendre votre compte et interdire l'accès au Service immédiatement, sans préavis ni responsabilité, à notre seule discrétion, pour quelque raison que ce soit, y compris, sans limitation, si vous violez les présentes Conditions.
        </p>
      </section>

      <section className="legal-section">
        <h2>8. Limitation de Responsabilité</h2>
        <p>
          En aucun cas Instructo, ni ses dirigeants, employés, partenaires, agents, fournisseurs ou affiliés, ne pourront être tenus responsables des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs, y compris, sans limitation, la perte de profits, de données, d'utilisation, de clientèle ou d'autres pertes intangibles, résultant de votre accès ou utilisation ou de l'impossibilité d'accéder ou d'utiliser le Service.
        </p>
      </section>

      <section className="legal-section">
        <h2>9. Modifications des Conditions</h2>
        <p>
          Nous nous réservons le droit de modifier ces conditions à tout moment. Nous informerons les utilisateurs de tout changement significatif. Votre utilisation continue d'Instructo après les modifications constitue une acceptation des nouvelles conditions.
        </p>
      </section>

      <section className="legal-section">
        <h2>10. Nous Contacter</h2>
        <p>
          Si vous avez des questions concernant ces Conditions, veuillez nous contacter à support@instructo.ai.
        </p>
      </section>

      <footer className="legal-footer">
        Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
      </footer>
    </div>
  );
};

export default Terms; 