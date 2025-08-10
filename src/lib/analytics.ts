export const trackEvent = (name: string, params: Record<string, any> = {}) => {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event: name, ...params });
    if ((window as any).gtag) {
        (window as any).gtag('event', name, params);
    }
};

export const trackCallClick = (label: string) => trackEvent('call_click', { label });
export const trackWhatsAppClick = (label: string) => trackEvent('whatsapp_click', { label });
export const trackFormSubmit = (label: string) => trackEvent('form_submit', { label });
