import React from 'react';

const ImageSection = () => {
    return (
        <div className="bg-gradient-to-b from-blue-400 to-blue-600 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center">
                    {/* Centered Pictures */}
                    <div className="flex flex-wrap justify-center mb-4">
                        <div className="m-4">
                            <img src="/images/FootImg/ios.png" alt="iOS" className="h-32 md:h-40"/>
                        </div>
                        <div className="m-4">
                            <img src="/images/FootImg/android.png" alt="Android" className="h-32 md:h-40"/>
                        </div>
                        <div className="m-4">
                            <img src="/images/FootImg/androidtv.png" alt="Android TV" className="h-32 md:h-40"/>
                        </div>
                    </div>

                    {/* Pictures in Between */}
                    <div className="flex justify-center">
                        <div className="m-4">
                            <img src="/images/FootImg/appletv.png" alt="Apple TV" className="h-32 md:h-40"/>
                        </div>
                        <div className="m-4">
                            <img src="/images/FootImg/roku.png" alt="Roku" className="h-32 md:h-40"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const MainContent = () => {
    return (
        <div className="py-12 bg-gray-100">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-3xl font-semibold mb-4">All-in-one platform</h1>
                <p className="text-lg mb-6">Watch your favorite movies, TV-shows & videos wherever you are on your
                    phone, tablet, desktop, or smart TV.</p>
                <div className="flex justify-center space-x-6">
                    <a href="/" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition">Watch
                        Now</a>
                    <a href="/" className="bg-gray-500 text-white px-6 py-3 rounded hover:bg-gray-600 transition">Watch
                        Promo Video</a>
                </div>
            </div>
        </div>
    );
}

const FooterSection = () => {
    return (
        <footer className="bg-gradient-to-b from-blue-400 to-blue-600 text-white py-12">
            <div className="container mx-auto px-6">
                {/* Top Row */}
                <div className="top-row p-3 border-b border-gray-700">
                    <div className="flex justify-start space-x-6">
                        <a href="#" className="hover:underline">About</a>
                        <a href="/other/legal/advertise" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            Advertise in Dflix
                        </a>
                        <a href="/other/legal/promotion" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            Promotions
                        </a>
                    </div>
                </div>

                {/* Middle Row */}
                <div className="middle-row p-3">
                    <div className="flex flex-wrap space-x-6">
                        <div className="watch flex-1">
                            <span className="font-semibold">What to watch</span>
                            <ul className="pt-3 list-disc list-inside">
                                <li>Home</li>
                                <li>Live</li>
                                <li>TV Shows</li>
                                <li>Movies</li>
                                <li>Channels</li>
                            </ul>
                        </div>
                        <div className="about flex-1">
                            <span className="font-semibold">Contact us</span>
                            <ul className="pt-3 list-disc list-inside">
                                <li>Billing</li>
                            </ul>
                        </div>
                        <div className="faq flex-1">
                            <span className="font-semibold">Apps</span>
                            <ul className="pt-3 list-disc list-inside">
                                <li>Link TV</li>
                            </ul>
                        </div>
                        <div className="help flex-1">
                            <span className="font-semibold">Get help</span>
                            <ul className="pt-3 list-disc list-inside">
                                <li>FAQ</li>
                                <li>Report Problem</li>
                                <li>Email: support@dflix.com</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Attribution and Social Media */}
                <div className="bottom-row">
                    {/* Attribution Section */}
                    <div className="flex flex-col items-center">
                        <div className="flex items-center space-x-6">
                            <span className="text-center">
                                Powered by
                                <a href="https://derana.lk/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    <img src="/images/FootLogo/derana.png" alt="Derana" className="h-16" />
                                </a>
                            </span>
                            <span className="text-center">
                                Solution by
                                <a href="https://rumex.lk/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    <img src="/images/FootLogo/logo.png" alt="Rumex" className="h-12" />
                                </a>
                            </span>
                        </div>
                        <div className="border-t border-gray-700 w-full mt-4"></div> {/* Line below attribution */}

                        {/* Social Media and Legal Links */}
                        <div className="flex items-center justify-between mt-4">
                            {/* Social Media Icons */}
                            <div className="flex space-x-10 mr-20"> {/* Increased space between icons */}
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/FootLogo/facebook.svg" alt="Facebook" className="w-8 h-8" />
                                </a>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/FootLogo/youtube.svg" alt="YouTube" className="w-8 h-8" />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/FootLogo/instagram.svg" alt="Instagram" className="w-8 h-8" />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/FootLogo/twitter.svg" alt="Twitter" className="w-8 h-8" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/FootLogo/wordpress.svg" alt="LinkedIn" className="w-8 h-8" />
                                </a>
                            </div>

                            {/* Legal Links and Location Info */}
                            <div className="flex space-x-10 mr-4"> {/* Increased space between links */}
                                <a href="/other/legal/terms-of-use" className="hover:underline">Terms of Use</a>
                                <a href="/other/legal/privacy-policy" className="hover:underline">Privacy Policy</a>
                                <span><i className="fa fa-globe pr-2"></i>Sri Lanka</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

const App = () => {
    return (
        <div>
            <ImageSection />
            <MainContent />
            <FooterSection />
        </div>
    );
}

export default App;
