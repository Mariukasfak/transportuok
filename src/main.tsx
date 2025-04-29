import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';
import { initDataLayer } from './utils/analytics';

// Initialize dataLayer with default consent state
initDataLayer();

// Create root and render app
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered:', registration);
      })
      .catch(error => {
        console.log('SW registration failed:', error);
      });
  });
}

// Load non-critical resources
window.addEventListener('load', () => {
  if ('requestIdleCallback' in window) {
    // @ts-ignore
    window.requestIdleCallback(() => {
      // Load additional styles
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/assets/additional-styles.css';
      document.head.appendChild(link);
      
      // Preload images for later use
      const images = [
        '/images/optimized/metalo-lauzas.webp',
        '/images/optimized/baldai.webp',
        '/images/optimized/elektronika.webp',
        '/images/optimized/buitine-technika.webp'
      ];
      
      images.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    });
  }
});