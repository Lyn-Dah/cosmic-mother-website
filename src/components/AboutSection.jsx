import React from "react";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, Users, Globe } from "lucide-react";
import aboutImage from "../assets/images/about-mission.jpg";

const pillars = [
  { icon: <Heart size={32} />, title: "Compassion", text: "Direct support for the needy." },
  { icon: <ShieldCheck size={32} />, title: "Transparency", text: "Ethical handling of every donation." },
  { icon: <Users size={32} />, title: "Unity", text: "Building stronger communities together." },
  { icon: <Globe size={32} />, title: "Outreach", text: "Bridging aid from France to the world." },
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-[#fcfcfc] overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-bold tracking-widest uppercase text-sm mb-3"
          >
            Our Core Values
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-navy"
          >
            Small Acts, Big Impact
          </motion.h3>
        </div>

        {/* --- Pillars Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
          {pillars.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-10 rounded-2xl bg-white border border-gray-100 shadow-sm text-center group transition-all hover:border-gold/30 hover:shadow-xl"
            >
              <div className="text-gold mb-6 flex justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-navy mb-3">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* --- Narrative Write-up Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-navy font-serif italic">
              Empowering Communities <br /> 
              <span className="text-gold not-italic">Beyond Borders.</span>
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              The Cosmic Mother of Bongo Association was founded on a simple yet powerful belief: 
              that geography should never be a barrier to human kindness. Based in France but 
              deeply rooted in the needs of global communities, we serve as a vital bridge 
              for resources and hope.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our initiatives range from supporting local schools in Ghana to providing direct 
              relief for families in need. By combining French logistical excellence with 
              on-the-ground local knowledge, we ensure that every contribution creates 
              a measurable, sustainable difference in the lives of those who need it most.
            </p>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gold/20 flex items-center justify-center overflow-hidden">
                     <Heart size={16} className="text-gold" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-navy">
                Joined by over <span className="text-gold font-bold">500+</span> supporters worldwide
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square md:aspect-video rounded-3xl overflow-hidden border-8 border-white shadow-2xl relative z-10">
              <img 
                src={aboutImage} 
                alt="Cosmic Mother of Bongo Association Impact" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Gold Accent Box */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold rounded-3xl z-0 opacity-20" />
            {/* Decorative Navy Accent Box */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-navy rounded-3xl z-0 opacity-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}