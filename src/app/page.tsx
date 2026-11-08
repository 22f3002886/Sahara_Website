import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-warm-50 text-stone-900">
      <Header />
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Events />
        <Gallery />
        <Team />
      </main>
    </div>
  );
}
