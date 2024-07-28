import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h2 className="text-xl font-semibold mb-4">Dflix</h2>
                        <p className="text-sm">Stream your favorite movies and TV shows online.</p>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Careers</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Press</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:underline">Help Center</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">FAQs</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4">
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <ul className="flex space-x-4">
                            <li><a href="#" className="hover:underline"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#" className="hover:underline"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#" className="hover:underline"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="#" className="hover:underline"><i className="fab fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center border-t border-gray-700 pt-4">
                    <p className="text-sm">&copy; 2024 Dflix. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
