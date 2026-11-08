import Header from "@/components/Header";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-warm-50 text-stone-900">
      <Header />
      <main className="flex-1 pt-24 pb-16 px-4 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl py-12">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-sahara-800 bg-sahara-100 border border-sahara-200 px-3 py-1 rounded">
            IIT Madras BS Degree Programme
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            SAHARA — The Social Welfare Society
          </h1>
          <p className="mt-4 text-lg text-stone-600 leading-relaxed font-sans">
            Together, We Make a Difference. Dedicated to raising awareness, inspiring compassion, and promoting humanity across our student community.
          </p>
        </div>
      </main>
    </div>
  );
}
