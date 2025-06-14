import Footer from './components/Footer';
import Header from './components/Header';
import PipBoyContainer from './components/PipBoyContainer';

function App() {

    return (
        <PipBoyContainer>
            <div className='h-screen flex-1 grid grid-rows-[auto_1fr_auto]'>
                <Header />
                <div>
                    hola
                </div>
                <Footer />
            </div>
        </PipBoyContainer>
    );
}

export default App
