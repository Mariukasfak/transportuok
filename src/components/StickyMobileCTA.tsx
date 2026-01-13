import { useEffect, useState } from 'react';
import { Phone, Calendar } from 'lucide-react';
import { trackPhoneClick } from '../utils/analytics';

const StickyMobileCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-3 z-50 md:hidden flex gap-2 animate-slide-up">
            <a
                href="tel:+37069925744"
                className="flex-1 flex items-center justify-center bg-white border-2 border-green-600 text-green-700 font-bold py-3 rounded-lg shadow-sm active:bg-green-50 transition-colors"
                onClick={() => trackPhoneClick('+37069925744')}
            >
                <Phone className="w-5 h-5 mr-2" />
                Skambinti
            </a>
            <a
                href="/kontaktai#contact-form"
                className="flex-1 flex items-center justify-center bg-green-600 text-white font-bold py-3 rounded-lg shadow-sm active:bg-green-700 transition-colors"
                onClick={() => {
                    // Optional: Track book click
                    if (window.gtag) window.gtag('event', 'mobile_sticky_book');
                }}
            >
                <Calendar className="w-5 h-5 mr-2" />
                Registruoti
            </a>
        </div>
    );
};

export default StickyMobileCTA;
