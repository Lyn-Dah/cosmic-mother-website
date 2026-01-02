// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Play, Image as ImageIcon, Camera, X } from "lucide-react";

// // Imports
// import event1 from "../assets/images/event1.jpg";
// import event2 from "../assets/images/event2.jpg";
// import event3 from "../assets/images/event3.jpg";
// import event4 from "../assets/images/event4.jpg";
// import event5 from "../assets/images/event5.jpg";
// import event7 from "../assets/images/event7.jpg";
// import video1 from "../assets/videos/video1.mp4";
// import video2 from "../assets/videos/video2.mp4";
// import event8 from "../assets/images/event8.jpg";
// import event9 from "../assets/images/event9.jpg";
// import video3 from "../assets/videos/video3.mp4";
// import video4 from "../assets/videos/video4.mp4";
// import video5 from "../assets/videos/video5.mp4";
// import video6 from "../assets/videos/video6.mp4";
// import video8 from "../assets/videos/video8.mp4";
// import video9 from "../assets/videos/video9.mp4";
// import video10 from "../assets/videos/video10.mp4";
// import video11 from "../assets/videos/video11.mp4";


// const mediaItems = [
//   { id: 1, type: "image", src: event1, title: "With Zaiha Nedjar", category: "Events" },
//   { id: 2, type: "video", src: video1, title: "Mission in Action", category: "Field Work" },
//   { id: 3, type: "image", src: event2, title: "School Support", category: "Relief" },
//   { id: 4, type: "image", src: event5, title: "Hajia Najat", category: "Events" },
//   { id: 5, type: "video", src: video2, title: "event", category: "Field Work" },
//   { id: 6, type: "image", src: event3, title: "event", category: "Events" },
//   { id: 7, type: "image", src: event4, title: "event", category: "Relief" },
//   { id: 8, type: "image", src: event7, title: "Her Excellency Mavis Ama Frimpong, Ghana Ambassador to France", category: "Events" },
//   { id: 9, type: "image", src: event8, title: "Hajia Najat interracting with school children", category: "Relief" },
//   { id: 10, type: "image", src: event9, title: "Happy school children", category: "Relief" },
//   { id: 11, type: "video", src: video3, title: "State of the school", category: "Project" },
//   { id: 12, type: "video", src: video4, title: "Bad state of the washroom", category: "Project" },
//   { id: 13, type: "video", src: video5, title: "A message from the Headmaster", category: "Projects" },
//   { id: 14, type: "video", src: video6, title: "Hajia Najat with a group of school children", category: "Projects" },
//   { id: 15, type: "video", src: video8, title: "", category: "Project" },
//   { id: 16, type: "video", src: video9, title: "Christmas items for members", category: "Project" },
//   { id: 17, type: "video", src: video10, title: "Christmas items for members", category: "Projects" },
//   { id: 18, type: "video", src: video11, title: "Christmas items for members", category: "Projects" },

// ];

// export default function Projects() {
//   const [filter, setFilter] = useState("all");
//   const [selectedMedia, setSelectedMedia] = useState(null);

//   const filteredMedia = filter === "all" 
//     ? mediaItems 
//     : mediaItems.filter(item => item.type === filter);

//   return (
//     <section className="py-24 bg-white">
//       <div className="container mx-auto px-6">
        
//         {/* Header & Filters */}
//         <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
//           <div className="max-w-2xl">
//             <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-3">Our Impact</h2>
//             <h3 className="text-4xl md:text-5xl font-bold text-navy">Witness the Change</h3>
//           </div>
//           <div className="flex bg-navy/5 p-1 rounded-full border border-navy/10">
//             {["all", "image", "video"].map((type) => (
//               <button
//                 key={type}
//                 onClick={() => setFilter(type)}
//                 className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
//                   filter === type ? "bg-gold text-navy shadow-md" : "text-navy/60"
//                 }`}
//               >
//                 {type === "all" ? "All" : type === "image" ? "Photos" : "Videos"}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Media Grid */}
//         <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           <AnimatePresence>
//             {filteredMedia.map((item) => (
//               <motion.div
//                 key={item.id}
//                 layout
//                 onClick={() => setSelectedMedia(item)}
//                 className="relative group overflow-hidden rounded-2xl bg-navy h-72 cursor-pointer shadow-lg"
//               >
//                 {item.type === "image" ? (
//                   <img 
//                     src={item.src} 
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
//                     alt={item.title} 
//                   />
//                 ) : (
//                   <div className="relative h-full w-full">
//                     {/* Fixed: Video Tag instead of Image Tag */}
//                     <video 
//                       src={item.src} 
//                       muted 
//                       loop 
//                       playsInline
//                       onMouseOver={(e) => e.target.play()}
//                       onMouseOut={(e) => e.target.pause()}
//                       className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
//                     />
//                     <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//                       <div className="w-14 h-14 bg-gold/90 rounded-full flex items-center justify-center text-navy shadow-xl group-hover:scale-110 transition-transform">
//                         <Play fill="currentColor" size={24} />
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Info Overlay */}
//                 <div className="absolute inset-0 bg-linear-to-t from-navy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
//                   <span className="text-gold text-xs font-bold uppercase">{item.category}</span>
//                   <h4 className="text-white font-bold text-xl">{item.title}</h4>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>
//       </div>

//       {/* Expanded Lightbox */}
//       <AnimatePresence>
//         {selectedMedia && (
//           <div className="fixed inset-0 z-150 flex items-center justify-center p-4">
//             <motion.div 
//               initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//               onClick={() => setSelectedMedia(null)}
//               className="absolute inset-0 bg-navy/95 backdrop-blur-md"
//             />
//             <motion.div 
//               initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
//               className="relative max-w-5xl w-full bg-black rounded-3xl overflow-hidden shadow-2xl"
//             >
//               <button onClick={() => setSelectedMedia(null)} className="absolute top-5 right-5 z-50 text-white bg-navy/50 p-2 rounded-full hover:bg-gold transition-colors">
//                 <X size={24} />
//               </button>
              
//               {selectedMedia.type === "image" ? (
//                 <img src={selectedMedia.src} className="w-full h-full object-contain max-h-[80vh]" />
//               ) : (
//                 <video src={selectedMedia.src} controls autoPlay className="w-full h-full max-h-[80vh]" />
//               )}
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  X, 
  Folder, 
  Image as ImageIcon, 
  Video, 
  Users, 
  Calendar, 
  Heart, 
  Building, 
  Gift,
  ChevronRight,
  FolderOpen,
  Sparkles,
  BookOpen,
  Target
} from "lucide-react";

// Import images
import event1 from "../assets/images/event1.jpg";
import event2 from "../assets/images/event2.jpg";
import event3 from "../assets/images/event3.jpg";
import event4 from "../assets/images/event4.jpg";
import event5 from "../assets/images/event5.jpg";
import event7 from "../assets/images/event7.jpg";
import event8 from "../assets/images/event8.jpg";
import event9 from "../assets/images/event9.jpg";

// Import videos
import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";
import video3 from "../assets/videos/video3.mp4";
import video4 from "../assets/videos/video4.mp4";
import video5 from "../assets/videos/video5.mp4";
import video6 from "../assets/videos/video6.mp4";
import video8 from "../assets/videos/video8.mp4";
import video9 from "../assets/videos/video9.mp4";
import video10 from "../assets/videos/video10.mp4";
import video11 from "../assets/videos/video11.mp4";

// Category data using only brand colors
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
      { id: 1, type: "image", src: event1, title: "With Zaiha Nedjar" },
      { id: 4, type: "image", src: event5, title: "Hajia Najat" },
      { id: 6, type: "image", src: event3, title: "School Event" },
      { id: 8, type: "image", src: event7, title: "Her Excellency Mavis Ama Frimpong" },
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
      { id: 11, type: "video", src: video3, title: "State of the School" },
      { id: 12, type: "video", src: video4, title: "Washroom Conditions" },
      { id: 13, type: "video", src: video5, title: "Headmaster's Message" },
      { id: 14, type: "video", src: video6, title: "With School Children" },
      { id: 15, type: "video", src: video8, title: "Project Progress" },
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
      { id: 2, type: "video", src: video1, title: "Mission in Action" },
      { id: 5, type: "video", src: video2, title: "Field Activities" },
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
      { id: 16, type: "video", src: video9, title: "Christmas Distribution" },
      { id: 17, type: "video", src: video10, title: "Christmas Items for Members" },
      { id: 18, type: "video", src: video11, title: "Festive Celebrations" },
    ]
  }
];

// Flatten all items for the lightbox view
const allMediaItems = mediaCategories.flatMap(category => 
  category.items.map(item => ({
    ...item,
    category: category.title,
    categoryId: category.id,
    iconBg: category.iconBg,
    borderColor: category.borderColor
  }))
);

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [hoveredFolder, setHoveredFolder] = useState(null);

  const getFilteredItems = () => {
    if (activeCategory === "all") {
      return allMediaItems;
    }
    
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
    <section className="py-24 bg-soft-bg relative overflow-hidden">
      {/* Gold accent elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-navy/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header with brand styling */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-20 text-center mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full mb-6 border border-gold/20">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-gold font-bold tracking-widest uppercase text-sm">
              Our Impact Gallery
            </span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight font-serif">
            Witness the <span className="text-gold">Transformation</span>
          </h3>
          <p className="text-navy/70 text-lg">
            Explore our organized collection showcasing impactful moments and initiatives.
          </p>
        </motion.div>

        {/* Category Folders with brand colors */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h4 className="inline-flex items-center gap-3 text-2xl font-bold text-navy bg-white px-6 py-3 rounded-full border border-navy/10 shadow-sm">
              <FolderOpen className="w-6 h-6 text-gold" />
              Browse Categories
            </h4>
            <p className="text-navy/60 mt-3">Click on any folder to explore</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {mediaCategories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  borderColor: "#D4AF37"
                }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setHoveredFolder(category.id)}
                onHoverEnd={() => setHoveredFolder(null)}
                onClick={() => setActiveCategory(category.id)}
                className={`relative group p-6 rounded-xl border-2 transition-all duration-300 bg-white ${category.borderColor} ${hoveredFolder === category.id ? 'border-gold' : ''}`}
              >
                {/* Subtle gradient background */}
                <div className={`absolute inset-0 rounded-xl ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Folder icon */}
                  <motion.div 
                    animate={activeCategory === category.id ? { rotate: [0, 5, -5, 0] } : {}}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex items-center justify-center p-3 rounded-lg mb-4 ${category.iconBg} border border-gold/20`}
                  >
                    <motion.div
                      animate={hoveredFolder === category.id ? { scale: 1.1 } : { scale: 1 }}
                    >
                      {category.icon}
                    </motion.div>
                  </motion.div>

                  {/* Folder title */}
                  <h5 className="font-bold text-lg mb-2 text-left text-navy group-hover:text-gold transition-colors">
                    {category.title}
                  </h5>
                  
                  <p className="text-sm text-navy/60 text-left mb-4">
                    {category.description}
                  </p>

                  {/* Media counts */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <ImageIcon className="w-4 h-4 text-navy/50" />
                        <span className="text-sm font-medium text-navy">
                          {category.items.filter(item => item.type === "image").length}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Video className="w-4 h-4 text-navy/50" />
                        <span className="text-sm font-medium text-navy">
                          {category.items.filter(item => item.type === "video").length}
                        </span>
                      </div>
                    </div>
                    
                    {/* Chevron indicator */}
                    <motion.div
                      animate={activeCategory === category.id ? { x: [0, 3, 0] } : {}}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ChevronRight className={`w-5 h-5 ${
                        activeCategory === category.id ? "text-gold" : "text-navy/30"
                      }`} />
                    </motion.div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Media Grid Section */}
        {activeCategory !== "all" && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-16 bg-white rounded-2xl p-8 shadow-lg border border-navy/10"
          >
            {/* Category header */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg ${mediaCategories.find(c => c.id === activeCategory)?.iconBg} border border-gold/20`}>
                  {mediaCategories.find(c => c.id === activeCategory)?.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-navy">
                    {mediaCategories.find(c => c.id === activeCategory)?.title}
                  </h3>
                  <p className="text-navy/60">
                    {getFilteredItems().length} {getFilteredItems().length === 1 ? 'item' : 'items'}
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory("all")}
                className="px-6 py-3 bg-navy text-white font-bold rounded-lg hover:bg-gold hover:text-navy transition-all duration-300 flex items-center gap-2 shadow-md"
              >
                <X size={18} />
                Back to Categories
              </motion.button>
            </div>

            {/* Media Grid */}
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              <AnimatePresence>
                {getFilteredItems().map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -4 }}
                    onClick={() => setSelectedMedia(item)}
                    className="group relative overflow-hidden rounded-xl bg-white cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 border border-navy/10"
                  >
                    {/* Type indicator */}
                    <div className="absolute top-3 left-3 z-20">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        item.type === "image" 
                          ? "bg-gold/10 text-gold border border-gold/20" 
                          : "bg-navy/10 text-navy border border-navy/20"
                      }`}>
                        {item.type === "image" ? "PHOTO" : "VIDEO"}
                      </span>
                    </div>

                    {/* Media Container */}
                    <div className="aspect-square overflow-hidden relative">
                      {item.type === "image" ? (
                        <>
                          <img 
                            src={item.src} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                            alt={item.title} 
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-navy/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </>
                      ) : (
                        <div className="relative w-full h-full">
                          <video 
                            src={item.src} 
                            muted 
                            loop 
                            playsInline
                            onMouseOver={(e) => e.target.play()}
                            onMouseOut={(e) => e.target.pause()}
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-navy/50 to-transparent"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 bg-white/95 rounded-full flex items-center justify-center text-navy shadow-lg">
                              <Play fill="currentColor" size={20} />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Info Overlay */}
                    <div className="p-4 border-t border-navy/10 bg-white">
                      <h4 className="font-bold text-navy text-sm mb-1 line-clamp-1">{item.title}</h4>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-navy/60">
                          {item.category}
                        </span>
                        <div className="w-1 h-1 bg-navy/30 rounded-full"></div>
                        <span className="text-xs text-gold font-medium">
                          View →
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* View all button */}
            <div className="text-center mt-12 pt-8 border-t border-navy/10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory("all")}
                className="px-8 py-3 bg-gold text-navy font-bold rounded-lg hover:bg-gold-hover transition-all duration-300 shadow-md flex items-center gap-2 mx-auto"
              >
                <FolderOpen size={18} />
                View All Categories
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* All Categories View */}
        {activeCategory === "all" && (
          <div className="text-center mt-12">
            <p className="text-navy/60 mb-6">Select a category above to explore media</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMedia(null)}
              className="absolute inset-0 bg-navy/90"
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-xl overflow-hidden shadow-2xl z-10"
            >
              {/* Header */}
              <div className="bg-navy text-white p-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                      <span className={`text-sm font-bold uppercase px-3 py-1 rounded-full ${
                        selectedMedia.type === "image" 
                          ? "bg-gold/20 text-gold" 
                          : "bg-navy/20 text-white"
                      }`}>
                        {selectedMedia.type === "image" ? "Photo" : "Video"}
                      </span>
                      <span className="text-sm text-white/80">
                        {selectedMedia.category}
                      </span>
                    </div>
                  </div>
                  <motion.button 
                    whileHover={{ rotate: 90 }}
                    onClick={() => setSelectedMedia(null)}
                    className="text-white hover:text-gold transition-colors"
                  >
                    <X size={24} />
                  </motion.button>
                </div>
                <h3 className="text-xl font-bold mt-3">{selectedMedia.title}</h3>
              </div>

              {/* Media Content */}
              <div className="h-full flex items-center justify-center p-8 bg-navy/5">
                {selectedMedia.type === "image" ? (
                  <img 
                    src={selectedMedia.src} 
                    className="max-w-full max-h-[65vh] object-contain rounded-lg shadow-lg"
                    alt={selectedMedia.title}
                  />
                ) : (
                  <video 
                    src={selectedMedia.src} 
                    controls 
                    autoPlay 
                    className="max-w-full max-h-[65vh] rounded-lg shadow-lg"
                  />
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}