import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import '@/styles/globals.css';


const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <section className="h-screen">
            <Slider {...settings}>
                <div className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: 'url(/slider1.jpg)' }}>
                    <div className="text-center text-white px-4 md:px-8">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Dflix</h1>
                        <p className="text-lg md:text-2xl mb-8">Stream your favorite movies and TV shows online.</p>
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                            Start Watching
                        </button>
                    </div>
                </div>
                <div className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: 'url(/slider2.jpg)' }}>
                    <div className="text-center text-white px-4 md:px-8">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Explore New Releases</h1>
                        <p className="text-lg md:text-2xl mb-8">Catch the latest movies and series here.</p>
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                            Discover Now
                        </button>
                    </div>
                </div>
                {/* Add more slides as needed */}
            </Slider>
        </section>
    );
};

export default Hero;
