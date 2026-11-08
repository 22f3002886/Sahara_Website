import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-warm-50 text-stone-900">
      <Header />
      <main className="flex-1 w-full">
        <Hero />
      </main>
    </div>
  );
}
