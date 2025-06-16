import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PipBoyContainer from '@/components/PipBoyContainer';
import { Outlet } from 'react-router-dom';

export default function PipboyLayout() {
    return (
        <PipBoyContainer>
            <div className='h-screen flex-1 grid grid-rows-[auto_1fr_auto] p-1'>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </PipBoyContainer>
    )
}