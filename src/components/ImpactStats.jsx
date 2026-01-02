import React from "react";
import { motion } from "framer-motion";
import { Users, Globe, Utensils, GraduationCap } from "lucide-react";

const stats = [
  { 
    id: 1, 
    icon: <Users className="text-gold" size={32} />, 
    value: "5,000+", 
    label: "Lives Impacted", 
    desc: "Vulnerable individuals supported across regions." 
  },
  { 
    id: 2, 
    icon: <Utensils className="text-gold" size={32} />, 
    value: "12,500", 
    label: "Meals Shared", 
    desc: "Nutritional support provided to families in need." 
  },
  { 
    id: 3, 
    icon: <Globe className="text-gold" size={32} />, 
    value: "12", 
    label: "Global Projects", 
    desc: "Active humanitarian missions from France to the world." 
  },
  { 
    id: 4, 
    icon: <GraduationCap className="text-gold" size={32} />, 
    value: "85%", 
    label: "Success Rate", 
    desc: "Of our students completed their basic education." 
  },
];

export default function ImpactStats() {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gold rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-gold/50 transition-colors duration-500">
                  {stat.icon}
                </div>
              </div>
              <h4 className="text-5xl font-bold text-white mb-2 tracking-tight">
                {stat.value}
              </h4>
              <p className="text-gold font-bold uppercase tracking-widest text-xs mb-3">
                {stat.label}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed max-w-50 mx-auto">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}