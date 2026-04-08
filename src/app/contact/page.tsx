'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const companyInfo = {
    phone: '+91 9654541774',
    email: 'service@ah-enterprises.biz',
    gst: 'GST: 09ACAFA3497M1ZY',
    address:
      'Plot No 09, Greater Noida, Kasna, Near R K Public School, Greater Noida, Gautam Buddha Nagar, Uttar Pradesh, 201310',
    whatsapp: '+91 9654541774',
    workingHours: 'Monday — Saturday: 9:00 AM — 7:00 PM',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.5!2d77.5!3d28.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGreater+Noida!5e0!3m2!1sen!2sin',
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      'Thank you for contacting A&H Enterprises! Our team will reach out within 24 hours.',
    );
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-dark-950">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,184,0,0.08),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 xl:px-8 relative">
          <AnimatedSection className="text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.35em] text-gold-500 mb-6 border border-gold-500/20 px-4 py-2">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Let&apos;s Build
              <br />
              <span className="text-gradient-gold">Something Great</span>
            </h1>
            <div className="section-divider mt-6 mb-6" />
            <p className="text-lg text-white/40 max-w-2xl mx-auto leading-relaxed">
              Free consultation. Expert advice. No obligation. Reach out and our
              senior engineers will respond within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 xl:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form — takes 3 cols */}
            <AnimatedSection direction="left" className="lg:col-span-3">
              <div className="relative">
                <div className="absolute -inset-[1px] bg-gradient-to-br from-gold-500/15 via-transparent to-gold-500/10" />
                <div className="relative bg-dark-800/60 backdrop-blur-xl p-8 lg:p-10">
                  <h2 className="text-2xl font-display font-bold text-white mb-2">
                    Send us a Message
                  </h2>
                  <p className="text-sm text-white/30 mb-8">
                    All fields marked with * are required.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-dark-900/80 border border-white/10 text-white placeholder-white/20 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/20 transition-all text-sm"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-2"
                        >
                          Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-dark-900/80 border border-white/10 text-white placeholder-white/20 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/20 transition-all text-sm"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-2"
                        >
                          Phone
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-dark-900/80 border border-white/10 text-white placeholder-white/20 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/20 transition-all text-sm"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-2"
                        >
                          Service Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-dark-900/80 border border-white/10 text-white focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/20 transition-all text-sm"
                        >
                          <option value="">Select a service</option>
                          <option value="fibre-wrapping">Fibre Wrapping</option>
                          <option value="grouting">Grouting Services</option>
                          <option value="waterproofing">Waterproofing</option>
                          <option value="crack-repair">Crack Repair</option>
                          <option value="structural-repair">
                            Structural Repair
                          </option>
                          <option value="civil-engineering">
                            Civil Engineering
                          </option>
                          <option value="rebar-scanning">
                            Rebar Scanning &amp; NDT
                          </option>
                          <option value="suspended-platform">
                            Suspended Platform Rental
                          </option>
                          <option value="fibre-lamination">
                            Fibre Lamination
                          </option>
                          <option value="polymer-mortar">
                            Polymer Modified Mortar
                          </option>
                          <option value="other">
                            Other / Custom Requirement
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-2"
                      >
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-dark-900/80 border border-white/10 text-white placeholder-white/20 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/20 transition-all text-sm resize-none"
                        placeholder="Tell us about your project—location, scope, timeline, and any specific requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full sm:w-auto"
                    >
                      <Send className="mr-3 h-4 w-4" />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact details — takes 2 cols */}
            <AnimatedSection
              direction="right"
              className="lg:col-span-2 space-y-6"
            >
              {/* Quick contact card */}
              <div className="card-premium">
                <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-gold-500 mb-6">
                  Direct Contact
                </h3>
                <div className="space-y-5">
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center border border-gold-500/20 text-gold-500 flex-shrink-0 group-hover:bg-gold-500 group-hover:text-dark-950 transition-all">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-0.5">
                        Phone
                      </p>
                      <p className="text-white font-medium group-hover:text-gold-400 transition-colors">
                        {companyInfo.phone}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center border border-gold-500/20 text-gold-500 flex-shrink-0 group-hover:bg-gold-500 group-hover:text-dark-950 transition-all">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-0.5">
                        Email
                      </p>
                      <p className="text-white font-medium group-hover:text-gold-400 transition-colors">
                        {companyInfo.email}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-gold-500/20 text-gold-500 flex-shrink-0">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-0.5">
                        Office
                      </p>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {companyInfo.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-gold-500/20 text-gold-500 flex-shrink-0">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-0.5">
                        Hours
                      </p>
                      <p className="text-white/60 text-sm">
                        {companyInfo.workingHours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* GST card */}
              <div className="card-premium">
                <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-gold-500 mb-3">
                  Business Registration
                </h3>
                <p className="text-white/60 text-sm font-medium">
                  {companyInfo.gst}
                </p>
              </div>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card-premium flex items-center gap-4 group hover:border-green-500/30 transition-all"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-green-500/10 border border-green-500/20 text-green-400 flex-shrink-0 group-hover:bg-green-500 group-hover:text-white transition-all">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white group-hover:text-green-400 transition-colors">
                    Chat on WhatsApp
                  </p>
                  <p className="text-xs text-white/30">Get instant response</p>
                </div>
                <ArrowRight className="h-4 w-4 text-white/20 ml-auto group-hover:text-green-400 transition-colors" />
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 lg:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 xl:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold-500 mb-4 block">
              Find Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold">
              Visit Our
              <span className="text-gradient-gold"> Office</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="relative">
              <div className="absolute -inset-[1px] bg-gradient-to-br from-gold-500/10 via-transparent to-gold-500/10" />
              <div className="relative overflow-hidden">
                <iframe
                  src={companyInfo.mapEmbedUrl}
                  width="100%"
                  height="400"
                  style={{
                    border: 0,
                    filter:
                      'invert(90%) hue-rotate(180deg) brightness(0.95) contrast(0.9)',
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="A&H Enterprises — Greater Noida Office"
                  className="w-full"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
