import dayjs from 'dayjs';
import Clock from './Clock';

export default function Footer() {
    return(
        <div className='h-8 flex gap-1'>
            <div className='bg-pipboy-dark px-2'>
                <span className='text-2xl'>{dayjs(new Date().getTime()).format('DD.MM.YYYY')}</span>
            </div>
            <Clock />
            <div className='bg-pipboy-dark w-full text-end px-2'>
                <span className='text-2xl'>Place</span>
            </div>
            <div className='bg-pipboy-dark px-2'>
                <span className='text-2xl'>V{import.meta.env.PACKAGE_VERSION}</span>
            </div>
        </div>
    );
}