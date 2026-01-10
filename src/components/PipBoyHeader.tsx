import { useLocation } from 'react-router-dom';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

const START_DATE = dayjs('2023-09-16');

export default function PipBoyHeader() {
    const location = useLocation();
    const [now, setNow] = useState(dayjs());

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(dayjs());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const version = import.meta.env.PACKAGE_VERSION || '1.0.0';
    const level = now.diff(START_DATE, 'year') + 1;

    // The "Bracket" segment for NIV, PV, PA, PE
    // Style: Top horizontal line with small vertical ticks downwards at both ends.
    const StatBracket = ({ label, value, className }: { label?: string, value: string | number, className?: string }) => (
        <div className={clsx("relative flex flex-col items-center justify-end pb-1", className)}>
            {/* Bracket Structure */}
            <div className="w-full h-2 border-t-2 border-pipboy-light/80 relative mb-1">
                {/* Left Tick */}
                <div className="absolute left-0 top-[-2px] h-2 w-[2px] bg-pipboy-light/80" />
                {/* Right Tick */}
                <div className="absolute right-0 top-[-2px] h-2 w-[2px] bg-pipboy-light/80" />
            </div>

            <div className="font-bold select-none text-xl tracking-wider px-2">
                {label && <span className="mr-2">{label}</span>}
                <span>{value}</span>
            </div>
        </div>
    );

    // The "STAT" label style
    const StatLabel = () => (
        <div className="relative flex flex-col items-start justify-end pb-1 mr-8">
            {/* Short top bar above STAT */}
            <div className="w-12 h-[2px] bg-pipboy-light/80 mb-2 ml-1" />
            <span className="text-4xl font-bold tracking-widest leading-none">STAT</span>
        </div>
    );

    let content = null;

    if (location.pathname.startsWith('/stat')) {
        return (
            <div className="h-20 flex items-end px-12 pb-2 font-pixelify text-pipboy-light w-full gap-4">
                <StatLabel />

                {/* Segments container */}
                <div className="flex-1 flex items-end gap-6 h-full pb-1">
                    <StatBracket label="NIV" value={level} className="flex-[0.6]" />
                    <StatBracket label="PV" value="600/600" className="flex-1" />
                    <StatBracket label="PA" value="85/85" className="flex-1" />
                    <StatBracket label="PE" value={`v${version}`} className="flex-1" />
                </div>
            </div>
        );
    }

    // Default logic
    if (location.pathname.startsWith('/inv')) {
        content = (
            <div className="flex justify-between items-end border-b-2 border-pipboy-light/50 px-8 pb-2 w-full">
                <span className="text-3xl tracking-widest">ITEMS P 3</span>
                <span className="text-xl">PV 600/600</span>
                <span className="text-xl">PE v{version}</span>
            </div>
        );
    } else if (location.pathname.startsWith('/data')) {
        content = (
            <div className="flex justify-between items-end border-b-2 border-pipboy-light/50 px-8 pb-2 w-full">
                <span className="text-4xl tracking-widest">DATA</span>
                <span className="text-xl">{now.format('DD.MM.YY HH:mm')}</span>
            </div>
        );
    } else {
        content = <div />;
    }

    return (
        <div className="h-20 flex items-end font-pixelify text-pipboy-light w-full">
            {content}
        </div>
    );
}
