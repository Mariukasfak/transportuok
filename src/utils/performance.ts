export const measureLCP = () => {
  if ('PerformanceObserver' in window) {
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];

      // Report LCP to analytics
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'LCP',
          value: Math.round(lastEntry.startTime),
          non_interaction: true,
        });
      }
    });

    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
  }
};

export const measureFID = () => {
  if ('PerformanceObserver' in window) {
    const fidObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const firstEntry = entries[0] as any; // FirstInputPerformanceEntry

      // Report FID to analytics
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'FID',
          value: Math.round((firstEntry.processingStart || firstEntry.startTime) - firstEntry.startTime),
          non_interaction: true,
        });
      }
    });

    fidObserver.observe({ entryTypes: ['first-input'] });
  }
};

export const measureCLS = () => {
  if ('PerformanceObserver' in window) {
    let clsValue = 0;
    let clsEntries: PerformanceEntry[] = [];

    const clsObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();

      entries.forEach(entry => {
        // Only count layout shifts without recent user input
        if (!(entry as any).hadRecentInput) {
          const firstSessionEntry = clsEntries.length === 0;
          const entryShouldBeGrouped = clsEntries.length >= 1 &&
            entry.startTime - clsEntries[clsEntries.length - 1].startTime < 1000;

          if (firstSessionEntry || entryShouldBeGrouped) {
            clsEntries.push(entry);
          } else {
            clsEntries = [entry];
          }

          // If the entry should be grouped with the previous entries, update the
          // CLS value.
          if (entryShouldBeGrouped) {
            clsValue = clsEntries.reduce((sum, entry) => sum + (entry as any).value, 0);

            // Report CLS to analytics
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'CLS',
                value: Math.round(clsValue * 1000),
                non_interaction: true,
              });
            }
          }
        }
      });
    });

    clsObserver.observe({ entryTypes: ['layout-shift'] });
  }
};