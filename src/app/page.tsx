'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { services } from '@/data/services';
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Award,
  Users,
  Clock,
  Shield,
  Star,
  Zap,
  Building2,
} from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const companyInfo = {
    phone: '+91 77800 91979',
    email: 'service@ah-enterprises.biz',
    address:
      'Plot No 09, Greater Noida, Kasna, Near R K Public School, Gautam Buddha Nagar, UP 201310',
  };

  const stats = [
    { number: '500+', label: 'Projects Delivered', suffix: '' },
    { number: '15+', label: 'Years of Mastery', suffix: '' },
    { number: '50+', label: 'Expert Engineers', suffix: '' },
    { number: '98%', label: 'Client Retention', suffix: '' },
  ];

  const features = [
    {
      icon: <Award className="h-7 w-7" />,
      title: 'Certified Excellence',
      description:
        'ISO-certified processes with industry-leading quality standards and rigorous testing protocols.',
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: '500+ Happy Clients',
      description:
        'Trusted by government bodies, Fortune 500 companies, and leading construction firms across India.',
    },
    {
      icon: <Clock className="h-7 w-7" />,
      title: 'On-Time Delivery',
      description:
        'Military-grade project management ensuring every milestone is hit—on schedule, every time.',
    },
    {
      icon: <Shield className="h-7 w-7" />,
      title: 'Safety First',
      description:
        'Zero-incident track record with comprehensive safety protocols and trained specialist teams.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description:
        'Free on-site assessment by our structural engineers to understand your exact requirements.',
    },
    {
      step: '02',
      title: 'Engineering',
      description:
        'Detailed structural analysis, material selection, and customized solution design by our R&D team.',
    },
    {
      step: '03',
      title: 'Execution',
      description:
        'Precision execution by certified technicians with real-time quality monitoring and progress reporting.',
    },
    {
      step: '04',
      title: 'Assurance',
      description:
        'Comprehensive testing, documentation, warranty issuance, and long-term maintenance support.',
    },
  ];

  return (
    <div className="min-h-screen bg-dark-950">
      <Header />

      {/* ═══════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Background layers */}
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,184,0,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(245,184,0,0.05),transparent_60%)]" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative max-w-7xl mx-auto px-6 xl:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32 w-full"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="inline-block text-xs font-bold uppercase tracking-[0.35em] text-gold-500 mb-6 border border-gold-500/20 px-4 py-2">
                  Since 2008 — Greater Noida
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.05] mb-6"
              >
                Building
                <br />
                <span className="text-gradient-gold">Stronger</span>
                <br />
                Foundations
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg lg:text-xl text-white/50 max-w-lg mb-10 leading-relaxed"
              >
                India&apos;s premium partner for structural strengthening,
                advanced waterproofing, fibre wrapping, and civil engineering
                excellence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/contact" className="btn-primary">
                  Start Your Project
                  <ArrowRight className="ml-3 h-4 w-4" />
                </Link>
                <Link href="/services" className="btn-secondary">
                  Explore Services
                </Link>
              </motion.div>
            </div>

            {/* Stats card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-[1px] bg-gradient-to-br from-gold-500/20 via-transparent to-gold-500/10 rounded-sm" />
                <div className="relative bg-dark-800/80 backdrop-blur-xl p-10 rounded-sm">
                  <div className="grid grid-cols-2 gap-8">
                    {stats.map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 + i * 0.15 }}
                        className="text-center p-4"
                      >
                        <div className="text-4xl xl:text-5xl font-display font-bold text-gradient-gold mb-2">
                          {stat.number}
                        </div>
                        <div className="text-xs uppercase tracking-[0.2em] text-white/40">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="lg:hidden mt-16 grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="card-premium text-center p-5">
                <div className="text-2xl font-display font-bold text-gradient-gold mb-1">
                  {stat.number}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-[1px] h-8 bg-gradient-to-b from-gold-500/50 to-transparent"
          />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICES OVERVIEW
      ═══════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,184,0,0.03),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 xl:px-8 relative">
          <AnimatedSection className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold-500 mb-4 block">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Premium Construction
              <br />
              <span className="text-gradient-gold">
                & Engineering Solutions
              </span>
            </h2>
            <div className="section-divider mt-6 mb-6" />
            <p className="text-white/40 max-w-2xl mx-auto text-lg leading-relaxed">
              From structural strengthening to waterproofing, we deliver
              solutions engineered for permanence.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.slice(0, 6).map((service, i) => (
              <AnimatedSection key={service.id} delay={i * 0.1}>
                <div className="card-premium group h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/0 to-transparent group-hover:via-gold-500/40 transition-all duration-700" />

                  <div className="text-3xl mb-5">{service.icon}</div>

                  <h3 className="text-lg font-display font-bold text-white mb-3 group-hover:text-gold-400 transition-colors duration-300">
                    {service.name}
                  </h3>

                  <p className="text-sm text-white/40 mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, idx) => (
                        <Star
                          key={idx}
                          className={`h-3.5 w-3.5 ${
                            idx < Math.floor(service.rating)
                              ? 'text-gold-500 fill-current'
                              : 'text-white/10'
                          }`}
                        />
                      ))}
                      <span className="text-xs text-white/30 ml-2">
                        {service.rating}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-white/20 group-hover:text-gold-500 group-hover:translate-x-1 transition-all duration-300" />
                  </div>

                  {service.subServices.length > 0 && (
                    <p className="text-[11px] text-gold-500/40 mt-4 uppercase tracking-widest">
                      {service.subServices.length} specialized services
                    </p>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-16">
            <Link href="/services" className="btn-secondary">
              View All 10 Services
              <ArrowRight className="ml-3 h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY CHOOSE US
      ═══════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 xl:px-8">
          <AnimatedSection className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold-500 mb-4 block">
              The A&H Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Why Industry Leaders
              <br />
              <span className="text-gradient-gold">Choose Us</span>
            </h2>
            <div className="section-divider mt-6" />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.1}>
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-gold-500/20 text-gold-500 group-hover:bg-gold-500 group-hover:text-dark-950 transition-all duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-display font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PROCESS
      ═══════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 relative border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(245,184,0,0.04),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 xl:px-8 relative">
          <AnimatedSection className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold-500 mb-4 block">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              From Vision to
              <br />
              <span className="text-gradient-gold">Structural Reality</span>
            </h2>
            <div className="section-divider mt-6" />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.15}>
                <div className="relative">
                  <div className="text-6xl font-display font-bold text-gold-500/10 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {item.description}
                  </p>
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 w-8 h-[1px] bg-gold-500/20" />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CLIENTS / TRUST BANNER
      ═══════════════════════════════════════════ */}
      <section className="py-16 border-t border-b border-white/5 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-6 xl:px-8">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-500/30 to-gold-700/30 border-2 border-dark-900 flex items-center justify-center"
                    >
                      <span className="text-xs font-bold text-gold-400">
                        {i}
                      </span>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-gold-500 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-white/50">
                    Rated{' '}
                    <span className="text-white font-semibold">4.8/5</span> from
                    1,200+ reviews
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-8 text-white/20 text-sm tracking-wider">
                <span className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-gold-500/40" /> Government
                  Projects
                </span>
                <span className="hidden sm:inline text-gold-500/20">|</span>
                <span className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-gold-500/40" /> Commercial
                  &amp; Industrial
                </span>
                <span className="hidden sm:inline text-gold-500/20">|</span>
                <span className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-gold-500/40" /> Residential
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,184,0,0.06),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 xl:px-8 relative">
          <AnimatedSection>
            <div className="relative overflow-hidden">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-gold-500/20 via-gold-500/5 to-gold-500/20" />
              <div className="relative bg-dark-800/80 backdrop-blur-xl p-10 lg:p-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
                      Ready to Build
                      <br />
                      <span className="text-gradient-gold">
                        Something Extraordinary?
                      </span>
                    </h2>
                    <p className="text-white/40 text-lg leading-relaxed mb-8">
                      Get a free structural consultation and project estimate
                      from our senior engineers. No obligation, just expert
                      advice.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/contact" className="btn-primary">
                        Request Free Consultation
                        <ArrowRight className="ml-3 h-4 w-4" />
                      </Link>
                      <a
                        href={`tel:${companyInfo.phone}`}
                        className="btn-secondary"
                      >
                        <Phone className="mr-3 h-4 w-4" />
                        Call Now
                      </a>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Phone className="h-5 w-5 text-gold-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-1">
                          Call Us
                        </p>
                        <a
                          href={`tel:${companyInfo.phone}`}
                          className="text-white hover:text-gold-400 transition-colors font-medium"
                        >
                          {companyInfo.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="h-5 w-5 text-gold-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-1">
                          Email Us
                        </p>
                        <a
                          href={`mailto:${companyInfo.email}`}
                          className="text-white hover:text-gold-400 transition-colors font-medium"
                        >
                          {companyInfo.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="h-5 w-5 text-gold-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-1">
                          Visit Us
                        </p>
                        <p className="text-white/60 text-sm leading-relaxed">
                          {companyInfo.address}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
