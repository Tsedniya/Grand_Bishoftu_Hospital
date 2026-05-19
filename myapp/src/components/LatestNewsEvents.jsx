import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Play, Pause } from "lucide-react";
import logo from '../assets/logo.jpeg';
import ct from "../assets/new/ct.jpg";

// Import your local videos
const video1 = "/videos/grand3.mp4";
const video2 = "/videos/grand4.mp4";

const newsAndEvents = [
  {
    id: 1,
    title: "New CT Scan Machine Now Available at Grand Bishoftu Hospital",
    date: "May 10, 2026",
    time: "9:00 AM",
    category: "News",
    description: "Grand Bishoftu Hospital proudly introduces advanced CT Scan services with state-of-the-art imaging technology for faster and more accurate diagnoses.",
    image: ct,
  },
  {
    id: 2,
    title: "Celebrating Grand Bishoftu Hospital's 1st Anniversary",
    date: "Feb 22, 2026",
    time: "6:00 PM",
    category: "Event",
    description: "Join us as we celebrate one year of serving the community with excellence in healthcare, compassion, and innovation.",
    image: logo,
  },
];

const videos = [
  {
    id: 1,
    src: video1,
    title: "CT Scan at Grand Bishoftu Hospital",
    description: "Advanced CT Scan services",
  },
  {
    id: 2,
    src: video2,
    title: "Grand Bishoftu Hospital 1st Anniversary",
    description: "ግራንድ ቢሾፍቱ ሆስፒታል 1ኛ አመት የምስረታ በዓሉ",
  },
];

const LatestNewsEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const currentVideo = videos[currentIndex];

  const togglePlay = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
    setIsPlaying(false); // Reset play state
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(false);
  };

  // Reset play state when video changes
  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [currentIndex]);

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
          {/* News & Events Cards */}
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

          {/* Custom Video Player */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <div className="relative bg-black aspect-video group">
                <video
                  ref={videoRef}
                  src={currentVideo.src}
                  className="w-full h-full object-contain"
                  onClick={togglePlay}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {/* Circular Wave + Play Button Overlay */}
                {!isPlaying && (
                  <div
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  >
                    {/* Animated Circular Waves */}
                    <div className="absolute w-32 h-32 rounded-full border-2 border-white/30 animate-ping" />
                    <div className="absolute w-40 h-40 rounded-full border-2 border-white/20 animate-ping animation-delay-300" />
                    <div className="absolute w-48 h-48 rounded-full border-2 border-white/10 animate-ping animation-delay-700" />

                    {/* Big Play Button */}
                    <div className="relative z-10 w-20 h-20 bg-[#023E8A] hover:bg-[#023E8A]/90 rounded-full flex items-center justify-center shadow-2xl transition-all active:scale-95">
                      <Play className="w-10 h-10 text-white ml-1" fill="white" />
                    </div>
                  </div>
                )}

                {/* Pause Indicator (when playing) */}
                {isPlaying && (
                  <div
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  >
                    <div className="w-20 h-20 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Pause className="w-9 h-9 text-white" />
                    </div>
                  </div>
                )}

                {/* Video Progress Indicators */}
                <div className="absolute top-4 left-4 flex gap-1.5">
                  {videos.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === currentIndex ? "bg-white w-8" : "bg-white/50 w-3"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="font-semibold text-xl text-[#023E8A]">
                  {currentVideo.title}
                </h3>
                <p className="text-gray-600 mt-2">{currentVideo.description}</p>

                <div className="mt-5 flex gap-3 text-sm">
                  <button
                    onClick={handlePrev}
                    className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded-full hover:border-[#023E8A] hover:text-[#023E8A] transition-all"
                  >
                    <ArrowRight className="w-4 h-4 rotate-180" />
                    Previous
                  </button>
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded-full hover:border-[#023E8A] hover:text-[#023E8A] transition-all"
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
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