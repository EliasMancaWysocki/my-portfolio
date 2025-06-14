import dayjs from 'dayjs';

export default function Footer() {
    return(
        <div className='h-8 flex gap-1 px-1'>
            <div className='bg-pipboy-dark px-2'>
                <span className='text-2xl'>{dayjs(new Date().getTime()).format('DD.MM.YYYY')}</span>
            </div>
            <div className='bg-pipboy-dark px-2'>
                <span className='text-2xl'>{dayjs(new Date().getTime()).format('HH:mm:ss')}</span>
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