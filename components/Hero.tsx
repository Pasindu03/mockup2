"use client";
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showTitleImg, setShowTitleImg] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [showButtons, setShowButtons] = useState(false);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const slides = [
        {
            img: '/images/Sliders/slider1.jpg',
            titleImg: '/images/Sliders/Tinyslider1.png',
            description: 'Sports Channel...',
            genres: ['Sports', 'Cricket'],
            duration: '1hr 30min'

        },
        {
            img: '/images/Sliders/slider2.jpg',
            titleImg: '/images/Sliders/Tinyslider2.png',
            description: 'New Slide Description...',
            genres: ['New Genre 1', 'New Genre 2'],
            duration: '2hr 15min'
        },
        {
            img: '/images/Sliders/slider3.jpg',
            titleImg: '/images/Sliders/Tinyslider3.png',
            description: 'Nonimi_Asha_Poya_Teli_Film...',
            genres: ['Dflix Original', 'Drama', 'Family'],
            duration: '2hr 0min'
        },
        {
            img: '/images/Sliders/slider4.jpg',
            titleImg: '/images/Sliders/Tinyslider4.png',
            description: 'The film is the biopic of JVP leader Rohana Wijeweera...',
            genres: ['Drama', 'Biography', 'Historical', 'Family'],
            duration: '1hr 45min'
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
                        layout="fill"
                        className="object-cover transition-opacity duration-1000"
                    />
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute top-0 left-0 p-4 text-white">
                        {/* Title Image */}
                        <Image
                            src={slides[currentSlide].titleImg}
                            alt="Title Image"
                            width={400}
                            height={300}
                            className={`transition-opacity duration-1000 transform ${showTitleImg ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}
                        />
                    </div>
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                        {/* Description, Genres, and Duration */}
                        <div
                            className={`transition-transform duration-1000 ${showDescription ? 'translate-y-0' : 'translate-y-full'} ${showDescription ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="text-xl font-bold mb-2">
                                {slides[currentSlide].description}
                            </div>
                            <div className="flex flex-wrap gap-2 text-gray-400 mb-2">
                                {slides[currentSlide].genres.map((genre, i) => (
                                    <span key={i} className="bg-gray-800 bg-opacity-70 p-1 rounded">
                                    {genre}
                                </span>
                                ))}
                            </div>
                            <div className="text-lg text-gray-300">
                                {slides[currentSlide].duration}
                            </div>
                        </div>
                        <div
                            className={`flex gap-4 mt-4 ${showButtons ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">More Info
                            </button>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">+ Watch
                                List
                            </button>
                        </div>
                    </div>
                </div>
                <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full"
                    onClick={prevSlide}
                >
                    &#8249;
                </button>
                <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full"
                    onClick={nextSlide}
                >
                    &#8250;
                </button>
            </div>

            {/*Posters*/}
            <div className="my-10 px-4">
                <div>
                    <h1 className="py-5">Dflix Originals</h1>
                </div>
                <Slider {...settings}>
                    {/* Poster 1 */}
                    <div className="px-2"> {/* Adjust px-2 to control spacing between posters */}
                        <div className="relative w-[300px] h-[400px] flex-shrink-0 group">
                            <Image
                                src="/images/Potrait/Potrait1.jpg"
                                alt="Poster 1"
                                fill
                                className="rounded-md transition-transform duration-300 transform group-hover:scale-105 object-cover"
                            />
                            <div
                                className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                <Image src="/images/Potrait/watch-list.png" alt="Watch List" width={32} height={32}
                                       className="mx-auto mb-2"/>
                                <div className="text-white mb-2">Nonimi Asha</div>
                                <div className="text-gray-400 mb-2">Genre: Drama</div>
                                <div className="text-gray-400 mb-4">Runtime: 2h 10m</div>
                                <button className="bg-green-500 text-white py-2 px-4 rounded">Play</button>
                            </div>
                        </div>
                    </div>

                    {/* Poster 2 */}
                    <div className="px-2">
                        <div className="relative w-[300px] h-[400px] flex-shrink-0 group">
                            <Image
                                src="/images/Potrait/Potrait2.jpg"
                                alt="Poster 2"
                                fill
                                className="rounded-md transition-transform duration-300 transform group-hover:scale-105 object-cover"
                            />
                            <div
                                className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                <Image src="/images/Potrait/watch-list.png" alt="Watch List" width={32} height={32}
                                       className="mx-auto mb-2"/>
                                <div className="text-white mb-2">Sasara Bandana</div>
                                <div className="text-gray-400 mb-2">Genre: Action</div>
                                <div className="text-gray-400 mb-4">Runtime: 1h 55m</div>
                                <button className="bg-green-500 text-white py-2 px-4 rounded">Play</button>
                            </div>
                        </div>
                    </div>

                    {/* Poster 3 */}
                    <div className="px-2">
                        <div className="relative w-[300px] h-[400px] flex-shrink-0 group">
                            <Image
                                src="/images/Potrait/Potrait3.jpg"
                                alt="Poster 3"
                                fill
                                className="rounded-md transition-transform duration-300 transform group-hover:scale-105 object-cover"
                            />
                            <div
                                className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                <Image src="/images/Potrait/watch-list.png" alt="Watch List" width={32} height={32}
                                       className="mx-auto mb-2"/>
                                <div className="text-white mb-2">Ambalama</div>
                                <div className="text-gray-400 mb-2">Genre: Comedy</div>
                                <div className="text-gray-400 mb-4">Runtime: 1h 45m</div>
                                <button className="bg-green-500 text-white py-2 px-4 rounded">Play</button>
                            </div>
                        </div>
                    </div>

                    {/* Poster 4 */}
                    <div className="px-2">
                        <div className="relative w-[300px] h-[400px] flex-shrink-0 group">
                            <Image
                                src="/images/Potrait/Potrait4.jpg"
                                alt="Poster 4"
                                fill
                                className="rounded-md transition-transform duration-300 transform group-hover:scale-105 object-cover"
                            />
                            <div
                                className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                <Image src="/images/Potrait/watch-list.png" alt="Watch List" width={32} height={32}
                                       className="mx-auto mb-2"/>
                                <div className="text-white mb-2">As</div>
                                <div className="text-gray-400 mb-2">Genre: Thriller</div>
                                <div className="text-gray-400 mb-4">Runtime: 2h 5m</div>
                                <button className="bg-green-500 text-white py-2 px-4 rounded">Play</button>
                            </div>
                        </div>
                    </div>

                    {/* Poster 5 */}
                    <div className="px-2">
                        <div className="relative w-[300px] h-[400px] flex-shrink-0 group">
                            <Image
                                src="/images/Potrait/Potrait5.jpg"
                                alt="Poster 5"
                                fill
                                className="rounded-md transition-transform duration-300 transform group-hover:scale-105 object-cover"
                            />
                            <div
                                className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                <Image src="/images/Potrait/watch-list.png" alt="Watch List" width={32} height={32}
                                       className="mx-auto mb-2"/>
                                <div className="text-white mb-2">Sasala</div>
                                <div className="text-gray-400 mb-2">Genre: Romance</div>
                                <div className="text-gray-400 mb-4">Runtime: 2h 20m</div>
                                <button className="bg-green-500 text-white py-2 px-4 rounded">Play</button>
                            </div>
                        </div>
                    </div>

                    {/* Poster 6 */}
                    <div className="px-2">
                        <div className="relative w-[300px] h-[400px] flex-shrink-0 group">
                            <Image
                                src="/images/Potrait/Potrait6.jpg"
                                alt="Poster 6"
                                fill
                                className="rounded-md transition-transform duration-300 transform group-hover:scale-105 object-cover"
                            />
                            <div
                                className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                <Image src="/images/Potrait/watch-list.png" alt="Watch List" width={32} height={32}
                                       className="mx-auto mb-2"/>
                                <div className="text-white mb-2">Mahagedara</div>
                                <div className="text-gray-400 mb-2">Genre: Sci-Fi</div>
                                <div className="text-gray-400 mb-4">Runtime: 2h 30m</div>
                                <button className="bg-green-500 text-white py-2 px-4 rounded">Play</button>
                            </div>
                        </div>
                    </div>

                    {/* Poster 7 */}
                    <div className="px-2">
                        <div className="relative w-[300px] h-[400px] flex-shrink-0 group">
                            <Image
                                src="/images/Potrait/Potrait7.jpg"
                                alt="Poster 7"
                                fill
                                className="rounded-md transition-transform duration-300 transform group-hover:scale-105 object-cover"
                            />
                            <div
                                className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                <Image src="/images/Potrait/watch-list.png" alt="Watch List" width={32} height={32}
                                       className="mx-auto mb-2"/>
                                <div className="text-white mb-2">Akka</div>
                                <div className="text-gray-400 mb-2">Genre: Horror</div>
                                <div className="text-gray-400 mb-4">Runtime: 1h 45m</div>
                                <button className="bg-green-500 text-white py-2 px-4 rounded">Play</button>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>

            {/*Entertainment*/}
            <div className="my-10 px-4">
                <div className={"flex overflow-x-auto space-x-4"}>
                    Entertainment
                </div>
                <div className="posters-container flex overflow-x-auto space-x-4">
                    <div className="poster">
                        <img
                            src="/images/Entertainment/Entertainment1.jpg"
                            alt="category"/>
                        <div className="overlay">
                            <button className="watch-list-button">+ Watch List</button>
                            <button className="play-button">Play</button>
                        </div>
                    </div>
                    <div className="poster">
                        <img
                            src="/images/Entertainment/Entertainment2.jpg"
                            alt="category"/>
                        <div className="overlay">
                            <button className="watch-list-button">+ Watch List</button>
                            <button className="play-button">Play</button>
                        </div>
                    </div>
                    <div className="poster">
                        <img
                            src="/images/Entertainment/Entertainment3.jpg"
                            alt="category"/>
                        <div className="overlay">
                            <button className="watch-list-button">+ Watch List</button>
                            <button className="play-button">Play</button>
                        </div>
                    </div>
                </div>
            </div>

            {/*Video Channels*/}
            <div className="my-10 px-4">
                <div>
                    Video Channel
                </div>
                <div>
                    <div className="posters-container flex overflow-x-auto space-x-4">
                        <div className="poster">
                            <img
                                src="/images/Video/Video1.jpg"
                                alt="category"/>
                            <div className="overlay">
                                <button className="watch-list-button">+ Watch List</button>
                                <button className="play-button">Play</button>
                            </div>
                        </div>
                        <div className="poster">
                            <img
                                src="/images/Video/Video2.jpg"
                                alt="category"/>
                            <div className="overlay">
                                <button className="watch-list-button">+ Watch List</button>
                                <button className="play-button">Play</button>
                            </div>
                        </div>
                        <div className="poster">
                            <img
                                src="/images/Video/Video3.jpg"
                                alt="category"/>
                            <div className="overlay">
                                <button className="watch-list-button">+ Watch List</button>
                                <button className="play-button">Play</button>
                            </div>
                        </div>
                        <div className="poster">
                            <img
                                src="/images/Video/Video4.jpg"
                                alt="category"/>
                            <div className="overlay">
                                <button className="watch-list-button">+ Watch List</button>
                                <button className="play-button">Play</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*Documentary*/}
            <div className="my-10 px-4">
                <div>
                    Documentary
                </div>
                <div>
                    <div className="posters-container flex overflow-x-auto space-x-4">
                        <div className="poster">
                            <img
                                src="/images/Documentary/Doc1.jpg"
                                alt="category"/>
                            <div className="overlay">
                                <button className="watch-list-button">+ Watch List</button>
                                <button className="play-button">Play</button>
                            </div>
                        </div>
                        <div className="poster">
                            <img
                                src="/images/Documentary/Doc2.jpg"
                                alt="category"/>
                            <div className="overlay">
                                <button className="watch-list-button">+ Watch List</button>
                                <button className="play-button">Play</button>
                            </div>
                        </div>
                        <div className="poster">
                            <img
                                src="/images/Documentary/Doc3.jpg"
                                alt="category"/>
                            <div className="overlay">
                                <button className="watch-list-button">+ Watch List</button>
                                <button className="play-button">Play</button>
                            </div>
                        </div>
                        <div className="poster">
                            <img
                                src="/images/Documentary/Doc4.jpg"
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