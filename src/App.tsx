import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import { LoadingProvider } from './contexts/LoadingContext';

// Pages
import Hero from './pages/Hero';
import About from './pages/About';
import CallToAction from './pages/CallToAction';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Articles from './pages/Articles';
import CodingProfiles from './pages/CodingProfiles';

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--background);
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 60px; /* Reduced from 70px to match navbar height */
  display: flex;
  flex-direction: column;
`;

function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/call-to-action" element={<CallToAction />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/coding-profiles" element={<CodingProfiles />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <LoadingProvider>
          <Router>
            <GlobalStyles />
            <AppWrapper>
              <Navbar />
              <ScrollToTop />
              <MainContent>
                <AnimatedRoutes />
              </MainContent>
              <Footer />
            </AppWrapper>
          </Router>
        </LoadingProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
