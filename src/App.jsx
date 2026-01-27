import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Play, Scissors, Monitor, Mic, Type, Layers, 
  PenTool, Layout, Globe, Smartphone, Mail, 
  Instagram, Twitter, Linkedin, Send, CheckCircle, ArrowRight, 
  LucideYoutube,
  MailOpen
} from 'lucide-react';

/* --- BRAND DATA --- */
const BRAND = {
  name: "AKSHAT",
  studio: "Ediyrex",
  tagline: "Multidisciplinary Creative Studio"
};

const SERVICES = [
  { title: "Video Editing", icon: Scissors, desc: "Story flow & visual tone." },
  { title: "Thumbnail Making", icon: Layout, desc: "Attention-grabbing visuals." },
  { title: "Captioning", icon: Type, desc: "Engaging subtitles & hooks." },
  { title: "Podcast Editing", icon: Mic, desc: "Polished podcast edits with natural flow." },
  { title: "Graphic Design", icon: Monitor, desc: "Branding & visual identity." },
];

const GALLERY_ITEMS = [
  { id: 1, title: "Neon Velocity", cat: "Motion", color: "from-blue-600 to-purple-600" },
  { id: 2, title: "The Interview", cat: "Podcast", color: "from-emerald-600 to-teal-600" },
  { id: 3, title: "Tech Launch", cat: "Web Design", color: "from-orange-600 to-red-600" },
  { id: 4, title: "Minimalist", cat: "UI/UX", color: "from-gray-600 to-black" },
];

/* --- COMPONENTS --- */

// 1. PRISM BACKGROUND
const PrismBackground = () => (
  <div className="fixed inset-0 z-0 bg-[#050505] overflow-hidden">
    {/* Animated Light Leaks */}
    <motion.div 
      animate={{ 
        opacity: [0.3, 0.5, 0.3], 
        scale: [1, 1.2, 1],
        rotate: [0, 90, 0]
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.08),_transparent_60%)] blur-3xl"
    />
    <motion.div 
      animate={{ 
        opacity: [0.2, 0.4, 0.2], 
        scale: [1.2, 1, 1.2],
        rotate: [0, -90, 0]
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute -bottom-[50%] -right-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.08),_transparent_60%)] blur-3xl"
    />
    {/* Noise Texture */}
    <div className="absolute inset-0 opacity-15 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
  </div>
);

// 2. NAVIGATION
const Navbar = () => (
  <nav className="fixed top-0 w-full p-6 md:p-8 flex justify-between items-center z-50 mix-blend-difference text-white">
    <div className="flex flex-col">
      <span className="font-bold tracking-tighter text-xl">{BRAND.studio}</span>
      <span className="font-mono text-[10px] tracking-widest text-gray-400">BY {BRAND.name}</span>
    </div>
    <div className="hidden md:flex gap-8 font-mono text-xs uppercase tracking-widest">
      {['Home','About', 'Services', 'Gallery', 'Contact'].map((item) => (
        <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-400 transition-colors">
          {item}
        </a>
      ))}
    </div>
    <a href="#contact" className="px-4 py-2 border border-white/20 rounded-full text-xs font-mono hover:bg-white hover:text-black transition-all">
      GET IN TOUCH
    </a>
  </nav>
);

// 3. HERO
const Hero = () => {
  return (
    <section id='home' className="relative h-screen flex flex-col justify-center items-center text-center px-4 z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-purple-400 font-mono text-l tracking-[0.5em] mb-6 uppercase">
          Welcome to the
        </h2>
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-8 mix-blend-overlay">
          {BRAND.studio}
        </h1>
        <p className="max-w-xl mx-auto text-gray-400 text-sm md:text-base leading-relaxed">
          We don't just edit; we engineer attention. A creative studio 
          led by <span className="text-white font-bold">{BRAND.name}</span>, specializing in 
          high-impact visuals and digital experiences.
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-gray-600">SCROLL TO EXPLORE</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-purple-500 to-transparent" />
      </motion.div>
    </section>
  );
};

// 4. ABOUT
const About = () => (
  <section id="about" className="py-24 px-6 md:px-24 relative z-10 border-t border-white/5 bg-black/50 backdrop-blur-sm">
    <div className="max-w-4xl mx-auto">
      <span className="text-purple-400 font-mono text-m tracking-widest mb-4 block">01 / WHO WE ARE</span>
      <h3 className="text-2xl md:text-4xl font-light text-gray-200 leading-snug">
        <span className="text-white font-medium"> Ediyrex </span>
        is an independent video editing studio focused on turning 
        <span className="text-white font-medium"> raw footage</span> into clear, engaging
        <span className="text-white font-medium"> visual stories</span>. 
        <br></br>
        <p> We believe strong edits aren’t about effects or trends — they’re about timing, flow, and intention.</p>
        
        From short-form reels to long-form videos, every project is handled with care, consistency, and attention to detail.
        <br></br>
        Our goal is simple: create edits that hold attention and communicate the story effectively.
        <br></br>
        EDIYREX works closely with creators and brands who value clarity, storytelling, and reliability in post-production.
      </h3>
    </div>
  </section>
);

// 5. SERVICES GRID
const ServiceCard = ({ icon: Icon, title, desc, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="group p-8 border border-white/5 hover:border-purple-500/50 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300"
  >
    <div className="mb-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-purple-400 group-hover:text-white group-hover:bg-purple-600 transition-all">
      <Icon size={18} />
    </div>
    <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
    <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">
      {desc}
    </p>
  </motion.div>
);

const Services = () => (
  <section id="services" className="py-24 px-6 md:px-24 relative z-10">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16">
        <span className="text-purple-400 font-mono text-m tracking-widest mb-4 block">02 / CAPABILITIES</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white">What We Do.</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SERVICES.map((s, i) => (
          <ServiceCard key={i} {...s} index={i} />
        ))}
      </div>
    </div>
  </section>
);

// 6. GALLERY
const GalleryItem = ({ item }) => (
  <div className="group relative aspect-video bg-neutral-900 overflow-hidden cursor-pointer">
    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300">
        <Play className="fill-white text-white ml-1" size={20} />
      </div>
    </div>
    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
      <span className="text-xs font-mono text-purple-300 uppercase tracking-wider">{item.cat}</span>
      <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
    </div>
  </div>
);

const Gallery = () => (
  <section id="gallery" className="py-24 px-6 md:px-24 relative z-10 bg-black">
    <div className="max-w-7xl mx-auto">
      <div className="mb-12 flex justify-between items-end">
        <div>
           <span className="text-purple-400 font-mono text-xs tracking-widest mb-4 block">03 / SHOWCASE</span>
           <h2 className="text-4xl font-bold text-white">Previous Works.</h2>
        </div>
        <button className="hidden md:flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-white transition-colors">
          VIEW ALL <ArrowRight size={16} />
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {GALLERY_ITEMS.map((item) => <GalleryItem key={item.id} item={item} />)}
      </div>
    </div>
  </section>
);

// 7. CONTACT FORM
const Contact = () => {
  const [status, setStatus] = useState("idle"); // idle, submitting, success
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      timestamp: new Date().toISOString()
    };

    // --- GOOGLE SHEET INTEGRATION INSTRUCTIONS ---
    // 1. Create a Google Form or Google Sheet + Apps Script Web App.
    // 2. Use fetch() to POST this 'data' object to that URL.
    // For this demo, we simulate a network delay and success.
    
    console.log("Form Data Captured:", data);

    setTimeout(() => {
      setStatus("success");
      e.target.reset();
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-24 relative z-10 border-t border-white/10">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div>
           <span className="text-purple-400 font-mono text-xs tracking-widest mb-4 block">04 / CONTACT</span>
           <h2 className="text-5xl font-bold text-white mb-6">Let's Build.</h2>
           <p className="text-gray-400 mb-8 leading-relaxed">
             Ready to elevate your content? Fill out the form, and we'll get back to you with a quote.
           </p>
           
           <div className="space-y-4 mb-12">
             <a href="#" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
               <Mail size={20} />  <a href="mailto:ediyrex@gmail.com">ediyrex@gmail.com</a>

             </a>
             <div className="flex gap-4">
                <a href="https://www.instagram.com/ediyrex?igsh=MXhrbGg5ZTVoeHdkYw==" className="p-2 border border-white/10 rounded hover:bg-white hover:text-black transition-all"><Instagram size={20} /></a>
                <a href="https://youtube.com/@ediyrex?si=D3sjKg5NOZpbDqJm" className="p-2 border border-white/10 rounded hover:bg-white hover:text-black transition-all"><LucideYoutube size={20} /></a>
                <a href="#" className="p-2 border border-white/10 rounded hover:bg-white hover:text-black transition-all"><Linkedin size={20} /></a>
             </div>
           </div>
        </div>

        {/* Form */}
        <div className="bg-white/5 p-8 rounded-lg border border-white/5">
           <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-mono text-gray-500 mb-2 uppercase">Your Name</label>
                <input 
                  required 
                  name="name" 
                  type="text" 
                  className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Eg: John Doe"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-gray-500 mb-2 uppercase">Phone Number</label>
                <input 
                  required 
                  name="phone" 
                  type="tel" 
                  className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="+91 (555) 000-0000"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-gray-500 mb-2 uppercase">Project Details</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Tell us about your vision..."
                />
              </div>
              
              <button 
                type="submit" 
                disabled={status !== "idle"}
                className={`w-full py-4 rounded font-bold tracking-widest text-xs uppercase flex items-center justify-center gap-2 transition-all ${status === "success" ? "bg-green-600 text-white" : "bg-white text-black hover:bg-purple-500 hover:text-white"}`}
              >
                {status === "idle" && <>Send Message <Send size={16} /></>}
                {status === "submitting" && "Sending..."}
                {status === "success" && <>Sent Successfully <CheckCircle size={16} /></>}
              </button>
           </form>
           {status === "success" && (
             <p className="mt-4 text-xs text-green-400 text-center font-mono">
               * Data logged. Connect Google Sheet API to save permanently.
             </p>
           )}
        </div>

      </div>
    </section>
  );
};

// 8. FOOTER
const Footer = () => (
  <footer className="py-12 px-6 border-t border-white/5 bg-black relative z-10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
      <div>
        <h3 className="font-bold text-lg text-white">{BRAND.studio}</h3>
        <p className="text-xs text-gray-600 mt-1">© {new Date().getFullYear()} Akshat Vaishnav. All Rights Reserved.</p>
      </div>
      <div className="flex gap-8 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
         <a href="#" className="hover:text-white">Privacy Policy</a>
         <a href="#" className="hover:text-white">Terms of Service</a>
      </div>
    </div>
  </footer>
);

/* --- MAIN APP --- */
export default function App() {
  return (
    <div className="bg-black min-h-screen text-gray-300 font-sans selection:bg-purple-500 selection:text-white">
      <PrismBackground />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}