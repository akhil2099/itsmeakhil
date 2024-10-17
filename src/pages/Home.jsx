import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Explore from '../components/Explore';
import { useDocTitle } from '../components/CustomHook';

const Home = () => {
    useDocTitle('itsmeakhil - Home');
    return (
        <>
            {/* Applying a dark background and text color */}
            <div className="bg-gray-900 text-gray-100 min-h-screen">
                <Hero />
                <Explore />
                <Clients />
                <Cta />
                <Footer />
            </div>
        </>
    )
}

export default Home;
