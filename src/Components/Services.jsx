import { Eye, Zap, ShieldAlert, HeartPulse, ScanSearch, Baby } from 'lucide-react';
import { SERVICES } from '../data/siteData';
import SectionHeader from './ui/SectionHeader';

const serviceIcons = {
    Eye: <Eye className="w-6 h-6 text-cyan-700" aria-hidden="true" />,
    Zap: <Zap className="w-6 h-6 text-cyan-700" aria-hidden="true" />,
    ScanSearch: <ScanSearch className="w-6 h-6 text-cyan-700" aria-hidden="true" />,
    ShieldAlert: <ShieldAlert className="w-6 h-6 text-cyan-700" aria-hidden="true" />,
    HeartPulse: <HeartPulse className="w-6 h-6 text-cyan-700" aria-hidden="true" />,
    Baby: <Baby className="w-6 h-6 text-cyan-700" aria-hidden="true" />
};

export default function Services() {
    return (
        <section id="services" className="py-2.5 sm:py-8 md:py-10 lg:py-12 pl-2 pr-3 sm:pl-4 sm:pr-6 lg:pl-5 lg:pr-8 bg-white max-w-7xl mx-auto scroll-mt-16">
            {/* Section Header */}
            <div className="mb-3.5 sm:mb-8 md:mb-10">
                <SectionHeader
                    label="OUR SERVICES"
                    title="Comprehensive Eye Care Services"
                    description="From routine check-ups to advanced treatments, we offer a full range of eye care services for all ages."
                />
            </div>

            {/* Service Cards Grid: 1 by 1 on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                {SERVICES.map((service) => (
                    <div
                        key={service.id}
                        className="bg-white p-3.5 sm:p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
                    >
                        {/* Icon with background */}
                        <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center mb-4 border border-cyan-100">
                            {serviceIcons[service.iconName]}
                        </div>

                        {/* Content */}
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            {service.description}
                        </p>

                        {/* Arrow Link */}
                        <a
                            href="#contact"
                            aria-label={`Learn more about ${service.title}`}
                            className="text-cyan-700 font-semibold text-sm flex items-center hover:text-cyan-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
                        >
                            Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
