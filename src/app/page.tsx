import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-4xl space-y-6">
        <Hero />
        <About />
        <Skills />
      </div>
    </main>
  );
}