import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import EventSection from "./components/EventSection"; 
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FounderSection from "./components/FounderSection";
import ImpactStats from "./components/ImpactStats";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import DonationModal from "./components/DonationModal";
import './index.css';

const navContent = {
  home: "Home",
  about: "About Us",
  founder: "The Founder",
  projects: "Impact Gallery",
  contact: "Contact",
  donate: "Donate Now"
};

export default function App() {
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const openDonate = () => setIsDonateOpen(true);
  const closeDonate = () => setIsDonateOpen(false);

  return (
    <div className="bg-white font-sans selection:bg-gold selection:text-navy">
      <Navbar onDonateClick={openDonate} t={navContent} />
      
      <main>
        <section id="home">
          <HeroSection onDonateClick={openDonate} />
        </section>

        <section id="about"> 
          <AboutSection /> 
        </section>

        {/* 1. Founder Section First */}
        <section id="founder">
          <FounderSection />
        </section>

        {/* 2. Events & Raffle Section Second */}
        <section id="events">
          <EventSection />
        </section>

        <ImpactStats />

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer onDonateClick={openDonate} />
      <DonationModal isOpen={isDonateOpen} onClose={closeDonate} />
    </div>
  );
}