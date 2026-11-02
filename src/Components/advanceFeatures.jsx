import React from 'react';
import { Eye, Laser, ScanEye, ShieldPlus } from 'lucide-react';
import techImage from '../assets/techimg.jpeg';

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
        <section id="technology" className="w-full bg-white py-12 md:py-16 scroll-mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Grid: Content & Diagonal Image */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

                    {/* Left Column: Heading & Description */}
                    <div className="lg:col-span-5 space-y-4 md:space-y-5">
                        <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-cyan-600 block">
                            OUR TECHNOLOGY
                        </span>

                        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#002b40] leading-[1.15] tracking-tight">
                            Advanced Technology <br />
                            for Better Results
                        </h2>

                        <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-lg">
                            We use the latest diagnostic and surgical technology to provide accurate diagnosis and effective treatment with highest safety standards.
                        </p>

                        <div className="pt-2">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2.5 rounded-full bg-[#002b40] hover:bg-[#003854] text-white px-7 py-3 text-sm font-semibold shadow transition-all duration-200"
                            >
                                <span>Explore Our Technology</span>
                                <span className="text-base font-normal">→</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Slanted Technology Image */}
                    <div className="lg:col-span-7">
                        <div className="relative w-full h-[280px] sm:h-[340px] md:h-[390px] lg:h-[420px] overflow-hidden rounded-2xl lg:rounded-none lg:[clip-path:polygon(16%_0,100%_0,100%_100%,0%_100%)]">
                            <img
                                src={techImage}
                                alt="Advanced Eye Technology Equipment"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>

                </div>

                {/* Bottom 4 Feature Items */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mt-12 md:mt-16">
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
