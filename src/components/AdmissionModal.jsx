"use client"

import { useState } from "react"
import { X, Send, CheckCircle, User, Mail, Phone, MapPin, GraduationCap, FileText } from "lucide-react"

const AdmissionModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    educationLevel: "",
    preferredProgram: "",
    preferredSector: "",
    studyCenter: "",
    hasOLevel: "",
    workExperience: "",
    motivation: "",
    hearAboutUs: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
      setCurrentStep(1)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        state: "",
        educationLevel: "",
        preferredProgram: "",
        preferredSector: "",
        studyCenter: "",
        hasOLevel: "",
        workExperience: "",
        motivation: "",
        hearAboutUs: "",
      })
      onClose()
    }, 3000)
  }

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const programs = [
    "Master Class for Existing Entrepreneurs",
    "Startup Class for Young Entrepreneurs",
    "Master Class for Agribusiness Development",
    "Sectors Skill Acquisition",
  ]

  const sectors = [
    "Farm Operations Management",
    "Enterprise Development Management",
    "Mass Communication Enterprise",
    "Information Technology",
    "Home & Rural Economics Management",
    "Fashion & Garment Technology",
    "Hospitality and Tourism",
    "Vocational Skills",
    "Cosmetology Skills",
    "Furniture Making and Upholstery",
    "Welding and Fabrication Skills",
    "Automobile Skills",
    "Renewable Energy Technology",
    "Food Processing",
  ]

  const studyCenters = [
    "North Central - FCT",
    "North Central - Kwara State",
    "North East - Bauchi State",
    "North West - Kano",
    "North West - Katsina",
    "South East - Anambra State",
    "South South - Bayelsa State",
    "South West - Oyo State",
  ]

  if (!isOpen) return null

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
        <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center animate-scale-up">
          <CheckCircle className="text-green-600 mx-auto mb-6 animate-bounce" size={64} />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">🎉 Application Submitted!</h2>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for choosing EGI! We'll contact you within 24 hours to discuss your entrepreneurial journey.
          </p>
          <div className="bg-green-50 p-4 rounded-2xl">
            <p className="text-green-800 font-medium text-sm">
              📧 Check your email for confirmation details and next steps!
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scale-up">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-red-600 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">🚀 Apply to EGI</h2>
            <p className="text-green-100">Transform Your Future - Step {currentStep} of 3</p>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 bg-white/20 rounded-full h-2">
            <div
              className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-8 max-h-[60vh] overflow-y-auto">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="animate-slide-in">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <User className="text-green-600" size={24} />
                  Personal Information
                </h3>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                      <Mail size={16} />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                      <Phone size={16} />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                    <MapPin size={16} />
                    Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Enter your full address"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-gray-700 font-medium mb-2 block">State of Origin *</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="Enter your state of origin"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                      <GraduationCap size={16} />
                      Education Level *
                    </label>
                    <select
                      name="educationLevel"
                      value={formData.educationLevel}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select education level</option>
                      <option value="secondary">Secondary School</option>
                      <option value="ond">OND</option>
                      <option value="hnd">HND</option>
                      <option value="degree">Bachelor's Degree</option>
                      <option value="masters">Master's Degree</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Program Selection */}
            {currentStep === 2 && (
              <div className="animate-slide-in">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <GraduationCap className="text-green-600" size={24} />
                  Program Selection
                </h3>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="text-gray-700 font-medium mb-2 block">Preferred Program *</label>
                    <select
                      name="preferredProgram"
                      value={formData.preferredProgram}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select a program</option>
                      {programs.map((program, index) => (
                        <option key={index} value={program}>
                          {program}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-700 font-medium mb-2 block">Preferred Sector *</label>
                    <select
                      name="preferredSector"
                      value={formData.preferredSector}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select a sector</option>
                      {sectors.map((sector, index) => (
                        <option key={index} value={sector}>
                          {sector}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="text-gray-700 font-medium mb-2 block">Preferred Study Center *</label>
                    <select
                      name="studyCenter"
                      value={formData.studyCenter}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select study center</option>
                      {studyCenters.map((center, index) => (
                        <option key={index} value={center}>
                          {center}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-700 font-medium mb-2 block">Do you have O'Level Credits? *</label>
                    <select
                      name="hasOLevel"
                      value={formData.hasOLevel}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select option</option>
                      <option value="yes">Yes, I have 5 credits including English & Math</option>
                      <option value="partial">I have some credits but not complete</option>
                      <option value="no">No, I don't have O'Level credits</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="text-gray-700 font-medium mb-2 block">Work Experience (Optional)</label>
                  <textarea
                    name="workExperience"
                    value={formData.workExperience}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Briefly describe your work experience or business background"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Final Details */}
            {currentStep === 3 && (
              <div className="animate-slide-in">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <FileText className="text-green-600" size={24} />
                  Final Details
                </h3>

                <div className="mb-6">
                  <label className="text-gray-700 font-medium mb-2 block">Why do you want to join EGI? *</label>
                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Tell us about your motivation and goals for joining our institute"
                  />
                </div>

                <div className="mb-6">
                  <label className="text-gray-700 font-medium mb-2 block">How did you hear about us?</label>
                  <select
                    name="hearAboutUs"
                    value={formData.hearAboutUs}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select option</option>
                    <option value="social-media">Social Media</option>
                    <option value="website">Website</option>
                    <option value="friend">Friend/Family</option>
                    <option value="advertisement">Advertisement</option>
                    <option value="event">Event/Workshop</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-200">
                  <h4 className="font-bold text-green-800 mb-3">🎉 You're Almost There!</h4>
                  <p className="text-green-700 text-sm">
                    By submitting this application, you're taking the first step towards becoming a successful
                    entrepreneur. Our team will review your application and contact you within 24 hours.
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Footer Navigation */}
        <div className="bg-gray-50 p-6 flex justify-between items-center">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              currentStep === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Previous
          </button>

          <div className="flex gap-2">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  step === currentStep ? "bg-green-600 scale-125" : step < currentStep ? "bg-green-400" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {currentStep < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="bg-gradient-to-r from-green-600 to-red-600 text-white px-6 py-3 rounded-xl font-medium hover:from-green-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
            >
              Next Step
            </button>
          ) : (
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-gradient-to-r from-green-600 to-red-600 text-white px-8 py-3 rounded-xl font-bold hover:from-green-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Send size={20} />
              Submit Application
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdmissionModal
