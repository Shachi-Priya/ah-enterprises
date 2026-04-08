import Header from '@/components/Header'
import { Award, Users, Clock, CheckCircle, Phone, Mail, MapPin, Target, Shield, Wrench } from 'lucide-react'

export default function AboutPage() {
  const companyInfo = {
    name: 'A&H Enterprises',
    tagline: 'Excellence in Construction & Engineering Services',
    established: '2008',
    phone: '+91 9654541774',
    email: 'service@ah-enterprises.biz',
    address: '123 Construction Lane, Industrial Area, Mumbai, Maharashtra 400001'
  }

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Expert Team' },
    { number: '4.8', label: 'Average Rating' }
  ]

  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary-600" />,
      title: 'Quality First',
      description: 'We never compromise on quality and ensure every project meets the highest standards of excellence.'
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: 'Safety Priority',
      description: 'Safety is our top priority. We follow strict safety protocols to protect our team and clients.'
    },
    {
      icon: <Wrench className="h-8 w-8 text-primary-600" />,
      title: 'Innovation',
      description: 'We embrace latest technologies and innovative methods to deliver superior construction solutions.'
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: 'Customer Focus',
      description: 'Our clients are at the heart of everything we do. We build lasting relationships through trust.'
    }
  ]

  const expertise = [
    {
      title: 'Structural Engineering',
      description: 'Advanced structural analysis, design, and repair solutions for all types of buildings and infrastructure.'
    },
    {
      title: 'Construction Management',
      description: 'Comprehensive project management from planning to execution with timely delivery.'
    },
    {
      title: 'Specialized Repairs',
      description: 'Expert repair services including crack repair, waterproofing, and structural strengthening.'
    },
    {
      title: 'Material Testing',
      description: 'State-of-the-art material testing and quality assurance for construction materials.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Who We Are
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Leading construction and engineering company with over 15 years of excellence in delivering innovative solutions
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in {companyInfo.established}, {companyInfo.name} has grown from a small construction firm to one of the most trusted names in the industry. Our journey has been defined by unwavering commitment to quality, innovation, and customer satisfaction.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We specialize in comprehensive construction and engineering services, from structural repairs to new construction projects. Our team of skilled professionals brings decades of combined experience to every project, ensuring exceptional results that exceed expectations.
              </p>
              <p className="text-lg text-gray-600">
                Today, we pride ourselves on being a one-stop solution for all construction and engineering needs, serving clients across various industries with the same dedication and excellence that has defined us since day one.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-primary-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary-900 mb-4">
                Our Mission
              </h3>
              <p className="text-primary-800">
                To deliver exceptional construction and engineering solutions that exceed client expectations through innovation, quality craftsmanship, and unwavering commitment to safety and sustainability.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700">
                To be the leading construction and engineering company known for innovation, reliability, and excellence in every project we undertake, setting industry standards for quality and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our every action and decision
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized services that set us apart in the industry
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A dedicated team of professionals committed to excellence
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Engineers</h3>
                <p className="text-gray-600">Highly qualified engineers with specialized expertise</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-12 w-12 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Skilled Technicians</h3>
                <p className="text-gray-600">Experienced technicians trained in latest technologies</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-12 w-12 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Professionals</h3>
                <p className="text-gray-600">Industry-certified experts ensuring quality standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have trusted us with their construction and engineering needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Get Started
            </a>
            <a href="/services" className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600">
              Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
