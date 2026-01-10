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


    const level = now.diff(START_DATE, 'year') + 1;

    // The "Bracket" segment for NIV, PV, PA, PE
    const StatBracket = ({ label, value, className, width }: { label?: string, value: string | number, className?: string, width?: string }) => (
        <div className={clsx("relative flex flex-col items-center justify-end pb-1", className)} style={{ width }}>
            {/* Top Bracket Line with ticks */}
            <div className="absolute top-0 left-0 right-0 h-4 border-t-2 border-pipboy-light/90">
                <div className="absolute left-0 top-[-2px] h-3 w-[2px] bg-pipboy-light/90" />
                <div className="absolute right-0 top-[-2px] h-3 w-[2px] bg-pipboy-light/90" />
            </div>

            {/* Content centered under the bracket */}
            <div className="font-vt323 text-2xl tracking-widest pt-3 flex items-center justify-center gap-3 w-full text-pipboy-light text-shadow-sm whitespace-nowrap px-2">
                {label && <span className="font-bold">{label}</span>}
                <span>{value}</span>
            </div>
        </div>
    );

    // The "ESTAD" label style - mimics the image
    const StatLabel = () => (
        <div className="relative flex flex-col justify-end pb-1 mr-6">
            {/* Top-Left Bracket for ESTAD */}
            <div className="absolute top-0 left-[-10px] right-0 h-4 border-t-2 border-pipboy-light/90">
                <div className="absolute left-0 top-[-2px] h-3 w-[2px] bg-pipboy-light/90" />
            </div>

            <span className="font-vt323 text-4xl tracking-[0.2em] pt-2 text-pipboy-light text-shadow-md">ESTADO</span>
        </div>
    );


    if (location.pathname.startsWith('/stat')) {
        return (
            <div className="h-24 flex items-end px-16 pb-2 w-full gap-4 relative">
                <StatLabel />

                {/* Segments container */}
                <div className="flex-1 flex items-end justify-between h-full pb-1 gap-4">
                    <StatBracket label="NIV" value={level} className="flex-1" />
                    <StatBracket label="PV" value="600/600" className="flex-[1.5]" />
                    <StatBracket label="PA" value="85/85" className="flex-1" />
                    <StatBracket label="PE" value="MAX" className="flex-1" />
                </div>
            </div>
        );
    }

    // ITEMS (INV) Header
    if (location.pathname.startsWith('/inv')) {
        return (
            <div className="h-24 flex items-end px-16 pb-2 w-full gap-4 relative">
                <div className="relative flex flex-col justify-end pb-1 mr-6">
                    {/* Top-Left Bracket for OBJTS */}
                    <div className="absolute top-0 left-[-10px] right-0 h-4 border-t-2 border-pipboy-light/90">
                        <div className="absolute left-0 top-[-2px] h-3 w-[2px] bg-pipboy-light/90" />
                    </div>
                    <span className="font-vt323 text-4xl tracking-[0.2em] pt-2 text-pipboy-light text-shadow-md">OBJTS</span>
                </div>

                {/* Segments container */}
                <div className="flex-1 flex items-end justify-between h-full pb-1 gap-4">
                    <StatBracket label="P" value="210.300" className="flex-1" />
                    <StatBracket label="PV" value="400.400" className="flex-1" />
                    <StatBracket label="RD" value="47" className="flex-1" />
                    <StatBracket label="Chapas" value="8577" className="flex-[1.5]" />
                </div>
            </div>
        );
    } else if (location.pathname.startsWith('/data')) {
        return (
            <div className="h-24 flex items-end px-16 pb-2 w-full gap-4 relative">
                <div className="relative flex flex-col justify-end pb-1 mr-6">
                    {/* Top-Left Bracket for DATOS */}
                    <div className="absolute top-0 left-[-10px] right-0 h-4 border-t-2 border-pipboy-light/90">
                        <div className="absolute left-0 top-[-2px] h-3 w-[2px] bg-pipboy-light/90" />
                    </div>
                    <span className="font-vt323 text-4xl tracking-[0.2em] pt-2 text-pipboy-light text-shadow-md">DATOS</span>
                </div>

                {/* Segments container */}
                <div className="flex-1 flex items-end justify-between h-full pb-1 gap-4">
                    <StatBracket value="Laboratorio subterráneo" className="flex-[2]" />
                    <StatBracket value={now.format('DD.MM.YY, HH:mm')} className="flex-1" />
                </div>
            </div>
        );
    }

    return <div className="h-20" />;
}
