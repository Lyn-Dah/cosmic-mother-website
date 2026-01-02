// import React from "react";
// import { motion } from "framer-motion";
// import { Heart, Globe, Users } from "lucide-react";
// import founder from "../assets/images/founder.jpg";

// const innovators = [
//   {
//     name: "Hajia Najat Azu",
//     role: "Founder & President",
//     image: founder,
//     bio: "A dedicated philanthropist with a vision to uplift the marginalized. Hajia Najat, leads the association with a focus on sustainable humanitarian aid and community development."
//   },
// ];

// export default function FounderSection() {
//   return (
//     <section id="founder" className="bg-gray-50 py-20 px-6">
//       <div className="container mx-auto text-center">
//         <motion.h2
//           className="text-4xl font-extrabold text-gray-800 mb-6"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           🤝 Meet Our Founder
//         </motion.h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto mt-6">
//           <motion.div
//             className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500 flex items-start gap-4"
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <Heart className="text-red-500 w-12 h-12 shrink-0" />
//             <p className="text-gray-700 text-lg leading-relaxed text-left">
//               Our mission is to bridge the gap for those in need. We strive to make humanitarian 
//               support accessible, ensuring that every individual we reach has a path toward 
//               a dignified and hopeful future.
//             </p>
//           </motion.div>

//           <motion.div
//             className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 flex items-start gap-4"
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <Users className="text-blue-500 w-12 h-12 shrink-0" />
//             <p className="text-gray-700 text-lg leading-relaxed text-left">
//               Through "Solidarité aux Démunis," we organize local and international 
//               outreach programs that provide food, education, and healthcare support 
//               to vulnerable communities.
//             </p>
//           </motion.div>
//         </div>

//         <div className="flex justify-center mt-12">
//           {innovators.map((innovator, index) => (
//             <motion.div
//               key={index}
//               className="bg-white shadow-xl rounded-lg overflow-hidden p-8 max-w-sm transform transition-all hover:scale-105"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//             >
//               <img
//                 src={innovator.image}
//                 alt={innovator.name}
//                 className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-green-500"
//               />
//               <h3 className="text-2xl font-semibold text-gray-800">{innovator.name}</h3>
//               <p className="text-green-600 font-medium mb-3">{innovator.role}</p>
//               <p className="text-gray-600 text-sm leading-relaxed">{innovator.bio}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import founderImg from "../assets/images/founder.jpg";

export default function FounderSection() {
  return (
    <section className="py-24 bg-navy text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2 relative">
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold rounded-2xl"></div>
          <img src={founderImg} alt="Agnes Joy Aryee" className="relative z-10 rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" />
        </div>
        
        <div className="md:w-1/2">
          <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Leadership</h4>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Hajia Najat Azu</h2>
          <p className="text-gray-400 text-lg italic mb-6">"Our mission is to ensure no one is left behind in the shadows of society."</p>
          <p className="text-gray-300 leading-relaxed mb-8">
            Hajia Najat Azu leads the Cosmic Mother of Bongo Association with a singular vision: to create a 
            global network of solidarity. Her background in strategic leadership ensures that 
            every project is handled with precision and heart.
          </p>
          <div className="h-1 w-20 bg-gold"></div>
        </div>
      </div>
    </section>
  );
}