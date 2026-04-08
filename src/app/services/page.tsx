import Header from '@/components/Header'
import { services } from '@/data/services'
import { Star, ArrowRight, CheckCircle, Phone, Mail } from 'lucide-react'

export default function ServicesPage() {
  const companyInfo = {
    phone: '+91 9654541774',
    email: 'service@ah-enterprises.biz'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Comprehensive construction and engineering solutions with expertise in structural repairs, 
              waterproofing, and specialized construction services.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-8 lg:p-12">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {service.name}
                      </h2>
                      <p className="text-lg text-gray-600 mb-6">
                        {service.description}
                      </p>
                      
                      {/* Rating and Reviews */}
                      <div className="flex items-center space-x-6 mb-6">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < Math.floor(service.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                          <span className="text-lg font-semibold text-gray-900 ml-2">
                            {service.rating}
                          </span>
                          <span className="text-gray-600 ml-1">
                            ({service.reviews} reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 lg:mt-0 lg:ml-8">
                      <a 
                        href={`mailto:${companyInfo.email}?subject=Inquiry about ${service.name}`}
                        className="btn-primary flex items-center space-x-2"
                      >
                        <span>Get Quote</span>
                        <ArrowRight className="h-5 w-5" />
                      </a>
                    </div>
                  </div>

                  {/* Sub-services */}
                  {service.subServices.length > 0 && (
                    <div className="border-t pt-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">
                        Specialized Services
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {service.subServices.map((subService) => (
                          <div key={subService.id} className="flex items-start space-x-3">
                            <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">
                                {subService.name}
                              </h4>
                              <p className="text-gray-600">
                                {subService.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Contact Information */}
                  <div className="border-t pt-8 mt-8">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Need more information?
                      </h4>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a 
                          href={`tel:${companyInfo.phone}`}
                          className="flex items-center space-x-2 text-primary-600 hover:text-primary-700"
                        >
                          <Phone className="h-5 w-5" />
                          <span>{companyInfo.phone}</span>
                        </a>
                        <a 
                          href={`mailto:${companyInfo.email}?subject=Inquiry about ${service.name}`}
                          className="flex items-center space-x-2 text-primary-600 hover:text-primary-700"
                        >
                          <Mail className="h-5 w-5" />
                          <span>{companyInfo.email}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Our expert team is ready to discuss your requirements and provide the best solutions for your construction and engineering needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Contact Us Now
            </a>
            <a href={`tel:${companyInfo.phone}`} className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600">
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
