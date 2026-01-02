import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Diary', path: '/diary' },
    { name: 'Trips', path: '/ideas' },
    { name: 'Blog', path: '/blog' },
    { name: 'Help', path: '/help' },
    { name: 'About', path: '/about' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-boo-dark selection:bg-boo-yellow/30 selection:text-boo-yellow">
      
      {/* Floating Navbar */}
      <div className="fixed top-0 w-full z-50 flex justify-center pt-6 px-4">
        <nav
          className={`w-full max-w-5xl transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
            isScrolled 
              ? 'bg-boo-card/80 backdrop-blur-xl border border-white/5 shadow-2xl rounded-full py-3 px-6' 
              : 'bg-transparent py-4 px-4'
          }`}
        >
          <div className="flex items-center justify-between">
            <Link to="/" className="block group relative z-10 select-none" aria-label="BooVizag Home">
               <div className="flex items-center justify-center transition-all duration-500 hover:scale-[1.02]">
                <div className="flex items-baseline leading-none font-logo tracking-tight text-3xl md:text-4xl pb-[2px]">
                    <span className="font-semibold text-[#F4B400] transition-transform duration-500 ease-out group-hover:scale-105 flex items-baseline">
                        b
                        <span className="relative flex flex-col items-center mx-[1px]">
                            o
                            <span className="absolute -bottom-2 w-[6px] h-[6px] md:w-2 md:h-2 bg-[#F97316] rounded-full transition-transform duration-500 ease-out group-hover:translate-y-1"></span>
                        </span>
                        o
                    </span>
                    <span className="font-semibold text-white ml-[1px]">
                        vizag
                    </span>
                </div>
               </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'bg-white/10 text-white shadow-inner'
                      : 'text-text-secondary hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Nav Toggle */}
            <button
              className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-boo-dark/95 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] md:hidden flex items-center justify-center ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-3xl font-bold text-white hover:text-boo-yellow transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <main className="flex-grow pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
        {children}
      </main>

      <footer className="border-t border-white/5 py-16 mt-12 bg-boo-dark relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-boo-yellow/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-text-secondary relative z-10">
          <div className="mb-6 md:mb-0 flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-boo-orange"></span>
            <span className="font-semibold text-text-primary">BooVizag</span>
            <span className="opacity-50">— A personal city diary.</span>
          </div>
          <div className="flex items-center space-x-8 font-medium">
            <Link to="/privacy" className="hover:text-boo-yellow transition-colors">Privacy</Link>
            <Link to="/about" className="hover:text-boo-yellow transition-colors">About</Link>
            <a 
              href="https://www.instagram.com/boovizag/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-text-secondary hover:text-boo-orange transition-colors duration-300"
              aria-label="Follow on Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;