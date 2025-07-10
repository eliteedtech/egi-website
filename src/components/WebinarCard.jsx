import { useState } from 'react'
import { Calendar, Clock, Link, ExternalLink, PlayCircle } from 'lucide-react'

const WebinarCard = ({ webinar }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2 text-green-600">
          <Calendar className="w-5 h-5" />
          <span>{new Date(webinar.date).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center space-x-2 text-green-600">
          <Clock className="w-5 h-5" />
          <span>{webinar.time}</span>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2">{webinar.title}</h3>
      <p className="text-gray-600 mb-4">{webinar.description}</p>
      <div className="flex space-x-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          <span>Join Webinar</span>
        </button>
        <a
          href={webinar.youtubeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-green-600 hover:text-green-700"
        >
          <Link className="w-4 h-4" />
          <span>View on YouTube</span>
        </a>
      </div>

      {/* Join Webinar Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Join Webinar</h3>
            <div className="mb-4">
              <p className="text-gray-600">Please click the link below to join the webinar:</p>
              <a
                href={webinar.joinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                {webinar.joinLink}
              </a>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-red-500 hover:text-red-600"
            >
              <PlayCircle className="w-6 h-6 text-red-500" />
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default WebinarCard
