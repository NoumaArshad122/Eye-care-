import React from 'react';
import { Check } from 'lucide-react';
import doctorPatientImg from '../assets/doctor-image.jpg';

export default function WhyChooseUs() {
    const benefitsList = [
        "State-of-the-art technology",
        "Experienced and specialized doctors",
        "Comfortable and modern facilities",
        "Affordable and transparent pricing"
    ];

    return (
        <section
            id="why-choose-us"
            className="relative w-full bg-[#f0f7fb] overflow-hidden scroll-mt-16"
        >

            <div className="hidden md:block absolute inset-y-0 right-0 w-[52%] lg:w-[55%] [clip-path:polygon(14%_0,100%_0,100%_100%,0%_100%)] overflow-hidden">
                <img
                    src={doctorPatientImg}
                    alt="Doctor checking patient"
                    className="w-full h-full object-cover object-right"
                />

            </div>

            {/* Mobile Image (Clean photo without button for mobile screens) */}
            <div className="block md:hidden relative w-full h-[240px] sm:h-[300px] overflow-hidden">
                <img
                    src={doctorPatientImg}
                    alt="Doctor checking patient"
                    className="w-full h-full object-cover object-right"
                />
            </div>


            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                <div className="w-full md:w-[48%] lg:w-[45%] space-y-5">
                    <span className="text-xs md:text-sm tracking-widest uppercase text-cyan-600 font-bold">
                        WHY CHOOSE US
                    </span>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                        Why Patients <br /> Choose Eye Hospital.com
                    </h2>


                    <ul className="space-y-3.5 pt-1">
                        {benefitsList.map((item, index) => (
                            <li key={index} className="flex items-center space-x-3">
                                <div className="w-5 h-5 rounded-full bg-cyan-500 flex items-center justify-center shrink-0">
                                    <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                                </div>
                                <span className="text-gray-700 text-sm md:text-base font-medium">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <div className="pt-2">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-full bg-[#0b2b4c] hover:bg-[#123e6b] text-white px-7 py-2.5 text-sm font-semibold shadow-md transition"
                        >
                            <span>Our Facilities</span>
                            <span>→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
