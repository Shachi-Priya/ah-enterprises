'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const companyInfo = {
    name: 'A&H Enterprises',
    phone: '+91 77800 91979',
    email: 'service@ah-enterprises.biz',
    gst: 'GST: 09ACAFA3497M1ZY',
    address: 'Plot No 09, Greater Noida, Kasna',
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top micro-bar */}
      <div className="hidden lg:block bg-dark-950/90 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 xl:px-8">
          <div className="flex justify-between items-center py-2 text-xs tracking-wider">
            <div className="flex items-center gap-6 text-white/50">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3 w-3 text-gold-500" />
                {companyInfo.address}
              </span>
              <span className="text-gold-500/60">|</span>
              <span className="text-gold-500/80 font-medium">
                {companyInfo.gst}
              </span>
            </div>
            <div className="flex items-center gap-6 text-white/50">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-1.5 hover:text-gold-400 transition-colors"
              >
                <Phone className="h-3 w-3 text-gold-500" />
                {companyInfo.phone}
              </a>
              <span className="text-gold-500/60">|</span>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-1.5 hover:text-gold-400 transition-colors"
              >
                <Mail className="h-3 w-3 text-gold-500" />
                {companyInfo.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <motion.nav
        className={`transition-all duration-500 ${
          scrolled
            ? 'bg-dark-950/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 xl:px-8">
          <div className="flex justify-between items-center py-4 lg:py-5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img
                  src="/company-logo.png"
                  alt="A&H Enterprises"
                  className="h-12 w-12 lg:h-14 lg:w-14 object-contain rounded-sm"
                />
                <div className="absolute inset-0 border border-gold-500/30 rounded-sm group-hover:border-gold-400/60 transition-colors" />
              </div>
              <div>
                <h1 className="text-lg lg:text-xl font-display font-bold text-white tracking-wide">
                  A&H
                </h1>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold-500/80 font-medium">
                  Enterprises
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-5 py-2 text-sm font-medium uppercase tracking-[0.15em] text-white/70 hover:text-gold-400 transition-all duration-300 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold-500 group-hover:w-full transition-all duration-500" />
                </Link>
              ))}
              <Link
                href="/contact"
                className="ml-6 btn-primary text-xs py-3 px-6"
              >
                Get Quote
              </Link>
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white/70 hover:text-gold-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-dark-950/98 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-1">
              {navigation.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 text-lg font-medium uppercase tracking-[0.15em] text-white/70 hover:text-gold-400 border-b border-white/5 transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-4 space-y-3 text-sm text-white/50"
              >
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center gap-2 hover:text-gold-400 transition-colors"
                >
                  <Phone className="h-4 w-4 text-gold-500" />
                  {companyInfo.phone}
                </a>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-2 hover:text-gold-400 transition-colors"
                >
                  <Mail className="h-4 w-4 text-gold-500" />
                  {companyInfo.email}
                </a>
                <p className="text-gold-500/60 text-xs">{companyInfo.gst}</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
