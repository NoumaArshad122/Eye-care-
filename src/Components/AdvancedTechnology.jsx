import { Eye, Zap, ScanEye, ShieldPlus } from 'lucide-react';
import techImage from '../assets/technology.webp';
import { TECH_CARDS } from '../data/siteData';
import Button from './ui/Button';

const techIcons = {
    Eye: <Eye className="w-6 h-6 stroke-[1.8]" aria-hidden="true" />,
    Zap: <Zap className="w-6 h-6 stroke-[1.8]" aria-hidden="true" />,
    ScanEye: <ScanEye className="w-6 h-6 stroke-[1.8]" aria-hidden="true" />,
    ShieldPlus: <ShieldPlus className="w-6 h-6 stroke-[1.8]" aria-hidden="true" />
};

export default function AdvancedTechnology() {
    return (
        <section id="technology" className="relative w-full bg-white py-6 sm:py-8 md:py-10 lg:py-14 overflow-hidden scroll-mt-16">
            {/* Single responsive image: in-flow on mobile, absolute angled on desktop */}
            <div className="px-4 sm:px-6 lg:px-0 max-w-3xl mx-auto lg:max-w-none lg:mx-0 lg:absolute lg:inset-y-0 lg:right-0 lg:w-[52%] xl:w-[54%] lg:h-full lg:[clip-path:polygon(14%_0,100%_0,100%_100%,0%_100%)] mb-5 sm:mb-6 lg:mb-0">
                <div className="w-full h-[220px] sm:h-[320px] md:h-[380px] lg:h-full overflow-hidden shadow-md lg:shadow-none">
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
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="w-full lg:w-[45%] xl:w-[43%] lg:min-h-[420px] flex flex-col justify-center space-y-3 sm:space-y-4 md:space-y-5 py-2 sm:py-4">
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
                        <Button href="#contact" variant="dark">
                            <span>Explore Our Technology</span>
                            <span className="ml-1.5" aria-hidden="true">→</span>
                        </Button>
                    </div>
                </div>

                {/* Bottom 4 Feature Items */}
                <div className="mt-8 sm:mt-10 md:mt-12 pt-6 border-t border-gray-100">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-10">
                        {TECH_CARDS.map((card) => (
                            <div key={card.id} className="flex flex-col items-start">
                                <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-700 mb-3 border border-cyan-100/50">
                                    {techIcons[card.iconName]}
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
            </div>
        </section>
    );
}
