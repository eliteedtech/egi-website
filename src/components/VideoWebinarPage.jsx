import { useState } from 'react'
import { PlayCircle } from 'lucide-react'
import WebinarCard from './WebinarCard'

const webinars = [
  {
    id: 1,
    title: 'Entrepreneurship Fundamentals',
    date: '2025-07-15',
    time: '10:00 AM',
    description: 'Learn the basics of starting and growing a successful business.',
    joinLink: 'https://zoom.us/j/1234567890',
    youtubeLink: 'https://www.youtube.com/watch?v=example123'
  },
  {
    id: 2,
    title: 'Digital Marketing Masterclass',
    date: '2025-07-20',
    time: '2:00 PM',
    description: 'Master digital marketing strategies for business growth.',
    joinLink: 'https://zoom.us/j/9876543210',
    youtubeLink: 'https://www.youtube.com/watch?v=demo456'
  },
  // Add more webinars as needed
]

const VideoWebinarPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)

  const handleVideoSelect = (videoId) => {
    setSelectedVideo(videoId)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-2">Training & Webinars</h1>
          <p className="text-gray-600">Access our training content and upcoming webinars</p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mb-12">
          {/* Upcoming Webinars Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
              <YouTube className="w-6 h-6 text-red-500" />
              <span>Upcoming Webinars</span>
            </h2>
            <div className="space-y-6">
              {webinars.map((webinar) => (
                <WebinarCard key={webinar.id} webinar={webinar} />
              ))}
            </div>
          </div>

          {/* YouTube Training Videos Section */}
          <div className="col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                <YouTube className="w-6 h-6 text-red-500" />
                <span>Training Videos</span>
              </h2>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                {[
                  {
                    id: 1,
                    title: 'Business Planning 101',
                    description: 'Learn how to create a solid business plan.',
                    youtubeId: 'example123'
                  },
                  {
                    id: 2,
                    title: 'Marketing Strategy',
                    description: 'Master marketing strategies for growth.',
                    youtubeId: 'demo456'
                  },
                  // Add more training videos as needed
                ].map((video) => (
                  <div
                    key={video.id}
                    className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow duration-300 cursor-pointer"
                    onClick={() => handleVideoSelect(video.youtubeId)}
                  >
                    <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                      <PlayCircle className="w-12 h-12 text-red-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                    <p className="text-gray-600">{video.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&mute=0`}
                title="Training Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <button
              onClick={() => setSelectedVideo(null)}
              className="mt-4 text-red-500 hover:text-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default VideoWebinarPage
