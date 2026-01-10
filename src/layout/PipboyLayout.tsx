import PipBoyContainer from '@/components/PipBoyContainer';
import PipBoyHeader from '@/components/PipBoyHeader';
import PipBoyBottomNav from '@/components/PipBoyBottomNav';
import PipBoySubNav from '@/components/PipBoySubNav';
import { Outlet } from 'react-router-dom';

export default function PipboyLayout() {
    return (
        <PipBoyContainer>
            <div className='h-screen flex flex-col bg-[#0f0f0f]'>
                {/* Screen Area with Bezel */}
                <div className="flex-1 p-8 pb-2 overflow-hidden flex flex-col">
                    <div className="flex-1 flex flex-col border-[20px] border-[#2a2a2a] rounded-[64px] shadow-[inset_0_0_80px_rgba(0,0,0,0.8)] bg-[#1B2E1B] relative overflow-hidden">

                        {/* CRT Scanlines - Localized */}
                        <div
                            className="pointer-events-none absolute inset-0 z-50 opacity-20"
                            style={{
                                backgroundImage: 'repeating-linear-gradient(rgba(0,0,0,0.5) 0px 2px, transparent 2px 4px)',
                                backgroundSize: '100% 4px'
                            }}
                        />
                        {/* CRT Curve/Vignette Overlay */}
                        <div className="absolute inset-0 z-40 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.6)] rounded-[44px]" />

                        {/* Screen Glare/Overlay */}
                        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_60%,_rgba(0,0,0,0.4)_100%)] z-40 mix-blend-overlay" />

                        <PipBoyHeader />
                        <div className="flex-1 overflow-auto scrollbar-hide p-4 relative z-10">
                            <Outlet />
                        </div>
                        <PipBoySubNav />
                    </div>
                </div>

                {/* Physical Controls Area */}
                <PipBoyBottomNav />
            </div>
        </PipBoyContainer>
    )
}