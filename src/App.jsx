import "./App.css";
import Features from "./Sections/Features";
import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import Pricing from "./Sections/Pricing";
import Faq from "./Sections/Faq";
import Testimonial from "./Sections/Testimonial";
import Download from "./Sections/Download";

function App() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonial />
      <Download />
    </main>
  );
}

export default App;
