import React, { useState, useEffect } from 'react';
import caprese from '../assets/caprese.png';
import steak from '../assets/steak.png';
import platter from '../assets/platter.png';

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
    }
];

const MenuSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(1);

    // Determine how many items to show based on screen size
    useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerView(4); // lg screens - show 4 items
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
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentSlide, itemsPerView]);

    const nextSlide = () => {
        setCurrentSlide((prev) => 
            prev >= menuItems.length - itemsPerView ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => 
            prev <= 0 ? menuItems.length - itemsPerView : prev - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Calculate visible items based on current slide and items per view
    const getVisibleItems = () => {
        const visibleItems = [];
        for (let i = 0; i < itemsPerView; i++) {
            const itemIndex = (currentSlide + i) % menuItems.length;
            visibleItems.push(menuItems[itemIndex]);
        }
        return visibleItems;
    };

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
                        className="
                            absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4
                            bg-white rounded-full w-10 h-10 shadow-lg
                            flex items-center justify-center
                            hover:bg-gray-50 transition-colors duration-300
                            z-10
                        "
                        aria-label="Previous slide"
                    >
                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="
                            absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4
                            bg-white rounded-full w-10 h-10 shadow-lg
                            flex items-center justify-center
                            hover:bg-gray-50 transition-colors duration-300
                            z-10
                        "
                        aria-label="Next slide"
                    >
                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Slideshow Container */}
                    <div className="overflow-hidden">
                        <div 
                            className="
                                flex transition-transform duration-500 ease-in-out
                                gap-6 lg:gap-8
                            "
                            style={{
                                transform: `translateX(-${currentSlide * (100 / itemsPerView)}%)`
                            }}
                        >
                            {menuItems.map((item) => (
                                <div 
                                    key={item.id}
                                    className="
                                        flex-shrink-0
                                        bg-gray-200 overflow-hidden flex flex-col
                                        transition-all duration-300 ease-in-out
                                        hover:-translate-y-2 hover:shadow-xl
                                        group cursor-pointer
                                        w-full
                                    "
                                    style={{
                                        width: `${100 / itemsPerView}%`
                                    }}
                                >
                                    {/* Image Container */}
                                    <div className="h-64 overflow-hidden">
                                        <img 
                                            src={item.image} 
                                            alt={item.title}
                                            className="
                                                w-full h-full object-cover
                                                transition-transform duration-500 ease-in-out
                                                group-hover:scale-110
                                            "
                                        />
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="p-5 lg:p-6 flex flex-col flex-grow">
                                        <h3 className="
                                            text-lg font-normal tracking-wider 
                                            mb-3 text-gray-800 uppercase
                                            text-center
                                        ">
                                            {item.title}
                                        </h3>
                                        
                                        <p className="
                                            text-gray-700 text-base leading-relaxed 
                                            mb-4 lg:mb-6 font-serif text-center
                                            flex-grow
                                        ">
                                            {item.description}
                                        </p>
                                        
                                        <div className="
                                            text-lg font-bold text-amber-600 
                                            font-serif text-right
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
                <div className="flex justify-center space-x-3 mt-8 lg:mt-12">
                    {Array.from({ length: menuItems.length - itemsPerView + 1 }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`
                                w-3 h-3 rounded-full cursor-pointer
                                transition-colors duration-300
                                ${index === currentSlide 
                                    ? 'bg-gray-600' 
                                    : 'bg-gray-300 hover:bg-gray-400'
                                }
                            `}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MenuSection;