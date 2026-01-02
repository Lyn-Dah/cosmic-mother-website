
// import React from "react";
// import { motion } from "framer-motion";
// import { CheckCircle, ShieldCheck, Users, Leaf } from "lucide-react"; // Added these imports
// import productImage1 from "../assets/images/product5.jpg";

// export default function AboutSection() {
//   const benefits = [
//     { icon: <CheckCircle className="text-green-600 w-8 h-8" />, title: "Effective Support", text: "Proven initiatives that ensure real change in the community." },
//     { icon: <ShieldCheck className="text-green-600 w-8 h-8" />, title: "Safe & Transparent", text: "Every donation is handled with the highest level of integrity." },
//     { icon: <Users className="text-green-600 w-8 h-8" />, title: "Empowering Lives", text: "Focusing on long-term growth for the needy and vulnerable." },
//     { icon: <Leaf className="text-green-600 w-8 h-8" />, title: "Sustainable Future", text: "Building programs that preserve dignity and promote self-sufficiency." },
//   ];

//   return (
//     <section className="py-20 bg-linear-to-b from-white to-gray-100">
//       <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
//         <motion.h2
//           className="text-4xl font-extrabold text-gray-800 mb-6"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//         >
//           🌿 About Us
//         </motion.h2>
//         <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
//           Cosmic Mother of Bongo Association, France is a humanitarian organization dedicated to caring for the needy and uplifting vulnerable communities.
//           We believe in empowering lives through compassion, innovation, and shared values.
// // Our work is guided by three core objectives:
// // Human Innovation – Supporting initiatives that improve the well-being, creativity, and potential of individuals and communities.
// // Educational Solidarity – Promoting access to learning, training, and educational support for children, youth, and adults.
// // Cultural Projection – Preserving and celebrating cultural heritage while promoting unity, identity, and cross-cultural understanding.
// // Together, we strive to create meaningful impact and inspire positive change across generations.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
//           {benefits.map((item, index) => (
//             <motion.div
//               key={index}
//               className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 * index }}
//               whileHover={{ scale: 1.05 }}
//             >
//               <div className="mb-4">{item.icon}</div>
//               <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
//               <p className="text-gray-600 text-sm mt-2">{item.text}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import React from "react";
// import { motion } from "framer-motion";
// import { Heart, Globe, ShieldCheck, Zap } from "lucide-react";

// const missionPillars = [
//   { 
//     icon: <Heart className="text-emerald-500" />, 
//     title: "Compassion First", 
//     desc: "Putting the human element at the center of every relief effort." 
//   },
//   { 
//     icon: <Globe className="text-blue-500" />, 
//     title: "Global Reach", 
//     desc: "Bridging resources from France to communities in need worldwide." 
//   },
//   { 
//     icon: <ShieldCheck className="text-emerald-500" />, 
//     title: "Accountability", 
//     desc: "100% transparency in how every euro is spent for the needy." 
//   },
//   { 
//     icon: <Zap className="text-yellow-500" />, 
//     title: "Immediate Action", 
//     desc: "Rapid response teams for food security and emergency aid." 
//   },
// ];

// export default function AboutSection() {
//   return (
//     <section className="py-24 bg-white">
//       <div className="container mx-auto px-6">
//         <div className="flex flex-col lg:flex-row items-center gap-16">
          
//           {/* Left Side: Impactful Text */}
//           <div className="lg:w-1/2">
//             <h2 className="text-sm font-bold tracking-[0.2em] text-emerald-600 uppercase mb-4">
//               Our Association
//             </h2>
//             <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
//               Small acts of kindness, <br />
//               <span className="text-emerald-600 underline decoration-emerald-200 underline-offset-8">huge global impact.</span>
//             </h3>
//             <p className="text-gray-600 text-lg leading-relaxed mb-8">
//               Based in France, Cosmic Mother of Bongo Association is more than just a charity. 
//               We are a movement dedicated to restoring dignity to the marginalized through 
//               sustainable humanitarian programs.
//             </p>
//             <button className="text-emerald-600 font-bold flex items-center gap-2 group">
//               Read our full story 
//               <span className="group-hover:translate-x-2 transition-transform">→</span>
//             </button>
//           </div>

//           {/* Right Side: Modern Grid */}
//           <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {missionPillars.map((item, i) => (
//               <motion.div 
//                 key={i}
//                 whileHover={{ y: -10 }}
//                 className="p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300"
//               >
//                 <div className="w-12 h-12 bg-white rounded-2xl shadow-inner flex items-center justify-center mb-6">
//                   {item.icon}
//                 </div>
//                 <h4 className="text-xl font-bold mb-2">{item.title}</h4>
//                 <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, Users, Globe } from "lucide-react";

const pillars = [
  { icon: <Heart size={32} />, title: "Compassion", text: "Direct support for the needy." },
  { icon: <ShieldCheck size={32} />, title: "Transparency", text: "Ethical handling of every donation." },
  { icon: <Users size={32} />, title: "Unity", text: "Building stronger communities together." },
  { icon: <Globe size={32} />, title: "Outreach", text: "Bridging aid from France to the world." },
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-soft-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-3">Our Values</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-navy">Small Acts, Big Impact</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {pillars.map((item, idx) => (
            <motion.div 
              key={idx}
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
      </div>
    </section>
  );
}