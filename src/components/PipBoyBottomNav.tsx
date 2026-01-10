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
        <div className="flex justify-center items-end gap-12 pb-8 pt-4 bg-[#1a1a1a] border-t-4 border-[#3a3a3a]">
            {NAV_ITEMS.map((item) => {
                const isActive = location.pathname.startsWith(item.path);
                return (
                    <div key={item.label} className="flex flex-col items-center gap-3">
                        {/* Label - Worn Yellow & Larger */}
                        <span
                            className="font-sans font-bold tracking-[0.2em] text-2xl select-none text-[#d6c48b]"
                            style={{
                                textShadow: '1px 3px 2px rgba(0,0,0,0.8), 0 0 1px rgba(0,0,0,1)'
                            }}
                        >
                            {item.label}
                        </span>

                        {/* Button Housing - Metallic raised rim with shadows */}
                        <div className="relative p-[6px] bg-gradient-to-br from-[#555] to-[#222] rounded-full shadow-[0_5px_10px_rgba(0,0,0,0.8),0_0_0_1px_rgba(0,0,0,0.5)]">
                            {/* Inner dark rim for depth */}
                            <div className="absolute inset-[2px] rounded-full bg-[#111] shadow-[inset_0_2px_4px_rgba(0,0,0,1)]" />

                            {/* The Button Itself - Concave dish shape */}
                            <button
                                onClick={() => navigate(item.path)}
                                className={clsx(
                                    "w-14 h-14 rounded-full relative transition-all duration-300 z-10",
                                    "active:scale-95",
                                    isActive
                                        ? "bg-[radial-gradient(circle_at_center,#ffebca_0%,#ffaa00_30%,#ff3300_70%,#660000_100%)] shadow-[0_0_30px_rgba(255,100,0,0.6),inset_0_2px_5px_rgba(0,0,0,0.5)]"
                                        : "bg-[radial-gradient(circle_at_center,#552222_0%,#3a0e0e_40%,#1a0505_100%)] shadow-[inset_0_5px_10px_rgba(0,0,0,0.9),inset_0_-2px_5px_rgba(255,100,100,0.1)]"
                                )}
                                aria-label={item.label}
                            >
                                {/* Glassy Concave overlay/reflection */}
                                <div className="absolute inset-0 rounded-full shadow-[inset_0_10px_10px_rgba(255,255,255,0.05),inset_0_-5px_10px_rgba(0,0,0,0.8)] pointer-events-none" />

                                {/* Specular highlight on the top edge to sell 'concave' or 'glass' */}
                                <div className="absolute top-[15%] left-[15%] w-[70%] h-[70%] rounded-full shadow-[inset_0_3px_5px_rgba(255,255,255,0.1)] pointer-events-none" />
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
