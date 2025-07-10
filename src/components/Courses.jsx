"use client"

import { useState } from "react"
import { ChevronDown, Star, Award, Users, BookOpen } from "lucide-react"

const Courses = () => {
  const [expandedSector, setExpandedSector] = useState(null)

  const courseSectors = [
    {
      title: "🌾 Farm Operations Management",
      icon: "🚜",
      color: "from-green-400 to-green-600",
      courses: [
        "Crop Production",
        "Vegetable Production",
        "Bee Keeping",
        "Agricultural Mechanisation",
        "Horticulture Production",
        "Animal House Construction and Install",
        "Poultry Production",
        "Animal Husbandry",
        "Aquaculture",
        "Quality Assurance in Poutry",
        "Aquaculture and Animals",
        "Principle of Law",
        "Principle of Agric Insurance",
        "Agric. Costing and Control",
        "Fundamental of Enterprise",
        "Introduction to Sociology",
        "Communication Skill",
        "Record Keeping",
        "Principle of Accounting",
      ],
    },
    {
      title: "💼 Enterprise Development Management",
      icon: "📈",
      color: "from-blue-400 to-blue-600",
      courses: [
        "Business Math",
        "Principle of Law",
        "Principle of Economic",
        "Principle of Account",
        "Fundamental of Marketing",
        "Introduction to Psychology",
        "Business Statistics",
        "Introduction to Enterprise",
        "Introduction to Financial Accounting",
        "Introduction to Cost Accounting",
        "Information Tech.",
        "Introduction to Human Resource Mgt",
        "Communication Skill",
        "Introduction to Purchasing Mgt",
        "Introduction Organisation Behaviours",
      ],
    },
    {
      title: "📺 Mass Communication Enterprise",
      icon: "🎬",
      color: "from-purple-400 to-purple-600",
      courses: [
        "English for Mass Communication",
        "Introduction to Computer",
        "Introduction to Communication",
        "Introduction to News Gathering & Writing",
        "Indigenous Languages",
        "History and Politics in Nigeria",
        "Graphic Art & Design",
        "Principle of Public Relation",
        "Fundamental of Enterprise",
        "Copy Editing",
        "Feature Writing",
        "Mass Media and Society",
        "Principle of Advertising",
        "Broadcasting Production",
        "Newspaper & Magazine Production",
        "Photography and Photo Journalism",
        "Mass Communication Law",
        "Investigative and Interpretative Reporting",
        "Principle of Law",
      ],
    },
    {
      title: "💻 Information Technology",
      icon: "🖥️",
      color: "from-cyan-400 to-cyan-600",
      courses: [
        "Software Coding",
        "Web Application Development",
        "Graphic Designs",
        "Digital Service Operations",
        "Creative and Social Media Comm",
        "Artificial Intelligent",
        "Data Analytics",
        "Cybersecurity",
        "Cloud Computing",
        "Blockchain Development",
        "Principle of Law",
      ],
    },
    {
      title: "🏠 Home & Rural Economics Management",
      icon: "🏡",
      color: "from-pink-400 to-pink-600",
      courses: [
        "Introduction to Human Nutrition",
        "Introduction to Food and Beverage Production",
        "Introduction to Home Garden",
        "Introduction to Clothing",
        "Introduction to Computer",
        "Home Management",
        "Rural Sociology",
        "Personal and Community Health",
        "Fundamental of Enterprise",
        "Home Improvement and Beautification",
        "Principle of Law",
      ],
    },
    {
      title: "👗 Fashion & Garment Technology",
      icon: "✂️",
      color: "from-rose-400 to-rose-600",
      courses: [
        "Pattern Drafting",
        "Dress Theory",
        "Dress Designing",
        "Craft Works",
        "Equipment Maintenance",
        "Fundamental of Enterprise",
        "Dyeing and Printing",
        "Introduction to Textile and Fabric Tech.",
        "Principle of Financial Management",
        "Fundamental of Marketing",
        "Communication Skill",
        "Computer Appreciation",
        "Principle of Law",
      ],
    },
    {
      title: "🏨 Hospitality and Tourism",
      icon: "🍽️",
      color: "from-orange-400 to-orange-600",
      courses: [
        "Planning and Managing a Hospitality Event",
        "Introduction to Hospitality",
        "Principle of Supervising Customer Services",
        "Front Desk Operation",
        "Accommodation Operation",
        "Principle of Law",
        "Fundamental of Enterprise",
        "Communication Skill",
        "Introduction to Restaurant Management",
        "Introduction to Commercial Recreation & Resort",
        "Introduction to Kitchen and Bar Management",
        "Computer Appreciation",
        "Principle of Financial Management",
        "Fundamental of Marketing",
        "Introduction to Tourism",
      ],
    },
    {
      title: "🔧 Vocational Skills",
      icon: "⚒️",
      color: "from-amber-400 to-amber-600",
      courses: [
        "Waste to Wealth",
        "Leather Works",
        "Car Washing",
        "Cleaning and Fumigation",
        "Fundamental of Enterprise",
        "Principle of Law",
        "Communication Skill",
        "Computer Appreciation",
        "Principle of Accounting",
        "Fundamental Marketing",
      ],
    },
    {
      title: "💄 Cosmetology Skills",
      icon: "💅",
      color: "from-red-400 to-red-600",
      courses: [
        "Bacteriology and Decontamination",
        "Anatomy and Physiology",
        "Permanent Waving",
        "Hair Relaxing",
        "Hair Coloring, Bleaching and Tonning",
        "Sculptured Nails",
        "Hair Structure and Chemistry",
        "Shampooing, Conditioning and Rinses",
        "Hair Shaping, Dressing and Styling",
        "Facials, Arching Lashand Brow",
        "Artificial Hair",
        "Fundamental of Enterprise",
        "Principle of Law",
        "Communication Skill",
        "Computer Appreciation",
        "Principle of Accounting",
        "Fundamental Marketing",
      ],
    },
    {
      title: "🪑 Furniture Making and Upholstery",
      icon: "🔨",
      color: "from-teal-400 to-teal-600",
      courses: [
        "Technical Drawing",
        "Computer Appreciation",
        "General Wood Works",
        "Introduction to Furniture Making",
        "Machine Wood Working",
        "Furniture Making and Construction",
        "Upholsery Construction",
        "Fundamental of Enterprise",
        "Principle of Law",
        "Communication Skill",
        "Computer Appreciation",
        "Principle of Accounting",
        "Fundamental Marketing",
      ],
    },
    {
      title: "⚡ Welding and Fabrication Skills",
      icon: "🔥",
      color: "from-indigo-400 to-indigo-600",
      courses: [
        "Basic Workshop Technology and Practice",
        "Technical Drawing",
        "Computer Appreciation",
        "Introduction to Electrical Machines",
        "Introduction to Mechanical Engineering",
        "Creative and Innovation Technology",
        "Engineering Materials",
        "Welding Metallurgy",
        "Weld and Metal Corrosion",
        "Basic Element of Welding and Fabrication",
        "Welding Technology and Practice",
        "Fabrication Technology",
        "Fundamental of Enterprise",
        "Principle of Law",
        "Communication Skill",
        "Computer Appreciation",
        "Principle of Accounting",
        "Fundamental Marketing",
      ],
    },
    {
      title: "🚗 Automobile Skills",
      icon: "🔧",
      color: "from-gray-400 to-gray-600",
      courses: [
        "Workshop Administration",
        "Petrol Engine Repair and Maintence",
        "Diesel Engine Repair and Maintenance",
        "Transmission and Clutches",
        "Steering System",
        "Master Brake System",
        "Vulcanising",
        "Aligment System",
        "Airconditioning System",
        "Autobody Works",
        "Autopainting Works",
        "Aut Electrical Works",
        "Fundamental of Enterprise",
        "Principle of Law",
        "Communication Skill",
        "Computer Appreciation",
        "Principle of Accounting",
        "Fundamental Marketing",
      ],
    },
    {
      title: "🌱 Renewable Energy Technology",
      icon: "☀️",
      color: "from-yellow-400 to-yellow-600",
      courses: ["Solar Photovoltaic", "Wind Energy", "Bio Energy", "Geothermal Energy"],
    },
    {
      title: "🍚 Food Processing",
      icon: "🥘",
      color: "from-emerald-400 to-emerald-600",
      courses: [
        "Rice Milling",
        "Corn Milling",
        "Gari Processing",
        "Starch Processing",
        "Flour Processing",
        "Chips Production",
        "Value Addition Management",
        "Livestock Feed Production",
        "Packaging Tech",
      ],
    },
  ]

  const toggleSector = (index) => {
    setExpandedSector(expandedSector === index ? null : index)
  }

  return (
    <section id="courses" className="py-20 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-green-200/20 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-red-200/20 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-emerald-200/20 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="text-green-600 animate-bounce" size={24} />
            <span className="bg-gradient-to-r from-green-600 to-red-500 bg-clip-text text-transparent font-bold text-lg">
              COURSE OFFERINGS
            </span>
            <BookOpen className="text-red-600 animate-bounce" size={24} />
          </div>
          <h2 className="text-5xl font-black text-gray-900 mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-green-600 to-red-500 bg-clip-text text-transparent">
              Success Path
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            🚀 Comprehensive courses across multiple sectors designed to equip you with practical skills for
            entrepreneurship success
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center group hover:scale-105 transition-transform duration-300 animate-slide-up">
            <div className="text-3xl mb-2">📚</div>
            <div className="text-2xl font-bold text-green-600">14</div>
            <div className="text-gray-600 font-medium">Course Sectors</div>
          </div>
          <div
            className="bg-white p-6 rounded-2xl shadow-lg text-center group hover:scale-105 transition-transform duration-300 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-2xl font-bold text-red-600">200+</div>
            <div className="text-gray-600 font-medium">Individual Courses</div>
          </div>
          <div
            className="bg-white p-6 rounded-2xl shadow-lg text-center group hover:scale-105 transition-transform duration-300 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-3xl mb-2">⚡</div>
            <div className="text-2xl font-bold text-emerald-600">80%</div>
            <div className="text-gray-600 font-medium">Practical Training</div>
          </div>
          <div
            className="bg-white p-6 rounded-2xl shadow-lg text-center group hover:scale-105 transition-transform duration-300 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-2xl font-bold text-orange-600">100%</div>
            <div className="text-gray-600 font-medium">Job Creation Focus</div>
          </div>
        </div>

        <div className="grid gap-6">
          {courseSectors.map((sector, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => toggleSector(index)}
                className="w-full p-8 text-left flex justify-between items-center hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center gap-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${sector.color} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}
                  >
                    {sector.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                      {sector.title}
                    </h3>
                    <p className="text-gray-600 mt-1">
                      {sector.courses.length} courses available • Practical focused training
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                  <div
                    className={`p-2 rounded-full bg-gray-100 group-hover:bg-green-100 transition-colors ${expandedSector === index ? "rotate-180" : ""} transition-transform duration-300`}
                  >
                    <ChevronDown size={24} className="text-gray-600 group-hover:text-green-600" />
                  </div>
                </div>
              </button>

              {expandedSector === index && (
                <div className="px-8 pb-8 animate-slide-down">
                  <div className="bg-gradient-to-r from-gray-50 to-green-50 p-6 rounded-2xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {sector.courses.map((course, courseIndex) => (
                        <div
                          key={courseIndex}
                          className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 group border-l-4 border-green-400"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                            <p className="text-gray-700 font-medium group-hover:text-green-600 transition-colors">
                              {course}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-white rounded-xl border-2 border-dashed border-green-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Award className="text-green-600" size={20} />
                          <span className="font-bold text-gray-900">Certificate Upon Completion</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Users className="text-red-600" size={20} />
                          <span className="font-bold text-gray-900">Mentorship Included</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-600 via-emerald-600 to-red-600 p-12 rounded-3xl text-white text-center shadow-2xl animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">🎯 Ready to Start Your Transformation?</h3>
            <p className="text-xl mb-8 text-green-100">
              Choose from our wide range of courses and begin your journey to becoming a successful job creator.
              <span className="text-yellow-300 font-bold"> 80% practical training</span> ensures real-world skills!
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("admission")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="bg-white text-green-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl animate-bounce-gentle"
            >
              🚀 Apply Now & Transform Your Future
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Courses
