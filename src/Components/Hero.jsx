import Button from "./ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[320px] sm:min-h-[400px] md:min-h-[460px] lg:min-h-[520px] w-full items-center overflow-hidden bg-[#002b40] py-6 sm:py-8 md:py-10 lg:py-14"
    >
      {/* Decorative Background Image with LCP Optimization */}
      <img
        src="/hero.webp"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        width={1280}
        height={720}
        className="absolute inset-y-0 right-0 h-full w-full object-cover object-center opacity-40 md:w-[65%] md:scale-[1.15] md:opacity-100"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#002b40] via-[#002b40]/90 to-[#002b40]/50 md:via-[#002b40]/75 md:to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
        <p className="mb-1.5 sm:mb-2 text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-cyan-300">
          Clear Vision <span className="px-1" aria-hidden="true">•</span> Better Tomorrow
        </p>

        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight">
          Your Vision <br className="hidden sm:block" />
          <span className="text-cyan-400">Our Priority</span>
        </h1>

        <p className="mt-2.5 sm:mt-3 max-w-[560px] text-xs sm:text-sm md:text-base leading-relaxed text-gray-100">
          At Eye Hospital.com, we provide world-class eye care
          <br className="hidden sm:block" /> with advanced technology, experienced specialists
          <br className="hidden sm:block" /> and a patient-first approach.
        </p>

        <div className="mt-4 sm:mt-5 flex flex-wrap gap-2.5 sm:gap-3">
          <Button href="#appointment" variant="primary">
            <span>Book Appointment</span>
            <span className="text-xs sm:text-sm ml-1.5" aria-hidden="true">→</span>
          </Button>
          <Button href="#about" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
