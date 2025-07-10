"use client"

import { useState, useEffect } from "react"
import { Menu, X, GraduationCap, Download } from "lucide-react"

const Header = ({ onApplyClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const downloadBrochure = () => {
    // Create a temporary link to download the brochure
    const link = document.createElement("a")
    link.href = "/images/admission-flyer.png"
    link.download = "EGI-Brochure.png"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xl"
          : "bg-gradient-to-r from-green-600/90 to-emerald-600/90 backdrop-blur-sm"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3 animate-fade-in">
            <div className="relative">
              <img
                src="/logo.jpg"
                className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300"
                alt="Enterprise Grooming Institute"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1
                className={`text-xl font-bold transition-colors duration-300 ${isScrolled ? "text-green-700" : "text-white"
                  }`}
              >
                Enterprise Grooming Institute
              </h1>
              <p
                className={`text-sm transition-colors duration-300 ${isScrolled ? "text-green-600" : "text-green-100"}`}
              >
                Motto: We groom job creators
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`font-medium transition-all duration-300 hover:scale-105 ${isScrolled ? "text-gray-700 hover:text-green-600" : "text-white hover:text-green-200"
                }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`font-medium transition-all duration-300 hover:scale-105 ${isScrolled ? "text-gray-700 hover:text-green-600" : "text-white hover:text-green-200"
                }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("programs")}
              className={`font-medium transition-all duration-300 hover:scale-105 ${isScrolled ? "text-gray-700 hover:text-green-600" : "text-white hover:text-green-200"
                }`}
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection("courses")}
              className={`font-medium transition-all duration-300 hover:scale-105 ${isScrolled ? "text-gray-700 hover:text-green-600" : "text-white hover:text-green-200"
                }`}
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`font-medium transition-all duration-300 hover:scale-105 ${isScrolled ? "text-gray-700 hover:text-green-600" : "text-white hover:text-green-200"
                }`}
            >
              Contact
            </button>

            <button
              onClick={downloadBrochure}
              className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium hover:bg-green-200 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Download size={16} />
              Brochure
            </button>

            <button
              onClick={onApplyClick}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full font-bold hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse"
            >
              Apply Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden transition-colors duration-300 ${isScrolled ? "text-gray-700" : "text-white"}`}
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 animate-slide-down">
            <div className="flex flex-col space-y-3 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left py-2 text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left py-2 text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("programs")}
                className="text-left py-2 text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Programs
              </button>
              <button
                onClick={() => scrollToSection("courses")}
                className="text-left py-2 text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Courses
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left py-2 text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Contact
              </button>
              <div className="flex flex-col gap-3 pt-3 border-t border-gray-200">
                <button
                  onClick={downloadBrochure}
                  className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium hover:bg-green-200 transition-colors"
                >
                  <Download size={16} />
                  Download Brochure
                </button>
                <button
                  onClick={onApplyClick}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full font-bold hover:from-red-600 hover:to-red-700 transition-all duration-300"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
