import { useState, useEffect } from 'react';

const ConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if consent was already given
    const hasConsent = localStorage.getItem('analytics-consent') === 'true';
    if (!hasConsent) {
      // Show after 2 seconds
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      // If consent was given, set consent mode and load GTM
      setConsent(true);
      loadGTM();
    }
  }, []);

  const acceptConsent = () => {
    localStorage.setItem('analytics-consent', 'true');
    setShowBanner(false);
    setConsent(true);
    loadGTM();
  };

  const declineConsent = () => {
    localStorage.setItem('analytics-consent', 'false');
    setShowBanner(false);
    setConsent(false);
  };

  const setConsent = (granted: boolean) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const anyWin = window as any;
    anyWin.dataLayer = anyWin.dataLayer || [];
    const gtag = (...args: any[]) => anyWin.dataLayer.push(args);
    gtag('consent', 'update', {
      analytics_storage: granted ? 'granted' : 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  };

  const loadGTM = () => {
    if (document.getElementById('gtm-script')) return;
    const s = document.createElement('script');
    s.id = 'gtm-script';
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-PZ7CJ6M4';
    document.head.appendChild(s);
    // Also load GA4 only after consent
    const ga = document.createElement('script');
    ga.async = true;
    ga.src = 'https://www.googletagmanager.com/gtag/js?id=G-320YE0N58G';
    ga.onload = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const anyWin = window as any; anyWin.gtag && anyWin.gtag('config', 'G-320YE0N58G', { send_page_view: false });
    };
    document.head.appendChild(ga);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="mb-4 md:mb-0 text-sm text-gray-700">
          Ši svetainė naudoja slapukus geresnei naršymo patirčiai užtikrinti.
          Slapukai naudojami analitikai ir reklamai personalizuoti.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={acceptConsent}
            className="bg-green-600 text-white px-4 py-2 rounded text-sm"
          >
            Sutinku
          </button>
          <button
            onClick={declineConsent}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded text-sm"
          >
            Nesutinku
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;