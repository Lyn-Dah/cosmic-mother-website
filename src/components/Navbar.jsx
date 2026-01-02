// import React, { useState } from "react";
// import { Link } from "react-scroll";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, Heart } from "lucide-react"; 
// import logo from "../assets/images/logo.jpg";

// export default function Navbar({ onDonateClick }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const closeMenu = () => setIsOpen(false);

//   // Unified handler for mobile donation
//   const handleMobileDonate = () => {
//     closeMenu();
//     onDonateClick();
//   };

//   const navLinks = [
//     { name: "Home", id: "home" },
//     { name: "Our Mission", id: "about" },
//     { name: "The Founder", id: "founder" },
//     { name: "Impact", id: "projects" },
//     { name: "Contact", id: "contact" },
//   ];

//   return (
//     <nav className="bg-navy text-white h-20 sticky top-0 z-150 shadow-2xl border-b border-gold/10 backdrop-blur-md bg-navy/95">
//       <div className="container mx-auto px-6 h-full flex justify-between items-center">
        
//         {/* Logo & Brand */}
//         <Link to="home" smooth={true} className="flex items-center space-x-3 cursor-pointer group">
//           <img src={logo} alt="Cosmic Mother Logo" className="h-10 w-10 rounded-full border border-gold/30 group-hover:border-gold transition-colors" />
//           <span className="font-bold text-sm lg:text-base tracking-tighter hidden sm:inline group-hover:text-gold transition-colors">
//             COSMIC <span className="text-gold italic">MOTHER</span>
//             <span className="text-gold"> OF BONGO</span> ASSOCIATION
//           </span>
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-8">
//           <ul className="flex space-x-6">
//             {navLinks.map((item) => (
//               <li key={item.id}>
//                 <Link
//                   to={item.id}
//                   smooth={true}
//                   duration={800}
//                   spy={true}
//                   offset={-80}
//                   activeClass="text-gold font-bold"
//                   className="cursor-pointer text-gray-300 hover:text-gold transition-colors uppercase text-[11px] tracking-widest font-medium"
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
          
//           <button 
//             onClick={onDonateClick}
//             className="bg-gold text-navy px-5 py-2.5 rounded-full font-bold text-xs hover:bg-white transition-all flex items-center gap-2 shadow-lg shadow-gold/10"
//           >
//             <Heart size={14} fill="currentColor" /> Donate Now
//           </button>
//         </div>

//         {/* Hamburger Button (Mobile Only) */}
//         <div className="md:hidden">
//           <button 
//             onClick={toggleMenu} 
//             className="text-gold focus:outline-none p-2"
//             aria-label="Toggle Menu"
//           >
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className="md:hidden bg-navy border-t border-gold/10 overflow-hidden"
//           >
//             <ul className="flex flex-col p-8 space-y-6">
//               {navLinks.map((item) => (
//                 <li key={item.id}>
//                   <Link
//                     to={item.id}
//                     smooth={true}
//                     duration={800}
//                     spy={true}
//                     offset={-80}
//                     onClick={closeMenu}
//                     activeClass="text-gold font-bold pl-4 border-l-2 border-gold"
//                     className="block text-lg text-gray-300 hover:text-gold transition-all"
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
              
//               {/* THE FIXED MOBILE DONATE BUTTON */}
//               <button 
//                 onClick={handleMobileDonate}
//                 className="w-full bg-gold text-navy py-4 rounded-xl font-black text-sm uppercase tracking-tighter shadow-xl flex items-center justify-center gap-2 active:scale-95 transition-transform"
//               >
//                 <Heart size={18} fill="currentColor" /> Donate Now
//               </button>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }



import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, Globe } from "lucide-react"; 
import logo from "../assets/images/logo.jpg";

// Make sure these props (lang, setLang, t) are listed here!
export default function Navbar({ onDonateClick, lang, setLang, t }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // This matches the IDs in your App.jsx sections
  const navLinks = [
    { name: t.home, id: "home" },
    { name: t.about, id: "about" },
    { name: t.founder, id: "founder" },
    { name: t.projects, id: "projects" },
    { name: t.contact, id: "contact" },
  ];

  return (
    <nav className="bg-navy text-white h-20 sticky top-0 z-150 shadow-2xl border-b border-gold/10 backdrop-blur-md bg-navy/95">
      <div className="container mx-auto px-4 md:px-6 h-full flex justify-between items-center">
        
        {/* Logo & Brand */}
        <Link to="home" smooth={true} className="flex items-center space-x-3 cursor-pointer group shrink-0">
          <img src={logo} alt="Logo" className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-gold/20" />
          <div className="flex flex-col justify-center leading-[1.1]">
            <span style={{ fontFamily: "'Playfair Display', serif" }} className="font-bold text-xs md:text-base tracking-wide text-white uppercase">
              Cosmic <span className="text-gold italic">Mother</span> of
            </span>
            <span style={{ fontFamily: "'Playfair Display', serif" }} className="font-bold text-xs md:text-base tracking-[0.05em] text-gold uppercase">
              Bongo Association
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navLinks.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  smooth={true}
                  offset={-80}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                  className="cursor-pointer text-gray-300 hover:text-gold transition-all uppercase text-[10px] tracking-[0.15em] font-semibold"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* --- THE LANGUAGE TOGGLE BUTTONS --- */}
          <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/10 ml-4">
            <button 
              onClick={() => setLang("EN")}
              className={`px-3 py-1 text-[10px] font-bold rounded-full transition-all ${lang === "EN" ? "bg-gold text-navy" : "text-gray-400 hover:text-white"}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLang("FR")}
              className={`px-3 py-1 text-[10px] font-bold rounded-full transition-all ${lang === "FR" ? "bg-gold text-navy" : "text-gray-400 hover:text-white"}`}
            >
              FR
            </button>
          </div>
          
          <button 
            onClick={onDonateClick}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            className="bg-gold text-navy px-5 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2"
          >
            <Heart size={14} fill="currentColor" /> {t.donate}
          </button>
        </div>

        {/* Mobile Icons (Hamburger + Lang Indicator) */}
        <div className="lg:hidden flex items-center gap-4">
           <button 
            onClick={() => setLang(lang === "EN" ? "FR" : "EN")}
            className="text-gold flex items-center gap-1 text-[10px] font-bold border border-gold/20 px-2 py-1 rounded uppercase"
           >
            <Globe size={14} /> {lang}
           </button>
           <button onClick={toggleMenu} className="text-gold">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-x-0 top-20 bg-navy border-t border-gold/10 h-[calc(100vh-80px)] p-8 space-y-8"
          >
             {navLinks.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  onClick={closeMenu}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="block text-3xl italic text-gray-300 hover:text-gold"
                >
                  {item.name}
                </Link>
              ))}
              <button 
                onClick={() => { onDonateClick(); closeMenu(); }}
                className="w-full bg-gold text-navy py-4 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <Heart size={18} fill="currentColor" /> {t.donate}
              </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}