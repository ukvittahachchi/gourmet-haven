import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16" id="contact">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pb-10 border-b border-gray-700">
                    {/* Brand Section */}
                    <div className="flex-1 min-w-[300px] mb-8 lg:mb-0">
                        <h2 className="text-2xl lg:text-3xl font-light tracking-wider uppercase mb-5">
                            GOURMET HAVEN
                        </h2>
                        <div className="w-24 h-0.5 bg-white mb-5"></div>
                        <div className="flex space-x-4">
                            <a 
                                href="#" 
                                className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1 hover:brightness-110 hover:shadow-lg"
                                aria-label="Facebook"
                            >
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                            <a 
                                href="#" 
                                className="w-10 h-10 bg-pink-600 rounded flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1 hover:brightness-110 hover:shadow-lg"
                                aria-label="Instagram"
                            >
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            <a 
                                href="#" 
                                className="w-10 h-10 bg-green-500 rounded flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1 hover:brightness-110 hover:shadow-lg"
                                aria-label="WhatsApp"
                            >
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                </svg>
                            </a>
                            <a 
                                href="#" 
                                className="w-10 h-10 bg-blue-400 rounded flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1 hover:brightness-110 hover:shadow-lg"
                                aria-label="Twitter"
                            >
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="flex-1 min-w-[300px] text-center lg:text-right">
                        <h3 className="text-xl font-light tracking-wide uppercase mb-5">
                            CONTACT US
                        </h3>
                        <div className="w-24 h-0.5 bg-white mb-5 ml-auto lg:ml-0 lg:mr-0"></div>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-center justify-center lg:justify-end gap-3">
                                <span className="text-lg">📍</span>
                                <span>Colombo, Sri Lanka</span>
                            </li>
                            <li className="flex items-center justify-center lg:justify-end gap-3">
                                <span className="text-lg">📞</span>
                                <span>hello@utiaes.com</span>
                            </li>
                            <li className="flex items-center justify-center lg:justify-end gap-3">
                                <span className="text-lg">✉️</span>
                                <span>+94 11 2152 262</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            {/* Footer Bottom */}
            <div className="text-center py-5">
                <p className="text-sm text-gray-400">© 2025 All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;