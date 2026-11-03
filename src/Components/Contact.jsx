import { Phone, Mail, MapPin } from 'lucide-react';
import buildingImg from '../assets/hospital-building.webp';
import { CONTACT } from '../data/siteData';

export default function Contact() {
    return (
        <section id="contact" className="relative w-full bg-white py-6 sm:py-8 md:py-10 lg:py-14 overflow-hidden scroll-mt-16">
            {/* Desktop Full-Bleed Hospital Building Image */}
            <div className="hidden lg:block absolute inset-y-0 right-0 w-[52%] lg:w-[54%] xl:w-[55%] overflow-hidden [clip-path:polygon(14%_0,100%_0,100%_100%,0%_100%)]">
                <img
                    src={buildingImg}
                    alt="Eye Hospital Building"
                    loading="lazy"
                    decoding="async"
                    width={1000}
                    height={600}
                    className="w-full h-full object-cover object-center"
                />
            </div>

            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Mobile / Tablet Image: At top for mobile */}
                <div className="block lg:hidden mb-5 sm:mb-6 w-full h-[220px] sm:h-[320px] md:h-[380px] overflow-hidden shadow-md max-w-3xl mx-auto">
                    <img
                        src={buildingImg}
                        alt="Eye Hospital Building"
                        loading="lazy"
                        decoding="async"
                        width={1000}
                        height={600}
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                <div className="w-full lg:w-[45%] xl:w-[43%] min-h-0 lg:min-h-[440px] flex flex-col justify-center space-y-4 sm:space-y-6">

                    {/* Header */}
                    <div className="space-y-1.5 sm:space-y-2">
                        <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-cyan-700 block">
                            GET IN TOUCH
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-[#002b40] leading-tight">
                            We're Here to Help
                        </h2>
                        <p className="text-gray-500 text-sm sm:text-base leading-relaxed pt-1 max-w-md">
                            Have a question or need assistance? Contact us directly or visit our clinic. We're always happy to help.
                        </p>
                    </div>

                    {/* Contact Details List */}
                    <div className="space-y-3.5 sm:space-y-5 pt-1 sm:pt-2">
                        {/* Phone */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-700 shrink-0">
                                <Phone className="w-5 h-5" aria-hidden="true" />
                            </div>
                            <div>
                                <a
                                    href={`tel:${CONTACT.phoneTel}`}
                                    className="font-bold text-[#002b40] text-base hover:text-cyan-700 transition-colors block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
                                >
                                    {CONTACT.phoneDisplay}
                                </a>
                                <p className="text-xs text-gray-500 mt-0.5">Call Us</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-700 shrink-0">
                                <Mail className="w-5 h-5" aria-hidden="true" />
                            </div>
                            <div>
                                <a
                                    href={`mailto:${CONTACT.email}`}
                                    className="font-bold text-[#002b40] text-base hover:text-cyan-700 transition-colors block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
                                >
                                    {CONTACT.email}
                                </a>
                                <p className="text-xs text-gray-500 mt-0.5">Email Us</p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-700 shrink-0 mt-0.5">
                                <MapPin className="w-5 h-5" aria-hidden="true" />
                            </div>
                            <div>
                                <p className="font-bold text-[#002b40] text-base leading-snug">
                                    {CONTACT.address}
                                </p>
                                <p className="text-xs text-gray-500 mt-0.5">Visit Us</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
