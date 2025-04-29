declare global {
  interface Window {
    dataLayer: any[];
  }
}

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

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean = true) => {
  trackEvent('form_submission', {
    form_name: formName,
    form_status: success ? 'success' : 'error'
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