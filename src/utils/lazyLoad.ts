export const setupLazyLoading = (selector: string, callback?: (element: Element) => void) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        if (callback) callback(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '100px' });

  const elements = document.querySelectorAll(selector);
  elements.forEach(element => observer.observe(element));

  return () => {
    elements.forEach(element => observer.unobserve(element));
  };
};