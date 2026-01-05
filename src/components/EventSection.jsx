import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Ticket, FileText, Zap, CheckCircle } from "lucide-react";
import flyerImage from "../assets/images/14th-flier.jpg";
import raffleTicket from "../assets/images/ticket.jpg";

export default function EventSection() {
  const PAYSTACK_LINK = "https://paystack.com/buy/cosmic-mother-care-raffle-ticket-vgeugj";

  // --- COUNTDOWN LOGIC ---
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Target date: March 14, 2026 at 3:00 PM CET
    const targetDate = new Date("March 14, 2026 15:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="events" className="py-24 bg-soft-bg overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* --- PART 1: MAIN FUNDRAISER EVENT --- */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
          {/* Flier Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <img 
              src={flyerImage} 
              alt="69th Ghana Independence Day Fundraiser" 
              className="rounded-3xl shadow-2xl border-4 border-white"
            />
          </motion.div>

          {/* Event Details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-gold font-bold tracking-widest uppercase text-sm">Upcoming Fundraiser</h2>
              <h3 className="text-4xl font-bold text-navy font-serif">69th Ghana Independence Day</h3>
              
              {/* COUNTDOWN DISPLAY */}
              <div className="flex gap-3 pt-4">
                {[
                  { label: "Days", val: timeLeft.days },
                  { label: "Hrs", val: timeLeft.hours },
                  { label: "Min", val: timeLeft.minutes },
                  { label: "Sec", val: timeLeft.seconds }
                ].map((item, i) => (
                  <div key={i} className="flex-1 bg-navy text-white p-3 rounded-xl text-center shadow-lg border-b-4 border-gold">
                    <div className="text-xl md:text-2xl font-black">{item.val}</div>
                    <div className="text-[9px] uppercase font-bold text-gold tracking-widest">{item.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-gray-600 text-lg pt-4">
                Join us in France for an evening of culture and unity. International participants 
                requiring visa assistance must fill out the invitation form below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-navy font-semibold">
              <div className="flex items-center gap-3"><Calendar className="text-gold" /> Sat, 14th March 2026</div>
              <div className="flex items-center gap-3"><Clock className="text-gold" /> 3:00 PM - 9:00 PM CET</div>
              <div className="flex items-center gap-3"><MapPin className="text-gold" /> 6, AVENUE JULES GUESDE  93240 STAINS-FRANCE</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="YOUR_REGISTRATION_LINK" 
                target="_blank" 
                className="bg-navy text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gold hover:text-navy transition-all shadow-lg"
              >
                <Ticket size={20} /> Register to Attend
              </a>
              <a 
                href="YOUR_VISA_LINK" 
                target="_blank" 
                className="border-2 border-navy text-navy px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-navy hover:text-white transition-all"
              >
                <FileText size={20} /> Visa Invitation Form
              </a>
            </div>
          </motion.div>
        </div>

        {/* --- PART 2: THE RAFFLE (WIN BIG) --- */}
        <div className="bg-navy rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch">
          {/* Left Side: Ticket Visual */}
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-linear-to-br from-navy to-navy/80 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-[100px] -translate-y-1/2 translate-x-1/2 rounded-full" />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <img 
                src={raffleTicket} 
                alt="Raffle Ticket" 
                className="w-full rounded-2xl shadow-2xl border-2 border-white/10"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold text-navy font-black px-8 py-4 rounded-2xl shadow-xl transform rotate-3">
                ONLY £5
              </div>
            </motion.div>
          </div>

          {/* Right Side: Raffle Info */}
          <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center border-l border-white/5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold text-xs font-bold uppercase mb-8 w-fit">
              <Zap size={14} className="fill-gold" /> Global Raffle
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Win Big, <span className="text-gold italic">Give Back.</span></h2>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Every ticket purchased helps us provide essential learning materials for 
              under-privileged students in Ghana.
            </p>

            <div className="space-y-4 mb-12">
              {[
                { prize: "1st Prize", item: "Brand New Phone" },
                { prize: "2nd Prize", item: "High-Capacity Power Bank" },
                { prize: "3rd Prize", item: "Premium Headset" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                    <CheckCircle size={18} />
                  </div>
                  <div>
                    <span className="text-gold font-bold text-[10px] uppercase block leading-none mb-1">{item.prize}</span>
                    <span className="text-white font-medium">{item.item}</span>
                  </div>
                </div>
              ))}
            </div>

            <motion.a 
              href={PAYSTACK_LINK}
              target="_blank"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-fit px-10 py-5 bg-gold text-navy font-bold rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl"
            >
              <Ticket size={20} /> Get Raffle Tickets
            </motion.a>
          </div>
        </div>

      </div>
    </section>
  );
}