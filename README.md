# Instructo - Landing Page

## 📚 À propos

Instructo est une application de tuteur IA basée sur ChatGPT qui aide les étudiants à apprendre plus rapidement et plus efficacement. Cette landing page présente les fonctionnalités, les témoignages et les tarifs de l'application.

## 🚀 Technologies utilisées

- React
- TypeScript
- Vite
- CSS moderne (variables, flexbox, grid)
- Design responsive

## 🛠️ Installation

1. Clonez ce dépôt
```bash
git clone https://github.com/votre-utilisateur/instructo-landing-page.git
cd instructo-landing-page
```

2. Installez les dépendances
```bash
npm install
```

3. Lancez le serveur de développement
```bash
npm run dev
```

4. Ouvrez votre navigateur à l'adresse [http://localhost:5173](http://localhost:5173)

## 📦 Build pour la production

Pour créer une version optimisée pour la production :

```bash
npm run build
```

Les fichiers générés seront disponibles dans le dossier `dist`.

## 📋 Structure du projet

```
instructo-app/
├── public/             # Ressources statiques
├── src/                # Code source
│   ├── components/     # Composants React
│   ├── App.tsx         # Composant principal
│   ├── main.tsx        # Point d'entrée
│   ├── App.css         # Styles pour App
│   └── index.css       # Styles globaux
├── index.html          # Template HTML
├── package.json        # Dépendances et scripts
├── tsconfig.json       # Configuration TypeScript
└── vite.config.ts      # Configuration Vite
```

## 🎨 Personnalisation

Vous pouvez personnaliser les couleurs et autres variables CSS en modifiant le fichier `src/index.css`. Les principales variables sont définies dans la racine `:root`.

## 📱 Responsive

Le site est entièrement responsive et s'adapte à tous les appareils, des téléphones mobiles aux grands écrans.

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails. 