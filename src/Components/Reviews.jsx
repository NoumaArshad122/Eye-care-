import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { REVIEWS } from '../data/siteData';
import SectionHeader from './ui/SectionHeader';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Reviews() {
    const swiperRef = useRef(null);

    return (
        <section id="patient-stories" className="w-full bg-[#f0f7fb] py-5 sm:py-8 md:py-10 lg:py-14 scroll-mt-16 overflow-hidden">
            <div className="w-full max-w-[95%] xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-6">

                {/* Section Header */}
                <div className="mb-5 sm:mb-8 md:mb-10">
                    <SectionHeader
                        label="PATIENT STORIES"
                        title="What Our Patients Say"
                        description="Real stories. Real people. Genuine experiences."
                    />
                </div>

                {/* Carousel Area with Left and Right Scroll Buttons */}
                <div className="relative px-7 sm:px-10 md:px-12 lg:px-14">
                    {/* Left Scroll Button */}
                    <button
                        type="button"
                        onClick={() => swiperRef.current?.slidePrev()}
                        aria-label="Previous review"
                        className="absolute left-0 top-[45%] -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-700 hover:text-[#00897b] hover:border-cyan-400 hover:shadow-lg transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                    >
                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true" />
                    </button>

                    {/* Swiper Component (Auto & Manual Scroll) */}
                    <Swiper
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        modules={[Autoplay, Navigation, Pagination, A11y]}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        loop={true}
                        grabCursor={true}
                        spaceBetween={14}
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 28,
                            },
                        }}
                        style={{
                            '--swiper-pagination-color': '#00897b',
                            '--swiper-theme-color': '#00897b',
                        }}
                        className="pb-10 sm:pb-12 pt-1"
                    >
                        {REVIEWS.map((review) => (
                            <SwiperSlide key={review.id} className="!h-auto flex">
                                <div className="w-full h-full bg-white rounded-xl sm:rounded-2xl p-5 sm:p-7 md:p-8 shadow-sm border border-cyan-100/60 flex flex-col justify-between hover:shadow-md transition-all duration-300 hover:-translate-y-1 select-none">
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
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Right Scroll Button */}
                    <button
                        type="button"
                        onClick={() => swiperRef.current?.slideNext()}
                        aria-label="Next review"
                        className="absolute right-0 top-[45%] -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-700 hover:text-[#00897b] hover:border-cyan-400 hover:shadow-lg transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                    >
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true" />
                    </button>
                </div>

            </div>
        </section>
    );
}
