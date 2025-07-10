"use client"

import { ArrowRight, Users, Award, TrendingUp, Star, Sparkles, Download } from "lucide-react"
import { useState, useEffect } from "react"

const Hero = ({ onApplyClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroImages = [
    "/placeholder.svg?height=600&width=800",
    "/images/admission-flyer.png",
    "/placeholder.svg?height=600&width=800",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const scrollToAdmission = () => {
    const element = document.getElementById("admission")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadBrochure = () => {
    const link = document.createElement("a")
    link.href = "/images/admission-flyer.png"
    link.download = "EGI-Brochure.png"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-emerald-500 to-green-600">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-red-400/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-green-300/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/5 rounded-full animate-pulse"></div>
      </div>

      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white animate-slide-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 fill-current animate-twinkle"
                    size={20}
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                #1 Enterprise Institute
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
              We Groom{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent animate-gradient">
                  Job Creators
                </span>
                <Sparkles className="absolute -top-2 -right-8 text-yellow-400 animate-spin-slow" size={24} />
              </span>
              <br />
              <span className="text-green-100">Not Job Seekers</span>
            </h1>

            <p className="text-xl lg:text-2xl text-green-100 mb-8 leading-relaxed animate-fade-in-delayed">
              🚀 Transform your future with Nigeria's most innovative entrepreneurship training institute.
              <span className="text-yellow-300 font-bold"> 80% practical training</span> that creates real results!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <button
                onClick={onApplyClick}
                className="group bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3 animate-bounce-gentle"
              >
                <span>🎯 Apply for Admission</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={24} />
              </button>

              <button
                onClick={downloadBrochure}
                className="group bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-3"
              >
                <Download className="group-hover:animate-bounce" size={20} />
                Download Brochure
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="font-black text-3xl text-white mb-1">1000+</h3>
                <p className="text-green-100 font-medium">Graduates</p>
              </div>
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                  <Award className="text-white" size={32} />
                </div>
                <h3 className="font-black text-3xl text-white mb-1">80%</h3>
                <p className="text-green-100 font-medium">Practical</p>
              </div>
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                  <TrendingUp className="text-white" size={32} />
                </div>
                <h3 className="font-black text-3xl text-white mb-1">7</h3>
                <p className="text-green-100 font-medium">Centers</p>
              </div>
            </div>
          </div>

          {/* Hero Image Carousel */}
          <div className="relative animate-slide-up-delayed">
            <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`EGI Hero ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              ))}

              {/* Carousel Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-red-500 text-white p-4 rounded-2xl shadow-xl animate-bounce-gentle">
              <div className="text-center">
                <div className="text-2xl font-black">ADMISSION</div>
                <div className="text-sm font-bold">ONGOING</div>
              </div>
            </div>

            {/* Success Rate Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <div className="font-black text-gray-900 text-lg">90% Success Rate</div>
                  <div className="text-gray-600 text-sm">Job Creation</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
