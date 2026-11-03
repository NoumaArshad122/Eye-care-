import React, { useState } from 'react';
import { Calendar, ChevronDown, CheckCircle } from 'lucide-react';
import appBgImg from '../assets/appbgimg.webp';

export default function Appointment() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        date: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section
            id="appointment"
            className="relative w-full bg-[#002b40] py-8 sm:py-10 md:py-12 lg:py-16 overflow-hidden scroll-mt-16 text-white"
        >
            {/* Background Image */}
            <img
                src={appBgImg}
                alt="Appointment Section Background"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* Subtle Gradient Overlay for High Contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#002233]/70 via-[#002b40]/50 to-[#002233]/40 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* Left Column: Heading & Info */}
                    <div className="lg:col-span-6 space-y-4 sm:space-y-5">
                        <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-cyan-400 block">
                            BOOK AN APPOINTMENT
                        </span>

                        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                            Take the First Step <br />
                            Towards Better Vision
                        </h2>

                        <p className="text-cyan-100/80 text-sm sm:text-base leading-relaxed max-w-lg">
                            Schedule your appointment today and let our experts help you see the world more clearly.
                        </p>

                        <div className="pt-2">
                            <button
                                type="button"
                                onClick={() => document.getElementById('appointment-name')?.focus()}
                                className="inline-flex items-center gap-1.5 rounded-full bg-[#00c6b7] hover:bg-[#00b3a5] text-white px-5 py-3 sm:px-6 sm:py-3 md:px-7 md:py-3.5 text-sm sm:text-sm md:text-base font-semibold shadow-lg shadow-cyan-900/40 transition-all duration-200 cursor-pointer"
                            >
                                <span>Book Appointment</span>
                                <span className="text-sm sm:text-base font-normal">→</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Appointment Form Card */}
                    <div className="lg:col-span-6 flex justify-center lg:justify-end">
                        <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-5 sm:p-7 md:p-8 text-gray-900 border border-cyan-900/10">

                            <h3 className="text-xl sm:text-2xl font-bold text-[#002b40] mb-5 sm:mb-6">
                                Book Your Appointment
                            </h3>

                            {submitted ? (
                                <div className="py-8 text-center space-y-3">
                                    <div className="w-14 h-14 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mx-auto">
                                        <CheckCircle className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900">Appointment Requested!</h4>
                                    <p className="text-sm text-gray-600 max-w-xs mx-auto">
                                        Thank you, <span className="font-semibold text-gray-900">{formData.name || 'valued patient'}</span>. Our clinic representative will call you shortly to confirm your slot.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setSubmitted(false);
                                            setFormData({ name: '', phone: '', email: '', service: '', date: '' });
                                        }}
                                        className="mt-4 text-xs font-semibold text-teal-600 hover:text-teal-700 underline"
                                    >
                                        Book another appointment
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {/* Full Name */}
                                        <div>
                                            <input
                                                id="appointment-name"
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Full Name"
                                                className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 bg-gray-50/40 focus:bg-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                                            />
                                        </div>

                                        {/* Phone Number */}
                                        <div>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Phone Number"
                                                className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 bg-gray-50/40 focus:bg-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                                            />
                                        </div>

                                        {/* Email Address */}
                                        <div>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Email Address"
                                                className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 bg-gray-50/40 focus:bg-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                                            />
                                        </div>

                                        {/* Select Service Dropdown */}
                                        <div className="relative">
                                            <select
                                                name="service"
                                                required
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="w-full appearance-none rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-700 bg-gray-50/40 focus:bg-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors pr-9"
                                            >
                                                <option value="" disabled>Select Service</option>
                                                <option value="Eye Checkup">Eye Checkup</option>
                                                <option value="Cataract Surgery">Cataract Surgery</option>
                                                <option value="LASIK Surgery">LASIK Surgery</option>
                                                <option value="Glaucoma Treatment">Glaucoma Treatment</option>
                                                <option value="Retina Care">Retina Care</option>
                                                <option value="Children's Eye Care">Children's Eye Care</option>
                                            </select>
                                            <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                                        </div>

                                        {/* Preferred Date */}
                                        <div className="sm:col-span-2 relative">
                                            <input
                                                type="date"
                                                name="date"
                                                required
                                                value={formData.date}
                                                onChange={handleChange}
                                                className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-700 bg-gray-50/40 focus:bg-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            className="w-full rounded-lg bg-[#002b40] hover:bg-[#003c59] text-white py-3 sm:py-3.5 px-4 text-sm sm:text-sm md:text-base font-semibold shadow-md transition-colors cursor-pointer"
                                        >
                                            Submit Appointment
                                        </button>
                                    </div>
                                </form>
                            )}

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

