import Cta from "@/components/Cta";
import Hero from "@/components/Hero";

export default function Landing() {
  return (
    <main className="space-y-24">
      <section className="container mx-auto px-12 py-12 space-y-12">
        <Hero />
      </section>
      <Cta />
    </main>
  );
}
