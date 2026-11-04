import { ArrowRight } from 'lucide-react';
import { DOCTORS } from '../data/siteData';
import SectionHeader from './ui/SectionHeader';

export default function Doctors() {
    return (
        <section id="doctors" className="py-2.5 sm:py-8 md:py-10 lg:py-12 pl-2 pr-3 sm:pl-4 sm:pr-6 lg:pl-5 lg:pr-8 bg-white max-w-7xl mx-auto scroll-mt-16">

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-3.5 sm:mb-8 md:mb-10 gap-3 sm:gap-4">
                <SectionHeader
                    title="Our Expert Doctors"
                    description="Meet our team of highly qualified and experienced eye specialists who are dedicated to your vision and eye health."
                />

                <a
                    href="#appointment"
                    className="inline-flex items-center text-xs sm:text-sm font-semibold text-cyan-700 hover:text-cyan-800 transition-colors group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
                >
                    <span>View All Doctors</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </a>
            </div>

            {/* Doctors Cards: 1 by 1 on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                {DOCTORS.map((doctor) => (
                    <div
                        key={doctor.id}
                        className="bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
                    >
                        <div className="w-full h-52 sm:h-64 bg-slate-50 overflow-hidden">
                            <img
                                src={doctor.image}
                                alt={doctor.name}
                                loading="lazy"
                                decoding="async"
                                width={400}
                                height={400}
                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        <div className="p-3.5 sm:p-5 flex items-end justify-between">
                            <div>
                                <h3 className="font-bold text-gray-900 text-base md:text-lg leading-snug">
                                    {doctor.name}
                                </h3>
                                <p className="text-xs md:text-sm text-gray-500 mt-1">
                                    {doctor.specialty}
                                </p>
                            </div>

                            <a
                                href="#appointment"
                                className="w-8 h-8 rounded-full flex items-center justify-center text-cyan-700 hover:bg-cyan-50 transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                                aria-label={`Book appointment with ${doctor.name}`}
                            >
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
