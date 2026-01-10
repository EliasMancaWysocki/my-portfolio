import { useState } from 'react';
import clsx from 'clsx';

const ITEMS = [
    { name: 'Estimulante', count: 5, weight: 0 },
    { name: 'RadAway', count: 2, weight: 0 },
    { name: 'Rad-X', count: 3, weight: 0 },
    { name: 'Pistola 10mm', count: 1, weight: 3 },
    { name: 'Munición 10mm', count: 50, weight: 1 },
    { name: 'Chapa de Nuka-Cola', count: 120, weight: 0 },
];

export default function InvPage() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className="flex h-full font-vt323 text-2xl uppercase">
            {/* List Column */}
            <div className="w-1/2 border-r-2 border-pipboy-light/20 p-2 flex flex-col gap-1">
                {ITEMS.map((item, index) => {
                    const isSelected = index === selectedIndex;
                    return (
                        <div
                            key={item.name}
                            onClick={() => setSelectedIndex(index)}
                            className={clsx(
                                "cursor-pointer px-2 py-1 flex justify-between items-center group",
                                isSelected ? "bg-pipboy-light text-pipboy-bg" : "hover:text-white" // Invert colors on select
                            )}
                        >
                            <span>{item.name}</span>
                            <span>{item.count > 1 ? item.count : ''}</span>
                        </div>
                    );
                })}
            </div>

            {/* Details Column (Placeholder matching typical Pip-Boy layout) */}
            <div className="w-1/2 p-4 flex flex-col gap-4">
                <div className="border border-pipboy-light/50 p-4 h-32 flex items-center justify-center bg-pipboy-light/5">
                    {/* Placeholder for Item Image */}
                    <span className="text-sm opacity-50">[Item Image]</span>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span>PESO</span>
                        <span>{ITEMS[selectedIndex].weight}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>VALOR</span>
                        <span>15</span>
                    </div>
                </div>

                <div className="mt-auto opacity-80 text-lg leading-tight">
                    Efectos: +30 PS
                </div>
            </div>
        </div>
    )
}