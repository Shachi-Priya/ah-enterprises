'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const companyInfo = {
    phone: '+91 77800 91979',
    email: 'service@ah-enterprises.biz',
    gst: 'GST: 09ACAFA3497M1ZY',
    address:
      'Plot No 09, Greater Noida, Kasna, Near R K Public School, Greater Noida, Gautam Buddha Nagar, Uttar Pradesh, 201310',
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'Fibre Wrapping',
    'Grouting Services',
    'Waterproofing',
    'Crack Repair',
    'Structural Repair',
    'Civil Engineering',
  ];

  return (
    <footer className="relative bg-dark-950 border-t border-white/5">
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 xl:px-8">
        {/* Main footer */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img
                src="/company-logo.png"
                alt="A&H Enterprises"
                className="h-12 w-12 object-contain rounded-sm"
              />
              <div>
                <h2 className="text-lg font-display font-bold text-white">
                  A&H
                </h2>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold-500/80">
                  Enterprises
                </p>
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              India&apos;s trusted partner for premium construction, structural
              engineering, and advanced repair solutions since 2008.
            </p>
            <p className="text-gold-500/60 text-xs font-medium tracking-wider">
              {companyInfo.gst}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-gold-500 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-gold-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-gold-500 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-gold-500 mb-6">
              Our Expertise
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-white/40 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500/40" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-gold-500 mb-6">
              Reach Us
            </h3>
            <div className="space-y-4">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-start gap-3 text-sm text-white/40 hover:text-gold-400 transition-colors group"
              >
                <Phone className="h-4 w-4 text-gold-500/60 mt-0.5 flex-shrink-0" />
                <span>{companyInfo.phone}</span>
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-start gap-3 text-sm text-white/40 hover:text-gold-400 transition-colors group"
              >
                <Mail className="h-4 w-4 text-gold-500/60 mt-0.5 flex-shrink-0" />
                <span>{companyInfo.email}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-white/40">
                <MapPin className="h-4 w-4 text-gold-500/60 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{companyInfo.address}</span>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold-500 hover:text-gold-400 transition-colors group"
              >
                Get Free Quote
                <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30 tracking-wider">
            &copy; {currentYear} A&H Enterprises. All rights reserved.
          </p>
          <p className="text-xs text-white/20 tracking-wider">
            Built with precision. Delivered with excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
