import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
