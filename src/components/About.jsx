import { Target, Lightbulb, Heart, Star } from "lucide-react"

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Emmanuel Adebayo",
      position: "Chief Executive Officer",
      image: "/placeholder.svg?height=300&width=300",
      description: "Visionary leader with 15+ years in entrepreneurship development",
    },
    {
      name: "Prof. Sarah Okafor",
      position: "Academic Director",
      image: "/placeholder.svg?height=300&width=300",
      description: "Expert in business education and curriculum development",
    },
    {
      name: "Mr. James Okoro",
      position: "Training Coordinator",
      image: "/placeholder.svg?height=300&width=300",
      description: "Specialist in practical skills training and mentorship",
    },
    {
      name: "Mrs. Fatima Hassan",
      position: "Student Affairs Manager",
      image: "/placeholder.svg?height=300&width=300",
      description: "Dedicated to student success and career development",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200/30 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-red-200/30 rounded-full animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="text-yellow-500 fill-current animate-twinkle" size={24} />
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-bold text-lg">
              ABOUT US
            </span>
            <Star className="text-yellow-500 fill-current animate-twinkle" size={24} />
          </div>
          <h2 className="text-5xl font-black text-gray-900 mb-6">
            What We <span className="bg-gradient-to-r from-green-600 to-red-500 bg-clip-text text-transparent">Do</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            🚀 Established to create job creators and contribute to Nigeria's socio-economic development through
            innovative entrepreneurship education
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up">
            <div className="bg-gradient-to-br from-green-400 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
              <Lightbulb className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">💡 The Idea</h3>
            <p className="text-gray-600 leading-relaxed">
              The idea of establishing a private enterprise development tertiary institute came exactly 10 years ago
              during an Entrepreneurship Global week where our CEO was a guest speaker on Early Entrepreneurship
              Development for secondary school pupils.
            </p>
            <div className="mt-4 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>

          <div
            className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="bg-gradient-to-br from-red-400 to-red-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Re-orientation</h3>
            <p className="text-gray-600 leading-relaxed">
              We focus on re-orientation of the mindset of our youth, making them job creators and not job seekers
              through practical entrepreneurship training and mentorship programs.
            </p>
            <div className="mt-4 h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>

          <div
            className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
              <Heart className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">❤️ Contribution</h3>
            <p className="text-gray-600 leading-relaxed">
              Our contribution toward socio-economic development of the state and nation as a whole through empowering
              youth with practical entrepreneurship skills and business development.
            </p>
            <div className="mt-4 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
        </div>

        {/* Our Journey */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-12 rounded-3xl shadow-2xl mb-20 animate-fade-in">
          <div className="text-center text-white">
            <h3 className="text-3xl font-bold mb-6">🌟 Our Journey</h3>
            <p className="text-xl leading-relaxed mb-6 text-green-100">
              After serious screening by relevant authority (Ministry of Tertiary Education), approval was granted on
              2nd of April, 2015. Since then, we have been committed to producing world-class job creators and
              entrepreneurs.
            </p>
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30">
              <p className="text-white font-bold text-lg">
                <span className="text-yellow-300">🏆 Corporate Status:</span> RC 1338499 AP - Incorporated under the
                Companies and Allied Matters Act 1990, Limited By Shares.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="animate-fade-in">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black text-gray-900 mb-4">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-green-600 to-red-500 bg-clip-text text-transparent">
                Expert Team
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              🌟 Our dedicated professionals are committed to your success and transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                  <p className="text-green-600 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
                <div className="px-6 pb-6">
                  <div className="h-1 bg-gradient-to-r from-green-400 to-red-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
