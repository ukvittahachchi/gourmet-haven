import React, { useState, useEffect } from 'react';
import caprese from '../assets/caprese.png';
import steak from '../assets/steak.png';
import platter from '../assets/platter.png';

// Extended menu items with more variety
const menuItems = [
    {
        id: 1,
        title: 'INSALATA CAPRESE',
        description: 'Fresh mozzarella, tomatoes, basil',
        price: 'Rs 2500',
        image: caprese
    },
    {
        id: 2,
        title: 'GOURMET TACOS',
        description: 'Crispy shells, seasoned meat, fresh salsa',
        price: 'Rs 3000',
        image: platter
    },
    {
        id: 3,
        title: 'SIGNATURE STEAK',
        description: 'Premium cut, grilled vegetables, herb butter',
        price: 'Rs 1000',
        image: steak
    },
    {
        id: 4,
        title: 'MEDITERRANEAN PLATTER',
        description: 'Assorted cheeses, olives, cured meats',
        price: 'Rs 2600',
        image: platter
    },
    {
        id: 5,
        title: 'TRUFFLE PASTA',
        description: 'Fresh pasta with black truffle sauce',
        price: 'Rs 3200',
        image: caprese
    },
    {
        id: 6,
        title: 'SEAFOOD RISOTTO',
        description: 'Creamy risotto with mixed seafood',
        price: 'Rs 2800',
        image: steak
    },
    {
        id: 7,
        title: 'VEGAN BOWL',
        description: 'Quinoa, roasted vegetables, tahini dressing',
        price: 'Rs 2200',
        image: platter
    },
    {
        id: 8,
        title: 'CHOCOLATE SOUFFLÉ',
        description: 'Warm chocolate dessert with vanilla ice cream',
        price: 'Rs 1800',
        image: caprese
    },
    {
        id: 9,
        title: 'SUSHI PLATTER',
        description: 'Assorted sushi with wasabi and ginger',
        price: 'Rs 3500',
        image: steak
    },
    {
        id: 10,
        title: 'ARTISAN BURGER',
        description: 'Angus beef, aged cheddar, brioche bun',
        price: 'Rs 2700',
        image: platter
    }
];

const MenuSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Determine how many items to show based on screen size
    useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth >= 1280) {
                setItemsPerView(4); // xl screens - show 4 items
            } else if (window.innerWidth >= 1024) {
                setItemsPerView(3); // lg screens - show 3 items
            } else if (window.innerWidth >= 768) {
                setItemsPerView(2); // md screens - show 2 items
            } else {
                setItemsPerView(1); // sm screens - show 1 item
            }
        };

        updateItemsPerView();
        window.addEventListener('resize', updateItemsPerView);
        
        return () => window.removeEventListener('resize', updateItemsPerView);
    }, []);

    // Auto slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isTransitioning) {
                nextSlide();
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [currentSlide, itemsPerView, isTransitioning]);

    const nextSlide = () => {
        setIsTransitioning(true);
        setCurrentSlide((prev) => 
            prev >= menuItems.length - itemsPerView ? 0 : prev + 1
        );
        setTimeout(() => setIsTransitioning(false), 500);
    };

    const prevSlide = () => {
        setIsTransitioning(true);
        setCurrentSlide((prev) => 
            prev <= 0 ? menuItems.length - itemsPerView : prev - 1
        );
        setTimeout(() => setIsTransitioning(false), 500);
    };

    const goToSlide = (index) => {
        if (!isTransitioning && index >= 0 && index <= menuItems.length - itemsPerView) {
            setIsTransitioning(true);
            setCurrentSlide(index);
            setTimeout(() => setIsTransitioning(false), 500);
        }
    };

    // Calculate total number of slides
    const totalSlides = Math.max(1, menuItems.length - itemsPerView + 1);

    return (
        <section className="bg-white py-16 md:py-20 lg:py-24" id="menu">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-3xl lg:text-4xl font-light tracking-wider text-gray-800 mb-4">
                        OUR MENU
                    </h2>
                    <p className="text-gray-600 font-serif max-w-2xl mx-auto">
                        Discover our carefully crafted dishes made with the finest ingredients
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        disabled={isTransitioning}
                        className={`
                            absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4
                            bg-white rounded-full w-10 h-10 shadow-lg
                            flex items-center justify-center
                            transition-all duration-300
                            z-10
                            ${isTransitioning 
                                ? 'opacity-50 cursor-not-allowed' 
                                : 'hover:bg-gray-50 hover:scale-110 cursor-pointer'
                            }
                        `}
                        aria-label="Previous slide"
                    >
                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        disabled={isTransitioning}
                        className={`
                            absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4
                            bg-white rounded-full w-10 h-10 shadow-lg
                            flex items-center justify-center
                            transition-all duration-300
                            z-10
                            ${isTransitioning 
                                ? 'opacity-50 cursor-not-allowed' 
                                : 'hover:bg-gray-50 hover:scale-110 cursor-pointer'
                            }
                        `}
                        aria-label="Next slide"
                    >
                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Slideshow Container */}
                    <div className="overflow-hidden">
                        <div 
                            className={`
                                flex transition-transform duration-500 ease-in-out
                                gap-4 sm:gap-6 lg:gap-8
                            `}
                            style={{
                                transform: `translateX(-${currentSlide * (100 / itemsPerView)}%)`
                            }}
                        >
                            {menuItems.map((item) => (
                                <div 
                                    key={item.id}
                                    className={`
                                        flex-shrink-0
                                        bg-white border border-gray-200 rounded-lg overflow-hidden 
                                        flex flex-col shadow-md
                                        transition-all duration-500 ease-in-out
                                        hover:-translate-y-2 hover:shadow-xl
                                        group cursor-pointer
                                        w-full
                                    `}
                                    style={{
                                        width: `${100 / itemsPerView}%`,
                                        minWidth: `${100 / itemsPerView}%`
                                    }}
                                >
                                    {/* Image Container */}
                                    <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
                                        <img 
                                            src={item.image} 
                                            alt={item.title}
                                            className="
                                                w-full h-full object-cover
                                                transition-transform duration-700 ease-in-out
                                                group-hover:scale-110
                                            "
                                        />
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
                                        <h3 className="
                                            text-base sm:text-lg font-normal tracking-wider 
                                            mb-2 sm:mb-3 text-gray-800 uppercase
                                            text-center line-clamp-2
                                        ">
                                            {item.title}
                                        </h3>
                                        
                                        <p className="
                                            text-gray-600 text-sm sm:text-base leading-relaxed 
                                            mb-3 sm:mb-4 lg:mb-6 font-serif text-center
                                            flex-grow line-clamp-2
                                        ">
                                            {item.description}
                                        </p>
                                        
                                        <div className="
                                            text-base sm:text-lg font-bold text-amber-600 
                                            font-serif text-center
                                        ">
                                            {item.price}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center space-x-2 sm:space-x-3 mt-8 lg:mt-12">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            disabled={isTransitioning}
                            className={`
                                w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer
                                transition-all duration-300
                                ${index === currentSlide 
                                    ? 'bg-gray-800 scale-125' 
                                    : 'bg-gray-300 hover:bg-gray-400'
                                }
                                ${isTransitioning ? 'cursor-not-allowed' : ''}
                            `}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Slide Counter */}
                <div className="text-center mt-4">
                    <span className="text-sm text-gray-500">
                        {currentSlide + 1} / {totalSlides}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default MenuSection;