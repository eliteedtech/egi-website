"use client"

import { CheckCircle, Star, Award, Users, TrendingUp, ArrowRight, Gift } from "lucide-react"

const Admission = ({ onApplyClick }) => {
  const benefits = [
    {
      icon: "🚫",
      title: "No Strike Policy",
      description: "Uninterrupted learning experience guaranteed",
    },
    {
      icon: "🎓",
      title: "Qualitative Teaching",
      description: "Expert instructors with industry experience",
    },
    {
      icon: "💰",
      title: "Affordable Fees",
      description: "Quality education at competitive prices",
    },
    {
      icon: "🤝",
      title: "Mentorship Program",
      description: "One-on-one guidance from successful entrepreneurs",
    },
    {
      icon: "🛤️",
      title: "Career Pathway Development",
      description: "Clear roadmap to entrepreneurial success",
    },
    {
      icon: "🏢",
      title: "Start-Up Facilities Access",
      description: "Resources and support for launching your business",
    },
    {
      icon: "💼",
      title: "Cooperative Society Membership",
      description: "Automatic membership in commodity cooperative",
    },
    {
      icon: "💳",
      title: "Easy Loan Access",
      description: "Simplified access to funding from partner institutions",
    },
  ]

  return (
    <section
      id="admission"
      className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-red-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200/30 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-200/20 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-emerald-200/30 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="text-yellow-500 fill-current animate-twinkle" size={24} />
            <span className="bg-gradient-to-r from-green-600 to-red-500 bg-clip-text text-transparent font-bold text-lg">
              ADMISSION ONGOING
            </span>
            <Star className="text-yellow-500 fill-current animate-twinkle" size={24} />
          </div>
          <h2 className="text-5xl font-black text-gray-900 mb-6">
            Transform Your{" "}
            <span className="bg-gradient-to-r from-green-600 to-red-500 bg-clip-text text-transparent">
              Future Today
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            🚀 Join thousands of successful entrepreneurs who started their journey with us. Your transformation begins
            here!
          </p>
        </div>

        {/* Admission Banner */}
        <div className="mb-16 animate-slide-up">
          <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-red-600 rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-12 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-white/20 p-3 rounded-full">
                    <CheckCircle size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Admission Requirements</h3>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
                    <p className="text-green-100">O'Level Credits in SSCE, NECO, WAEC & NABTEB</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
                    <p className="text-green-100">English Language and Mathematics (max 2 sittings)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
                    <p className="text-green-100">Unemployed youths interested in entrepreneurship</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
                    <p className="text-green-100">Graduates seeking additional income sources</p>
                  </div>
                </div>

                <button
                  onClick={onApplyClick}
                  className="group bg-white text-green-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-3"
                >
                  <span>🎯 Apply Now</span>
                  <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
                </button>
              </div>

              <div className="relative">
                <img
                  src="/images/admission-flyer.png"
                  alt="EGI Admission Information"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-green-600/20"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16 animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black text-gray-900 mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-green-600 to-red-500 bg-clip-text text-transparent">EGI?</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              🌟 Discover the amazing benefits that come with enrolling at Enterprise Grooming Institute
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
                <div className="mt-4 h-1 bg-gradient-to-r from-green-400 to-red-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Apply Now Section */}
        <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-red-600 p-12 rounded-3xl shadow-2xl text-center animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Gift className="text-yellow-300 animate-bounce" size={32} />
              <h3 className="text-3xl font-bold text-white">Ready to Transform Your Life?</h3>
              <Gift className="text-yellow-300 animate-bounce" size={32} />
            </div>

            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              🚀 Don't wait! Join the next generation of successful entrepreneurs.
              <span className="text-yellow-300 font-bold"> Limited slots available</span> for this session.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl">
                <Users className="text-white mx-auto mb-3" size={32} />
                <div className="text-2xl font-bold text-white">1000+</div>
                <div className="text-green-100">Success Stories</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl">
                <Award className="text-white mx-auto mb-3" size={32} />
                <div className="text-2xl font-bold text-white">90%</div>
                <div className="text-green-100">Job Creation Rate</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl">
                <TrendingUp className="text-white mx-auto mb-3" size={32} />
                <div className="text-2xl font-bold text-white">7</div>
                <div className="text-green-100">Study Centers</div>
              </div>
            </div>

            <button
              onClick={onApplyClick}
              className="group bg-white text-green-600 px-12 py-5 rounded-2xl font-black text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl animate-bounce-gentle"
            >
              <span className="flex items-center gap-3">
                🎯 Apply Now & Start Your Journey
                <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={24} />
              </span>
            </button>

            <p className="text-green-100 mt-4 text-sm">⏰ Application deadline: Limited time offer - Apply today!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Admission
