import { Eye, Zap, ScanEye, ShieldPlus } from 'lucide-react';
import techImage from '../assets/technology.webp';

const techCards = [
    {
        id: "oct-scan",
        icon: <Eye className="w-6 h-6 stroke-[1.8]" aria-hidden="true" />,
        title: "OCT Scan",
        desc: "High-resolution imaging"
    },
    {
        id: "femtosecond-laser",
        icon: <Zap className="w-6 h-6 stroke-[1.8]" aria-hidden="true" />,
        title: "Femtosecond Laser",
        desc: "Precision & safety"
    },
    {
        id: "digital-eye-testing",
        icon: <ScanEye className="w-6 h-6 stroke-[1.8]" aria-hidden="true" />,
        title: "Digital Eye Testing",
        desc: "Fast & accurate"
    },
    {
        id: "modern-operation-theater",
        icon: <ShieldPlus className="w-6 h-6 stroke-[1.8]" aria-hidden="true" />,
        title: "Modern Operation Theater",
        desc: "World-class facilities"
    }
];

export default function AdvancedTechnology() {
    return (
        <section id="technology" className="relative w-full bg-white py-6 sm:py-8 md:py-10 lg:py-14 overflow-hidden scroll-mt-16">
            {/* Top Area: Text & Full-Bleed Right Image */}
            <div className="relative w-full">
                {/* Desktop Full-Bleed Image: touches right edge of screen with zero margin */}
                <div className="hidden lg:block absolute inset-y-0 right-0 w-[52%] lg:w-[54%] xl:w-[55%] overflow-hidden [clip-path:polygon(14%_0,100%_0,100%_100%,0%_100%)]">
                    <img
                        src={techImage}
                        alt="Advanced Eye Technology Equipment"
                        loading="lazy"
                        decoding="async"
                        width={1000}
                        height={600}
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                {/* Left Content Container (matches max-w-7xl alignment) */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Mobile & Tablet Image: At top for mobile */}
                    <div className="block lg:hidden mb-5 sm:mb-6 w-full h-[220px] sm:h-[320px] md:h-[380px] overflow-hidden shadow-md max-w-3xl mx-auto">
                        <img
                            src={techImage}
                            alt="Advanced Eye Technology Equipment"
                            loading="lazy"
                            decoding="async"
                            width={1000}
                            height={600}
                            className="w-full h-full object-cover object-center"
                        />
                    </div>

                    <div className="w-full lg:w-[45%] xl:w-[43%] min-h-0 lg:min-h-[420px] flex flex-col justify-center space-y-3 sm:space-y-4 md:space-y-5 py-2 sm:py-4">
                        <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-cyan-700 block">
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
                                className="inline-flex items-center gap-1.5 rounded-full bg-[#002b40] hover:bg-[#003854] text-white px-5 py-3 sm:px-6 sm:py-3 md:px-7 md:py-3.5 text-sm sm:text-sm md:text-base font-semibold shadow transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                            >
                                <span>Explore Our Technology</span>
                                <span className="text-sm sm:text-base font-normal">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom 4 Feature Items */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-10">
                    {techCards.map((card) => (
                        <div key={card.id} className="flex flex-col items-start">
                            <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-700 mb-3 border border-cyan-100/50">
                                {card.icon}
                            </div>
                            <h3 className="font-bold text-[#002b40] text-sm sm:text-base leading-snug">
                                {card.title}
                            </h3>
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
