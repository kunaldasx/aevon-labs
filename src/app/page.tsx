import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import PricingCalculator from "@/components/PricingCalculator";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Process />
      <TechStack />
      <PricingCalculator />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
