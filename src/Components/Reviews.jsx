import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PatientStories() {
    const reviews = [
        {
            id: 1,
            quote: "The team at Eye Hospital.com is truly amazing. My cataract surgery was smooth and I can see clearly now. Highly recommended!",
            name: "Sarah Ahmed",
            role: "Patient",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
        },
        {
            id: 2,
            quote: "Professional, friendly and very caring. The doctors took time to explain everything. I feel so much better now.",
            name: "James Carter",
            role: "Patient",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
        },
        {
            id: 3,
            quote: "Excellent service and modern facilities. The staff is very kind and supportive. Best eye hospital in the city!",
            name: "Ayesha Rahman",
            role: "Patient",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
        },
        {
            id: 4,
            quote: "I got LASIK done here and the results exceeded my expectations. Freedom from glasses has changed my everyday life completely.",
            name: "Michael Chen",
            role: "Patient",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
        },
        {
            id: 5,
            quote: "Brought my daughter for a routine eye checkup. The pediatric team was remarkably patient and made her feel comfortable throughout.",
            name: "Fatima Noor",
            role: "Patient",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
        }
    ];

    const [startIndex, setStartIndex] = useState(0);

    const prevReview = () => {
        setStartIndex((prev) => (prev === 0 ? reviews.length - 3 : prev - 1));
    };

    const nextReview = () => {
        setStartIndex((prev) => (prev + 3 >= reviews.length ? 0 : prev + 1));
    };

    // Visible 3 reviews on desktop
    const visibleReviews = [
        reviews[startIndex % reviews.length],
        reviews[(startIndex + 1) % reviews.length],
        reviews[(startIndex + 2) % reviews.length]
    ];

    return (
        <section id="patient-stories" className="w-full bg-[#f0f7fb] py-8 sm:py-12 md:py-16 scroll-mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 md:mb-10 gap-3 sm:gap-4">
                    <div>
                        <span className="text-xs md:text-sm tracking-widest uppercase text-cyan-600 font-bold block">
                            PATIENT STORIES
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002b40] mt-1.5 leading-tight">
                            What Our Patients Say
                        </h2>
                        <p className="text-gray-500 text-sm md:text-base mt-1.5">
                            Real stories. Real people. Genuine experiences.
                        </p>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex items-center gap-2 self-start sm:self-auto">
                        <button
                            type="button"
                            onClick={prevReview}
                            aria-label="Previous review"
                            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:text-cyan-600 hover:border-cyan-400 hover:shadow transition-all cursor-pointer"
                        >
                            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                        <button
                            type="button"
                            onClick={nextReview}
                            aria-label="Next review"
                            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:text-cyan-600 hover:border-cyan-400 hover:shadow transition-all cursor-pointer"
                        >
                            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                    </div>
                </div>

                {/* 3 Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {visibleReviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-white rounded-2xl p-5 sm:p-7 md:p-8 shadow-sm border border-cyan-100/60 flex flex-col justify-between hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Quote Icon & Text */}
                            <div>
                                <div className="text-cyan-400 text-4xl sm:text-5xl font-serif font-black leading-none mb-3 select-none">
                                    “
                                </div>
                                <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed">
                                    "{review.quote}"
                                </p>
                            </div>

                            {/* Patient Profile */}
                            <div className="flex items-center gap-3.5 mt-6 pt-5 border-t border-gray-100">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-11 h-11 rounded-full object-cover shrink-0 ring-2 ring-cyan-100"
                                    onError={(e) => {
                                        // Fallback if image fails to load
                                        e.currentTarget.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150";
                                    }}
                                />
                                <div>
                                    <h4 className="font-bold text-[#002b40] text-sm sm:text-base leading-snug">
                                        {review.name}
                                    </h4>
                                    <p className="text-xs text-gray-400 font-medium">
                                        {review.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
