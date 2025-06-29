import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

export default function Footer() {

    const [now, setNow] = useState(() => new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='h-8 flex gap-1'>
            <div className='bg-pipboy-dark px-2'>
                <span className='text-2xl'>
                    {dayjs(now).format('DD.MM.YYYY')}
                </span>
            </div>
            <div className='bg-pipboy-dark px-2'>
                <span className='text-2xl'>
                    {dayjs(now).format('HH:mm:ss')}
                </span>
            </div>
            <div className='bg-pipboy-dark w-full text-end px-2'>
                <span className='text-2xl'>Place</span>
            </div>
            <div className='bg-pipboy-dark px-2'>
                <span className='text-2xl'>V{import.meta.env.PACKAGE_VERSION}</span>
            </div>
        </div>
    );
}