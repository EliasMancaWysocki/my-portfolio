import type { ReactNode } from 'react';

type PipBoyContainerProps = {
    children: ReactNode
}

export default function PipBoyContainer({ children }: PipBoyContainerProps) {
    return (
        <div className="relative min-h-screen bg-pipboy-bg font-vt323 text-3xl text-pipboy-light overflow-hidden">
            <div className="relative z-10">{children}</div>
        </div>
    );
}