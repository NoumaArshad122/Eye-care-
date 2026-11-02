import React from "react";
import Reception from "../assets/reception.webp";

export default function Aboutus() {
    return (
        <section id="about" className="py-8 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8 bg-white max-w-7xl mx-auto scroll-mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">

                <div className="relative">
                    <div className="w-full h-[240px] sm:h-[320px] md:h-[420px] overflow-hidden rounded-2xl md:rounded-none shadow-md">
                        <img
                            src={Reception}
                            alt="Hospital Reception"
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="space-y-4 sm:space-y-6">

                    <span className="text-xs md:text-sm tracking-widest uppercase text-cyan-600 font-bold">
                        ABOUT US
                    </span>

                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                        World-Class Eye Care <br /> Under One Roof
                    </h2>

                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        EyeHospital.com is a modern eye care center dedicated to providing comprehensive and compassionate care. We combine advanced technology with expert medical knowledge to ensure the best possible outcomes for your vision and eye health.
                    </p>

                    <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-gray-100">
                        <div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">10+</h3>
                            <p className="text-[11px] sm:text-xs md:text-sm text-gray-500 mt-1">Years Excellence</p>
                        </div>
                        <div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">50K+</h3>
                            <p className="text-[11px] sm:text-xs md:text-sm text-gray-500 mt-1">Happy Patients</p>
                        </div>
                        <div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">15+</h3>
                            <p className="text-[11px] sm:text-xs md:text-sm text-gray-500 mt-1">Specialists</p>
                        </div>
                    </div>

                    <div className="pt-2">
                        <button className="bg-[#00c6b7] hover:bg-[#00b5a8] text-white font-semibold px-4.5 py-2 sm:px-6 sm:py-2.5 md:px-7 md:py-3 text-xs sm:text-sm md:text-base rounded-full shadow-md transition-all inline-flex items-center gap-1.5 cursor-pointer">
                            <span>Know More About Us</span>
                            <span>→</span>
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
}
