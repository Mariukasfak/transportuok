import React from 'react';

interface Props {
    kaunasPhone?: string;
    vilniusPhone?: string;
}

const StickyCTA: React.FC<Props> = ({ kaunasPhone = '+370 699 25 744', vilniusPhone = '+370 600 00 000' }) => {
    const handleClick = (action: string, label: string) => {
        // dataLayer & gtag events
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({ event: 'sticky_cta_click', action, label });
        if ((window as any).gtag) {
            (window as any).gtag('event', 'sticky_cta_click', { action, label });
        }
    };

    // Basic context detection (can be improved to city param detection)
    const isKaunas = typeof window !== 'undefined' && window.location.pathname.includes('/kaunas');
    const phone = isKaunas ? kaunasPhone : vilniusPhone;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="text-sm text-gray-700">Greitas išvežimas: Vilnius / Kaunas / Visa Lietuva</div>
                <div className="flex gap-2">
                    <a
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        data-analytics="call_click"
                        onClick={() => handleClick('call', phone)}
                        className="px-4 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700"
                    >
                        Skambinti
                    </a>
                    <a
                        href="https://wa.me/TODO:<whatsapp_number>"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-analytics="whatsapp_click"
                        onClick={() => handleClick('whatsapp', 'whatsapp_footer')}
                        className="px-4 py-2 rounded-lg bg-green-50 text-green-700 font-semibold border border-green-600 hover:bg-green-100"
                    >
                        WhatsApp
                    </a>
                    <a
                        href="/kontaktai#contact-form"
                        data-analytics="sticky_cta_view"
                        onClick={() => handleClick('order', 'form_cta')}
                        className="px-4 py-2 rounded-lg bg-white text-green-700 font-semibold border border-green-600 hover:bg-green-50"
                    >
                        Užsakyti
                    </a>
                </div>
            </div>
        </div>
    );
};

export default StickyCTA;
