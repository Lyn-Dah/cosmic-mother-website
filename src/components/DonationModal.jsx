// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, Heart, CreditCard, Landmark } from "lucide-react";

// export default function DonationModal({ isOpen, onClose }) {
//   const amounts = ["€10", "€25", "€50", "€100"];

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           {/* Backdrop */}
//           <motion.div
//             className="fixed inset-0 bg-black/60 z-60 backdrop-blur-sm"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//           />

//           {/* Modal Card */}
//           <motion.div
//             className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-white rounded-2xl shadow-2xl z-70 overflow-hidden"
//             initial={{ scale: 0.9, opacity: 0, y: "-45%" }}
//             animate={{ scale: 1, opacity: 1, y: "-50%" }}
//             exit={{ scale: 0.9, opacity: 0, y: "-45%" }}
//           >
//             <div className="bg-green-600 p-6 text-white text-center relative">
//               <button onClick={onClose} className="absolute right-4 top-4 hover:bg-green-700 p-1 rounded-full transition">
//                 <X size={24} />
//               </button>
//               <Heart className="mx-auto mb-2 fill-white" size={40} />
//               <h3 className="text-2xl font-bold">Support Our Cause</h3>
//               <p className="text-green-100 text-sm">Your kindness changes lives.</p>
//             </div>

//             <div className="p-6">
//               <label className="text-gray-700 font-semibold mb-3 block">Select Amount</label>
//               <div className="grid grid-cols-2 gap-3 mb-6">
//                 {amounts.map((amt) => (
//                   <button key={amt} className="border-2 border-gray-200 py-2 rounded-lg font-bold hover:border-green-500 hover:text-green-600 transition">
//                     {amt}
//                   </button>
//                 ))}
//               </div>

//               <div className="space-y-4">
//                 <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700">
//                   <CreditCard size={20} /> Donate with Card
//                 </button>
                
//                 <div className="border-t pt-4">
//                   <p className="text-xs text-gray-500 uppercase font-bold mb-2">Direct Bank Transfer</p>
//                   <div className="bg-gray-50 p-3 rounded-lg flex items-start gap-3">
//                     <Landmark className="text-gray-400 mt-1" size={18} />
//                     <div className="text-sm text-gray-700">
//                       <p><strong>Bank:</strong> [Insert Bank Name]</p>
//                       <p><strong>IBAN:</strong> FR76 0000 0000 0000...</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }
// 


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CreditCard, Landmark, Smartphone, Copy, ExternalLink } from "lucide-react";

export default function DonationModal({ isOpen, onClose, onSuccess }) {
  const [method, setMethod] = useState("card"); // card, transfer, momo
  const [copied, setCopied] = useState(false);

  const RAFFLE_LINK = "https://paystack.com/buy/cosmic-mother-donation-usxhhl";

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePaystackRedirect = () => {
    window.open(RAFFLE_LINK, "_blank", "noopener,noreferrer");
    // We call onSuccess to show the 'Thank You' modal after they click redirect
    onSuccess();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-200 flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-navy/90 backdrop-blur-sm" />
          
          <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative w-full max-w-xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl">
            
            {/* Header */}
            <div className="bg-navy p-8 text-white relative">
              <button onClick={onClose} className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"><X size={24} /></button>
              <h3 className="text-2xl font-bold italic tracking-tight">Support <span className="text-gold">Cosmic Mother</span></h3>
              <p className="text-gray-400 text-xs font-medium mt-1 uppercase tracking-widest">Select Payment Method</p>
            </div>

            {/* Payment Method Tabs */}
            <div className="flex border-b border-gray-100">
              {[
                { id: "card", icon: <CreditCard size={18} />, label: "Visa/Card" },
                { id: "momo", icon: <Smartphone size={18} />, label: "Mobile Money" },
                { id: "transfer", icon: <Landmark size={18} />, label: "Bank Transfer" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setMethod(tab.id)}
                  className={`flex-1 py-5 flex flex-col items-center gap-1 text-[10px] font-black uppercase tracking-tighter transition-all ${
                    method === tab.id ? "text-navy border-b-2 border-gold bg-gold/5" : "text-gray-400 hover:bg-gray-50"
                  }`}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>

            <div className="p-10">
              {/* VISA / CARD SECTION - REDIRECT TO PAYSTACK */}
              {method === "card" && (
                <div className="space-y-6 text-center">
                  <div className="py-8 px-4 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      You will be redirected to our secure <span className="font-bold">Paystack</span> storefront to complete your ticket purchase.
                    </p>
                  </div>
                  <button 
                    onClick={handlePaystackRedirect} 
                    className="w-full bg-navy text-gold py-4 rounded-xl font-bold shadow-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform active:scale-95"
                  >
                    <CreditCard size={18} /> Pay with Card <ExternalLink size={14} />
                  </button>
                </div>
              )}

              {/* MOBILE MONEY SECTION - REDIRECT TO PAYSTACK */}
              {method === "momo" && (
                <div className="space-y-6 text-center">
                   <div className="p-6 bg-yellow-50 rounded-2xl border border-yellow-100 flex items-center justify-center gap-4">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-white" />
                        <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-white" />
                        <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white" />
                      </div>
                      <p className="text-sm font-bold text-navy">Supports MTN, Telecel & AirtelTigo</p>
                   </div>
                   <button 
                    onClick={handlePaystackRedirect} 
                    className="w-full bg-navy text-gold py-4 rounded-xl font-bold shadow-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform active:scale-95"
                  >
                    <Smartphone size={18} /> Pay with Mobile Money <ExternalLink size={14} />
                  </button>
                </div>
              )}

              {/* BANK TRANSFER SECTION - REMAIN MANUAL */}
              {method === "transfer" && (
                <div className="space-y-4">
                  <div className="p-5 bg-gray-50 rounded-2xl space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Bank Name:</span>
                      <span className="font-bold text-navy">Société Générale</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Account Name:</span>
                      <span className="font-bold text-navy text-right text-[11px]">Cosmic Mother of Bongo Association</span>
                    </div>
                    <div className="flex flex-col gap-2 pt-2">
                      <span className="text-[10px] text-gray-400 uppercase font-bold">IBAN / Account Number</span>
                      <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-gray-200">
                        <span className="text-xs font-mono font-bold tracking-tight">FR76 3000 3020 4050 6070</span>
                        <button onClick={() => copyToClipboard("FR763000302040506070")} className="text-gold hover:text-navy transition-colors">
                          <Copy size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button onClick={onSuccess} className="w-full bg-navy text-gold py-4 rounded-xl font-bold hover:bg-navy/90 transition-all">
                    I've Sent the Transfer
                  </button>
                </div>
              )}

              {copied && (
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center text-green-600 font-bold text-xs mt-4">
                  Account Details Copied!
                </motion.p>
              )}
              
              <p className="text-center text-[10px] text-gray-400 mt-8 uppercase tracking-[0.2em] opacity-50">
                Secure Donations • Cosmic Mother Association
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}