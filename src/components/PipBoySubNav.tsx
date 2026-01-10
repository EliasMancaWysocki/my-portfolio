import { useLocation, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { Fragment } from 'react';

const SUB_TABS = {
    '/stat': [
        { label: 'Estado', path: 'status' },
        { label: 'S.P.E.C.I.A.L', path: 'special' },
        { label: 'Habilidades', path: 'perks' },
        { label: 'Extras', path: 'perks' },
        { label: 'General', path: 'status' },
    ],
    '/inv': [],
    '/data': [
        { label: 'Mapamundi', path: 'map' },
        { label: 'Radio', path: 'radio' }
    ]
};

export default function PipBoySubNav() {
    const location = useLocation();
    const navigate = useNavigate();

    // Simple matching to get the parent route key
    const currentSection = Object.keys(SUB_TABS).find(path => location.pathname.startsWith(path));
    const tabs = currentSection ? SUB_TABS[currentSection as keyof typeof SUB_TABS] : [];

    if (tabs.length === 0) return <div className="h-12" />; // Spacer

    // Helper component for the lines connecting items
    const LineSegment = ({ first, last }: { first?: boolean; last?: boolean }) => (
        <div className="flex-1 h-[2px] bg-pipboy-light relative min-w-[20px] self-center">
            {first && (
                <div className="absolute left-0 bottom-0 h-3 w-[2px] bg-pipboy-light" />
            )}
            {last && (
                <div className="absolute right-0 bottom-0 h-3 w-[2px] bg-pipboy-light" />
            )}
        </div>
    );

    return (
        <div className="w-full px-12 mb-6">
            <div className="flex flex-row items-center font-vt323 text-2xl uppercase tracking-widest text-pipboy-light text-shadow-sm w-full">
                {/* Initial Line Segment */}
                <LineSegment first />

                {tabs.map((tab, index) => {
                    // Check if current path ends with the tab path or is exactly equal
                    // For example: /stat/special should match 'special'
                    const fullPath = `${currentSection}/${tab.path}`;
                    const isActive = location.pathname.includes(tab.path);
                    const isLast = index === tabs.length - 1;

                    return (
                        <Fragment key={tab.label}>
                            <span
                                onClick={() => navigate(fullPath)}
                                className={clsx(
                                    "px-4 py-1 transition-all cursor-pointer",
                                    isActive
                                        ? "border-2 border-pipboy-light bg-pipboy-active/10 text-pipboy-light shadow-[0_0_8px_rgba(46,255,0,0.4)]"
                                        : "text-pipboy-light/70 hover:text-pipboy-light hover:text-shadow-md"
                                )}
                            >
                                {tab.label}
                            </span>

                            {/* Line Segment after item */}
                            <LineSegment last={isLast} />
                        </Fragment>
                    );
                })}
            </div>
        </div>
    );
}
