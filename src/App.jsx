import { lazy, Suspense } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

// Code splitting: lazy-load all below-the-fold components
const Features = lazy(() => import("./Components/Features"));
const About = lazy(() => import("./Components/About"));
const Services = lazy(() => import("./Components/Services"));
const WhyChooseUs = lazy(() => import("./Components/WhyChooseUs"));
const Doctors = lazy(() => import("./Components/Doctors"));
const AdvancedTechnology = lazy(() => import("./Components/AdvancedTechnology"));
const Reviews = lazy(() => import("./Components/Reviews"));
const Appointment = lazy(() => import("./Components/Appointment"));
const Contact = lazy(() => import("./Components/Contact"));
const Footer = lazy(() => import("./Components/Footer"));

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-white focus:text-[#002b40] focus:font-bold focus:shadow-lg focus:ring-2 focus:ring-[#00897b] rounded-md transition-all"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <Suspense fallback={<div className="min-h-[200px]" aria-hidden="true" />}>
          <Features />
          <About />
          <Services />
          <WhyChooseUs />
          <Doctors />
          <AdvancedTechnology />
          <Reviews />
          <Appointment />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={<div className="min-h-[200px]" aria-hidden="true" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
