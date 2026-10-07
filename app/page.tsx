import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Sustainability from "@/components/Sustainability";
import Fleet from "@/components/Fleet";
import MissionVision from "@/components/Mission-vision";
import Chairman from "@/components/Chairman";
import GM from "@/components/GM";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      <Navbar />

      <Hero />

      <About />

      <Stats />

      <Services />

      <Sustainability />

      <Fleet />

      <MissionVision />

      <Chairman />

      <GM />

      <Contact />

      <Footer />
    </main>
  );
}