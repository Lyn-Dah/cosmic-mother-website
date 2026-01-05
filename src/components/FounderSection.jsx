import React from "react";
import { motion } from "framer-motion";
import { Quote, Award, Heart, CheckCircle2 } from "lucide-react";
// Replace with the actual path to the Founder's portrait
import founderImg from "../assets/images/founder.jpg"; 

export default function FounderSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* --- Image Side --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-5/12 relative"
          >
            {/* Decorative Background Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-navy/5 rounded-full blur-3xl" />
            
            <div className="relative z-10 rounded-4xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-8 border-white">
              <img 
                src={founderImg} 
                alt="Founder of Cosmic Mother Association" 
                className="w-full aspect-4/5 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-navy/90 to-transparent p-8 text-white">
                <p className="font-serif italic text-lg text-gold">"Service is the rent we pay for our room here on earth."</p>
              </div>
            </div>

            {/* Experience Badge */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute top-12 -right-8 bg-gold text-navy p-6 rounded-2xl shadow-xl z-20 hidden md:block"
            >
              <div className="text-3xl font-black leading-none">15+</div>
              <div className="text-[10px] uppercase font-bold tracking-widest mt-1">Years of Advocacy</div>
            </motion.div>
          </motion.div>

          {/* --- Content Side --- */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-7/12 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-gold font-bold tracking-[0.2em] uppercase text-xs">
                <Award size={16} /> Meet Our Founder
              </div>
              <h2 className="text-5xl font-bold text-navy font-serif leading-tight">
                A Visionary Heart for <span className="text-gold italic">Global Change.</span>
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-navy first-letter:mr-3 first-letter:float-left">
              Driven by a deep-seated passion for humanitarian progress, our founder established the 
              Cosmic Mother of Bongo Association to bridge the gap between resources in France 
              and the essential needs of communities in Ghana. Her journey is one of resilience, 
              faith, and an unwavering commitment to the underprivileged.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Global Humanitarian Leader",
                "Educational Reform Advocate",
                "Community Empowerment Expert",
                "Cultural Bridge Builder"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-gold shrink-0" size={20} />
                  <span className="text-navy font-semibold text-sm">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-100 flex items-center gap-6">
              <div>
                <h4 className="text-xl font-bold text-navy">Hajia Najat Azu</h4>
                <p className="text-gray-500 text-sm">Founder & Visionary, Cosmic Mother Association of Bongo</p>
              </div>
              <div className="h-12 w-px bg-gray-200 hidden md:block" />
              <div className="hidden md:flex gap-4">
                <Heart className="text-gold fill-gold/20" />
                <span className="text-gray-400 text-xs italic max-w-37.5">
                  Dedicated to making a difference.
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}