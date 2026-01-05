import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  X, 
  ImageIcon, 
  Video, 
  Calendar, 
  Heart, 
  Building, 
  ChevronRight,
  FolderOpen,
  Sparkles,
  Target,
  Gift
} from "lucide-react";

// Import images (Keep these imports as they are in src/assets)
import event1 from "../assets/images/event1.jpg";
import event2 from "../assets/images/event2.jpg";
import event3 from "../assets/images/event3.jpg";
import event4 from "../assets/images/event4.jpg";
import event5 from "../assets/images/event5.jpg";
import event7 from "../assets/images/event7.jpg";
import event8 from "../assets/images/event8.jpg";
import event9 from "../assets/images/event9.jpg";

/**
 * Since videos are in public/videos/, they are served at the root.
 * We use a simple path string. Vite/Vercel will resolve "/videos/..." correctly.
 */
const getVideoPath = (videoName) => `/videos/${videoName}`;

const mediaCategories = [
  {
    id: "events",
    title: "Events & Ceremonies",
    icon: <Calendar className="text-gold" />,
    description: "Official events, meetings, and ceremonies",
    gradient: "from-gold/10 to-navy/5",
    borderColor: "border-gold/20",
    iconBg: "bg-gold/10",
    items: [
      { id: 1, type: "image", src: event1, title: "With Zaiha Nedjar, Présidente du bureau CLVA, Adjointe au Maire, Déléguée à la vie associative" },
      { id: 4, type: "image", src: event5, title: "Hajia Najat, Founder of Cosmic Mother of Bongo Association" },
      { id: 6, type: "image", src: event3, title: "School Event" },
      { id: 8, type: "image", src: event7, title: " Hajia Najat with Her Excellency Mavis Ama Frimpong,Ghana Ambassador to France" },
    ]
  },
  {
    id: "relief",
    title: "Relief & Support",
    icon: <Heart className="text-gold" />,
    description: "Community support and relief efforts",
    gradient: "from-navy/10 to-gold/5",
    borderColor: "border-navy/20",
    iconBg: "bg-navy/10",
    items: [
      { id: 3, type: "image", src: event2, title: "School Support" },
      { id: 7, type: "image", src: event4, title: "Community Support" },
      { id: 9, type: "image", src: event8, title: "With School Children" },
      { id: 10, type: "image", src: event9, title: "Happy School Children" },
    ]
  },
  {
    id: "projects",
    title: "Ongoing Projects",
    icon: <Building className="text-gold" />,
    description: "Current and completed projects",
    gradient: "from-gold/5 to-navy/10",
    borderColor: "border-gold/20",
    iconBg: "bg-gold/10",
    items: [
      { id: 11, type: "video", src: getVideoPath("video3.mp4"), title: "State of the School" },
      { id: 12, type: "video", src: getVideoPath("video4.mp4"), title: "Washroom Conditions" },
      { id: 13, type: "video", src: getVideoPath("video5.mp4"), title: "Headmaster's Message" },
      { id: 14, type: "video", src: getVideoPath("video6.mp4"), title: "With School Children" },
      { id: 15, type: "video", src: getVideoPath("video8.mp4"), title: "Project Progress" },
    ]
  },
  {
    id: "field-work",
    title: "Field Work",
    icon: <Target className="text-gold" />,
    description: "Mission activities in action",
    gradient: "from-navy/5 to-gold/10",
    borderColor: "border-navy/20",
    iconBg: "bg-navy/10",
    items: [
      { id: 2, type: "video", src: getVideoPath("video1.mp4"), title: "Mission in Action" },
      { id: 5, type: "video", src: getVideoPath("video2.mp4"), title: "Field Activities" },
    ]
  },
  {
    id: "festive",
    title: "Festive Seasons",
    icon: <Gift className="text-gold" />,
    description: "Holiday and special season events",
    gradient: "from-gold/10 to-navy/5",
    borderColor: "border-gold/20",
    iconBg: "bg-gold/10",
    items: [
      { id: 16, type: "video", src: getVideoPath("video9.mp4"), title: "Christmas Distribution" },
      { id: 17, type: "video", src: getVideoPath("video10.mp4"), title: "Christmas Items for Members" },
      { id: 18, type: "video", src: getVideoPath("video11.mp4"), title: "Festive Celebrations" },
    ]
  }
];

const allMediaItems = mediaCategories.flatMap(category => 
  category.items.map(item => ({
    ...item,
    category: category.title,
    categoryId: category.id,
    iconBg: category.iconBg,
    borderColor: category.borderColor
  }))
);

const VideoThumbnail = ({ item }) => {
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (videoRef.current) videoRef.current.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      className="relative w-full h-full bg-navy/10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={item.src}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
      />
      <div className="absolute inset-0 bg-linear-to-t from-navy/60 via-navy/20 to-transparent"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-transform ${isHovering ? 'scale-110' : 'scale-100'}`}>
          <Play fill="currentColor" size={24} className="text-navy ml-1" />
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [hoveredFolder, setHoveredFolder] = useState(null);

  const getFilteredItems = () => {
    if (activeCategory === "all") return allMediaItems;
    const category = mediaCategories.find(cat => cat.id === activeCategory);
    return category ? category.items.map(item => ({
      ...item,
      category: category.title,
      categoryId: category.id,
      iconBg: category.iconBg,
      borderColor: category.borderColor
    })) : [];
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-20 text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full mb-6 border border-amber-200">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span className="text-amber-700 font-bold tracking-widest uppercase text-sm">Our Impact Gallery</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">
            Witness the <span className="text-amber-600">Transformation</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {mediaCategories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveCategory(category.id)}
              onMouseEnter={() => setHoveredFolder(category.id)}
              onMouseLeave={() => setHoveredFolder(null)}
              className={`p-6 rounded-xl border-2 transition-all bg-white shadow-sm ${activeCategory === category.id ? 'border-amber-500' : 'border-slate-100'}`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${category.iconBg}`}>
                {category.icon}
              </div>
              <h5 className="font-bold text-slate-900 text-left">{category.title}</h5>
              <p className="text-xs text-slate-500 text-left mt-2">{category.description}</p>
            </motion.button>
          ))}
        </div>

        {activeCategory !== "all" && (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {getFilteredItems().map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedMedia(item)}
                  className="group relative overflow-hidden rounded-xl bg-white cursor-pointer shadow-md border border-slate-200"
                >
                  <div className="aspect-square relative overflow-hidden">
                    {item.type === "image" ? (
                      <img src={item.src} className="w-full h-full object-cover" alt={item.title} />
                    ) : (
                      <VideoThumbnail item={item} />
                    )}
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        <AnimatePresence>
          {selectedMedia && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setSelectedMedia(null)}
                className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm"
              />
              <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden z-10">
                <div className="p-4 border-b flex justify-between items-center">
                  <h3 className="font-bold text-slate-900">{selectedMedia.title}</h3>
                  <button onClick={() => setSelectedMedia(null)} className="p-2 hover:bg-slate-100 rounded-full"><X /></button>
                </div>
                <div className="bg-black flex items-center justify-center">
                  {selectedMedia.type === "image" ? (
                    <img src={selectedMedia.src} className="max-h-[70vh] object-contain" alt={selectedMedia.title} />
                  ) : (
                    <video src={selectedMedia.src} controls autoPlay className="max-h-[70vh] w-full" />
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}