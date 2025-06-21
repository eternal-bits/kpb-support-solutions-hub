
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { QuoteCalculator } from "@/components/QuoteCalculator";
import { BookingSystem } from "@/components/BookingSystem";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Newsletter } from "@/components/Newsletter";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <div data-section="tools">
          <QuoteCalculator />
        </div>
        <div data-section="booking">
          <BookingSystem />
        </div>
        <Testimonials />
        <FAQ />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
