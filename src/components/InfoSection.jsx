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
                            Fresh mozzarella, tomatoes, basil. Our journey began with a passion for simple,
                            authentic flavors. We believe in the power of fresh ingredients to create
                            unforgettable dining experiences.
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
                            Fresh mozzarella, tomatoes, basil. Located in the heart of the city,
                            Gourmet Haven offers a sanctuary for food lovers. Our chefs bring years
                            of culinary expertise to your table.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;