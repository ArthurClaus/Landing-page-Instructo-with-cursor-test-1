import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';

// Composants
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

// Pages d'authentification
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

// Pages légales
import Terms from './pages/legal/terms';
import Privacy from './pages/legal/privacy';

// Pages protégées
import Dashboard from './pages/Dashboard';

// CSS
import './App.css';

// Composant pour la page d'accueil
const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
    </>
  );
};

/**
 * Composant principal de l'application
 * Intègre les fournisseurs de contexte (thème, authentification) et le routeur
 */
function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Page d'accueil */}
            <Route path="/" element={
              <Layout>
                <Navbar />
                <Home />
                <Footer />
              </Layout>
            } />
            
            {/* Routes d'authentification */}
            <Route path="/login" element={
              <Layout showFooter={false} showNavbar={true}>
                <Navbar />
                <Login />
              </Layout>
            } />
            <Route path="/register" element={
              <Layout showFooter={false} showNavbar={true}>
                <Navbar />
                <Register />
              </Layout>
            } />
            
            {/* Pages légales */}
            <Route path="/terms" element={
              <Layout>
                <Navbar />
                <Terms />
                <Footer />
              </Layout>
            } />
            <Route path="/privacy" element={
              <Layout>
                <Navbar />
                <Privacy />
                <Footer />
              </Layout>
            } />
            
            {/* Routes protégées */}
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={
                <Layout showNavbar={false} showFooter={false}>
                  <Dashboard />
                </Layout>
              } />
              {/* Ajoutez d'autres routes protégées ici */}
            </Route>
            
            {/* Redirection pour les routes inconnues */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App; 