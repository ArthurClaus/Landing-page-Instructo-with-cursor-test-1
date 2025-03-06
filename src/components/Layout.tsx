import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  showNavbar?: boolean;
  showFooter?: boolean;
}

/**
 * Composant Layout qui structure les pages de l'application
 * avec une barre de navigation et un pied de page optionnels
 */
const Layout = ({ children, showNavbar = true, showFooter = true }: LayoutProps) => {
  return (
    <div className="app-layout">
      {showNavbar && <Navbar />}
      
      <main className="main-content">
        {children}
      </main>
      
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout; 