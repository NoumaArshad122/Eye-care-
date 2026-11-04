import Reception from "../assets/reception.webp";
import Button from "./ui/Button";

export default function About() {
    return (
        <section id="about" className="py-2.5 sm:py-8 md:py-10 lg:py-12 pl-2 pr-3 sm:pl-4 sm:pr-6 lg:pl-5 lg:pr-8 bg-white max-w-7xl mx-auto scroll-mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 md:gap-12 items-center">

                <div className="w-full h-[200px] sm:h-[280px] md:h-[360px] lg:h-[420px] overflow-hidden shadow-sm">
                    <img
                        src={Reception}
                        alt="Hospital Reception"
                        loading="lazy"
                        decoding="async"
                        width={800}
                        height={450}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="space-y-3 sm:space-y-4 lg:space-y-6">

                    <span className="text-xs md:text-sm tracking-widest uppercase text-cyan-700 font-bold">
                        ABOUT US
                    </span>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                        World-Class Eye Care <br className="hidden sm:block" /> Under One Roof
                    </h2>

                    <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                        EyeHospital.com is a modern eye care center dedicated to providing comprehensive and compassionate care. We combine advanced technology with expert medical knowledge to ensure the best possible outcomes for your vision and eye health.
                    </p>

                    <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 pt-3 sm:pt-4 border-t border-gray-100">
                        <div>
                            <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900">10+</h3>
                            <p className="text-[10px] sm:text-xs lg:text-sm text-gray-500 mt-0.5">Years Excellence</p>
                        </div>
                        <div>
                            <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900">50K+</h3>
                            <p className="text-[10px] sm:text-xs lg:text-sm text-gray-500 mt-0.5">Happy Patients</p>
                        </div>
                        <div>
                            <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900">15+</h3>
                            <p className="text-[10px] sm:text-xs lg:text-sm text-gray-500 mt-0.5">Specialists</p>
                        </div>
                    </div>

                    <div className="pt-1.5 sm:pt-2">
                        <Button href="#why-choose-us" variant="primary">
                            <span>Know More About Us</span>
                            <span className="ml-1.5" aria-hidden="true">→</span>
                        </Button>
                    </div>

                </div>

            </div>
        </section>
    );
}
