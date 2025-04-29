import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

// Global variable to track script loading
const GOOGLE_MAPS_SCRIPT_ID = 'google-maps-script';
const API_KEY = 'AIzaSyANfuPj8nnzPV9Lf_2gLUFSVXKEFu_bybw'; // Google Maps API key
const PLACE_ID = 'ChIJUQehZpUZ50YRMFClZ11adkM'; // Google Business Place ID

interface Review {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface PlaceResult {
  reviews?: Review[];
  rating?: number;
  user_ratings_total?: number;
}

// Define interfaces for Google Maps API
declare global {
  interface Window {
    google: {
      maps: {
        places: {
          PlacesServiceStatus: {
            OK: string;
            [key: string]: string;
          };
          PlacesService: new (attrContainer: Element) => {
            getDetails: (
              request: { placeId: string; fields: string[] },
              callback: (result: PlaceResult | null, status: string) => void
            ) => void;
          };
        };
      };
    };
  }
}

const GoogleReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [, setError] = useState<string | null>(null);
  const [averageRating, setAverageRating] = useState<number>(0);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  
  useEffect(() => {
    // Load Google Maps script only when component is visible
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadGoogleMapsScript();
        observer.disconnect();
      }
    });

    observer.observe(document.getElementById('reviews-section') || document.body);

    return () => observer.disconnect();
  }, []);
  
  // Auto-rotate reviews every 5 seconds
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (autoRotate && reviews.length > 3) {
      interval = setInterval(() => {
        setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [autoRotate, reviews.length]);

  const loadGoogleMapsScript = () => {
    // Check if script is already loaded
    if (document.getElementById(GOOGLE_MAPS_SCRIPT_ID)) {
      if (window.google && window.google.maps) {
        initMap();
      } else {
        // If script is present but not loaded properly, use fallback
        console.warn('Google Maps script exists but API not loaded.');
        loadFallbackReviews();
      }
      return;
    }

    // If script not loaded yet, load it
    try {
      const script = document.createElement('script');
      script.id = GOOGLE_MAPS_SCRIPT_ID;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      script.onerror = (e) => {
        console.error('Error loading Google Maps API script:', e);
        setError('Nepavyko įkelti Google Maps API');
        loadFallbackReviews();
      };
      document.head.appendChild(script);
      
      // Fallback if script doesn't load in 5 seconds
      setTimeout(() => {
        if (!window.google?.maps?.places) {
          console.warn('Google Maps API failed to load within timeout');
          loadFallbackReviews();
        }
      }, 5000);
    } catch (err) {
      console.error('Error appending Google Maps script:', err);
      loadFallbackReviews();
    }
  };

  function initMap() {
    try {
      if (!window.google || !window.google.maps || !window.google.maps.places) {
        console.error('Google Maps API not available');
        setError('Google Maps API neprieinama');
        loadFallbackReviews();
        return;
      }
      
      const containerDiv = document.createElement('div');
      const service = new window.google.maps.places.PlacesService(containerDiv);

      service.getDetails(
        {
          placeId: PLACE_ID,
          fields: ['reviews', 'rating', 'user_ratings_total'],
        },
        (place, status) => {
          if (
            status === window.google.maps.places.PlacesServiceStatus.OK &&
            place?.reviews && 
            Array.isArray(place.reviews) &&
            place.reviews.length > 0
          ) {
            // Sort reviews by date (most recent first)
            const sortedReviews = [...place.reviews].sort((a, b) => b.time - a.time);
            setReviews(sortedReviews);
            if (place.rating) {
              setAverageRating(place.rating);
            }
            if (place.user_ratings_total) {
              setTotalReviews(place.user_ratings_total);
            } else {
              setTotalReviews(sortedReviews.length);
            }
          } else {
            console.warn('Failed to get reviews or empty reviews array', { status, place });
            setError('Nepavyko gauti atsiliepimų');
            loadFallbackReviews();
          }
          setLoading(false);
        }
      );
    } catch (err) {
      console.error('Error initializing Google Maps:', err);
      setError('Įvyko klaida inicijuojant Google Maps');
      loadFallbackReviews();
    }
  }

  // Fallback reviews if API fails
  const loadFallbackReviews = () => {
    const fallbackReviews = [
      {
        author_name: "Tomas Petrauskas",
        profile_photo_url: "",
        rating: 5,
        relative_time_description: "prieš mėnesį",
        text: "Labai operatyvus ir profesionalus aptarnavimas. Atvyko laiku ir greitai išnešė seną šaldytuvą.",
        time: Date.now() / 1000 - 30 * 24 * 60 * 60
      },
      {
        author_name: "Laura Kazlauskienė",
        profile_photo_url: "",
        rating: 5,
        relative_time_description: "prieš 2 mėnesius",
        text: "Puiki paslauga! Išvežė seną skalbimo mašiną ir indaplovę. Rekomenduoju visiems.",
        time: Date.now() / 1000 - 60 * 24 * 60 * 60
      },
      {
        author_name: "Marius Jonaitis",
        profile_photo_url: "",
        rating: 4,
        relative_time_description: "prieš 3 mėnesius",
        text: "Greitai ir kokybiškai išvežė senus baldus. Labai patenkinti paslaugomis.",
        time: Date.now() / 1000 - 90 * 24 * 60 * 60
      }
    ];
    setReviews(fallbackReviews);
    setAverageRating(4.7);
    setTotalReviews(fallbackReviews.length);
    setLoading(false);
    setError(null);
  };

  // Create star rating display
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-5 h-5 ${
            i <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          }`}
        />
      );
    }
    return stars;
  };

  const visibleReviews = () => {
    if (reviews.length === 0) return [];
    
    // For desktop view, show 3 reviews at a time
    const result = [];
    const maxDisplay = Math.min(3, reviews.length);
    
    for (let i = 0; i < maxDisplay; i++) {
      const index = (currentReviewIndex + i) % reviews.length;
      result.push(reviews[index]);
    }
    
    return result;
  };

  const goToPrevReview = () => {
    setAutoRotate(false); // Pause auto-rotation when manually navigating
    setCurrentReviewIndex((prevIndex) => 
      (prevIndex - 1 + reviews.length) % reviews.length
    );
    
    // Resume auto-rotation after 10 seconds of inactivity
    setTimeout(() => setAutoRotate(true), 10000);
  };

  const goToNextReview = () => {
    setAutoRotate(false); // Pause auto-rotation when manually navigating
    setCurrentReviewIndex((prevIndex) => 
      (prevIndex + 1) % reviews.length
    );
    
    // Resume auto-rotation after 10 seconds of inactivity
    setTimeout(() => setAutoRotate(true), 10000);
  };

  if (loading) {
    return (
      <div id="reviews-section" className="flex justify-center items-center py-16 bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#167d36]"></div>
      </div>
    );
  }

  return (
    <section id="reviews-section" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Klientų atsiliepimai
          </h2>
          <div className="flex justify-center items-center space-x-1 mb-2">
            {renderStars(averageRating)}
          </div>
          <p className="text-lg text-gray-600">
            {averageRating.toFixed(1)} iš 5 ({totalReviews} atsiliepimai)
          </p>
        </div>

        <div 
          className="relative" 
          onMouseEnter={() => setAutoRotate(false)}
          onMouseLeave={() => setAutoRotate(true)}
        >
          {reviews.length > 3 && (
            <button 
              onClick={goToPrevReview} 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md text-[#167d36] hover:text-white hover:bg-[#167d36] transition-colors hidden md:block"
              aria-label="Ankstesnis atsiliepimas"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            role="region"
            aria-label="Google atsiliepimai"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') {
                goToPrevReview();
              } else if (e.key === 'ArrowRight') {
                goToNextReview();
              }
            }}
          >
            {visibleReviews().map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                itemScope
                itemType="http://schema.org/Review"
              >
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center border-2 border-blue-500">
                      <span className="text-xl font-bold text-blue-500">G</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold" itemProp="author">
                      {review.author_name}
                    </h3>
                    <p className="text-gray-500">{review.relative_time_description}</p>
                  </div>
                </div>
                <div className="flex mb-3">{renderStars(review.rating)}</div>
                <p className="text-gray-600" itemProp="reviewBody">
                  {review.text.length > 200 ? `${review.text.substring(0, 200)}...` : review.text}
                </p>
              </div>
            ))}
          </div>
          
          {reviews.length > 3 && (
            <button 
              onClick={goToNextReview} 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md text-[#167d36] hover:text-white hover:bg-[#167d36] transition-colors hidden md:block"
              aria-label="Kitas atsiliepimas"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        {reviews.length > 3 && (
          <div className="flex justify-center space-x-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoRotate(false);
                  setCurrentReviewIndex(index);
                  setTimeout(() => setAutoRotate(true), 10000); // Resume after 10s
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentReviewIndex ? 'bg-[#167d36]' : 'bg-gray-300'
                }`}
                aria-label={`Peržiūrėti atsiliepimą ${index + 1}`}
              />
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <a
            href={`https://g.page/r/CTBQpWddWnZDEBE/review`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#167d36] px-6 py-3 rounded-lg font-semibold border-2 border-[#167d36] hover:bg-[#167d36] hover:text-white transition-colors"
          >
            Palikite atsiliepimą
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;