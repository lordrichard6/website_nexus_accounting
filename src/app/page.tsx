import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TaxEstimator from "@/components/TaxEstimator";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <TaxEstimator />
      <Contact />
      <Footer />
    </main>
  );
}
