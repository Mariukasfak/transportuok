import { useEffect } from 'react';

const DelayedGTM = () => {
  useEffect(() => {
    // Load GTM after page loads
    if (document.readyState === 'complete') {
      loadGTM();
    } else {
      window.addEventListener('load', loadGTM);
    }
    
    return () => {
      window.removeEventListener('load', loadGTM);
    };
  }, []);
  
  const loadGTM = () => {
    setTimeout(() => {
      // GTM-PZ7CJ6M4 container loading
      const script = document.createElement('script');
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PZ7CJ6M4');
      `;
      document.head.appendChild(script);
      
      // Add noscript part
      const noscript = document.createElement('noscript');
      const iframe = document.createElement('iframe');
      iframe.src = "https://www.googletagmanager.com/ns.html?id=GTM-PZ7CJ6M4";
      iframe.height = "0";
      iframe.width = "0";
      iframe.style.display = "none";
      iframe.style.visibility = "hidden";
      noscript.appendChild(iframe);
      document.body.appendChild(noscript);
    }, 3000); // 3 second delay
  };
  
  return null;
};

export default DelayedGTM;