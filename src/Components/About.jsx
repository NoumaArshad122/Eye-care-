import Reception from "../assets/reception.webp";
import Button from "./ui/Button";

export default function About() {
    return (
        <section id="about" className="py-5 sm:py-8 md:py-10 lg:py-12 bg-white w-full scroll-mt-16">
            <div className="w-full max-w-[95%] xl:max-w-[1720px] mx-auto px-0 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 md:gap-12 items-center">

                    {/* Reception Image: full-width on mobile (0 side m and p), increased height */}
                    <div className="w-full h-[250px] sm:h-[300px] md:h-[380px] lg:h-[440px] xl:h-[480px] overflow-hidden shadow-sm">
                        <img
                            src={Reception}
                            alt="Hospital Reception"
                            loading="lazy"
                            decoding="async"
                            width={1200}
                            height={537}
                            className="w-full h-full object-cover object-center"
                        />
                    </div>

                    {/* Content: Has px-4 on mobile so text is safely padded */}
                    <div className="px-4 md:px-0 space-y-3 sm:space-y-4 lg:space-y-6">

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
        </div>
    </section>
);
}
