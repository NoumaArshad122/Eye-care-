import { Check } from 'lucide-react';
import doctorPatientImg from '../assets/doctor-patient.webp';
import { BENEFITS } from '../data/siteData';
import Button from './ui/Button';

export default function WhyChooseUs() {
    return (
        <section
            id="why-choose-us"
            className="relative w-full bg-[#f0f7fb] overflow-hidden scroll-mt-16"
        >
            {/* Desktop / Tablet Full-Bleed Angled Image */}
            <div className="hidden md:block absolute inset-y-0 right-0 w-[52%] lg:w-[55%] [clip-path:polygon(14%_0,100%_0,100%_100%,0%_100%)] overflow-hidden">
                <img
                    src={doctorPatientImg}
                    alt="Doctor checking patient"
                    loading="lazy"
                    decoding="async"
                    width={900}
                    height={600}
                    className="w-full h-full object-cover object-right"
                />
            </div>

            {/* Mobile Image */}
            <div className="block md:hidden relative w-full h-[220px] sm:h-[280px] overflow-hidden">
                <img
                    src={doctorPatientImg}
                    alt="Doctor checking patient"
                    loading="lazy"
                    decoding="async"
                    width={900}
                    height={600}
                    className="w-full h-full object-cover object-right"
                />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 sm:py-8 md:py-10 lg:py-12 relative z-10">
                <div className="w-full md:w-[48%] lg:w-[45%] space-y-3.5 sm:space-y-5">
                    <span className="text-xs md:text-sm tracking-widest uppercase text-cyan-700 font-bold">
                        WHY CHOOSE US
                    </span>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                        Why Patients <br /> Choose Eye Hospital.com
                    </h2>

                    <ul className="space-y-3 sm:space-y-3.5 pt-1">
                        {BENEFITS.map((item) => (
                            <li key={item} className="flex items-center space-x-3">
                                <div className="w-5 h-5 rounded-full bg-[#00897b] flex items-center justify-center shrink-0">
                                    <Check className="w-3.5 h-3.5 text-white stroke-[3]" aria-hidden="true" />
                                </div>
                                <span className="text-gray-700 text-xs sm:text-sm md:text-base font-medium">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <div className="pt-2">
                        <Button href="#contact" variant="dark">
                            <span>Our Facilities</span>
                            <span className="ml-1.5" aria-hidden="true">→</span>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
