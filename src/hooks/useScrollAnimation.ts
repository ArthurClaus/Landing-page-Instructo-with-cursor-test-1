import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Hook personnalisé pour animer les éléments lors du défilement
 * @param options Options de configuration de l'animation au défilement
 * @returns Un objet contenant une référence à attacher à l'élément et un booléen indiquant si l'élément est visible
 */
const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const { 
    threshold = 0.1, 
    rootMargin = '0px', 
    triggerOnce = true 
  } = options;
  
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Mettre à jour la visibilité
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Si triggerOnce est true, on arrête d'observer après la première animation
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          // Si triggerOnce est false, on réinitialise isVisible lorsque l'élément n'est plus visible
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

export default useScrollAnimation; 