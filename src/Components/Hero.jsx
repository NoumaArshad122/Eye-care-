export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[440px] sm:min-h-[500px] lg:min-h-[560px] w-full items-center overflow-hidden bg-[#002b40] py-10 sm:py-14 md:py-20"
    >
      {/* Background Image with LCP Optimization */}
      <img
        src="/hero.jpg"
        alt="Close-up of an eye being examined"
        fetchpriority="high"
        loading="eager"
        decoding="async"
        className="absolute inset-y-0 right-0 h-full w-full object-cover object-center opacity-40 md:w-[65%] md:scale-[1.15] md:opacity-100"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#002b40] via-[#002b40]/85 to-[#002b40]/40 md:via-[#002b40]/55 md:to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
        <p className="mb-2 text-[clamp(15px,2vw,22px)] font-semibold text-cyan-300">
          Clear Vision <span className="px-1">•</span> Better Tomorrow
        </p>

        <h1 className="text-[clamp(36px,7.5vw,84px)] font-bold leading-[1.04] tracking-tight">
          Your Vision
          <br />
          <span className="text-cyan-400">Our Priority</span>
        </h1>

        <p className="mt-3 max-w-[560px] text-[clamp(14px,1.75vw,19px)] leading-relaxed text-gray-100">
          At Eye Hospital.com, we provide world-class eye care
          <br className="hidden sm:block" /> with advanced technology, experienced specialists
          <br className="hidden sm:block" /> and a patient-first approach.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="#appointment"
            className="rounded-full bg-[#00c6b7] hover:bg-[#00b5a8] px-6 py-2.5 sm:px-7 sm:py-3 text-sm sm:text-base font-semibold text-white transition-all inline-flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Book Appointment</span>
            <span>→</span>
          </a>
          <a
            href="#about"
            className="rounded-full border border-cyan-400 hover:bg-white hover:text-gray-900 px-6 py-2.5 sm:px-7 sm:py-3 text-sm sm:text-base font-semibold text-white transition-all inline-flex items-center justify-center"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
