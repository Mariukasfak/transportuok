import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Load GA script lazily
    const loadGA = () => {
      if (document.getElementById('ga-script')) return;

      const script = document.createElement('script');
      script.id = 'ga-script';
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-320YE0N58G';
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer.push(arguments as any);
      }
      (gtag as any)('js', new Date());
      (gtag as any)('config', 'G-320YE0N58G');
    };

    // Load GA after page loads
    if (document.readyState === 'complete') {
      setTimeout(loadGA, 2000); // Delay loading GA
    } else {
      window.addEventListener('load', () => setTimeout(loadGA, 2000));
    }

    // Track page views
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: location.pathname,
        page_title: document.title
      });
    }
  }, [location]);

  return null;
};

export default GoogleAnalytics;