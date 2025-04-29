import React, { useEffect, useState, useRef } from 'react';
import { Star } from 'lucide-react';

const LazyGoogleReviews = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && !isLoaded) {
      import('./GoogleReviews')
        .then((module) => {
          setComponent(() => module.default);
          setIsLoaded(true);
        })
        .catch(console.error);
    }
  }, [isVisible, isLoaded]);

  // Fallback content
  const fallbackReviews = [
    {
      name: "Tomas Petrauskas",
      rating: 5,
      text: "Labai operatyvus ir profesionalus aptarnavimas. Atvyko laiku ir greitai išnešė seną šaldytuvą."
    },
    {
      name: "Laura Kazlauskienė",
      rating: 5,
      text: "Puiki paslauga! Išvežė seną skalbimo mašiną ir indaplovę. Rekomenduoju visiems."
    },
    {
      name: "Marius Jonaitis",
      rating: 5,
      text: "Greitai ir kokybiškai išvežė senus baldus. Labai patenkinti paslaugomis."
    }
  ];

  return (
    <div ref={containerRef}>
      {Component ? (
        <Component />
      ) : (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Klientų atsiliepimai</h2>
              <div className="flex justify-center space-x-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-lg text-gray-600">4.8 iš 5 (140+ atsiliepimų)</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {fallbackReviews.map((review, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center border-2 border-blue-500">
                      <span className="text-xl font-bold text-blue-500">G</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">{review.name}</h3>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600">{review.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a
                href="https://search.google.com/local/reviews?placeid=ChIJUQehZpUZ50YRMFClZ11adkM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#167d36] px-6 py-3 rounded-lg font-semibold border-2 border-[#167d36] hover:bg-[#167d36] hover:text-white transition-colors"
              >
                Palikite atsiliepimą
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default LazyGoogleReviews;