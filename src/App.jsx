import Features from "./Components/Features";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import HowItWorks from "./Components/HowItWorks";
import Navbar from "./Components/Navbar";
import Plans from "./Components/Plans";
import Testimonials from "./Components/Testimonials";

const App = () => {
  return (
    <main
      className="text-sm text-black antialiased bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Features />
      <Plans />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default App;
