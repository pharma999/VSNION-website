import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Achievements } from './components/Achievements';
import { Portfolio } from './components/Portfolio';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { Careers } from './components/Careers';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Achievements />
      <Portfolio />
      <WhyChooseUs />
      {/* <Testimonials /> */}
      <Careers />
      {/* <Team /> */}
      <Contact />
      <Footer />
    </div>
  );
}
