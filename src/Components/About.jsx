import React from "react";
import Reception from "../assets/reception.webp";

export default function Aboutus() {
    return (
        <section id="about" className="pt-8 pb-3 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-white max-w-7xl mx-auto scroll-mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">

                <div className="relative">
                    <div className="w-full h-[240px] sm:h-[320px] md:h-[400px] lg:h-[450px] overflow-hidden shadow-md">
                        <img
                            src={Reception}
                            alt="Hospital Reception"
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="space-y-3 sm:space-y-4 md:space-y-4 lg:space-y-6">

                    <span className="text-xs md:text-sm tracking-widest uppercase text-cyan-600 font-bold">
                        ABOUT US
                    </span>

                    <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                        World-Class Eye Care <br className="hidden sm:block" /> Under One Roof
                    </h2>

                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        EyeHospital.com is a modern eye care center dedicated to providing comprehensive and compassionate care. We combine advanced technology with expert medical knowledge to ensure the best possible outcomes for your vision and eye health.
                    </p>

                    <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 pt-3 sm:pt-4 border-t border-gray-100">
                        <div>
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">10+</h3>
                            <p className="text-[11px] sm:text-xs md:text-xs lg:text-sm text-gray-500 mt-0.5">Years Excellence</p>
                        </div>
                        <div>
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">50K+</h3>
                            <p className="text-[11px] sm:text-xs md:text-xs lg:text-sm text-gray-500 mt-0.5">Happy Patients</p>
                        </div>
                        <div>
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">15+</h3>
                            <p className="text-[11px] sm:text-xs md:text-xs lg:text-sm text-gray-500 mt-0.5">Specialists</p>
                        </div>
                    </div>

                    <div className="pt-2">
                        <button className="bg-[#00c6b7] hover:bg-[#00b5a8] text-white font-semibold px-5 py-3 sm:px-6 sm:py-3 md:px-7 md:py-3.5 text-sm sm:text-sm md:text-base rounded-full shadow-md transition-all inline-flex items-center gap-1.5 cursor-pointer">
                            <span>Know More About Us</span>
                            <span>→</span>
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
}
