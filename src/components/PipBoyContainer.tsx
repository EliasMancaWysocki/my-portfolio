import type { ReactNode } from 'react';

type PipBoyContainerProps = {
    children: ReactNode
}

export default function PipBoyContainer({ children }: PipBoyContainerProps) {
    return (
        <div className="relative min-h-screen bg-pipboy-bg font-vt323 text-3xl text-pipboy-light overflow-hidden">
            {/* Scanlines overlay */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage: 'repeating-linear-gradient(rgba(0,0,0,0.1) 0px 6px, transparent 6px 12px)',
                    zIndex: 500,
                }}
            />
            {/* CRT glow */}
            <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-50 bg-gradient-to-t from-pipboy-dark to-transparent" />
            <div className="relative z-10">{children}</div>
        </div>
    );
}