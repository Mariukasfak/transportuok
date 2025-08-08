import React from 'react';
import { Link } from 'react-router-dom';

interface CityTabsProps {
    basePath: string; // e.g., '/paslaugos/elektronikos-atlieku-isvezimas'
    current: 'kaunas' | 'vilnius' | 'lietuva';
}

const tabs: Array<{ key: 'kaunas' | 'vilnius' | 'lietuva'; label: string; path: string }> = [
    { key: 'kaunas', label: 'Kaunas', path: 'kaunas' },
    { key: 'vilnius', label: 'Vilnius', path: 'vilnius' },
    { key: 'lietuva', label: 'Visa Lietuva', path: 'lietuva' }
];

const CityTabs: React.FC<CityTabsProps> = ({ basePath, current }) => {
    return (
        <div className="inline-flex bg-white rounded-lg border shadow-sm overflow-hidden" role="tablist" aria-label="Pasirinkite miestą">
            {tabs.map((t, idx) => {
                const isActive = current === t.key;
                const href = `${basePath}/${t.path}`;
                return (
                    <Link
                        key={t.key}
                        to={href}
                        role="tab"
                        aria-selected={isActive}
                        className={
                            'px-4 py-2 text-sm font-medium transition-colors ' +
                            (isActive ? 'bg-green-600 text-white' : 'text-gray-700 hover:bg-gray-50') +
                            (idx !== tabs.length - 1 ? ' border-r' : '')
                        }
                    >
                        {t.label}
                    </Link>
                );
            })}
        </div>
    );
};

export default CityTabs;
