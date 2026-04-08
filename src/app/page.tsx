import Header from '@/components/Header'
import { services } from '@/data/services'
import { Star, ArrowRight, CheckCircle, Phone, Mail, MapPin, Clock, Award, Users } from 'lucide-react'

export default function HomePage() {
  const companyInfo = {
    name: 'A&H Enterprises',
    tagline: 'Excellence in Construction & Engineering Services',
    description: 'Your trusted partner for comprehensive construction, engineering, and structural repair solutions. With decades of experience and a commitment to quality, we deliver exceptional results for every project.',
    phone: '+91 9654541774',
    email: 'service@ah-enterprises.biz',
    address: '123 Construction Lane, Industrial Area'
  }

  const features = [
    {
      icon: <Award className="h-8 w-8 text-primary-600" />,
      title: 'Expert Team',
      description: 'Highly skilled professionals with years of experience'
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: 'Client Satisfaction',
      description: 'Over 500 satisfied clients across various industries'
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: 'Timely Delivery',
      description: 'Projects completed on schedule, every time'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary-600" />,
      title: 'Quality Assured',
      description: 'ISO certified processes and quality standards'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                {companyInfo.name}
              </h1>
              <p className="text-xl lg:text-2xl mb-4 text-primary-100">
                {companyInfo.tagline}
              </p>
              <p className="text-lg mb-8 text-primary-100">
                {companyInfo.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                  Get Quote
                </a>
                <a href="/services" className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600">
                  Our Services
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-primary-100">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-primary-100">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-primary-100">Expert Team</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">4.8</div>
                    <div className="text-primary-100">Average Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive construction and engineering solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <div key={service.id} className="card group cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {service.name}
                  </h3>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(service.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">
                      {service.rating} ({service.reviews} reviews)
                    </span>
                  </div>
                </div>
                {service.subServices.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">
                      {service.subServices.length} specialized services
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="/services" className="btn-primary">
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose A&H Enterprises
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver excellence through expertise, innovation, and commitment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-100">
              Get in touch with our expert team today
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <a href={`tel:${companyInfo.phone}`} className="text-primary-100 hover:text-white">
                {companyInfo.phone}
              </a>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <a href={`mailto:${companyInfo.email}`} className="text-primary-100 hover:text-white">
                {companyInfo.email}
              </a>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-primary-100">{companyInfo.address}</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Contact Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
