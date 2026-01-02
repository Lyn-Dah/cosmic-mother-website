// import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import AboutSection from "./components/AboutSection";
// import ContactSection from "./components/ContactSection";
// import FounderSection from "./components/FounderSection";
// import ImpactStats from "./components/ImpactStats";
// import RaffleSection from "./components/RaffleSection"; // New import
// import Projects from "./components/Projects";
// import Footer from "./components/Footer";
// import DonationModal from "./components/DonationModal";
// import { translations } from './data/translations';

// export default function App() {
//   // Global state for the Donation Modal
//   const [isDonateOpen, setIsDonateOpen] = useState(false);

//   const openDonate = () => setIsDonateOpen(true);
//   const closeDonate = () => setIsDonateOpen(false);

//   const [lang, setLang] = useState("EN");
//   const t = translations[lang]; // This is your "Translation Shortcut"

//   return (
//     <div className="bg-white font-sans selection:bg-gold selection:text-navy">
//       {/* Passing openDonate to Navbar for the 'Donate' button there */}
//       <Navbar onDonateClick={openDonate} />
      
//       {/* 1. Hero / Landing Area */}
//       <section id="home">
//         <HeroSection onDonateClick={openDonate} />
//       </section>

//       {/* 2. Mission / About Section */}
//       <section id="about"> 
//         <AboutSection /> 
//       </section>

//       {/* 3. The Founder Section */}
//       <section id="founder">
//         <FounderSection />
//       </section>

//       {/* 4. Impact Statistics (The high-end data counter) */}
//       <ImpactStats />

//       {/* 5. Raffle Section (The exclusive fundraiser for Ghana schools) */}
//       <section id="raffle">
//         <RaffleSection onDonateClick={openDonate} />
//       </section>

//       {/* 6. Programs / Impact / Gallery */}
//       <section id="projects">
//         <Projects />
//       </section>

//       {/* 7. Contact / Get Involved */}
//       <section id="contact">
//         <ContactSection />
//       </section>

//       {/* Footer also needs access to the donate trigger */}
//       <Footer onDonateClick={openDonate} />

//       {/* GLOBAL MODALS */}
//       <DonationModal isOpen={isDonateOpen} onClose={closeDonate} />

//       {/* Pass the lang and setLang to Navbar */}
//       <Navbar lang={lang} setLang={setLang} t={t.nav} />
      
//       {/* Pass the translated content to Hero */}
//       <Hero t={t.hero} />
      
//       {/* Pass the translated content to Footer */}
//       <Footer t={t.footer} />
//     </div>
//   );
// }


import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FounderSection from "./components/FounderSection";
import ImpactStats from "./components/ImpactStats";
import RaffleSection from "./components/RaffleSection"; 
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import DonationModal from "./components/DonationModal";
import { translations } from './data/translations';
import './index.css';

export default function App() {
  // 1. Global state for Language
  const [lang, setLang] = useState("EN");
  const t = translations[lang]; // Shortcut to the current language dictionary

  // 2. Global state for the Donation Modal
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const openDonate = () => setIsDonateOpen(true);
  const closeDonate = () => setIsDonateOpen(false);

  return (
    <div className="bg-white font-sans selection:bg-gold selection:text-navy">
      {/* NAVBAR: Handles both Donation Trigger and Language Switching */}
      <Navbar 
        onDonateClick={openDonate} 
        lang={lang} 
        setLang={setLang} 
        t={t.nav} 
      />
      
      {/* 1. HERO SECTION */}
      <section id="home">
        <HeroSection onDonateClick={openDonate} t={t.hero} />
      </section>

      {/* 2. MISSION / ABOUT SECTION */}
      <section id="about"> 
        <AboutSection t={t.about} /> 
      </section>

      {/* 3. THE FOUNDER SECTION */}
      <section id="founder">
        <FounderSection t={t.founder} />
      </section>

      {/* 4. IMPACT STATISTICS */}
      <ImpactStats t={t.stats} />

      {/* 5. RAFFLE SECTION */}
      <section id="raffle">
        <RaffleSection onDonateClick={openDonate} t={t.raffle} />
      </section>

      {/* 6. PROJECTS / IMPACT GALLERY */}
      <section id="projects">
        <Projects t={t.projects} />
      </section>

      {/* 7. CONTACT SECTION */}
      <section id="contact">
        <ContactSection t={t.contact} />
      </section>

      {/* FOOTER */}
      <Footer onDonateClick={openDonate} t={t.footer} />

      {/* GLOBAL MODALS */}
      <DonationModal 
        isOpen={isDonateOpen} 
        onClose={closeDonate} 
        t={t.modal} 
      />
    </div>
  );
}