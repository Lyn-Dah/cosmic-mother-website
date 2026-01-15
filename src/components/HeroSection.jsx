// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, Heart, X, Target, Eye, ShieldCheck } from "lucide-react";
// import heroImage from "../assets/images/hero10.jpg";

// export default function HeroSection({ onDonateClick }) {
//   const [isMissionOpen, setIsMissionOpen] = useState(false);

//   return (
//     <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-navy">
//       <div className="absolute inset-0">
//         <img src={heroImage} className="w-full h-full object-cover opacity-60" alt="Impact" />
//         <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/40 to-transparent"></div>
//       </div>

//       <div className="relative z-10 container mx-auto px-6 lg:px-12">
//         <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
//           <span className="inline-block px-4 py-1 rounded-full border border-gold/50 text-gold text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
//             Solidarité aux Démunis
//           </span>
//           <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
//             Providing a <span className="text-gold italic">Golden Future</span> <br />
//             for those in need.
//           </h1>
//           <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
//             Cosmic Mother of Bongo Association combines compassion with action to support 
//             vulnerable communities across France and beyond.
//           </p>

//           <div className="flex flex-wrap gap-5">
//             {/* Fixed Donate Button */}
//             <button 
//               onClick={onDonateClick}
//               className="px-8 py-4 bg-gold hover:bg-white text-navy font-bold rounded-full transition-all flex items-center gap-2 shadow-lg shadow-gold/20 active:scale-95"
//             >
//               <Heart size={20} fill="currentColor" /> Donate Now
//             </button>

//             {/* Fixed Mission Button */}
//             <button 
//               onClick={() => setIsMissionOpen(true)}
//               className="px-8 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-md active:scale-95"
//             >
//               Our Mission
//             </button>
//           </div>
//         </motion.div>
//       </div>

//       {/* POP-UP MISSION INFO */}
//       <AnimatePresence>
//         {isMissionOpen && (
//           <div className="fixed inset-0 z-300 flex items-center justify-center p-4">
//             <motion.div 
//               initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//               onClick={() => setIsMissionOpen(false)}
//               className="absolute inset-0 bg-navy/90 backdrop-blur-xl"
//             />
            
//             <motion.div 
//               initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
//               className="relative w-full max-w-3xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl"
//             >
//               {/* Close Button */}
//               <button 
//                 onClick={() => setIsMissionOpen(false)}
//                 className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors text-navy z-10"
//               >
//                 <X size={24} />
//               </button>

//               <div className="grid grid-cols-1 md:grid-cols-2">
//                 <div className="bg-navy p-10 text-white">
//                   <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-4">Core Values</h4>
//                   <h3 className="text-3xl font-bold mb-6">The Cosmic Mission</h3>
//                   <div className="space-y-6">
//                     <div className="flex gap-4">
//                       <Target className="text-gold shrink-0" />
//                       <div>
//                         <p className="font-bold text-sm">Direct Action</p>
//                         <p className="text-gray-400 text-xs">Providing food and medical supplies directly to families.</p>
//                       </div>
//                     </div>
//                     <div className="flex gap-4">
//                       <Eye className="text-gold shrink-0" />
//                       <div>
//                         <p className="font-bold text-sm">Transparency</p>
//                         <p className="text-gray-400 text-xs">Ensuring every cent of donation is tracked and utilized.</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-10 flex flex-col justify-center">
//                   <p className="text-navy/70 leading-relaxed mb-6 italic">
//                     "Our association was born out of a desire to bridge the gap between French solidarity and African needs. We don't just send aid; we build futures."
//                   </p>
//                   <p className="text-navy font-bold text-sm">— Cosmic Mother Team</p>
//                   <button 
//                     onClick={() => { setIsMissionOpen(false); onDonateClick(); }}
//                     className="mt-8 bg-gold text-navy py-3 px-6 rounded-xl font-bold hover:shadow-lg transition-all"
//                   >
//                     Support Our Mission
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>

//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
//         <ChevronDown size={32} />
//       </div>
//     </section>
//   );
// }



import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Users, X, Target, Eye, ShieldCheck, CheckCircle, ArrowRight } from "lucide-react";
import heroImage from "../assets/images/hero10.jpg";

export default function HeroSection({ onDonateClick }) {
  const [isMissionOpen, setIsMissionOpen] = useState(false);
  const [isJoinOpen, setIsJoinOpen] = useState(false);

  // Replace this with your actual Google Form Link
  const MEMBERSHIP_FORM_LINK = "https://forms.gle/cD3dq6fJDSZbCszaA";

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <img src={heroImage} className="w-full h-full object-cover opacity-60" alt="Impact" />
        <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/40 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-block px-4 py-1 rounded-full border border-gold/50 text-gold text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            Solidarité aux Démunis
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Providing a <span className="text-gold italic">Golden Future</span> <br />
            for those in need.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Cosmic Mother of Bongo Association combines compassion with action to support 
            vulnerable communities across France and beyond.
          </p>

          <div className="flex flex-wrap gap-5">
            {/* Join Us Button */}
            <button 
              onClick={() => setIsJoinOpen(true)}
              className="px-8 py-4 bg-gold hover:bg-white text-navy font-bold rounded-full transition-all flex items-center gap-2 shadow-lg shadow-gold/20 active:scale-95"
            >
              <Users size={20} /> Join Us
            </button>

            {/* Mission Button */}
            <button 
              onClick={() => setIsMissionOpen(true)}
              className="px-8 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-md active:scale-95"
            >
              Our Mission
            </button>
          </div>
        </motion.div>
      </div>

      {/* --- MODAL: JOIN US / MEMBERSHIP BENEFITS --- */}
      <AnimatePresence>
        {isJoinOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsJoinOpen(false)}
              className="absolute inset-0 bg-navy/90 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-4xl overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setIsJoinOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full text-navy z-10"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6 text-gold">
                  <Users size={32} />
                  <h3 className="text-3xl font-bold text-navy">Become a Member</h3>
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  Join a community dedicated to humanitarian excellence. As a member of the Cosmic Mother Association, you don't just support a cause—you become part of a family making real change.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {[
                    "Networking with Global Philanthropists",
                    "Direct Involvement in Projects",
                    "Official Membership Certification",
                    "Quarterly Impact Reports",
                    "Exclusive Event Invitations",
                    "Monthly Commitment €10 Membership Dues"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="text-gold mt-1 shrink-0" size={16} />
                      <span className="text-sm font-semibold text-navy/80">{benefit}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href={MEMBERSHIP_FORM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-navy text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-gold hover:text-navy transition-all shadow-xl"
                >
                  Complete Membership Form <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- MODAL: MISSION (Original) --- */}
      <AnimatePresence>
        {isMissionOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsMissionOpen(false)}
              className="absolute inset-0 bg-navy/90 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <button onClick={() => setIsMissionOpen(false)} className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full text-navy z-10">
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-navy p-10 text-white">
                  <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-4">Core Values</h4>
                  <h3 className="text-3xl font-bold mb-6">The Cosmic Mission</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <Target className="text-gold shrink-0" />
                      <div>
                        <p className="font-bold text-sm">Direct Action</p>
                        <p className="text-gray-400 text-xs">Providing food and medical supplies directly to families.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Eye className="text-gold shrink-0" />
                      <div>
                        <p className="font-bold text-sm">Transparency</p>
                        <p className="text-gray-400 text-xs">Ensuring every cent of donation is tracked and utilized.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-10 flex flex-col justify-center">
                  <p className="text-navy/70 leading-relaxed mb-6 italic">
                    "Our association was born out of a desire to bridge the gap between French solidarity and African needs. We don't just send aid; we build futures."
                  </p>
                  <p className="text-navy font-bold text-sm">— Cosmic Mother Team</p>
                  <button 
                    onClick={() => { setIsMissionOpen(false); onDonateClick(); }}
                    className="mt-8 bg-gold text-navy py-3 px-6 rounded-xl font-bold hover:shadow-lg transition-all"
                  >
                    Support Our Mission
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}