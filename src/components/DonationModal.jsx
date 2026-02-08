//
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Landmark, Smartphone, Copy, CheckCircle2, MessageSquare, Heart } from "lucide-react";

export default function DonationModal({ isOpen, onClose, onSuccess }) {
  const [method, setMethod] = useState("momo"); 
  const [copied, setCopied] = useState(false);

  const IBAN_NUMBER = "FR06 2004 1000 0141 5126 4Z02 026";
  const MOMO_NUMBER = "0598628097";

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-1000 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={onClose} 
            className="absolute inset-0 bg-navy/90 backdrop-blur-md" 
          />
          
          <motion.div 
            initial={{ scale: 0.9, y: 20 }} 
            animate={{ scale: 1, y: 0 }} 
            exit={{ scale: 0.9, y: 20 }} 
            className="relative w-full max-w-lg bg-white rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            
            {/* Header */}
            <div className="bg-navy p-8 text-white relative">
              <button onClick={onClose} className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
                <X size={24} />
              </button>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-gold/20 rounded-lg text-gold">
                  <Heart size={20} fill="currentColor" />
                </div>
                <h3 className="text-2xl font-bold italic tracking-tight">Direct Support</h3>
              </div>
              <p className="text-gray-400 text-xs font-medium uppercase tracking-widest">
                Support the Atampinting JHS Project
              </p>
            </div>

            {/* Method Toggle */}
            <div className="flex p-2 bg-gray-50 m-6 rounded-2xl border border-gray-100">
              <button
                onClick={() => setMethod("momo")}
                className={`flex-1 py-3 rounded-xl flex items-center justify-center gap-2 text-xs font-bold transition-all ${
                  method === "momo" ? "bg-white text-navy shadow-sm" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <Smartphone size={16} /> Mobile Money
              </button>
              <button
                onClick={() => setMethod("transfer")}
                className={`flex-1 py-3 rounded-xl flex items-center justify-center gap-2 text-xs font-bold transition-all ${
                  method === "transfer" ? "bg-white text-navy shadow-sm" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <Landmark size={16} /> Bank Transfer
              </button>
            </div>

            <div className="px-8 pb-10">
              {/* MOBILE MONEY DETAILS */}
              {method === "momo" && (
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Scan or Copy Number</p>
                    <div className="p-6 bg-yellow-50 rounded-3xl border border-yellow-100 inline-block w-full">
                      <p className="text-3xl font-mono font-black text-navy tracking-tighter mb-1">{MOMO_NUMBER}</p>
                      <p className="text-sm font-bold text-yellow-700">Name: AS-AZU 90 Ventures</p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => copyToClipboard(MOMO_NUMBER)}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-navy text-gold rounded-2xl font-bold hover:bg-navy/90 transition-all shadow-lg"
                  >
                    {copied ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                    {copied ? "Number Copied!" : "Copy MoMo Number"}
                  </button>
                </div>
              )}

              {/* BANK DETAILS */}
              {method === "transfer" && (
                <div className="space-y-6">
                   <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 space-y-4">
                      <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="text-gray-400 text-xs font-bold uppercase">Bank</span>
                        <span className="text-navy font-bold text-sm">La poste</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="text-gray-400 text-xs font-bold uppercase">Account</span>
                        <span className="text-navy font-bold text-xs text-right leading-tight">Cosmic Mother of Bongo Association</span>
                      </div>
                      <div className="space-y-2">
                        <span className="text-gray-400 text-xs font-bold uppercase">IBAN</span>
                        <div className="bg-white p-4 rounded-xl border border-gray-200 flex justify-between items-center group">
                          <span className="font-mono text-[11px] font-bold text-navy break-all">{IBAN_NUMBER}</span>
                          <button onClick={() => copyToClipboard(IBAN_NUMBER)} className="text-gold hover:scale-110 transition-transform ml-2">
                             {copied ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                          </button>
                        </div>
                      </div>
                   </div>
                </div>
              )}

              {/* Verified Footer Info */}
              <div className="mt-8 p-4 bg-amber-50 rounded-2xl flex items-start gap-4 border border-amber-100">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-amber-600">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <p className="text-[11px] text-amber-900 leading-snug">
                    <strong>Reference:</strong> Please use <span className="underline italic">"Cosmic Mother"</span> as your transfer reference.
                  </p>
                  <p className="text-[11px] text-amber-800 mt-1 leading-snug">
                    WhatsApp transfer confirmation to: <strong>+33 7 50 30 29 10</strong>
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button 
                  onClick={onClose}
                  className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-navy transition-colors"
                >
                  I've completed my donation
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}