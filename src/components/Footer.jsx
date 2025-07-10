import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/logo.jpg"
                className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300"
                alt="Enterprise Grooming Institute"
              />
              <div>
                <h3 className="text-xl font-bold">Enterprise Grooming Institute</h3>
                <p className="text-gray-400 text-sm">We groom job creators</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming lives through practical entrepreneurship education. We are committed to producing world-class
              job creators and contributing to Nigeria's socio-economic development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-green-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#programs" className="text-gray-300 hover:text-green-400 transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#courses" className="text-gray-300 hover:text-green-400 transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#admission" className="text-gray-300 hover:text-green-400 transition-colors">
                  Admission
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-green-400" />
                <span className="text-gray-300 text-sm">egroom2015@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-green-400" />
                <span className="text-gray-300 text-sm">07037906581</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-green-400" />
                <span className="text-gray-300 text-sm">08074880005</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Enterprise Grooming Institute. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
