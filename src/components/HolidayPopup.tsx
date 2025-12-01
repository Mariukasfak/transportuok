import { useState, useEffect } from 'react';
import { X, Gift, Calendar } from 'lucide-react';

const HolidayPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    // Popup rodomas tik iki 2026-01-01
    const expirationDate = new Date('2026-01-01T00:00:00');
    const now = new Date();
    const shouldShow = now < expirationDate;

    useEffect(() => {
        if (!shouldShow) return;

        // Patikrinti ar vartotojas jau matė popup šią sesiją
        const hasSeenPopup = sessionStorage.getItem('holidayPopupSeen');
        if (hasSeenPopup) return;

        // Rodyti popup po 1.5 sekundės
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, [shouldShow]);

    const handleClose = () => {
        setIsClosing(true);
        sessionStorage.setItem('holidayPopupSeen', 'true');
        setTimeout(() => {
            setIsVisible(false);
            setIsClosing(false);
        }, 300);
    };

    if (!shouldShow || !isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'
                }`}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(4px)' }}
            onClick={handleClose}
        >
            <div
                className={`relative bg-gradient-to-br from-red-700 via-red-800 to-green-900 rounded-2xl shadow-2xl max-w-md w-full p-8 border-4 border-yellow-400 transform transition-all duration-300 ${isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
                    }`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Dekoratyvinės snaigės */}
                <div className="absolute top-2 left-4 text-white/30 text-4xl">❄</div>
                <div className="absolute top-4 right-8 text-white/20 text-2xl">❄</div>
                <div className="absolute bottom-4 left-8 text-white/20 text-2xl">❄</div>
                <div className="absolute bottom-2 right-4 text-white/30 text-3xl">❄</div>

                {/* Uždarymo mygtukas */}
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 text-white/70 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
                    aria-label="Uždaryti"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Turinys */}
                <div className="text-center text-white">
                    {/* Ikona */}
                    <div className="mb-4 flex justify-center">
                        <div className="bg-yellow-400 rounded-full p-4 shadow-lg">
                            <Gift className="w-10 h-10 text-red-800" />
                        </div>
                    </div>

                    {/* Antraštė */}
                    <h2 className="text-3xl font-bold mb-4 text-yellow-300 drop-shadow-lg">
                        🎄 Šventinės atostogos Kaune!
                    </h2>

                    {/* Pranešimas */}
                    <div className="space-y-4 mb-6">
                        <p className="text-lg leading-relaxed">
                            Informuojame, kad <strong className="text-yellow-300">Kauno skyrius</strong> dėl techninių atostogų <strong className="text-yellow-300">nedirbs iki sausio 5 d.</strong>
                        </p>

                        <div className="bg-green-800/50 rounded-xl p-3 border border-green-400/30 mb-2">
                            <p className="text-green-300 font-semibold">
                                ✅ Vilniaus skyrius dirba įprastu grafiku!
                            </p>
                        </div>

                        <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <Calendar className="w-5 h-5 text-green-300" />
                                <span className="font-semibold text-green-300">Registracija vyksta 24/7!</span>
                            </div>
                            <p className="text-sm text-white/90">
                                🎁 Galite rezervuoti laiką išvežimui Kaune jau dabar – atvyksime iškart po Naujųjų metų.
                            </p>
                        </div>

                        <p className="text-white/80 text-sm italic">
                            Atsiprašome už nepatogumus ir linkime jaukių švenčių! ✨
                        </p>
                    </div>

                    {/* CTA mygtukas */}
                    <div className="space-y-3">
                        <a
                            href="/kontaktai#contact-form"
                            className="block w-full bg-yellow-400 hover:bg-yellow-300 text-red-900 font-bold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            onClick={handleClose}
                        >
                            📅 Registruotis dabar
                        </a>
                        <button
                            onClick={handleClose}
                            className="text-white/70 hover:text-white text-sm underline transition-colors"
                        >
                            Uždaryti pranešimą
                        </button>
                    </div>
                </div>

                {/* Dekoratyvinė juosta apačioje */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-green-500 via-red-500 to-green-500 rounded-b-xl"></div>
            </div>
        </div>
    );
};

export default HolidayPopup;
