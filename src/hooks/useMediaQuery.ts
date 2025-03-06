import { useState, useEffect } from 'react';

/**
 * Hook personnalisé pour gérer les media queries de façon réactive
 * @param query La media query à surveiller (ex: '(max-width: 768px)')
 * @returns Boolean indiquant si la media query correspond
 */
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Vérifie si window est défini (pour éviter les erreurs SSR)
    if (typeof window === 'undefined') {
      return;
    }

    const media = window.matchMedia(query);
    
    // Définit la valeur initiale
    setMatches(media.matches);

    // Définit un listener pour les changements
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Ajoute le listener
    media.addEventListener('change', listener);

    // Nettoyage à la destruction du composant
    return () => {
      media.removeEventListener('change', listener);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery; 