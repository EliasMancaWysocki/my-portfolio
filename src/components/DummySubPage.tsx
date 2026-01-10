
export default function DummySubPage({ title }: { title: string }) {
    return (
        <div className="w-full h-full flex items-center justify-center p-8">
            <div className="border-2 border-pipboy-light bg-black/50 p-6 shadow-[0_0_15px_rgba(46,255,0,0.2)]">
                <h2 className="font-vt323 text-4xl text-pipboy-light uppercase tracking-widest text-shadow-sm mb-4 border-b border-pipboy-light/50 pb-2">
                    {title}
                </h2>
                <p className="font-vt323 text-xl text-pipboy-light/80">
                    [[ ACCESSING DATA... ]]
                </p>
            </div>
        </div>
    );
}
