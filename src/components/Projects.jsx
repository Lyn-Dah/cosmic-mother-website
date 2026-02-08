import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, X, Calendar, Heart, Building, Sparkles, Target, Gift, 
  MapPin, GraduationCap, Droplets, Construction, ArrowRight, FileText, Copy, CheckCircle2 
} from "lucide-react";

// Keep your existing imports
import event1 from "../assets/images/event1.jpg";
import event2 from "../assets/images/event2.jpg";
import event3 from "../assets/images/event3.jpg";
import event4 from "../assets/images/event4.jpg";
import event5 from "../assets/images/event5.jpg";
import event7 from "../assets/images/event7.jpg";
import event8 from "../assets/images/event8.jpg";
import event9 from "../assets/images/event9.jpg";

const getVideoPath = (videoName) => `/videos/${videoName}`;

const featuredProject = {
  title: "Atampinting JHS Block & Sanitation",
  location: "Bongo District, Upper East Region, Ghana",
  goal: 143090,
  raised: 5400, 
  description: "Construction and furnishing of a 1No. Junior High School (JHS) block, elevated Polytank stand, borehole and a 1No. 6-seater WC toilet.",
  deliverables: [
    { icon: <Building size={18} />, text: "JHS Classroom Block" },
    { icon: <Droplets size={18} />, text: "Borehole & Polytank" },
    { icon: <Construction size={18} />, text: "6-Seater WC Toilet" }
  ]
};

const mediaCategories = [
  {
    id: "atampinting",
    title: "Atampinting Project",
    icon: <Construction className="text-amber-600" />,
    description: "Our current $143k fundraising focus",
    items: [
      { id: 11, type: "video", src: getVideoPath("video3.mp4"), title: "Current School State" },
      { id: 12, type: "video", src: getVideoPath("video4.mp4"), title: "Sanitation Challenges" },
      { id: 13, type: "video", src: getVideoPath("video5.mp4"), title: "Headmaster's Message" },
    ]
  },
  {
    id: "events",
    title: "Official Gallery",
    icon: <Calendar className="text-amber-600" />,
    description: "Diplomatic & Government meetings",
    items: [
      { id: 1, type: "image", src: event1, title: "Meeting with CLVA Presidency" },
      { id: 8, type: "image", src: event7, title: "With Ghana Ambassador to France" },
      { id: 4, type: "image", src: event5, title: "Hajia Najat, Founder" },
    ]
  },
  {
    id: "relief",
    title: "Relief & Support",
    icon: <Heart className="text-amber-600" />,
    description: "Donations and field missions",
    items: [
      { id: 3, type: "image", src: event2, title: "Educational Supplies" },
      { id: 10, type: "image", src: event9, title: "Impact on Local Youth" },
      { id: 16, type: "video", src: getVideoPath("video9.mp4"), title: "Mission Distribution" },
    ]
  }
];

const VideoThumbnail = ({ item }) => {
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef(null);
  return (
    <div 
      className="relative w-full h-full bg-slate-900"
      onMouseEnter={() => { setIsHovering(true); videoRef.current?.play().catch(()=>{}); }}
      onMouseLeave={() => { setIsHovering(false); videoRef.current?.pause(); }}
    >
      <video ref={videoRef} src={item.src} muted loop playsInline className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center transition-transform ${isHovering ? 'scale-110' : 'scale-100'}`}>
          <Play fill="currentColor" size={20} className="ml-1" />
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("atampinting");
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [isProposalOpen, setIsProposalOpen] = useState(false); // NEW STATE
  const [copied, setCopied] = useState(false);

  const progress = (featuredProject.raised / featuredProject.goal) * 100;

  const copyIban = () => {
    navigator.clipboard.writeText("FR06 2004 1000 0141 5126 4Z02 026");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* --- PART 1: ATAMPINTING PROPOSAL HEADER --- */}
        <div className="mb-20 grid lg:grid-cols-2 gap-12 items-center bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles size={14} /> Active Proposal
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif leading-tight">
              Building the <span className="text-amber-600">Atampinting</span> <br/>Future
            </h2>
            <div className="flex items-center gap-2 text-slate-500 mb-6">
              <MapPin size={18} className="text-amber-600" />
              <span className="font-medium">{featuredProject.location}</span>
            </div>
            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
              {featuredProject.description}
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm font-bold text-slate-900">
                <span>Fundraising Progress</span>
                <span>{progress.toFixed(1)}%</span>
              </div>
              <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }} whileInView={{ width: `${progress}%` }} transition={{ duration: 1.5 }}
                  className="h-full bg-amber-500"
                />
              </div>
              <div className="flex justify-between text-xs text-slate-500 font-medium">
                <span>Goal: ${featuredProject.goal.toLocaleString()}</span>
                <span className="text-amber-600 font-bold tracking-wider">GHS 1,620,000</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
               <button 
                 onClick={() => setIsDonateModalOpen(true)}
                 className="px-8 py-4 bg-amber-500 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-900 hover:shadow-xl transition-all active:scale-95"
               >
                  <Heart size={20} fill="currentColor" /> Donate for Atampinting
               </button>
               {/* LINKED BUTTON */}
               <button 
                 onClick={() => setIsProposalOpen(true)}
                 className="px-6 py-4 border border-slate-200 text-slate-600 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-colors"
               >
                  <FileText size={18} /> View Full Proposal
               </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
             {featuredProject.deliverables.map((item, idx) => (
               <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:border-amber-200 transition-all">
                  <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold text-slate-800 leading-tight">{item.text}</span>
               </div>
             ))}
             <div className="bg-amber-500 p-6 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center text-white">
                <GraduationCap size={32} className="mb-2" />
                <span className="text-xs font-bold uppercase tracking-widest">Education First</span>
             </div>
          </div>
        </div>

        {/* --- PART 2: THE GALLERY FILTER --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {mediaCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all flex items-center gap-2 border ${
                activeCategory === cat.id ? 'bg-amber-500 border-amber-500 text-white shadow-lg shadow-amber-200' : 'bg-white border-slate-200 text-slate-600 hover:border-amber-300'
              }`}
            >
              {cat.icon} {cat.title}
            </button>
          ))}
        </div>

        {/* --- PART 3: MEDIA GRID --- */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {mediaCategories.find(c => c.id === activeCategory)?.items.map((item) => (
              <motion.div
                key={item.id}
                layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                onClick={() => setSelectedMedia(item)}
                className="group cursor-pointer rounded-3xl overflow-hidden shadow-md border border-slate-100 bg-slate-50"
              >
                <div className="aspect-video relative overflow-hidden">
                  {item.type === "image" ? (
                    <img src={item.src} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={item.title} />
                  ) : (
                    <VideoThumbnail item={item} />
                  )}
                </div>
                <div className="p-5 flex justify-between items-center bg-white">
                  <h4 className="font-bold text-slate-800 text-sm">{item.title}</h4>
                  <ArrowRight size={16} className="text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- LIGHTBOX (Selected Media) --- */}
        <AnimatePresence>
          {selectedMedia && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedMedia(null)} className="absolute inset-0 bg-slate-900/95 backdrop-blur-md" />
              <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="relative max-w-5xl w-full rounded-3xl overflow-hidden z-10 bg-black shadow-2xl">
                <button onClick={() => setSelectedMedia(null)} className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full z-20"><X size={24}/></button>
                <div className="flex items-center justify-center bg-black">
                  {selectedMedia.type === "image" ? (
                    <img src={selectedMedia.src} className="max-h-[80vh] w-full object-contain" alt={selectedMedia.title} />
                  ) : (
                    <video src={selectedMedia.src} controls autoPlay className="max-h-[80vh] w-full" />
                  )}
                </div>
                <div className="p-6 bg-white"><h3 className="text-xl font-bold text-slate-900">{selectedMedia.title}</h3></div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* --- FULL PROPOSAL MODAL (OPTION 2) --- */}
        <AnimatePresence>
          {isProposalOpen && (
            <div className="fixed inset-0 z-1000 flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setIsProposalOpen(false)}
                className="absolute inset-0 bg-slate-900/90 backdrop-blur-md"
              />
              <motion.div 
                initial={{ scale: 0.95, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 30 }}
                className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col"
              >
                {/* Header */}
                <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10">
                  <div>
                    <span className="text-[10px] font-bold text-amber-600 uppercase tracking-[0.2em]">Official Document</span>
                    <h3 className="text-xl font-bold text-slate-900">Fundraising Proposal</h3>
                  </div>
                  <button onClick={() => setIsProposalOpen(false)} className="p-2 text-slate-400 hover:text-amber-600 transition-colors">
                    <X size={24} />
                  </button>
                </div>

                {/* Scrollable Content */}
                <div className="p-8 md:p-12 overflow-y-auto font-sans text-slate-600 leading-relaxed custom-scrollbar">
                  <div className="text-center mb-10">
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 uppercase leading-tight">
                      Construction and Furnishing of 1No. JHS Block, Water & Sanitation Facility
                    </h1>
                    <div className="flex justify-center gap-6 text-sm font-bold text-amber-600">
                      <span>Bongo District, Ghana</span>
                      <span>•</span>
                      <span>Cosmic Mother Initiative</span>
                    </div>
                  </div>

                  <section className="mb-10">
                    <h4 className="flex items-center gap-2 text-slate-900 font-bold mb-4 text-lg">
                      <span className="w-8 h-1 bg-amber-500 rounded-full"></span> 1. Executive Summary
                    </h4>
                    <p className="mb-4">
                      Education remains one of the most powerful tools for community development and poverty reduction. The community of Atampinting, located in the Upper East Region of Ghana, faces significant challenges in accessing quality junior high school education due to the lack of adequate school infrastructure.
                    </p>
                    <p>
                      This proposal seeks financial support in the amount of <strong>ONE MILLION SIX HUNDRED AND TWENTY Thousand Ghana Cedis (GHS 1,620,000)</strong>, equivalent to <strong>$143,090 USD</strong>, for the construction of a Junior High School (JHS) block, a mechanized borehole, an elevated Polytank, and a 6-seater WC toilet.
                    </p>
                  </section>

                  <div className="grid md:grid-cols-2 gap-4 mb-10">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <p className="text-xs font-bold text-slate-400 uppercase mb-2">Total Budget (GHS)</p>
                      <p className="text-2xl font-bold text-slate-900">1,620,000.00</p>
                    </div>
                    <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                      <p className="text-xs font-bold text-amber-600 uppercase mb-2">Total Budget (USD)</p>
                      <p className="text-2xl font-bold text-amber-700">$143,090.00</p>
                    </div>
                  </div>

                  <section className="mb-10">
                    <h4 className="flex items-center gap-2 text-slate-900 font-bold mb-4 text-lg">
                      <span className="w-8 h-1 bg-amber-500 rounded-full"></span> 2. Project Goals
                    </h4>
                    <p className="mb-4">The project aims to provide a safe, conducive, and well-equipped learning environment to:</p>
                    <ul className="space-y-3">
                      {[
                        "Improve academic outcomes for the Bongo District youth",
                        "Increase school enrollment and retention in the community",
                        "Provide dignified sanitation and clean water access",
                        "Equip classrooms with modern furniture and supplies"
                      ].map((goal, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-amber-500 mt-1 shrink-0" />
                          <span>{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>

                {/* Footer Action */}
                <div className="p-8 bg-slate-50 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-slate-500 font-medium text-center md:text-left">
                    Ready to make an impact? You can support this project directly today.
                  </p>
                  <button 
                    onClick={() => { setIsProposalOpen(false); setIsDonateModalOpen(true); }}
                    className="w-full md:w-auto bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-amber-500 transition-all flex items-center justify-center gap-2"
                  >
                    <Heart size={18} fill="currentColor" /> Donate to this Project
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* --- DONATION MODAL --- */}
        <AnimatePresence>
          {isDonateModalOpen && (
            <div className="fixed inset-0 z-2000 flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setIsDonateModalOpen(false)}
                className="absolute inset-0 bg-slate-900/90 backdrop-blur-md"
              />
              <motion.div 
                initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
                className="relative w-full max-w-md bg-white rounded-[2.5rem] overflow-hidden shadow-2xl p-8"
              >
                <button onClick={() => setIsDonateModalOpen(false)} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-navy transition-colors"><X size={24} /></button>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600"><Heart size={32} fill="currentColor" /></div>
                  <h3 className="text-2xl font-bold text-slate-900">Direct Support</h3>
                  <p className="text-slate-500 text-sm italic">For the Atampinting JHS Project</p>
                </div>

                <div className="space-y-6">
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1">Mobile Money (Ghana)</p>
                    <p className="text-lg font-mono font-bold text-slate-900">0598628097</p>
                    <p className="text-xs text-slate-500 font-medium">Name: AS-AZU 90 Ventures</p>
                  </div>

                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 relative group">
                    <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1">Bank Transfer (International)</p>
                    <p className="text-sm font-mono font-bold text-slate-900 break-all leading-relaxed">
                      FR06 2004 1000 0141 5126 4Z02 026
                    </p>
                    <button 
                      onClick={copyIban}
                      className="mt-3 flex items-center gap-2 text-xs font-bold text-amber-600 hover:text-slate-900 transition-colors"
                    >
                      {copied ? <><CheckCircle2 size={14}/> Copied!</> : <><Copy size={14}/> Copy IBAN</>}
                    </button>
                  </div>
                </div>

                <div className="mt-8 text-center bg-amber-50 p-4 rounded-xl">
                  <p className="text-[11px] text-amber-900 leading-tight">
                    <strong>Note:</strong> Please use <strong>"Atampinting"</strong> as reference. <br/>WhatsApp proof of transfer to <strong>+33 7 50 30 29 10</strong>
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}