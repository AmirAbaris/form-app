import "./App.css";
import Cta from "./components/Cta";
import Hero from "./components/Hero";

function App() {
  return (
    <main className="space-y-24">
      <section className="container mx-auto px-12 py-12 space-y-12">
        <Hero />
      </section>
      <Cta />
    </main>
  );
}

export default App;
