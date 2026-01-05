import React from "react";
import { Link } from "react-scroll";
import { 
  Heart, 
  Facebook, 
  Instagram, 
  Linkedin, 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight 
} from "lucide-react";

export default function Footer({ onDonateClick }) {
  const currentYear = new Date().getFullYear();

  // Social Media Links Configuration
  const socialLinks = [
    { Icon: Facebook, url: "https://facebook.com/cosmicmother" },
    { Icon: Instagram, url: "https://instagram.com/cosmicmother_bongo" },
    { Icon: Linkedin, url: "https://linkedin.com/company/cosmic-mother-care" }
  ];

  return (
    <footer className="relative bg-navy text-white pt-24">
      {/* SECTION DIVIDER */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold/50 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          
          {/* BRAND COLUMN */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tight">
              COSMIC <span className="text-gold italic underline decoration-gold/30 underline-offset-8">MOTHER</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-gold/20 pl-4">
              A beacon of hope from the heart of France to the communities of Ghana. 
              Restoring dignity, one life at a time.
            </p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map(({ Icon, url }, idx) => (
                <a 
                  key={idx} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-gold hover:text-navy transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* NAV COLUMN */}
          <div>
            <h4 className="text-gold font-bold uppercase tracking-widest text-[11px] mb-8">Discovery</h4>
            <ul className="space-y-4">
              {["Home", "About", "Founder", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    to={item.toLowerCase()} 
                    smooth={true} 
                    offset={-70}
                    duration={500}
                    className="text-gray-400 hover:text-white flex items-center group cursor-pointer text-sm transition-all"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-gold mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT COLUMN */}
          <div>
            <h4 className="text-gold font-bold uppercase tracking-widest text-[11px] mb-8">Headquarters</h4>
            <div className="space-y-6 text-sm">
              <div className="flex gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all">
                  <MapPin size={18} />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors">
                  15 Boulevard Maxime Gorki,<br /> 93240 Stains, France
                </span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all">
                  <Phone size={18} />
                </div>
                <a href="tel:+33750302910" className="text-gray-400 group-hover:text-white transition-colors">
                  +33 7 50 30 29 10
                </a>
              </div>
            </div>
          </div>

          {/* ACTION COLUMN */}
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gold/10 blur-2xl rounded-full group-hover:bg-gold/20 transition-all"></div>
            <h4 className="font-bold text-white mb-4 relative z-10">Make an Impact</h4>
            <p className="text-gray-400 text-xs mb-6 leading-relaxed relative z-10">
              Your donation directly funds our field operations and community relief.
            </p>
            <button 
              onClick={onDonateClick}
              className="w-full bg-gold hover:bg-white text-navy font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-gold/10 relative z-10 flex items-center justify-center gap-2 uppercase tracking-tighter text-xs"
            >
              <Heart size={14} fill="currentColor" /> Donate Now
            </button>
          </div>
        </div>
      </div>

      {/* SUB-FOOTER */}
      <div className="bg-black/40 py-8 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em]">
              © {currentYear} COSMIC MOTHER ASSOCIATION
            </p>
          </div>
          
          <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
            <span className="text-white/20">|</span>
            <p className="text-gray-500">
              Designed by <span className="text-white hover:text-gold transition-colors cursor-pointer">Lynn's Creation Ghana</span>
            </p>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/33758892760" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-100 bg-[#25D366] text-white p-4 rounded-full shadow-[0_15px_30px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all group"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-navy font-bold text-[10px] py-2 px-4 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">
          Quick Help
        </span>
      </a>
    </footer>
  );
}