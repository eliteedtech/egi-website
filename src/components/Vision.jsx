import { Eye, Target, Star } from "lucide-react"

const Vision = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Vision & Mission</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Driving excellence in enterprise development and entrepreneurship training
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Eye size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              To be one of the foremost Enterprise Development Institutes that will produce world class job creators and
              entrepreneurs.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Target size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <div className="space-y-4 text-lg opacity-90">
              <p>• To promote professionalism in Agribusiness, Sectors Skill and Enterprise Development</p>
              <p>• Provide appropriate applied academic and professional training with the spirit of co-operation</p>
              <p>• Support government's goals of poverty alleviation through youth empowerment and employment</p>
              <p>• Enrich capacity building towards better improvement in quality of life</p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center">
              <Star size={24} />
            </div>
            <h3 className="text-2xl font-bold">What Makes Us Special</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/5 p-6 rounded-xl">
              <h4 className="font-bold mb-2">80% Practical Training</h4>
              <p className="opacity-90">Hands-on learning approach for all courses</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl">
              <h4 className="font-bold mb-2">Funding Support</h4>
              <p className="opacity-90">Access to funding through partnering PFIs</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl">
              <h4 className="font-bold mb-2">Industrial Clusters</h4>
              <p className="opacity-90">Incubation system for various categories</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl">
              <h4 className="font-bold mb-2">Cooperative Membership</h4>
              <p className="opacity-90">Automatic membership in commodity co-operative society</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl">
              <h4 className="font-bold mb-2">Mentoring Committee</h4>
              <p className="opacity-90">Post-training monitoring and support</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl">
              <h4 className="font-bold mb-2">Multiple Locations</h4>
              <p className="opacity-90">7 study centers across Nigeria</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vision
