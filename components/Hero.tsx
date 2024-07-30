"use client";
import Image from 'next/image';
import { useState, useEffect } from "react";

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showTitleImg, setShowTitleImg] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [showButtons, setShowButtons] = useState(false);

    const slides = [
        {
            img: '/images/slider1.jpg',
            titleImg: '/images/Tinyslider1.png',
            description: 'Nonimi_Asha_Poya_Teli_Film...',
            genres: ['Dflix Original', 'Drama', 'Family'],
            duration: '2hr 0min'
        },
        {
            img: '/images/slider2.jpg',
            titleImg: '/images/Tinyslider2.png',
            description: 'The film is the biopic of JVP leader Rohana Wijeweera...',
            genres: ['Drama', 'Biography', 'Historical', 'Family'],
            duration: '1hr 45min'
        },
        {
            img: '/images/slider3.jpg',
            titleImg: '/images/Tinyslider3.png',
            description: 'Sports Channel...',
            genres: ['Sports', 'Cricket'],
            duration: '1hr 30min'
        },
        {
            img: '/images/slider4.jpg',
            titleImg: '/images/Tinyslider4.png',
            description: 'New Slide Description...',
            genres: ['New Genre 1', 'New Genre 2'],
            duration: '2hr 15min'
        },
    ];

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        // Initial State: Only show the slide image
        setShowTitleImg(false);
        setShowDescription(false);
        setShowDetails(false);
        setShowButtons(false);

        // Show the Title Image first
        const titleImgTimeout = setTimeout(() => setShowTitleImg(true), 500);  // Show title image after 500ms
        const descriptionTimeout = setTimeout(() => setShowDescription(true), 1500);  // Show description after 1000ms
        const detailsTimeout = setTimeout(() => setShowDetails(true), 2000);  // Show details after 1500ms
        const buttonsTimeout = setTimeout(() => setShowButtons(true), 2500);  // Show buttons after 2000ms

        // Auto-slide
        const slideInterval = setInterval(() => {
            nextSlide();
        }, 8000); // Change slide every 8000ms (8 seconds)

        return () => {
            clearTimeout(titleImgTimeout);
            clearTimeout(descriptionTimeout);
            clearTimeout(detailsTimeout);
            clearTimeout(buttonsTimeout);
            clearInterval(slideInterval);
        };
    }, [currentSlide]);

    return (
        <div>
            <div className="relative w-full h-[calc(100vh-60px)]">
                {/* Slide Container */}
                <div className="relative w-full h-full">
                    {/* Slide Image */}
                    <Image
                        src={slides[currentSlide].img}
                        alt="Slide Image"
                        fill
                        className="object-cover transition-opacity duration-1000"
                    />
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute top-0 left-0 p-4 text-white">
                        {/* Title Image */}
                        <Image
                            src={slides[currentSlide].titleImg}
                            alt="Title Image"
                            width={533}
                            height={400}
                            className={`transition-opacity duration-800 ${showTitleImg ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-50px]'}`}
                        />
                    </div>
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                        {/* Description, Genres, and Duration */}
                        <div
                            className={`transition-transform duration-800 ${showDescription ? 'translate-y-0' : 'translate-y-full'} ${showDescription ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <div className="text-lg font-bold mb-2">
                                {slides[currentSlide].description}
                            </div>
                            <div className="flex flex-wrap gap-2 text-gray-400 mb-2">
                                {slides[currentSlide].genres.map((genre, i) => (
                                    <span key={i} className="bg-gray-800 bg-opacity-70 p-1 rounded">
                                        {genre}
                                    </span>
                                ))}
                            </div>
                            <div className="text-sm text-gray-300">
                                {slides[currentSlide].duration}
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className={`absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full`}
                    onClick={prevSlide}
                >
                    &#8249;
                </button>
                <button
                    className={`absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full`}
                    onClick={nextSlide}
                >
                    &#8250;
                </button>
            </div>

            {/*Posters*/}
            <div className="my-10 px-4">
                <div>
                    <h2 className={"bold-10"}>Dflix Originals</h2>
                </div>
                <div className="flex overflow-x-auto space-x-4">
                    {/* Poster 1 */}
                    <div className="relative w-48 h-72 flex-shrink-0 group">
                        <Image
                            src="/Potrait1.jpg"
                            alt="Poster 1"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md transition-transform duration-300 transform group-hover:scale-105"
                        />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                            <div className="text-white mb-2">Nonimi Asha</div>
                            <button className="bg-red-500 text-white py-2 px-4 rounded mb-2">+ Watch List</button>
                            <button className="bg-green-500 text-white py-2 px-4 rounded">Play</button>
                        </div>
                    </div>

                    {/* Poster 2 */}
                    <div className="relative w-48 h-72 flex-shrink-0 group">
                        <Image
                            src="/Potrait8.jpg"
                            alt="Poster 2"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md transition-transform duration-300 transform group-hover:scale-105"
                        />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                            <div className="text-white mb-2">Poster Details Here</div>
                            <button className="bg-red-500 text-white py-2 px-4 rounded mb-2">+ Watch List</button>
                            <button className="bg-green-500 text-white py-2 px-4 rounded">Play</button>
                        </div>
                    </div>

                    {/* Poster 3 */}
                    <div className="relative w-48 h-72 flex-shrink-0 group">
                        <Image
                            src="/Potrait3.jpg"
                            alt="Poster 3"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md transition-transform duration-300 transform group-hover:scale-105"
                        />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                            <div className="text-white mb-2">Poster Details Here</div>
                            <button className="bg-red-500 text-white py-2 px-4 rounded mb-2">+ Watch List</button>
                            <button className="bg-green-500 text-white py-2 px-4 rounded">Play</button>
                        </div>
                    </div>

                    {/* Poster 4 */}
                    <div className="relative w-48 h-72 flex-shrink-0 group">
                        <Image
                            src="/Potrait4.jpg"
                            alt="Poster 3"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md transition-transform duration-300 transform group-hover:scale-105"
                        />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                            <div className="text-white mb-2">Poster Details Here</div>
                            <button className="bg-red-500 text-white py-2 px-4 rounded mb-2">+ Watch List</button>
                            <button className="bg-green-500 text-white py-2 px-4 rounded">Play</button>
                        </div>
                    </div>

                    {/* Poster 5 */}
                    <div className="relative w-48 h-72 flex-shrink-0 group">
                        <Image
                            src="/Potrait5.jpg"
                            alt="Poster 3"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md transition-transform duration-300 transform group-hover:scale-105"
                        />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                            <div className="text-white mb-2">Poster Details Here</div>
                            <button className="bg-red-500 text-white py-2 px-4 rounded mb-2">+ Watch List</button>
                            <button className="bg-green-500 text-white py-2 px-4 rounded">Play</button>
                        </div>
                    </div>

                    {/* Poster 6 */}
                    <div className="relative w-48 h-72 flex-shrink-0 group">
                        <Image
                            src="/Potrait6.jpg"
                            alt="Poster 3"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md transition-transform duration-300 transform group-hover:scale-105"
                        />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                            <div className="text-white mb-2">Poster Details Here</div>
                            <button className="bg-red-500 text-white py-2 px-4 rounded mb-2">+ Watch List</button>
                            <button className="bg-green-500 text-white py-2 px-4 rounded">Play</button>
                        </div>
                    </div>

                    {/* Poster 7 */}
                    <div className="relative w-48 h-72 flex-shrink-0 group">
                        <Image
                            src="/Potrait7.jpg"
                            alt="Poster 3"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md transition-transform duration-300 transform group-hover:scale-105"
                        />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                            <div className="text-white mb-2">Poster Details Here</div>
                            <button className="bg-red-500 text-white py-2 px-4 rounded mb-2">+ Watch List</button>
                            <button className="bg-green-500 text-white py-2 px-4 rounded">Play</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-10 px-4">
                <div>
                    Entertainment
                </div>
                <div className="posters-container flex overflow-x-auto space-x-4">
                    <div className="poster">
                        <img
                            src="/Entertainment1.jpg"
                            alt="category"/>
                        <div className="overlay">
                            <button className="watch-list-button">+ Watch List</button>
                            <button className="play-button">Play</button>
                        </div>
                    </div>
                    <div className="poster">
                        <img
                            src="/Entertainment2.jpg"
                            alt="category"/>
                        <div className="overlay">
                            <button className="watch-list-button">+ Watch List</button>
                            <button className="play-button">Play</button>
                        </div>
                    </div>
                    <div className="poster">
                        <img
                            src="/Entertainment3.jpg"
                            alt="category"/>
                        <div className="overlay">
                            <button className="watch-list-button">+ Watch List</button>
                            <button className="play-button">Play</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-10 px-4">
                <div>
                    Video Channel
                </div>
                <div>
                    <div className="posters-container flex overflow-x-auto space-x-4">
                        <div className="poster">
                            <img
                                src="/Video1.jpg"
                                alt="category"/>
                            <div className="overlay">
                                <button className="watch-list-button">+ Watch List</button>
                                <button className="play-button">Play</button>
                            </div>
                        </div>
                        <div className="poster">
                            <img
                                src="/Video2.jpg"
                                alt="category"/>
                            <div className="overlay">
                                <button className="watch-list-button">+ Watch List</button>
                                <button className="play-button">Play</button>
                            </div>
                        </div>
                        <div className="poster">
                            <img
                                src="/Video3.jpg"
                                alt="category"/>
                            <div className="overlay">
                                <button className="watch-list-button">+ Watch List</button>
                                <button className="play-button">Play</button>
                            </div>
                        </div>
                        <div className="poster">
                            <img
                                src="/Video4.jpg"
                                alt="category"/>
                            <div className="overlay">
                                <button className="watch-list-button">+ Watch List</button>
                                <button className="play-button">Play</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-10 px-4">
                <div>
                    Documentary
                </div>
                <div>
                    <div className="posters-container flex overflow-x-auto space-x-4">
                        <div className="poster">
                            <img
                                src="/Doc1.jpg"
                                alt="category"/>
                            <div className="overlay">
                                <button className="watch-list-button">+ Watch List</button>
                                <button className="play-button">Play</button>
                            </div>
                        </div>
                        <div className="poster">
                            <img
                                src="/Doc2.jpg"
                                alt="category"/>
                            <div className="overlay">
                                <button className="watch-list-button">+ Watch List</button>
                                <button className="play-button">Play</button>
                            </div>
                        </div>
                        <div className="poster">
                            <img
                                src="/Doc3.jpg"
                                alt="category"/>
                            <div className="overlay">
                                <button className="watch-list-button">+ Watch List</button>
                                <button className="play-button">Play</button>
                            </div>
                        </div>
                        <div className="poster">
                            <img
                                src="/Doc4.jpg"
                                alt="category"/>
                            <div className="overlay">
                                <button className="watch-list-button">+ Watch List</button>
                                <button className="play-button">Play</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
