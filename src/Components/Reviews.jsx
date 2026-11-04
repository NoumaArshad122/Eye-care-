import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { REVIEWS } from '../data/siteData';
import SectionHeader from './ui/SectionHeader';

export default function Reviews() {
    const [startIndex, setStartIndex] = useState(0);

    const prevReview = () => {
        setStartIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
    };

    const nextReview = () => {
        setStartIndex((prev) => (prev + 1) % REVIEWS.length);
    };

    // Visible 3 reviews on desktop, first 1 on mobile
    const visibleReviews = [
        REVIEWS[startIndex],
        REVIEWS[(startIndex + 1) % REVIEWS.length],
        REVIEWS[(startIndex + 2) % REVIEWS.length]
    ];

    return (
        <section id="patient-stories" className="w-full bg-[#f0f7fb] py-2.5 sm:py-8 md:py-10 lg:py-14 scroll-mt-16">
            <div className="max-w-7xl mx-auto pl-2 pr-3 sm:pl-4 sm:pr-6 lg:pl-5 lg:pr-8">

                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-3.5 sm:mb-8 md:mb-10 gap-3 sm:gap-4">
                    <SectionHeader
                        label="PATIENT STORIES"
                        title="What Our Patients Say"
                        description="Real stories. Real people. Genuine experiences."
                    />

                    {/* Navigation Arrows */}
                    <div className="flex items-center gap-2 self-start sm:self-auto">
                        <button
                            type="button"
                            onClick={prevReview}
                            aria-label="Previous review"
                            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:text-cyan-600 hover:border-cyan-400 hover:shadow transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                        >
                            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                        </button>
                        <button
                            type="button"
                            onClick={nextReview}
                            aria-label="Next review"
                            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:text-cyan-600 hover:border-cyan-400 hover:shadow transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                        >
                            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                        </button>
                    </div>
                </div>

                {/* Testimonial Cards: 1 on mobile, 3 on md+ */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
                    {visibleReviews.map((review, idx) => (
                        <div
                            key={review.id}
                            className={`bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-7 md:p-8 shadow-sm border border-cyan-100/60 flex-col justify-between hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${idx > 0 ? 'hidden md:flex' : 'flex'}`}
                        >
                            {/* Quote Icon & Text */}
                            <div>
                                <div className="text-cyan-400 text-4xl sm:text-5xl font-serif font-black leading-none mb-3 select-none" aria-hidden="true">
                                    “
                                </div>
                                <blockquote className="text-gray-600 text-sm md:text-[15px] leading-relaxed">
                                    {review.quote}
                                </blockquote>
                            </div>

                            {/* Patient Profile */}
                            <div className="flex items-center gap-3.5 mt-6 pt-5 border-t border-gray-100">
                                <div
                                    className={`w-11 h-11 rounded-full ${review.bgColor || "bg-teal-100 text-[#00897b]"} font-bold text-sm flex items-center justify-center shrink-0 ring-2 ring-cyan-100 select-none`}
                                    aria-hidden="true"
                                >
                                    {review.initials}
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#002b40] text-sm sm:text-base leading-snug">
                                        {review.name}
                                    </h4>
                                    <p className="text-xs text-gray-500 font-medium">
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
