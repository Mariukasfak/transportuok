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
      // If consent was given, load GTM
      loadGTM();
    }
  }, []);
  
  const acceptConsent = () => {
    localStorage.setItem('analytics-consent', 'true');
    setShowBanner(false);
    loadGTM();
  };
  
  const declineConsent = () => {
    localStorage.setItem('analytics-consent', 'false');
    setShowBanner(false);
  };
  
  const loadGTM = () => {
    // Load GTM code
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PZ7CJ6M4');
    `;
    document.head.appendChild(script);
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