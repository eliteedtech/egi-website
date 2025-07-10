"use client"

import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Vision from "./components/Vision"
import Programs from "./components/Programs"
import Courses from "./components/Courses"
import Admission from "./components/Admission"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import AdmissionModal from "./components/AdmissionModal"
import VideoWebinarPage from "./components/VideoWebinarPage"
import { useState } from "react"
import "./App.css"

// Add route constant
const routes = {
  HOME: "home",
  ABOUT: "about",
  VISION: "vision",
  PROGRAMS: "programs",
  COURSES: "courses",
  CONTACT: "contact",
  WEBINARS: "webinars"
}

function App() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false)
  const [currentRoute, setCurrentRoute] = useState(routes.HOME)

  const renderPage = () => {
    switch (currentRoute) {
      case routes.WEBINARS:
        return <VideoWebinarPage />;
      default:
        return (
          <>
            <Hero onApplyClick={() => setIsAdmissionModalOpen(true)} />
            <About />
            <Vision />
            <Programs />
            <Courses />
            <Admission onApplyClick={() => setIsAdmissionModalOpen(true)} />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="App">
      <Header 
        onApplyClick={() => setIsAdmissionModalOpen(true)} 
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
      {renderPage()}
      <Footer />
      <AdmissionModal isOpen={isAdmissionModalOpen} onClose={() => setIsAdmissionModalOpen(false)} />
    </div>
  )
}

export default App
