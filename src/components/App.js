import React from 'react';
import About from './About';
import Footer from './Footer';
import Info from './Info';
import Interests from './Interests';
import Photo from './Photo';

export default function App()
{
    return (
        <div className="app">
            <Photo />
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    );
}