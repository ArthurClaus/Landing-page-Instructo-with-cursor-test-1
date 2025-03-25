#!/bin/bash

# Afficher les informations sur l'environnement
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"
echo "Current directory: $(pwd)"
echo "Directory contents: $(ls -la)"

# Installer les dépendances
npm install

# Exécuter la commande de build
npm run build

# Vérifier si le build a réussi
if [ $? -eq 0 ]; then
  echo "Build successful!"
else
  echo "Build failed!"
  exit 1
fi 