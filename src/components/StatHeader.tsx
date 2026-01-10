export default function StatHeader() {
    return (
        <div className="w-full px-8 mb-2">
            <div className="flex items-center gap-3 font-vt323 text-pipboy-light">
                {/* ESTADO box */}
                <div className="border border-pipboy-light rounded-sm px-4 py-1 shadow-[0_0_8px_rgba(46,255,0,0.25)]">
                    <span className="text-xl tracking-wide">ESTADO</span>
                </div>

                {/* NIV box */}
                <div className="border border-pipboy-light rounded-sm px-4 py-1 shadow-[0_0_8px_rgba(46,255,0,0.25)]">
                    <span className="text-lg tracking-wide">NIV <span className="text-xl font-bold">30</span></span>
                </div>

                {/* PV box */}
                <div className="border border-pipboy-light rounded-sm px-4 py-1 shadow-[0_0_8px_rgba(46,255,0,0.25)]">
                    <span className="text-lg tracking-wide">PV <span className="text-xl font-bold">660 400</span></span>
                </div>

                {/* PA box */}
                <div className="border border-pipboy-light rounded-sm px-4 py-1 shadow-[0_0_8px_rgba(46,255,0,0.25)]">
                    <span className="text-lg tracking-wide">PA <span className="text-xl font-bold">85.85</span></span>
                </div>

                {/* PE MAX box */}
                <div className="border border-pipboy-light rounded-sm px-4 py-1 shadow-[0_0_8px_rgba(46,255,0,0.25)]">
                    <span className="text-lg tracking-wide">PE</span>
                    <span className="text-xl tracking-wide ml-2">MAX</span>
                </div>
            </div>
        </div>
    );
}
