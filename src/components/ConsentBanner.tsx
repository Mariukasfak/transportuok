import { useState, useEffect } from 'react';

const GA4_ID = 'G-320YE0N58G';
const GTM_ID = 'GTM-PZ7CJ6M4';

/**
 * Initialise window.gtag as a real global function (not a local closure).
 * This must happen BEFORE loading the GA4/GTM scripts so that any queued
 * gtag() calls from the rest of the app are buffered and replayed correctly.
 */
function initGtag() {
  const win = window as any;
  win.dataLayer = win.dataLayer || [];
  // Expose window.gtag globally – this is what all tracking code in the app depends on
  if (!win.gtag) {
    win.gtag = function (...args: any[]) {
      win.dataLayer.push(args);
    };
  }
  return win.gtag as (...args: any[]) => void;
}

function loadScript(src: string, id: string) {
  if (document.getElementById(id)) return;
  const s = document.createElement('script');
  s.id = id;
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

const ConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const gtag = initGtag();

    // Step 1: Set default consent DENIED before loading any ad/analytics scripts
    gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      wait_for_update: 500
    });

    const hasConsent = localStorage.getItem('analytics-consent');

    if (hasConsent === 'true') {
      // Previously accepted – grant immediately, then load scripts
      gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted'
      });
      loadAnalytics(gtag);
    } else if (hasConsent === 'false') {
      // Previously declined – load scripts in denied mode (consent mode v2 modeling)
      loadAnalytics(gtag);
    } else {
      // First visit – show banner after slight delay so LCP is not blocked
      const timer = setTimeout(() => setShowBanner(true), 1500);
      // Still load GTM in denied mode for consent modeling
      loadAnalytics(gtag);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadAnalytics = (gtag: (...args: any[]) => void) => {
    // Load GTM
    loadScript(`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`, 'gtm-script');
    // Load GA4 directly (redundancy in case GTM tag is misconfigured)
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`, 'ga4-script');
    // Configure GA4 – must happen after gtag is defined
    gtag('js', new Date());
    gtag('config', GA4_ID, {
      send_page_view: true,   // GA4 fires the first pageview on load
      anonymize_ip: true
    });
  };

  const acceptConsent = () => {
    localStorage.setItem('analytics-consent', 'true');
    setShowBanner(false);
    const gtag = initGtag();
    gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted'
    });
    // Also push to dataLayer for GTM trigger
    (window as any).dataLayer.push({ event: 'consent_granted' });
  };

  const declineConsent = () => {
    localStorage.setItem('analytics-consent', 'false');
    setShowBanner(false);
    // Keep denied – no update needed, default is already denied
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-700">
          Ši svetainė naudoja slapukus analitikai ir reklamos kokybei gerinti.
          Sutikdami padėsite mums tobulinti paslaugą.
          <a href="/privatumo-politika" className="underline ml-1 text-green-700">Skaityti daugiau</a>
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={acceptConsent}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            Sutinku
          </button>
          <button
            onClick={declineConsent}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            Nesutinku
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;