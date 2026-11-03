import React from 'react';
import { Eye, Zap, ShieldAlert, HeartPulse, ScanSearch, Baby } from 'lucide-react';

export default function Services() {
    const servicesData = [
        {
            icon: <Eye className="w-6 h-6 text-cyan-600" />,
            title: "Eye Checkup",
            description: "Regular checkups for better vision and eye health."
        },
        {
            icon: <Zap className="w-6 h-6 text-cyan-600" />,
            title: "Cataract Surgery",
            description: "Safe & advanced cataract surgery with quick recovery."
        },
        {
            icon: <ScanSearch className="w-6 h-6 text-cyan-600" />,
            title: "LASIK Surgery",
            description: "Freedom from glasses and contact lenses."
        },
        {
            icon: <ShieldAlert className="w-6 h-6 text-cyan-600" />,
            title: "Glaucoma Treatment",
            description: "Advanced care for long-term vision health."
        },
        {
            icon: <HeartPulse className="w-6 h-6 text-cyan-600" />,
            title: "Retina Care",
            description: "Specialized treatment for retinal disorders."
        },
        {
            icon: <Baby className="w-6 h-6 text-cyan-600" />,
            title: "Children's Eye Care",
            description: "Gentle care for your child's bright future."
        }
    ];

    return (
        <section id="services" className="py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-white max-w-7xl mx-auto scroll-mt-16">
            {/* Section Header */}
            <div className="mb-6 sm:mb-8 md:mb-10">
                <span className="text-xs md:text-sm tracking-widest uppercase text-cyan-600 font-bold">
                    OUR SERVICES
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-1.5 leading-tight">
                    Comprehensive Eye Care Services
                </h2>
                <p className="text-gray-600 mt-2 max-w-xl text-sm md:text-base leading-relaxed">
                    From routine check-ups to advanced treatments, we offer a full range of eye care services for all ages.
                </p>
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {servicesData.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white p-5 sm:p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
                    >
                        {/* Icon with background */}
                        <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center mb-4 border border-cyan-100">
                            {service.icon}
                        </div>

                        {/* Content */}
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            {service.description}
                        </p>

                        {/* Arrow Link */}
                        <a href="#contact" className="text-cyan-500 font-semibold text-sm flex items-center group-hover:text-cyan-600 transition-colors">
                            Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
