import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import logo from '../assets/logo.jpeg';
import ct from "../assets/new/ct.jpg";

const newsAndEvents = [
  {
    id: 1,
    title: "New CT Scan Machine Now Available at Grand Bishoftu Hospital",
    date: "May 10, 2026",
    time: "9:00 AM",
    category: "News",
    description:
      "Grand Bishoftu Hospital proudly introduces advanced CT Scan services with state-of-the-art imaging technology for faster and more accurate diagnoses.",
    image:  ct, // Replace with your CT Scan image
  },
  {
    id: 2,
    title: "Celebrating Grand Bishoftu Hospital's 1st Anniversary",
    date: "Feb 22, 2026",
    time: "6:00 PM",
    category: "Event",
    description:
      "Join us as we celebrate one year of serving the community with excellence in healthcare, compassion, and innovation.",
    image:  logo, // Replace with your anniversary image
  },
];

// TikTok VIDEO IDs from your links
// Video 1 ID: 7638628098963164436 (Anniversary)
// Video 2 ID: 7609683501071322388 (CT Scan)
const tiktokVideos = [
  {
    id: 1,
    videoId: "7638628098963164436",
    title: "CT Scan at Grand Bishoftu Hospital",
    description: "Advanced CT Scan services",
   
  },
  {
    id: 2,
    videoId: "7609683501071322388",
    title: "Grand Bishoftu Hospital 1st Anniversary",
    description: "ግራንድ ቢሾፍቱ ሆስፒታል 1ኛ አመት የምስረታ በዓሉ",
   
  },
];

const LatestNewsEvents = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const currentVideo = tiktokVideos[currentVideoIndex];

  // Correct TikTok embed URL format
  const embedUrl = `https://www.tiktok.com/embed/v2/${currentVideo.videoId}`;

  const handleNextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % tiktokVideos.length);
  };

  const handlePrevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + tiktokVideos.length) % tiktokVideos.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#023E8A] tracking-tighter leading-tight">
            Latest News & Events
          </h2>
          <p className="mt-3 text-[#023E8A]/70 text-sm md:text-base tracking-[2px] font-medium max-w-md mx-auto">
            Stay updated with our recent activities, achievements, and community programs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left Side - News & Events */}
          <div className="space-y-6">
            {newsAndEvents.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex gap-5"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-40 h-32 object-cover"
                />
                <div className="flex-1 py-4 pr-4">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="px-3 py-1 bg-[#023E8A]/10 text-[#023E8A] rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg leading-tight mt-3 group-hover:text-[#023E8A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - TikTok Video Playlist */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <div className="relative bg-black">
                {/* TikTok embed iframe with correct URL */}
                <iframe
                  key={currentVideoIndex} // re-mount when video changes
                  src={embedUrl}
                  title={currentVideo.title}
                  className="w-full"
                  style={{ aspectRatio: "16 / 9" }}
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  sandbox="allow-scripts allow-same-origin allow-pointer-lock allow-forms"
                />

                {/* Progress indicators */}
                <div className="absolute top-4 left-4 flex gap-1">
                  {tiktokVideos.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentVideoIndex(idx)}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === currentVideoIndex ? "bg-white w-8" : "bg-white/50 w-3"
                      }`}
                      aria-label={`Go to video ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Next/Prev buttons overlay */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <button
                    onClick={handlePrevVideo}
                    className="bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all"
                    aria-label="Previous video"
                  >
                    ←
                  </button>
                  <button
                    onClick={handleNextVideo}
                    className="bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all"
                    aria-label="Next video"
                  >
                    →
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-xl text-[#023E8A]">
                    {currentVideo.title}
                  </h3>
                </div>
                <p className="text-gray-600 mt-2">{currentVideo.description}</p>

                <div className="mt-4 flex gap-3 text-sm text-gray-500">
                  <button
                    onClick={handlePrevVideo}
                    className="flex items-center gap-1 hover:text-[#023E8A] transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 rotate-180" /> Previous
                  </button>
                  <button
                    onClick={handleNextVideo}
                    className="flex items-center gap-1 hover:text-[#023E8A] transition-colors"
                  >
                    Next <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsEvents;