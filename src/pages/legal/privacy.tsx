import React from 'react';
import './legal.css';

const Privacy = () => {
  return (
    <div className="legal-container">
      <h1>Politique de Confidentialité</h1>
      
      <section className="legal-section">
        <h2>1. Introduction</h2>
        <p>
          Chez Instructo, nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles. Cette politique de confidentialité vous informe de la manière dont nous traitons vos données personnelles lorsque vous visitez notre site web (instructo.ai) et vous renseigne sur vos droits en matière de protection de la vie privée et sur la manière dont la loi vous protège.
        </p>
      </section>

      <section className="legal-section">
        <h2>2. Données que nous collectons</h2>
        <p>
          Nous collectons et traitons les données suivantes :
        </p>
        <ul>
          <li>Données d'identité : y compris prénom, nom, identifiant ou identifiant similaire</li>
          <li>Données de contact : y compris adresse e-mail</li>
          <li>Données techniques : y compris adresse IP, type et version du navigateur, paramètres de fuseau horaire et localisation, types et versions des plugins du navigateur, système d'exploitation et plateforme</li>
          <li>Données d'utilisation : y compris des informations sur la façon dont vous utilisez notre site web et nos services</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>3. Comment nous utilisons vos données</h2>
        <p>
          Nous utilisons vos données pour :
        </p>
        <ul>
          <li>Fournir et maintenir notre service</li>
          <li>Vous informer des changements apportés à notre service</li>
          <li>Vous permettre de participer aux fonctionnalités interactives de notre service lorsque vous le souhaitez</li>
          <li>Fournir une assistance client</li>
          <li>Recueillir des analyses ou des informations précieuses pour améliorer notre service</li>
          <li>Surveiller l'utilisation de notre service</li>
          <li>Détecter, prévenir et résoudre les problèmes techniques</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>4. Stockage et sécurité des données</h2>
        <p>
          Nous mettons en œuvre des pratiques appropriées de collecte, de stockage et de traitement des données, ainsi que des mesures de sécurité pour protéger contre l'accès non autorisé, la modification, la divulgation ou la destruction de vos informations personnelles, nom d'utilisateur, mot de passe, informations de transaction et données stockées sur notre site.
        </p>
        <p>
          Les échanges de données sensibles et privées entre le site et ses utilisateurs se font via un canal de communication sécurisé SSL et sont cryptés et protégés par des signatures numériques.
        </p>
      </section>

      <section className="legal-section">
        <h2>5. Services tiers</h2>
        <p>
          Nous utilisons des services d'authentification sécurisés et des processeurs de paiement reconnus pour le traitement des paiements. Ces services tiers disposent de leurs propres politiques de confidentialité concernant la manière dont ils utilisent ces informations.
        </p>
      </section>

      <section className="legal-section">
        <h2>6. Vos droits en matière de protection des données</h2>
        <p>
          Dans certaines circonstances, vous disposez des droits suivants en vertu des lois sur la protection des données concernant vos données personnelles :
        </p>
        <ul>
          <li>Demander l'accès à vos données personnelles</li>
          <li>Demander la correction de vos données personnelles</li>
          <li>Demander l'effacement de vos données personnelles</li>
          <li>S'opposer au traitement de vos données personnelles</li>
          <li>Demander la limitation du traitement de vos données personnelles</li>
          <li>Demander le transfert de vos données personnelles</li>
          <li>Droit de retirer votre consentement</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>7. Cookies</h2>
        <p>
          Nous utilisons des cookies et des technologies de suivi similaires pour suivre l'activité sur notre service et conserver certaines informations. Vous pouvez configurer votre navigateur pour qu'il refuse tous les cookies ou qu'il vous signale l'envoi d'un cookie.
        </p>
      </section>

      <section className="legal-section">
        <h2>8. Modifications de cette politique de confidentialité</h2>
        <p>
          Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle politique de confidentialité sur cette page et en mettant à jour la date de "Dernière mise à jour".
        </p>
      </section>

      <section className="legal-section">
        <h2>9. Nous contacter</h2>
        <p>
          Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à support@instructo.ai.
        </p>
      </section>

      <footer className="legal-footer">
        Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
      </footer>
    </div>
  );
};

export default Privacy; 