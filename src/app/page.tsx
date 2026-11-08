import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-warm-50 text-stone-900 selection:bg-sahara-200 selection:text-sahara-900">
      <Header />
      <main id="main-content" className="flex-1 w-full focus:outline-none">
        <Hero />
        <About />
        <Events />
        <Gallery />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
