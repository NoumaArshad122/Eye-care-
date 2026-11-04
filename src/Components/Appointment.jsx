import { useState } from 'react';
import { ChevronDown, CheckCircle } from 'lucide-react';
import appBgImg from '../assets/appointment-bg.webp';
import { SERVICES } from '../data/siteData';
import Button from './ui/Button';

const today = new Date().toISOString().split('T')[0];

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
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section
            id="appointment"
            className="relative w-full bg-[#002b40] py-3 sm:py-10 md:py-12 lg:py-16 overflow-hidden scroll-mt-16 text-white"
        >
            {/* Decorative Background Image */}
            <img
                src={appBgImg}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                width={1200}
                height={800}
                className="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#002233]/70 via-[#002b40]/50 to-[#002233]/40 pointer-events-none" />

            <div className="max-w-7xl mx-auto pl-2 pr-3 sm:pl-4 sm:pr-6 lg:pl-5 lg:pr-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">

                    {/* Left Column: Heading & Info */}
                    <div className="lg:col-span-6 space-y-3 sm:space-y-5">
                        <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-cyan-300 block">
                            BOOK AN APPOINTMENT
                        </span>

                        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
                            Need Professional <br /> Eye Consultation?
                        </h2>

                        <p className="text-cyan-100/80 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg">
                            Schedule your appointment today and let our experts help you see the world more clearly.
                        </p>

                        <div className="pt-1.5 sm:pt-2">
                            <Button
                                onClick={() => document.getElementById('appointment-name')?.focus()}
                                variant="primary"
                                className="text-xs sm:text-sm md:text-base px-4 py-2 sm:px-6 sm:py-3"
                            >
                                <span>Book Appointment</span>
                                <span className="ml-1.5" aria-hidden="true">→</span>
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Appointment Form Card */}
                    <div className="lg:col-span-6 flex justify-center lg:justify-end">
                        <div className="w-full max-w-lg bg-white rounded-xl sm:rounded-2xl shadow-2xl p-3.5 sm:p-7 md:p-8 text-gray-900 border border-cyan-900/10">

                            <h3 className="text-lg sm:text-2xl font-bold text-[#002b40] mb-4 sm:mb-6">
                                Book Your Appointment
                            </h3>

                            {submitted ? (
                                <div className="py-8 text-center space-y-3" aria-live="polite">
                                    <div className="w-14 h-14 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mx-auto">
                                        <CheckCircle className="w-8 h-8" aria-hidden="true" />
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
                                        className="mt-4 text-xs font-semibold text-teal-600 hover:text-teal-700 underline cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded"
                                    >
                                        Book another appointment
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {/* Full Name */}
                                        <div>
                                            <label htmlFor="appointment-name" className="sr-only">Full Name</label>
                                            <input
                                                id="appointment-name"
                                                type="text"
                                                name="name"
                                                required
                                                autoComplete="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Full Name"
                                                className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 bg-gray-50/40 focus:bg-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                                            />
                                        </div>

                                        {/* Phone Number */}
                                        <div>
                                            <label htmlFor="appointment-phone" className="sr-only">Phone Number</label>
                                            <input
                                                id="appointment-phone"
                                                type="tel"
                                                name="phone"
                                                required
                                                autoComplete="tel"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Phone Number"
                                                className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 bg-gray-50/40 focus:bg-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                                            />
                                        </div>

                                        {/* Email Address */}
                                        <div>
                                            <label htmlFor="appointment-email" className="sr-only">Email Address</label>
                                            <input
                                                id="appointment-email"
                                                type="email"
                                                name="email"
                                                autoComplete="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Email Address"
                                                className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 bg-gray-50/40 focus:bg-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                                            />
                                        </div>

                                        {/* Select Service Dropdown */}
                                        <div className="relative">
                                            <label htmlFor="appointment-service" className="sr-only">Select Service</label>
                                            <select
                                                id="appointment-service"
                                                name="service"
                                                required
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="w-full appearance-none rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-700 bg-gray-50/40 focus:bg-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors pr-9"
                                            >
                                                <option value="" disabled>Select Service</option>
                                                {SERVICES.map((s) => (
                                                    <option key={s.id} value={s.title}>{s.title}</option>
                                                ))}
                                            </select>
                                            <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
                                        </div>

                                        {/* Preferred Date */}
                                        <div className="sm:col-span-2">
                                            <label htmlFor="appointment-date" className="sr-only">Preferred Date</label>
                                            <input
                                                id="appointment-date"
                                                type="date"
                                                name="date"
                                                required
                                                min={today}
                                                value={formData.date}
                                                onChange={handleChange}
                                                className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-700 bg-gray-50/40 focus:bg-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-2">
                                        <Button
                                            type="submit"
                                            variant="dark"
                                            size="full"
                                        >
                                            Submit Appointment
                                        </Button>
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
