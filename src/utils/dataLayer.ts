// Minimal data layer API
export const initDataLayer = () => {
  window.dataLayer = window.dataLayer || [];
};

export const pushEvent = (eventName: string, eventParams: Record<string, any> = {}) => {
  if (window.dataLayer) {
    // Push only essential parameters
    const minimalParams = {
      event: eventName,
      ...eventParams
    };
    
    window.dataLayer.push(minimalParams);
  }
};

export const trackPageView = (path: string, title: string) => {
  pushEvent('page_view', {
    page_path: path,
    page_title: title
  });
};