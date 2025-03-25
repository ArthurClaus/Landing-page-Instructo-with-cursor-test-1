#!/bin/bash

# Afficher les informations sur l'environnement
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"
echo "Current directory: $(pwd)"
echo "Directory contents: $(ls -la)"

# Vérifier les versions des dépendances
echo "Vite version installed: $(npx vite --version || echo 'Not installed')"
echo "TypeScript version installed: $(npx tsc --version || echo 'Not installed')"

# Nettoyer le dossier node_modules et le cache npm
echo "Cleaning installation..."
rm -rf node_modules
rm -rf .npm
npm cache clean --force

# Installer les dépendances
echo "Installing dependencies..."
npm install

# Exécuter la commande de build avec plus de verbosité
echo "Running build..."
npm run build

# Vérifier si le build a réussi
if [ $? -eq 0 ]; then
  echo "Build successful!"
  echo "Contents of dist directory:"
  ls -la dist
else
  echo "Build failed!"
  exit 1
fi 