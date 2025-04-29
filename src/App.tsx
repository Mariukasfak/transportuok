import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ConsentBanner from './components/ConsentBanner';
import ErrorBoundary from './components/ErrorBoundary';

// Main page
const Home = lazy(() => import('./pages/Home'));

// Service pages
const BuitineTechnika = lazy(() => import('./pages/services/BuitineTechnika'));
const Elektronika = lazy(() => import('./pages/services/Elektronika'));
const Baldai = lazy(() => import('./pages/services/Baldai'));
const MetaloLauzas = lazy(() => import('./pages/services/MetaloLauzas'));

// Other pages
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Naujienos = lazy(() => import('./pages/Naujienos'));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
  </div>
);

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <ErrorBoundary>
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                {/* Main page */}
                <Route path="/" element={<Home />} />

                {/* Service pages */}
                <Route path="/paslaugos/buitines-technikos-isvezimas" element={<BuitineTechnika />} />
                <Route path="/paslaugos/elektronikos-atlieku-isvezimas" element={<Elektronika />} />
                <Route path="/paslaugos/baldu-isvezimas" element={<Baldai />} />
                <Route path="/paslaugos/metalo-lauzo-isvezimas" element={<MetaloLauzas />} />

                {/* Other pages */}
                <Route path="/apie-mus" element={<About />} />
                <Route path="/kontaktai" element={<Contact />} />
                <Route path="/naujienos" element={<Naujienos />} />
                <Route path="/naujienos/:slug" element={<Naujienos />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
        <ConsentBanner />
      </div>
    </ErrorBoundary>
  );
}

export default App;