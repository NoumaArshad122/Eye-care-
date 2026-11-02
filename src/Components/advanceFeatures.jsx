import React from 'react';
import { Eye, Cpu, Scan, ShieldCheck } from 'lucide-react';
import techImage from '../assets/techimg.jpeg';

export default function AdvancedTechnology() {
    const techCards = [
        {
            icon: <Eye className="w-6 h-6 text-teal-600" />,
            title: "OCT Scan",
            desc: "High-resolution imaging"
        },
        {
            icon: <Cpu className="w-6 h-6 text-teal-600" />,
            title: "Femtosecond Laser",
            desc: "Precision & safety"
        },
        {
            icon: <Scan className="w-6 h-6 text-teal-600" />,
            title: "Digital Eye Testing",
            desc: "Fast & accurate"
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-teal-600" />,
            title: "Modern Operation Theater",
            desc: "World-class facilities"
        }
    ];

    return (
        <section id="technology" className="w-full bg-teal-500 py-10 md:py-14 text-white scroll-mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Grid: Content and Image */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

                    {/* Left Side: Text Details */}
                    <div className="space-y-4 md:space-y-5">
                        <span className="text-xs md:text-sm tracking-widest uppercase font-bold text-teal-100 bg-teal-600/70 px-3.5 py-1 rounded-full inline-block">
                            OUR TECHNOLOGY
                        </span>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                            Advanced Technology <br /> for Better Results
                        </h2>

                        <p className="text-teal-50 text-sm md:text-base leading-relaxed max-w-lg">
                            We use the latest diagnostic and surgical technology to provide accurate diagnosis and effective treatment with highest safety standards.
                        </p>

                        <div className="pt-2">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-teal-50 text-teal-900 px-6 py-2.5 text-sm font-bold shadow-md transition-all duration-200"
                            >
                                <span>Explore Our Technology</span>
                                <span>→</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Technology Image */}
                    <div className="relative">
                        <div
                            className="w-full h-[280px] sm:h-[340px] md:h-[380px] overflow-hidden shadow-2xl rounded-2xl md:rounded-none md:[clip-path:polygon(14%_0,100%_0,100%_100%,0%_100%)]"
                        >
                            <img
                                src={techImage}
                                alt="Advanced Eye Technology"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>

                {/* Bottom 4 Tech Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 pt-8 border-t border-teal-400/40">
                    {techCards.map((card, index) => (
                        <div
                            key={index}
                            className="flex items-start space-x-3.5 p-4 rounded-xl bg-white text-gray-900 shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                        >
                            <div className="w-11 h-11 rounded-full bg-teal-50 flex items-center justify-center shrink-0 border border-teal-100">
                                {card.icon}
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm md:text-base">{card.title}</h4>
                                <p className="text-gray-500 text-xs mt-0.5">{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
