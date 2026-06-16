import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

function App() {
  const portfolioRef = useRef([]);
  const heroRef = useRef(null);

  useEffect(() => {
    // 1. Hero Entrance Animation
    gsap.fromTo(heroRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    // 2. Grid Items Scroll Animation (Fade & Scale up)
    portfolioRef.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(item, 
          { opacity: 0, y: 60, scale: 0.95 }, 
          { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            duration: 1, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });
  }, []);

  // Form submission handler (Mailto trick for static sites)
  const handleContactSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    
    const mailtoLink = `mailto:mayursaproo1111@gmail.com?subject=Portfolio Inquiry from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
    window.location.href = mailtoLink;
  };

  // Expanded list to fill the grid nicely, added 'link' property
  const portfolioItems = [
    // --- ROW 1: Cinematic Art & Minimal Typography ---
    {
      id: 1,
      title: "THRILLER CINEMATIC POSTER",
      subtitle: "Law Gate Short Film Key Art",
      img: "imgb.png",
    },
    {

      id: 3,
      title: "MINIMAL BRAND IDENTITY",
      subtitle: "ClipCred Vector Logo Design",
      img: "imgd.png",
    },
    {
      id: 2,
      title: "NOIR MOVIE BANNER",
      subtitle: "Channi Himmat Creative Typography Layout",
      img: "imgc.png",
    },
  
    // --- ROW 2: Bright Marketing & Vector Layouts ---
    {
      id: 4,
      title: "PRODUCT PACKAGING GRAPHIC",
      subtitle: "Dishwash Gel Lemon Label Artwork",
      img: "imge.png",
    },
    {
      id: 5,
      title: "CAMPUS RECRUITMENT FLYER",
      subtitle: "We're Hiring Social Media Asset",
      img: "imgf.png",
    },
    {
      id: 6,
      title: "CORPORATE EVENT ANNOUNCEMENT",
      subtitle: "Core Team Open Positions Notice",
      img: "imgh.png",
    }
  ];
  
  

  return (
    <>
      {/* Inline styles for the custom floating animation */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>

      <div className="min-h-screen bg-[#0a0a0f] text-gray-300 font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
        
        {/* 1. HERO SECTION */}
        <header className="relative min-h-screen flex items-center justify-center overflow-hidden px-8">
          {/* Abstract Neon Glows in Background */}
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[150px] opacity-30 animate-pulse pointer-events-none"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-[150px] opacity-30 pointer-events-none"></div>

          <div ref={heroRef} className="z-10 max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-purple-400 tracking-widest uppercase text-sm mb-4 font-semibold">Welcome to my portfolio</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Hello! I'm <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Mayur Saproo</span>
              </h1>
              <h2 className="text-2xl text-gray-400 mb-8 font-light">Graphic Designer & Visual Artist.</h2>
              
              <div className="flex gap-4">
                <a href="#contact" className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300">
                  Let's Talk
                </a>
                <a href="#portfolio" className="px-8 py-3 rounded-full border border-gray-600 hover:border-purple-400 hover:text-purple-400 transition-all duration-300">
                  View Work
                </a>
              </div>
            </div>
            
            {/* Smooth Triangle Headshot with Floating Effect */}
            <div className="relative hidden md:flex justify-center items-center w-full max-w-[450px] h-[450px] animate-float z-10 mx-auto">
              {/* Drop shadow applied to the SVG itself, replacing hard CSS borders */}
              <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_40px_rgba(168,85,247,0.2)]">
                <defs>
                <clipPath id="smooth-triangle" clipPathUnits="objectBoundingBox">
  {/* A continuous organic path using cubic Bezier curves (C) to match the reference blob */}
  <path d="M 0.45 0.12 
           C 0.75 0.08, 0.92 0.22, 0.92 0.48 
           C 0.92 0.72, 0.78 0.88, 0.55 0.92 
           C 0.32 0.96, 0.18 0.82, 0.12 0.65 
           C 0.05 0.45, 0.15 0.16, 0.45 0.12 Z" />
</clipPath>
                </defs>
                <image 
                  href="imga.png" 
                  width="200" 
                  height="200" 
                  preserveAspectRatio="xMidYMid slice" 
                  clipPath="url(#smooth-triangle)" 
                />
              </svg>
            </div>
          </div>
        </header>

        {/* 2. SERVICES / WHAT I OFFER */}
        <section className="py-20 px-8 border-t border-gray-800/50 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <h2 className="text-4xl font-bold text-white uppercase tracking-wider">What I'm<br/>Offering</h2>
              <p className="text-gray-500 max-w-sm mt-4 md:mt-0">Crafting compelling visual narratives and translating ideas into striking, high-impact digital designs.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Brand Identity', desc: 'Crafting memorable visual identities that communicate brand values and resonate with audiences.' },
                { title: 'Event & Poster Design', desc: 'Designing high-impact promotional materials and typography-driven posters that drive engagement.' },
                { title: 'Digital & Social Assets', desc: 'Creating cohesive, eye-catching graphics tailored for modern digital marketing campaigns.' }
              ].map((service, i) => (
                <div key={i} className="bg-[#12121a] p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-colors group">
                  <div className="text-purple-500 mb-6 text-3xl opacity-70 group-hover:opacity-100 transition-opacity">✦</div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. EXPERIENCE TIMELINE */}
        <section className="py-20 px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-bold text-center text-purple-400 tracking-widest uppercase mb-12">Experience</h2>
            
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-[#12121a] rounded-xl border border-gray-800 hover:border-gray-600 transition-colors">
                <div>
                  <h3 className="text-xl font-bold text-white">Graphic Designer</h3>
                  <p className="text-purple-400 text-sm">Dragcon</p>
                </div>
                <p className="text-gray-500 text-sm mt-2 md:mt-0">June 2024 - July 2024</p>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-[#12121a] rounded-xl border border-gray-800 hover:border-gray-600 transition-colors">
                <div>
                  <h3 className="text-xl font-bold text-white">SEO Intern</h3>
                  <p className="text-purple-400 text-sm">THE SARA (NGO)</p>
                </div>
                <p className="text-gray-500 text-sm mt-2 md:mt-0">Dec 2025 - Feb 2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SELECTED WORKS (Animated & Clickable Grid Layout) */}
        <section id="portfolio" className="py-24 px-8 relative z-10 bg-[#0d0d14]">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center mb-20">
              <h2 className="text-sm font-bold text-purple-400 tracking-widest uppercase mb-4">Portfolio</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white uppercase">Selected Works</h3>
            </div>

            {/* CSS Grid for Posters - Now using <a> tags */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <a 
                  key={item.id} 
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  ref={el => portfolioRef.current[index] = el}
                  className="group relative overflow-hidden rounded-2xl bg-[#12121a] border border-gray-800 hover:border-purple-500/50 transition-colors cursor-pointer aspect-[3/4] block"
                >
                  {/* Poster Image */}
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                  />
                  
                  {/* Dark Gradient Overlay & Text (Appears on Hover) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-2 border border-purple-500/30 inline-block px-3 py-1 rounded-full bg-purple-900/20">
                        {item.subtitle}
                      </p>
                      <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-400 text-sm font-semibold flex items-center group-hover:text-purple-300 transition-colors">

                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CONTACT FORM (Say Hi!) */}
        <section id="contact" className="py-24 px-8 border-t border-gray-800/50 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Say Hi!</span> and tell me about<br/>your idea
            </h2>
            <p className="text-gray-500 mb-16">Reach out to discuss a design project, collaboration, or just to say hello.</p>

            <form onSubmit={handleContactSubmit} className="text-left space-y-8 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input type="text" id="name" name="name" className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors peer placeholder-transparent" placeholder="Name" required />
                  <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-purple-500">Your Name</label>
                </div>
                <div className="relative">
                  <input type="email" id="email" name="email" className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors peer placeholder-transparent" placeholder="Email" required />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-purple-500">Your Email</label>
                </div>
              </div>

              <div className="relative mt-8">
                 <textarea id="message" name="message" rows="1" className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors peer placeholder-transparent resize-none" placeholder="Message" required></textarea>
                 <label htmlFor="message" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-purple-500">Tell me about your project...</label>
              </div>

              <div className="pt-8 flex justify-end">
                <button type="submit" className="px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold tracking-wide hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:scale-105 transition-all duration-300">
                  Send Message →
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-8 px-8 border-t border-gray-800/80 text-center flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 relative z-10">
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="https://linkedin.com/in/mayursaproo" className="hover:text-purple-400 transition-colors">LinkedIn</a>
            <a href="https://github.com/mayur-saproo" className="hover:text-purple-400 transition-colors">GitHub</a>
          </div>
          <p>© 2026 Mayur Saproo. All rights reserved.</p>
        </footer>

      </div>
    </>
  );
}

export default App;
