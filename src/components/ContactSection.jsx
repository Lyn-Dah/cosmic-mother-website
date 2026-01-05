import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Facebook, Twitter, Instagram, Linkedin, CheckCircle, AlertCircle, Loader } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "", // "idle", "sending", "success", "error"
    message: ""
  });
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS - IMPORTANT!
  useEffect(() => {
    // Make sure EmailJS is initialized with your public key
    emailjs.init("vvGfguNyQr6dIX4Go"); // Your public key
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }
    
    if (!formData.message.trim()) errors.message = "Message is required";
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      // Mark all fields as touched to show errors
      setTouched({
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        message: true,
      });
      setStatus({
        type: "error",
        message: "Please fill in all required fields correctly"
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({
      type: "sending",
      message: "Sending your message..."
    });

    try {
      // Prepare template parameters
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone_number: formData.phone || "Not provided",
        message: formData.message,
        to_email: "cosmicmotherofficial@gmail.com", // Your receiving email
        reply_to: formData.email,
        date: new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        "service_dby4xpb", // Your Service ID
        "template_v7qwejt", // Your Template ID
        templateParams,
        "vvGfguNyQr6dIX4Go" // Your Public Key
      );

      console.log('EmailJS Response:', response);

      if (response.status === 200) {
        setStatus({
          type: "success",
          message: "Message sent successfully! We'll get back to you soon. ✅"
        });
        
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        setTouched({});
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setStatus({ type: "", message: "" });
        }, 5000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again or contact us directly. ❌"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Status indicator component
  const StatusIndicator = () => {
    switch (status.type) {
      case "sending":
        return (
          <div className="flex items-center gap-2 text-blue-400">
            <Loader className="w-5 h-5 animate-spin" />
            <span className="text-sm">{status.message}</span>
          </div>
        );
      case "success":
        return (
          <div className="flex items-center gap-2 text-green-400">
            <CheckCircle className="w-5 h-5" />
            <span className="text-sm">{status.message}</span>
          </div>
        );
      case "error":
        return (
          <div className="flex items-center gap-2 text-red-400">
            <AlertCircle className="w-5 h-5" />
            <span className="text-sm">{status.message}</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="py-24 bg-navy relative overflow-hidden">
      {/* Decorative Gold Glow Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Info Side */}
          <div className="lg:w-2/5">
            <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-3">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Let's Start a <br/>
              <span className="text-gold italic">Conversation.</span>
            </h3>
            
            <div className="space-y-8 mt-12">
              {[
                { 
                  icon: <Phone className="text-gold" />, 
                  label: "Call Us", 
                  value: "+33 7 50 30 29 10",
                  href: "tel:+33750302910"
                },
                { 
                  icon: <Mail className="text-gold" />, 
                  label: "Email Us", 
                  value: "cosmicmotherofficial@gmail.com",
                  href: "mailto:cosmicmotherofficial@gmail.com"
                },
                { 
                  icon: <MapPin className="text-gold" />, 
                  label: "Visit Us", 
                  value: "15 Boulevard Maxime Gorki, 93240 Stains, France 🇫🇷",
                  href: "https://maps.google.com/?q=15+Boulevard+Maxime+Gorki,+93240+Stains,+France"
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-lg group-hover:border-gold transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase font-bold tracking-widest">{item.label}</p>
                    <a 
                      href={item.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-gold transition-colors block"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <p className="text-gray-400 text-sm mb-4">Follow us on social media</p>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                ].map((social, i) => (
                  <motion.a 
                    key={i} 
                    href={social.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-lg border border-white/10 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-300"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side (Glassmorphism) */}
          <div className="lg:w-3/5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl"
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name *"
                      value={formData.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full bg-white/5 border ${touched.firstName && !formData.firstName ? 'border-red-500' : 'border-white/10'} rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:border-gold outline-none transition-all`}
                      disabled={isSubmitting}
                    />
                    {touched.firstName && !formData.firstName && (
                      <p className="text-red-400 text-sm mt-2 ml-2">First name is required</p>
                    )}
                  </div>
                  
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name *"
                      value={formData.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full bg-white/5 border ${touched.lastName && !formData.lastName ? 'border-red-500' : 'border-white/10'} rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:border-gold outline-none transition-all`}
                      disabled={isSubmitting}
                    />
                    {touched.lastName && !formData.lastName && (
                      <p className="text-red-400 text-sm mt-2 ml-2">Last name is required</p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-white/5 border ${touched.email && !formData.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:border-gold outline-none transition-all`}
                    disabled={isSubmitting}
                  />
                  {touched.email && !formData.email && (
                    <p className="text-red-400 text-sm mt-2 ml-2">Email is required</p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (Optional)"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:border-gold outline-none transition-all"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-white/5 border ${touched.message && !formData.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:border-gold outline-none transition-all resize-none`}
                    disabled={isSubmitting}
                  ></textarea>
                  {touched.message && !formData.message && (
                    <p className="text-red-400 text-sm mt-2 ml-2">Message is required</p>
                  )}
                </div>

                {/* Status Message */}
                {status.message && (
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <StatusIndicator />
                  </div>
                )}

                <div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full ${isSubmitting ? 'bg-gold/50 cursor-not-allowed' : 'bg-gold hover:bg-gold-hover'} text-navy font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-gold/20`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}