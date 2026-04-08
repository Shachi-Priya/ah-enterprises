'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import {
  Award,
  Users,
  Clock,
  Target,
  Shield,
  Wrench,
  Building2,
  Hammer,
  Lightbulb,
  Heart,
} from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: '500+', label: 'Projects Delivered' },
    { number: '15+', label: 'Years of Mastery' },
    { number: '50+', label: 'Expert Engineers' },
    { number: '98%', label: 'Client Retention' },
  ];

  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Uncompromising Quality',
      description:
        'Every project undergoes multi-stage quality checks. We use ISO-certified processes, premium materials, and industry-leading testing protocols to ensure structural integrity that lasts decades.',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Zero-Incident Safety',
      description:
        'A flawless safety record built on rigorous training, daily safety audits, certified equipment, and a culture where every team member is empowered to halt work if safety is at risk.',
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: 'Innovation-Driven',
      description:
        'We invest in R&D—bringing aerospace-grade carbon fibre, AI-assisted structural analysis, and next-generation waterproofing technologies to every project we undertake.',
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Client Partnership',
      description:
        "We don't just deliver projects—we build relationships. 98% of our clients return for additional projects, and word-of-mouth referrals drive 60% of our new business.",
    },
  ];

  const expertise = [
    {
      icon: <Building2 className="h-6 w-6" />,
      title: 'Structural Engineering',
      description:
        'Advanced FEA analysis, load assessment, and rehabilitation design for buildings, bridges, and industrial structures.',
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: 'Construction Management',
      description:
        'End-to-end project management with Gantt-chart scheduling, resource optimization, and real-time progress dashboards.',
    },
    {
      icon: <Hammer className="h-6 w-6" />,
      title: 'Specialized Repairs',
      description:
        'Fibre wrapping, epoxy injection, concrete jacketing, and advanced waterproofing—engineered for permanence.',
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'NDT & Material Testing',
      description:
        'GPR scanning, UPV testing, half-cell potential surveys, and comprehensive material characterization.',
    },
  ];

  const milestones = [
    {
      year: '2008',
      title: 'Foundation',
      description:
        'A&H Enterprises founded in Greater Noida with a vision to bring engineering excellence to construction.',
    },
    {
      year: '2012',
      title: 'Expansion',
      description:
        'Expanded into structural repair and fibre wrapping, becoming one of the first specialized firms in North India.',
    },
    {
      year: '2016',
      title: 'ISO Certification',
      description:
        'Achieved ISO 9001:2015 certification. Crossed 200+ projects milestone with zero safety incidents.',
    },
    {
      year: '2020',
      title: 'Tech Leadership',
      description:
        'Introduced GPR scanning, carbon fibre lamination, and polyurea waterproofing to our service portfolio.',
    },
    {
      year: '2024',
      title: '500+ Projects',
      description:
        'Crossed 500 projects, 50+ team members, and established as a premium brand in structural engineering.',
    },
  ];

  return (
    <div className="min-h-screen bg-dark-950">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,184,0,0.08),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 xl:px-8 relative">
          <AnimatedSection className="text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.35em] text-gold-500 mb-6 border border-gold-500/20 px-4 py-2">
              Est. 2008
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Crafting Structural
              <br />
              <span className="text-gradient-gold">Excellence Since 2008</span>
            </h1>
            <div className="section-divider mt-6 mb-6" />
            <p className="text-lg text-white/40 max-w-3xl mx-auto leading-relaxed">
              From a focused engineering firm in Greater Noida to India&apos;s
              trusted name in structural strengthening—our story is one of
              relentless pursuit of engineering perfection.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Story + Stats */}
      <section className="py-24 lg:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 xl:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold-500 mb-4 block">
                Our Journey
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-8">
                The A&H
                <span className="text-gradient-gold"> Story</span>
              </h2>
              <div className="space-y-6 text-white/45 leading-relaxed">
                <p>
                  Founded in 2008 in Greater Noida, A&H Enterprises began with a
                  singular mission: to bring world-class structural engineering
                  to India&apos;s rapidly growing infrastructure. What started
                  as a small team of passionate engineers has evolved into a 50+
                  member organization trusted by government agencies, Fortune
                  500 corporations, and premier real estate developers.
                </p>
                <p>
                  We specialize in the confluence of traditional construction
                  expertise and cutting-edge material science—deploying carbon
                  fibre reinforcement, advanced polymer systems, and precision
                  grouting technologies that were once exclusive to aerospace
                  and defense applications.
                </p>
                <p>
                  Today, with 500+ successfully delivered projects and a 98%
                  client retention rate, A&H Enterprises stands as a testament
                  to what happens when engineering rigor meets unwavering
                  commitment to client success.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3 text-xs text-gold-500/60 tracking-wider">
                <span className="w-8 h-[1px] bg-gold-500/30" />
                GST: 09ACAFA3497M1ZY
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="absolute -inset-[1px] bg-gradient-to-br from-gold-500/20 via-transparent to-gold-500/10" />
                <div className="relative bg-dark-800/60 backdrop-blur-xl p-10">
                  <div className="grid grid-cols-2 gap-8">
                    {stats.map((stat, i) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-4xl lg:text-5xl font-display font-bold text-gradient-gold mb-2">
                          {stat.number}
                        </div>
                        <div className="text-xs uppercase tracking-[0.2em] text-white/35">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 lg:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 xl:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={0}>
              <div className="card-premium h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 flex items-center justify-center border border-gold-500/30 text-gold-500">
                    <Target className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white">
                    Our Mission
                  </h3>
                </div>
                <p className="text-white/40 leading-relaxed">
                  To engineer structural solutions that outlast
                  expectations—leveraging advanced materials, precision
                  techniques, and relentless quality standards to protect and
                  strengthen India&apos;s built environment for generations to
                  come.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="card-premium h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 flex items-center justify-center border border-gold-500/30 text-gold-500">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white">
                    Our Vision
                  </h3>
                </div>
                <p className="text-white/40 leading-relaxed">
                  To be India&apos;s most trusted structural engineering
                  brand—known for innovation, integrity, and an unshakeable
                  commitment to building safer, stronger, more resilient
                  structures across the nation.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 lg:py-32 border-t border-white/5 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,184,0,0.03),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 xl:px-8 relative">
          <AnimatedSection className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold-500 mb-4 block">
              Our Foundation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Core
              <span className="text-gradient-gold"> Values</span>
            </h2>
            <div className="section-divider mt-6" />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-14 h-14 mb-6 border border-gold-500/20 text-gold-500 group-hover:bg-gold-500 group-hover:text-dark-950 transition-all duration-500">
                    {value.icon}
                  </div>
                  <h3 className="text-base font-display font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-white/35 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Milestones */}
      <section className="py-24 lg:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 xl:px-8">
          <AnimatedSection className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold-500 mb-4 block">
              Our Growth
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Key
              <span className="text-gradient-gold"> Milestones</span>
            </h2>
            <div className="section-divider mt-6" />
          </AnimatedSection>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold-500/30 via-gold-500/10 to-transparent" />

            <div className="space-y-12 lg:space-y-16">
              {milestones.map((milestone, i) => (
                <AnimatedSection
                  key={milestone.year}
                  delay={i * 0.1}
                  direction={i % 2 === 0 ? 'left' : 'right'}
                >
                  <div
                    className={`relative flex items-start gap-8 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 w-3 h-3 rounded-full bg-gold-500 border-4 border-dark-950 z-10 mt-1" />

                    <div
                      className={`ml-12 lg:ml-0 lg:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12 lg:ml-auto'}`}
                    >
                      <span className="text-3xl font-display font-bold text-gradient-gold">
                        {milestone.year}
                      </span>
                      <h3 className="text-lg font-display font-bold text-white mt-2 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-white/35 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 lg:py-32 border-t border-white/5 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(245,184,0,0.04),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 xl:px-8 relative">
          <AnimatedSection className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold-500 mb-4 block">
              What Sets Us Apart
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Our
              <span className="text-gradient-gold"> Expertise</span>
            </h2>
            <div className="section-divider mt-6" />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="card-premium h-full group">
                  <div className="text-gold-500/60 mb-4 group-hover:text-gold-400 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-display font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/35 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 xl:px-8">
          <AnimatedSection className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold-500 mb-4 block">
              The People
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Our
              <span className="text-gradient-gold"> Team</span>
            </h2>
            <div className="section-divider mt-6 mb-6" />
            <p className="text-white/40 max-w-2xl mx-auto leading-relaxed">
              50+ dedicated professionals—structural engineers, certified
              technicians, and project managers—united by a passion for
              engineering excellence.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-10 w-10" />,
                title: 'Expert Engineers',
                description:
                  "IIT and NIT graduates with master's degrees in structural engineering and 10+ years average experience.",
              },
              {
                icon: <Wrench className="h-10 w-10" />,
                title: 'Certified Technicians',
                description:
                  'Factory-trained specialists in carbon fibre application, epoxy injection, and advanced waterproofing systems.',
              },
              {
                icon: <Award className="h-10 w-10" />,
                title: 'Project Leaders',
                description:
                  'PMP-certified project managers ensuring every deliverable meets timeline, budget, and quality benchmarks.',
              },
            ].map((member, i) => (
              <AnimatedSection key={member.title} delay={i * 0.1}>
                <div className="card-premium text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gold-500/5 border border-gold-500/20 text-gold-500">
                    {member.icon}
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-3">
                    {member.title}
                  </h3>
                  <p className="text-sm text-white/35 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 border-t border-white/5 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,184,0,0.06),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 xl:px-8 relative text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Ready to Work With
              <br />
              <span className="text-gradient-gold">India&apos;s Best?</span>
            </h2>
            <p className="text-white/40 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Join 500+ organizations that trust A&H Enterprises with their most
              critical structural challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Start Your Project
              </a>
              <a href="/services" className="btn-secondary">
                Explore Services
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
