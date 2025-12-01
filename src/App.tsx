import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ConsentBanner from './components/ConsentBanner';
import GlobalSchema from './components/GlobalSchema';
import ErrorBoundary from './components/ErrorBoundary';
import HolidayPopup from './components/HolidayPopup';

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
const Services = lazy(() => import('./pages/Services'));
const Kaunas = lazy(() => import('./pages/city/Kaunas'));
const Vilnius = lazy(() => import('./pages/city/Vilnius'));
const Partners = lazy(() => import('./pages/Partners'));

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
  const location = useLocation();

  React.useEffect(() => {
    // Push page_view for GA4 via GTM on SPA route changes
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: location.pathname + window.location.search,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
    // Also send GA4 page_view directly via gtag if available
    // This ensures GA4 receives hits even if GTM tags are blocked or misconfigured
    // Consent mode will govern storage automatically
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const anyWin = window as any;
    if (typeof anyWin.gtag === 'function') {
      anyWin.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname + window.location.search,
      });
      // Optional debug flag (uncomment to verify hits in GA4 DebugView)
      // anyWin.gtag('event','page_view',{debug_mode:true});
    }
  }, [location.pathname, location.search]);

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Navbar />
        <GlobalSchema />
        <main className="flex-grow">
          <ErrorBoundary>
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                {/* Main page */}
                <Route path="/" element={<Home />} />

                {/* Service pages */}
                <Route path="/paslaugos/buitines-technikos-isvezimas" element={<BuitineTechnika />} />
                <Route path="/paslaugos/buitines-technikos-isvezimas/:city" element={<BuitineTechnika />} />
                <Route path="/paslaugos/elektronikos-atlieku-isvezimas" element={<Elektronika />} />
                <Route path="/paslaugos/elektronikos-atlieku-isvezimas/:city" element={<Elektronika />} />
                <Route path="/paslaugos/baldu-isvezimas" element={<Baldai />} />
                <Route path="/paslaugos/metalo-lauzo-isvezimas" element={<MetaloLauzas />} />
                <Route path="/paslaugos" element={<Services />} />

                {/* Other pages */}
                <Route path="/apie-mus" element={<About />} />
                <Route path="/kontaktai" element={<Contact />} />
                <Route path="/naujienos" element={<Naujienos />} />
                <Route path="/naujienos/:slug" element={<Naujienos />} />
                <Route path="/partneriai" element={<Partners />} />
                {/* City landing pages */}
                <Route path="/kaunas" element={<Kaunas />} />
                <Route path="/vilnius" element={<Vilnius />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
        <ConsentBanner />
        <HolidayPopup />
      </div>
    </ErrorBoundary>
  );
}

export default App;