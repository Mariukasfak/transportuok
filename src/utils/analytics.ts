declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Google Ads Conversion ID
const GOOGLE_ADS_ID = 'AW-817227439';

// gtag helper function
const gtag = (...args: any[]) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(...args);
  }
};

// Initialize dataLayer
export const initDataLayer = () => {
  window.dataLayer = window.dataLayer || [];

  // Set default consent state
  window.dataLayer.push({
    'event': 'default_consent',
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied'
  });
};

// Update consent state
export const updateConsent = (granted: boolean) => {
  const consentState = granted ? 'granted' : 'denied';

  window.dataLayer.push({
    'event': 'consent_update',
    'analytics_storage': consentState,
    'ad_storage': consentState,
    'ad_user_data': consentState,
    'ad_personalization': consentState
  });
};

// Track events
export const trackEvent = (
  eventName: string,
  eventParams: Record<string, any> = {}
) => {
  if (window.dataLayer) {
    window.dataLayer.push({
      'event': eventName,
      ...eventParams
    });
  }
};

// Track form submissions (GA4 + Google Ads conversion)
export const trackFormSubmission = (formName: string, success: boolean = true) => {
  // GA4 event
  trackEvent('form_submission', {
    form_name: formName,
    form_status: success ? 'success' : 'error'
  });

  // Google Ads conversion for successful form submissions
  if (success) {
    gtag('event', 'conversion', {
      'send_to': `${GOOGLE_ADS_ID}/form_submit`
    });
  }
};

// Track phone number clicks (Google Ads conversion)
export const trackPhoneClick = (phoneNumber: string) => {
  // GA4 event
  trackEvent('phone_click', {
    phone_number: phoneNumber
  });

  // Google Ads conversion
  gtag('event', 'conversion', {
    'send_to': `${GOOGLE_ADS_ID}/phone_click`,
    'value': 1.0,
    'currency': 'EUR'
  });
};

// Track outbound links
export const trackOutboundLink = (url: string, linkText: string = '') => {
  trackEvent('outbound_link_click', {
    link_url: url,
    link_text: linkText
  });
};

// Track CTA clicks
export const trackCTAClick = (ctaId: string, ctaText: string = '') => {
  trackEvent('cta_click', {
    cta_id: ctaId,
    cta_text: ctaText
  });
};