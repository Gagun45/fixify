import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import WhyUs from "./components/WhyUs/WhyUs";

function App() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}

export default App;
