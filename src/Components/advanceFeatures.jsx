import React from 'react';
import { Eye, Laser, ScanEye, ShieldPlus } from 'lucide-react';
import techImage from '../assets/techimg.webp';

export default function AdvancedTechnology() {
    const techCards = [
        {
            icon: <Eye className="w-6 h-6 stroke-[1.8]" />,
            title: "OCT Scan",
            desc: "High-resolution imaging"
        },
        {
            icon: <Laser className="w-6 h-6 stroke-[1.8]" />,
            title: "Femtosecond Laser",
            desc: "Precision & safety"
        },
        {
            icon: <ScanEye className="w-6 h-6 stroke-[1.8]" />,
            title: "Digital Eye Testing",
            desc: "Fast & accurate"
        },
        {
            icon: <ShieldPlus className="w-6 h-6 stroke-[1.8]" />,
            title: "Modern Operation Theater",
            desc: "World-class facilities"
        }
    ];

    return (
        <section id="gallery" className="relative w-full bg-white py-8 sm:py-12 md:py-16 overflow-hidden scroll-mt-16">
            {/* Top Area: Text & Full-Bleed Right Image */}
            <div className="relative w-full">
                {/* Desktop Full-Bleed Image: touches right edge of screen with zero margin */}
                <div className="hidden lg:block absolute inset-y-0 right-0 w-[52%] lg:w-[54%] xl:w-[55%] overflow-hidden [clip-path:polygon(14%_0,100%_0,100%_100%,0%_100%)]">
                    <img
                        src={techImage}
                        alt="Advanced Eye Technology Equipment"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                {/* Left Content Container (matches max-w-7xl alignment) */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Mobile & Tablet Image: At top for mobile */}
                    <div className="block lg:hidden mb-5 w-full h-[220px] sm:h-[300px] overflow-hidden rounded-2xl shadow-md">
                        <img
                            src={techImage}
                            alt="Advanced Eye Technology Equipment"
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>

                    <div className="w-full lg:w-[45%] xl:w-[43%] min-h-0 lg:min-h-[420px] flex flex-col justify-center space-y-3 sm:space-y-4 md:space-y-5 py-2 sm:py-4">
                        <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-cyan-600 block">
                            OUR TECHNOLOGY
                        </span>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-[#002b40] leading-[1.15] tracking-tight">
                            Advanced Technology <br />
                            for Better Results
                        </h2>

                        <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-lg">
                            We use the latest diagnostic and surgical technology to provide accurate diagnosis and effective treatment with highest safety standards.
                        </p>

                        <div className="pt-2">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-1.5 rounded-full bg-[#002b40] hover:bg-[#003854] text-white px-4.5 py-2 sm:px-6 sm:py-2.5 md:px-7 md:py-3 text-xs sm:text-sm md:text-base font-semibold shadow transition-all duration-200"
                            >
                                <span>Explore Our Technology</span>
                                <span className="text-sm sm:text-base font-normal">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom 4 Feature Items */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10 md:mt-14">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-10">
                    {techCards.map((card, index) => (
                        <div key={index} className="flex flex-col items-start">
                            <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-500 mb-3">
                                {card.icon}
                            </div>
                            <h4 className="font-bold text-[#002b40] text-sm sm:text-base leading-snug">
                                {card.title}
                            </h4>
                            <p className="text-gray-500 text-xs sm:text-sm mt-1 leading-relaxed">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
