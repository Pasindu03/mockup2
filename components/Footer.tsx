import React from 'react';

const ImageSection = () => {
    return (
        <div className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-center md:justify-between mb-12">
                    <div className="flex flex-wrap justify-center md:justify-start">
                        <div className="m-4">
                            <img src="/ios.png" alt="iOS" className="h-32 md:h-40" />
                        </div>
                        <div className="m-4">
                            <img src="/android.png" alt="Android" className="h-32 md:h-40" />
                        </div>
                        <div className="m-4">
                            <img src="/androidtv.png" alt="Android TV" className="h-32 md:h-40" />
                        </div>
                        <div className="m-4">
                            <img src="/appletv.png" alt="Apple TV" className="h-32 md:h-40" />
                        </div>
                        <div className="m-4">
                            <img src="/roku.png" alt="Roku" className="h-32 md:h-40" />
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
                <p className="text-lg mb-6">Watch your favorite movies, TV-shows & videos wherever you are on your phone, tablet, desktop, or smart TV.</p>
                <div className="flex justify-center space-x-6">
                    <a href="/" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition">Watch Now</a>
                    <a href="/" className="bg-gray-500 text-white px-6 py-3 rounded hover:bg-gray-600 transition">Watch Promo Video</a>
                </div>
            </div>
        </div>
    );
}

const FooterSection = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="detail-container bg-gray-900 text-white">
                    <div className="top-row p-3 border-b border-gray-700">
                        <div className="flex justify-start space-x-6">
                            <a href="#" className="hover:underline">About</a>
                            <a href="/other/legal/advertise" target="_blank" rel="noopener noreferrer" className="hover:underline">Advertise in Dflix</a>
                            <a href="/other/legal/promotion" target="_blank" rel="noopener noreferrer" className="hover:underline">Promotions</a>
                        </div>
                    </div>
                    <div className="middle-row p-3 border-b border-gray-700">
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
                    <div className="bottom-row p-3">
                        <div className="flex justify-between items-center border-t border-gray-700 pt-4">
                            <div className="flex items-center space-x-4">
                                <span>Powered by <a href="https://derana.lk/" target="_blank" rel="noopener noreferrer" className="hover:underline"><img src="/derana.png" alt="Derana" className="h-20" /></a></span>
                                <span>Solution by <a href="https://rumex.lk/" target="_blank" rel="noopener noreferrer" className="hover:underline"><img src="/logo.png" alt="Rumex" className="h-16" /></a></span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src="/facebook.svg" alt="Facebook" className="w-8 h-8" /></a>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><img src="/youtube.svg" alt="YouTube" className="w-8 h-8" /></a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src="/instagram.svg" alt="Instagram" className="w-8 h-8" /></a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src="/twitter.svg" alt="Twitter" className="w-8 h-8" /></a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><img src="/wordpress.svg" alt="LinkedIn" className="w-8 h-8" /></a>
                            </div>
                        </div>
                        <div className="flex justify-between pt-4">
                            <a href="/other/legal/terms-of-use" className="hover:underline">Terms of Use</a>
                            <a href="/other/legal/privacy-policy" className="hover:underline">Privacy Policy</a>
                            <span><i className="fa fa-globe pr-2"></i>Sri Lanka</span>
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
