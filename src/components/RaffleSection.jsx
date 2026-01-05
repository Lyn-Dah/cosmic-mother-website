import React from "react";
import { motion } from "framer-motion";
import { Ticket, Zap, CheckCircle } from "lucide-react";
import raffleTicket from "../assets/images/ticket.jpg"; 

export default function RaffleSection() {
  const PAYSTACK_LINK = "https://paystack.com/buy/cosmic-mother-care-raffle-ticket-vgeugj";

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-navy rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch">
          
          {/* Left Side: The Ticket Display */}
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-linear-to-br from-navy to-navy/80 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-[100px] -translate-y-1/2 translate-x-1/2 rounded-full" />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <img 
                src={raffleTicket} 
                alt="Cosmic Mother Raffle Ticket" 
                className="w-full rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-2 border-white/10"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold text-navy font-black px-8 py-4 rounded-2xl shadow-xl transform rotate-3">
                ONLY £5
              </div>
            </motion.div>
          </div>

          {/* Right Side: Information & CTA */}
          <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center border-l border-white/5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold text-xs font-bold uppercase tracking-widest mb-8 w-fit">
              <Zap size={14} className="fill-gold" /> Fundraising Event
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Win Big, <span className="text-gold italic">Give Back.</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Join our raffle for under-privileged schools in Ghana. Every ticket purchased 
              helps us provide essential learning materials and infrastructure for students in need.
            </p>

            {/* Prize List */}
            <div className="space-y-4 mb-12">
              {[
                { prize: "1st Prize", item: "Brand New Phone" },
                { prize: "2nd Prize", item: "High-Capacity Power Bank" },
                { prize: "3rd Prize", item: "Premium Headset" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <span className="text-gold font-bold text-xs uppercase block">{item.prize}</span>
                    <span className="text-white font-medium">{item.item}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Redirecting directly to Paystack */}
            <motion.a 
              href={PAYSTACK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-fit px-10 py-5 bg-gold hover:bg-white text-navy font-bold rounded-2xl transition-all shadow-xl shadow-gold/10 flex items-center justify-center gap-3 group"
            >
              <Ticket size={20} className="group-hover:rotate-12 transition-transform" />
              Get Your Tickets Now
            </motion.a>
            
            <p className="mt-6 text-gray-500 text-[10px] uppercase tracking-tighter opacity-70">
              *Payments secured and processed by Paystack
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}