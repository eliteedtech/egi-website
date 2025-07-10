import { GraduationCap, Briefcase, Sprout, Users } from "lucide-react"

const Programs = () => {
  const programs = [
    {
      icon: <GraduationCap size={32} />,
      title: "Master Class for Existing Entrepreneurs",
      description: "Advanced training for nano, micro and small entrepreneurs looking to scale their businesses",
      color: "green",
    },
    {
      icon: <Briefcase size={32} />,
      title: "Startup Class",
      description: "Comprehensive program for intending and young entrepreneurs starting their journey",
      color: "blue",
    },
    {
      icon: <Sprout size={32} />,
      title: "Master Class for Agribusiness",
      description: "Specialized training in agricultural business development and management",
      color: "orange",
    },
    {
      icon: <Users size={32} />,
      title: "Sectors Skill Acquisition",
      description: "Technical and vocational skills training across multiple sectors",
      color: "purple",
    },
  ]

  const targetAudience = [
    "Secondary school pupils with O/level deficient",
    "Students with 5 credits unable to gain admission into public tertiary institutions",
    "Unemployed youths interested in becoming job creators",
    "Graduates seeking additional income through self-employment",
    "Civil servants looking for entrepreneurship skills",
    "Business owners wanting better performance and high productivity",
  ]

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive training programs designed to create successful entrepreneurs and job creators
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className={`bg-${program.color}-100 w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                <div className={`text-${program.color}-600`}>{program.icon}</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
              <p className="text-gray-600 leading-relaxed">{program.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Who Can Apply</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {targetAudience.map((audience, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">{audience}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-4">Study Centers Across Nigeria</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <h4 className="font-bold mb-2">North Central</h4>
              <p>FCT and Kwara State</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">North East</h4>
              <p>Bauchi State</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">North West</h4>
              <p>Kano and Katsina</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">South East</h4>
              <p>Anambra State</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">South South</h4>
              <p>Bayelsa State</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">South West</h4>
              <p>Oyo State</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Programs
