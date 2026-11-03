export default function SplitImageSection({
    id,
    imageSrc,
    imageAlt,
    bgColor = "bg-white",
    bottomContent,
    children,
    className = ""
}) {
    return (
        <section
            id={id}
            className={`relative w-full ${bgColor} py-6 sm:py-8 md:py-10 lg:py-14 overflow-hidden scroll-mt-16 ${className}`.trim()}
        >
            {/* Single responsive image container: in-flow on mobile/tablet, absolute full-bleed on desktop */}
            <div className="px-4 sm:px-6 lg:px-0 max-w-3xl mx-auto lg:max-w-none lg:mx-0 lg:absolute lg:inset-y-0 lg:right-0 lg:w-[52%] xl:w-[54%] lg:h-full lg:[clip-path:polygon(14%_0,100%_0,100%_100%,0%_100%)] mb-5 sm:mb-6 lg:mb-0">
                <div className="w-full h-[220px] sm:h-[320px] md:h-[380px] lg:h-full overflow-hidden shadow-md lg:shadow-none">
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-center"
                        width={1000}
                        height={600}
                    />
                </div>
            </div>

            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="w-full lg:w-[45%] xl:w-[43%] lg:min-h-[420px] flex flex-col justify-center">
                    {children}
                </div>

                {bottomContent && (
                    <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                        {bottomContent}
                    </div>
                )}
            </div>
        </section>
    );
}
