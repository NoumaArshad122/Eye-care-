import React from 'react';
import { ArrowRight } from 'lucide-react';
import drAhmadImg from '../assets/DrAhmadrehman.jpeg';
import drSaraImg from '../assets/brimage.jpeg';
import drNazmulImg from '../assets/Dr.nazmulhussain.jpeg';
import drFatimaImg from '../assets/Dr fatima.jpeg';

export default function Doctors() {
    const doctorsData = [
        {
            name: "Dr. Ahmed Rahman",
            specialty: "Ophthalmologist",
            image: drAhmadImg
        },
        {
            name: "Dr. Sara Khan",
            specialty: "Cataract Specialist",
            image: drSaraImg
        },
        {
            name: "Dr. Nazmul Hasan",
            specialty: "Retina Specialist",
            image: drNazmulImg
        },
        {
            name: "Dr. Fatema Akter",
            specialty: "Pediatric Ophthalmologist",
            image: drFatimaImg
        }
    ];

    return (
        <section id="doctors" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white max-w-7xl mx-auto scroll-mt-16">

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-4">
                <div>
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
                        Our Expert Doctors
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base mt-2 max-w-xl leading-relaxed">
                        Meet our team of highly qualified and experienced eye specialists who are dedicated to your vision and eye health.
                    </p>
                </div>

                <div>
                    <a
                        href="#contact"
                        className="inline-flex items-center text-sm font-semibold text-cyan-600 hover:text-cyan-700 transition-colors group"
                    >
                        <span>View All Doctors</span>
                        <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {doctorsData.map((doctor, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
                    >

                        <div className="w-full h-64 bg-slate-50 overflow-hidden">
                            <img
                                src={doctor.image}
                                alt={doctor.name}
                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>


                        <div className="p-5 flex items-end justify-between">
                            <div>
                                <h3 className="font-bold text-gray-900 text-base md:text-lg leading-snug">
                                    {doctor.name}
                                </h3>
                                <p className="text-xs md:text-sm text-gray-500 mt-1">
                                    {doctor.specialty}
                                </p>
                            </div>


                            <a
                                href="#contact"
                                className="w-8 h-8 rounded-full flex items-center justify-center text-cyan-600 hover:bg-cyan-50 transition-colors shrink-0"
                                aria-label={`Book appointment with ${doctor.name}`}
                            >
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
