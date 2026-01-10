import { useLocation, useNavigate } from 'react-router-dom';
import clsx from 'clsx';

const NAV_ITEMS = [
    { label: 'STAT', path: '/stat' },
    { label: 'ITEMS', path: '/inv' },
    { label: 'DATA', path: '/data' }
];

export default function PipBoyBottomNav() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="flex justify-center items-end gap-16 pb-8 pt-4 bg-[#1a1a1a] border-t-4 border-[#3a3a3a]">
            {NAV_ITEMS.map((item) => {
                const isActive = location.pathname.startsWith(item.path);
                return (
                    <div key={item.label} className="flex flex-col items-center gap-1">
                        {/* Worn Yellow Label */}
                        <span
                            className="text-[#e6c65c] font-bold tracking-widest text-lg"
                            style={{
                                fontFamily: '"Press Start 2P", system-ui',
                                textShadow: '1px 1px 0px rgba(0,0,0,0.5), -1px -1px 0px rgba(100,100,0,0.2)'
                            }}
                        >
                            {item.label}
                        </span>

                        {/* Red Round Button */}
                        <button
                            onClick={() => navigate(item.path)}
                            className={clsx(
                                "w-12 h-12 rounded-full relative transition-transform active:scale-90 shadow-[0_4px_6px_rgba(0,0,0,0.5)]",
                                isActive
                                    ? "bg-[#7a2e2e] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3),_0_0_10px_rgba(255,50,50,0.3)]"
                                    : "bg-[#4a1a1a] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.5)]"
                            )}
                            aria-label={item.label}
                        >
                            {/* Button Highlight/Reflection */}
                            <div className="absolute top-1 left-2 w-4 h-2 bg-white/10 rounded-full rotate-[-45deg] pointer-events-none" />
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
