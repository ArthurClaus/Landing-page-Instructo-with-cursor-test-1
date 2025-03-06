/**
 * Formate un prix en euros
 * @param amount Montant à formater
 * @param locale Locale pour le format (par défaut fr-FR)
 * @returns Le prix formaté (ex: 19,99 €)
 */
export const formatPrice = (amount: number, locale = 'fr-FR'): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
};

/**
 * Tronque un texte s'il dépasse une longueur maximale
 * @param text Texte à tronquer
 * @param maxLength Longueur maximale (par défaut 100 caractères)
 * @returns Le texte tronqué avec des points de suspension si nécessaire
 */
export const truncateText = (text: string, maxLength = 100): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + '...';
};

/**
 * Génère des classes CSS conditionnelles
 * @param classes Objet avec les noms de classes comme clés et des conditions comme valeurs
 * @returns Une chaîne de classes CSS
 */
export const classNames = (...classes: (string | boolean | undefined)[]): string => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Calcule le temps de lecture d'un texte
 * @param text Texte à analyser
 * @param wordsPerMinute Nombre de mots lus par minute (par défaut 200)
 * @returns Temps de lecture estimé en minutes
 */
export const readingTime = (text: string, wordsPerMinute = 200): number => {
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

/**
 * Mélange un tableau de manière aléatoire (algorithme de Fisher-Yates)
 * @param array Tableau à mélanger
 * @returns Un nouveau tableau mélangé
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

/**
 * Récupère un paramètre de l'URL
 * @param name Nom du paramètre à récupérer
 * @returns La valeur du paramètre ou null s'il n'existe pas
 */
export const getUrlParam = (name: string): string | null => {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
};

/**
 * Crée un délai
 * @param ms Millisecondes à attendre
 * @returns Une promesse qui se résout après le délai
 */
export const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
}; 