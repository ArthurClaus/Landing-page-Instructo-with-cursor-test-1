import { ReactNode, ElementType, HTMLAttributes } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { classNames } from '../utils/helpers';

interface AnimatedElementProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: ElementType;
  animation?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right' | 'zoom-in';
  delay?: number;
  duration?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

/**
 * Composant qui anime ses enfants lorsqu'ils entrent dans la vue
 */
const AnimatedElement = ({
  children,
  as: Component = 'div',
  animation = 'fade-in',
  delay = 0,
  duration = 500,
  threshold = 0.1,
  triggerOnce = true,
  className,
  ...props
}: AnimatedElementProps) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    triggerOnce,
  });

  // Styles pour les différentes animations
  const animations = {
    'fade-in': 'opacity-0 transition-opacity',
    'slide-up': 'opacity-0 translate-y-8 transition-all',
    'slide-left': 'opacity-0 -translate-x-8 transition-all',
    'slide-right': 'opacity-0 translate-x-8 transition-all',
    'zoom-in': 'opacity-0 scale-95 transition-all',
  };

  // Styles pour l'état visible
  const visibleStyles = {
    'fade-in': 'opacity-100',
    'slide-up': 'opacity-100 translate-y-0',
    'slide-left': 'opacity-100 translate-x-0',
    'slide-right': 'opacity-100 translate-x-0',
    'zoom-in': 'opacity-100 scale-100',
  };

  return (
    <Component
      ref={ref as any}
      className={classNames(
        animations[animation], 
        isVisible ? visibleStyles[animation] : '',
        className || ''
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default AnimatedElement; 