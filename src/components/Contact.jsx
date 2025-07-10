"use client"

import { MapPin, Phone, Mail, Clock, Building } from "lucide-react"

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for more information about our programs and admission process
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <MapPin className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Head Office Address</h4>
                  <p className="text-gray-600">
                    EFAB Estate, Road 14, F Close,
                    <br />
                    Lokogoma, Abuja, FCT
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Phone Numbers</h4>
                  <p className="text-gray-600">
                    07037906581
                    <br />
                    08074880005
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Mail className="text-orange-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email Address</h4>
                  <p className="text-gray-600">egroom2015@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Building className="text-purple-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Corporate Registration</h4>
                  <p className="text-gray-600">
                    RC 1338499 AP
                    <br />
                    Corporate Affairs Commission
                    <br />
                    Federal Republic of Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Clock className="text-red-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Office Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 5:00 PM
                    <br />
                    Saturday: 9:00 AM - 2:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Subsidiaries</h3>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="font-bold text-gray-900 mb-4">Enterprise Development Institute Group</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">EGI Farm Fresh Foods</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Enterprise Media Publication Services</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">EGI Integrated Resources Ventures</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">EGI Energy Services</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">EGI Agribusiness Support Services</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">EGI Microfinance Limited</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">EGI Packaging and Logistic Services</span>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-2xl text-white">
              <h4 className="text-xl font-bold mb-4">Ready to Transform Your Future?</h4>
              <p className="mb-6 opacity-90">
                Join thousands of successful entrepreneurs who started their journey with us. Contact us today to learn
                more about our programs.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById("admission")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
