import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Aboutus from "./Components/About";
import Services from "./Components/Service";
import WhyChooseUs from "./Components/WhyChoseUS";
import Doctors from "./Components/Doctors";
import AdvancedTechnology from "./Components/advanceFeatures";
import Reviews from "./Components/revirws";
import Appointment from "./Components/Appointment";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Aboutus />
        <Services />
        <WhyChooseUs />
        <Doctors />
        <AdvancedTechnology />
        <Reviews />
        <Appointment />
      </main>
      <Footer />
    </div>
  );
}
