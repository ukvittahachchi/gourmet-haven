import React from 'react';

const InfoSection = () => {
    return (
        <section className="bg-gray-200 py-16 md:py-20 lg:py-24" id="about">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {/* Story Card */}
                    <div className="
                        bg-white p-10 lg:p-12 text-center 
                        shadow-lg hover:shadow-xl transition-all duration-300 
                        transform hover:-translate-y-2
                        flex flex-col justify-start items-center
                        h-96 lg:h-[400px]
                    ">
                        <h3 className="
                            text-xl lg:text-2xl font-normal tracking-widest 
                            mb-6 lg:mb-8 text-gray-800 uppercase
                        ">
                            OUR STORY
                        </h3>
                        <p className="
                            text-base lg:text-lg text-gray-600 leading-relaxed lg:leading-loose
                            max-w-md
                        ">
                            Gourmet Heaven was born from a love for real Italian cooking.
We blend fresh ingredients, timeless recipes, and warm hospitality to create dishes that feel like home.
From rich pastas to handcrafted pizzas, every bite brings you closer to the heart of Italy.
                        </p>
                    </div>

                    {/* About Us Card */}
                    <div className="
                        bg-white p-10 lg:p-12 text-center 
                        shadow-lg hover:shadow-xl transition-all duration-300 
                        transform hover:-translate-y-2
                        flex flex-col justify-start items-center
                        h-96 lg:h-[400px]
                    ">
                        <h3 className="
                            text-xl lg:text-2xl font-normal tracking-widest 
                            mb-6 lg:mb-8 text-gray-800 uppercase
                        ">
                            ABOUT US
                        </h3>
                        <p className="
                            text-base lg:text-lg text-gray-600 leading-relaxed lg:leading-loose
                            max-w-md
                        ">
                            Gourmet Heaven is a place where authentic Italian flavors come alive.
We craft every dish with fresh ingredients, traditional recipes, and a passion for warm, homemade cooking.
From comforting pastas to crispy wood-fired pizzas, we bring the true taste of Italy to your table.
At Gourmet Heaven, every meal is a moment to enjoy, relax, and feel at home.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;