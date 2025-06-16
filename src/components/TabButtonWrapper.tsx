import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type TabButtonWrapperProps = {
    button: ReactNode;
    isActive: boolean;
};

export default function TabButtonWrapper({ button, isActive }: TabButtonWrapperProps) {
    return (
        <div className={cn(
            "items-end h-full flex",
            (!isActive && 'border-b-2 border-pipboy-light')
        )}>
            <div className={cn(isActive && 'h-1/2 p-1 border-l-2 border-t-2 border-pipboy-light')} />
            {button}
            <div className={cn(isActive && 'h-1/2 p-1 border-r-2 border-t-2 border-pipboy-light')} />
        </div>
    )
}