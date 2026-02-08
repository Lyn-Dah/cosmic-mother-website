// import React, { useState, useEffect } from "react";
// import { Link } from "react-scroll";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, Heart } from "lucide-react"; 
// import logo from "../assets/images/logo.jpg";

// export default function Navbar({ onDonateClick, t }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const closeMenu = () => setIsOpen(false);

//   // Effect to handle navbar background/height change on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: t.home, id: "home" },
//     { name: t.about, id: "about" },
//     { name: t.founder, id: "founder" },
//     { name: "Events", id: "events" },
//     { name: t.projects, id: "projects" },
//     { name: t.contact, id: "contact" },
//   ];

//   return (
//     <nav 
//       className={`fixed top-0 left-0 right-0 z-150 transition-all duration-300 border-b border-gold/10 backdrop-blur-md ${
//         scrolled ? "bg-navy/95 h-16 shadow-2xl" : "bg-navy h-20 shadow-xl"
//       } text-white`}
//     >
//       <div className="container mx-auto px-4 md:px-6 h-full flex justify-between items-center">
        
//         {/* Logo & Brand */}
//         <Link to="home" smooth={true} className="flex items-center space-x-3 cursor-pointer group shrink-0">
//           <img src={logo} alt="Logo" className="h-10 w-10 md:h-11 md:w-11 rounded-full border-2 border-gold/20" />
//           <div className="flex flex-col justify-center leading-[1.1]">
//             <span style={{ fontFamily: "'Playfair Display', serif" }} className="font-bold text-[10px] md:text-sm tracking-wide text-white uppercase">
//               Cosmic <span className="text-gold italic">Mother</span> of
//             </span>
//             <span style={{ fontFamily: "'Playfair Display', serif" }} className="font-bold text-[10px] md:text-sm tracking-[0.05em] text-gold uppercase">
//               Bongo Association
//             </span>
//           </div>
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden lg:flex items-center space-x-8">
//           <ul className="flex space-x-6">
//             {navLinks.map((item) => (
//               <li key={item.id}>
//                 <Link
//                   to={item.id}
//                   smooth={true}
//                   spy={true}           // Required for scroll detection
//                   offset={-70}        // Adjust based on navbar height
//                   activeClass="text-gold after:scale-x-100" // Class applied when at the section
//                   style={{ fontFamily: "'Montserrat', sans-serif" }}
//                   className="relative cursor-pointer text-gray-300 hover:text-gold transition-all uppercase text-[10px] tracking-[0.15em] font-semibold py-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-gold after:scale-x-0 after:transition-transform after:duration-300"
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
          
//           <button 
//             onClick={onDonateClick}
//             style={{ fontFamily: "'Montserrat', sans-serif" }}
//             className="bg-gold text-navy px-5 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2 ml-4 shadow-lg shadow-gold/10"
//           >
//             <Heart size={14} fill="currentColor" /> {t.donate}
//           </button>
//         </div>

//         {/* Mobile Icons */}
//         <div className="lg:hidden flex items-center">
//           <button onClick={toggleMenu} className="text-gold p-2">
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="lg:hidden fixed inset-x-0 top-16 bg-navy border-t border-gold/10 h-[calc(100vh-64px)] p-8 space-y-8 flex flex-col"
//           >
//              {navLinks.map((item) => (
//                 <Link
//                   key={item.id}
//                   to={item.id}
//                   smooth={true}
//                   spy={true}
//                   offset={-60}
//                   activeClass="text-gold italic pl-4"
//                   onClick={closeMenu}
//                   style={{ fontFamily: "'Playfair Display', serif" }}
//                   className="text-3xl text-gray-300 hover:text-gold transition-all border-l-2 border-transparent active:border-gold"
//                 >
//                   {item.name}
//                 </Link>
//               ))}
              
//               <button 
//                 onClick={() => { onDonateClick(); closeMenu(); }}
//                 className="w-full bg-gold text-navy py-4 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl mt-auto"
//               >
//                 <Heart size={18} fill="currentColor" /> {t.donate}
//               </button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }


import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react"; 
import logo from "../assets/images/logo.jpg";

export default function Navbar({ onDonateClick, t }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.home, id: "home" },
    { name: t.about, id: "about" },
    { name: t.founder, id: "founder" },
    { name: "Events", id: "events" },
    { name: t.projects, id: "projects" },
    { name: t.contact, id: "contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-150 transition-all duration-300 border-b border-gold/10 backdrop-blur-md ${
        scrolled ? "bg-navy/95 h-16 shadow-2xl" : "bg-navy h-20 shadow-xl"
      } text-white`}
    >
      <div className="container mx-auto px-4 md:px-6 h-full flex justify-between items-center">
        
        {/* Logo & Brand */}
        <Link to="home" smooth={true} className="flex items-center space-x-3 cursor-pointer group shrink-0">
          <img src={logo} alt="Logo" className="h-10 w-10 md:h-11 md:w-11 rounded-full border-2 border-gold/20 group-hover:border-gold transition-colors" />
          <div className="flex flex-col justify-center leading-[1.1]">
            <span style={{ fontFamily: "'Playfair Display', serif" }} className="font-bold text-[10px] md:text-sm tracking-wide text-white uppercase">
              Cosmic <span className="text-gold italic">Mother</span> of
            </span>
            <span style={{ fontFamily: "'Playfair Display', serif" }} className="font-bold text-[10px] md:text-sm tracking-[0.05em] text-gold uppercase">
              Bongo Association
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  smooth={true}
                  spy={true}
                  offset={-70}
                  activeClass="text-gold after:scale-x-100"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                  className="relative cursor-pointer text-gray-300 hover:text-gold transition-all uppercase text-[10px] tracking-[0.15em] font-semibold py-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-gold after:scale-x-0 after:transition-transform after:duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* UPDATED DONATE BUTTON */}
          <button 
            onClick={onDonateClick}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            className="bg-gold text-navy px-6 py-2.5 rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-white hover:scale-105 active:scale-95 transition-all flex items-center gap-2 ml-4 shadow-lg shadow-gold/20"
          >
            <Heart size={14} fill="currentColor" /> {t.donate}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gold p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 top-0 bg-navy z-200 p-8 flex flex-col justify-center items-center space-y-8"
          >
            <button onClick={closeMenu} className="absolute top-6 right-6 text-gold"><X size={32}/></button>
            
            {navLinks.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                spy={true}
                offset={-60}
                onClick={closeMenu}
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-4xl text-gray-300 hover:text-gold transition-all"
              >
                {item.name}
              </Link>
            ))}
            
            <button 
              onClick={() => { onDonateClick(); closeMenu(); }}
              className="w-full max-w-xs bg-gold text-navy py-4 rounded-full font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl mt-8"
            >
              <Heart size={20} fill="currentColor" /> {t.donate}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}