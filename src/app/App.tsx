import { Helmet } from "react-helmet-async";
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Achievements } from './components/Achievements';
import { Portfolio } from './components/Portfolio';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { Careers } from './components/Careers';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { Training } from './components/Training';

function Home() {
  return (
    <>
      <section id="hero" aria-label="Hero section">
        <Hero />
      </section>

      <section id="about" aria-label="About VSNION">
        <About />
      </section>

      <section id="services" aria-label="Services">
        <Services />
      </section>

      <Training />

      <section id="achievements" aria-label="Achievements">
        <Achievements />
      </section>

      <section id="portfolio" aria-label="Portfolio">
        <Portfolio />
      </section>

      <section id="why-choose-us" aria-label="Why choose us">
        <WhyChooseUs />
      </section>

      <section id="careers" aria-label="Careers">
        <Careers />
      </section>

      <section id="contact" aria-label="Contact">
        <Contact />
      </section>
    </>
  );
}

export default function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>VSNION | Creative Digital Solutions & Brand Growth</title>
        <meta
          name="description"
          content="VSNION helps brands grow with creative digital solutions, web development, design, strategy, marketing services, and comprehensive training programs."
        />
        <meta
          name="keywords"
          content="VSNION, digital solutions, web development, AI solutions, app development, IoT, DevOps, training, workshops, technology consulting, software development, brand growth"
        />
        <meta name="author" content="VSNION" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.vsnion.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="VSNION | Creative Digital Solutions & Brand Growth" />
        <meta
          property="og:description"
          content="VSNION helps brands grow with creative digital solutions, web development, design, strategy, marketing services, and comprehensive training programs."
        />
        <meta property="og:url" content="https://www.vsnion.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.vsnion.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="VSNION" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VSNION | Creative Digital Solutions & Brand Growth" />
        <meta
          name="twitter:description"
          content="VSNION helps brands grow with creative digital solutions, web development, design, strategy, marketing services, and comprehensive training programs."
        />
        <meta name="twitter:image" content="https://www.vsnion.com/og-image.jpg" />
        <meta name="twitter:site" content="@vsnion" />
        <meta name="twitter:creator" content="@vsnion" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "VSNION",
            "url": "https://www.vsnion.com/",
            "logo": "https://www.vsnion.com/logo.png",
            "description": "VSNION helps brands grow with creative digital solutions, web development, design, strategy, marketing services, and comprehensive training programs.",
            "foundingDate": "2020",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-XXX-XXX-XXXX",
              "contactType": "Customer Service",
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://www.linkedin.com/company/vsnion",
              "https://twitter.com/vsnion"
            ],
            "serviceType": [
              "AI Solutions",
              "Web Development",
              "App Development",
              "IoT Implementation",
              "DevOps",
              "Training & Workshops"
            ],
            "areaServed": "Worldwide"
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "VSNION",
            "url": "https://www.vsnion.com/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.vsnion.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <header>
          <Navbar />
        </header>

        <main>
          <h1 className="sr-only">
            VSNION - Creative Digital Solutions, Branding, Web Development, Marketing and Training
          </h1>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/training" element={<Training isStandalonePage />} />
            <Route path="/training/:slug" element={<Training isStandalonePage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {isHomePage && (
          <>
            <footer>
              <Footer />
            </footer>
            <BackToTop />
          </>
        )}
      </div>
    </>
  );
}