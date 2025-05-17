import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import Header from "./sections/header/Header";
import Hero from "./sections/hero/Hero";
import Value from "./sections/value/Value";
import Vision from "./sections/vision/Vision";

export default function Home() {
  return (
    <div className="bg-yellow-900/10">
      <Header />
      <Hero />
      <Value />
      <Vision />
      <Contact />
      <Footer />
    </div>
  );
}
