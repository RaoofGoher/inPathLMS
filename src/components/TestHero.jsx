import React from 'react';


const HeroSection = ({ bgColor = '#f0f4f8', cardBgColor = '#ffffff', textColor = '#022763', HeroImage }) => {
    return (
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${HeroImage})`,
                }}
            ></div>

            {/* Diagonal Half Rectangle Background */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundColor: bgColor,
                    clipPath: 'polygon(100% 0%, 100% 0, 100% 100%, 80% 100%)',
                }}
            ></div>

            {/* Content */}
            <div className="relative z-10 container ">
                {/* Search Card */}
                <div
                    style={{ backgroundColor: cardBgColor, color: textColor }}
                    className="w-full max-w-md p-6 rounded-lg shadow-lg text-center ml-[50px]"
                >
                    <h1 className="text-4xl font-semibold mb-4 font-lato" style={{ color: textColor }}>
                        Welcome
                    </h1>
                    <h2>Search your course</h2>
                    {/* Search Bar */}
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
