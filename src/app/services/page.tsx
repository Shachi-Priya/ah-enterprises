'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { services } from '@/data/services';
import { Star, ArrowRight, CheckCircle, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const companyInfo = {
    phone: '+91 9654541774',
    email: 'service@ah-enterprises.biz',
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
              Our Expertise
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Premium Construction
              <br />
              <span className="text-gradient-gold">& Engineering Services</span>
            </h1>
            <div className="section-divider mt-6 mb-6" />
            <p className="text-lg text-white/40 max-w-3xl mx-auto leading-relaxed">
              10 specialized divisions. 500+ completed projects. Every solution
              engineered for permanence, backed by decades of structural
              expertise and ISO-certified processes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 xl:px-8">
          <div className="space-y-12 lg:space-y-16">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={0.1}>
                <div className="relative overflow-hidden group">
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-gold-500/10 via-transparent to-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative card-premium p-8 lg:p-12">
                    {/* Service header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-4xl">{service.icon}</span>
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-500/60">
                              Service {String(index + 1).padStart(2, '0')}
                            </span>
                            <h2 className="text-2xl lg:text-3xl font-display font-bold text-white">
                              {service.name}
                            </h2>
                          </div>
                        </div>

                        <p className="text-white/50 leading-relaxed mb-6 max-w-3xl">
                          {service.longDescription}
                        </p>

                        {/* Rating */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(service.rating)
                                    ? 'text-gold-500 fill-current'
                                    : 'text-white/10'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-white/50">
                            <span className="text-white font-semibold">
                              {service.rating}
                            </span>{' '}
                            · {service.reviews} reviews
                          </span>
                        </div>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-3 mb-6">
                          {service.highlights.map((h) => (
                            <span
                              key={h}
                              className="text-[11px] font-medium uppercase tracking-wider text-gold-500/70 bg-gold-500/5 border border-gold-500/10 px-3 py-1.5"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex-shrink-0">
                        <a
                          href={`mailto:${companyInfo.email}?subject=Inquiry about ${service.name}`}
                          className="btn-primary text-xs"
                        >
                          Get Quote
                          <ArrowRight className="ml-2 h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>

                    {/* Sub-services */}
                    {service.subServices.length > 0 && (
                      <div className="border-t border-white/5 pt-8">
                        <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-gold-500/60 mb-6">
                          Specialized Services
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          {service.subServices.map((sub) => (
                            <div
                              key={sub.id}
                              className="flex items-start gap-3 group/sub"
                            >
                              <CheckCircle className="h-5 w-5 text-gold-500/50 mt-0.5 flex-shrink-0 group-hover/sub:text-gold-400 transition-colors" />
                              <div>
                                <h4 className="text-sm font-semibold text-white mb-1">
                                  {sub.name}
                                </h4>
                                <p className="text-xs text-white/35 leading-relaxed">
                                  {sub.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Contact bar */}
                    <div className="border-t border-white/5 pt-6 mt-8">
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                        <a
                          href={`tel:${companyInfo.phone}`}
                          className="flex items-center gap-2 text-sm text-white/30 hover:text-gold-400 transition-colors"
                        >
                          <Phone className="h-4 w-4 text-gold-500/40" />
                          {companyInfo.phone}
                        </a>
                        <a
                          href={`mailto:${companyInfo.email}?subject=Inquiry about ${service.name}`}
                          className="flex items-center gap-2 text-sm text-white/30 hover:text-gold-400 transition-colors"
                        >
                          <Mail className="h-4 w-4 text-gold-500/40" />
                          {companyInfo.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 relative border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,184,0,0.06),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 xl:px-8 relative text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Can&apos;t Find What
              <br />
              <span className="text-gradient-gold">
                You&apos;re Looking For?
              </span>
            </h2>
            <p className="text-white/40 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Our engineering team handles custom structural challenges daily.
              Tell us your requirement and we&apos;ll engineer a solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Our Engineers
                <ArrowRight className="ml-3 h-4 w-4" />
              </Link>
              <a href={`tel:${companyInfo.phone}`} className="btn-secondary">
                <Phone className="mr-3 h-4 w-4" />
                Call Now
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
