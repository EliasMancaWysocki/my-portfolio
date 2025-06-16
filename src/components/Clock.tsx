import { useEffect, useState } from "react";
import dayjs from "dayjs";

export default function Clock() {
    const [now, setNow] = useState(() => new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='bg-pipboy-dark px-2'>
            <span className='text-2xl'>
                {dayjs(now).format('HH:mm:ss')}
            </span>
        </div>
    );
}
