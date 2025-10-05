import Header from '../header/Header';
import { BG_IMAGE } from '../../utils/constants';

const HeroSection = () => {
    return (<section className='relative h-[100vh] w-full flex items-center justify-center bg-gradient-to-b from-[rgba(0,0,0,0.8)] from-10% via-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.8)] to-90% max-lg:px-2'>
        {/* <Header /> */}

        <img className='absolute object-cover w-full h-full -z-50' src={BG_IMAGE} alt="background-image" />
        
        <div className='w-full lg:w-[50%]'>
            <h1 className='text-4xl lg:text-6xl font-bold text-white text-center'>
                Unlimited movies, TV shows and more
            </h1>
        </div>
    </section>)
}

export default HeroSection