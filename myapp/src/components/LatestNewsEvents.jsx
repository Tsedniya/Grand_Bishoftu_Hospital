import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const newsAndEvents = [
  {
    id: 1,
    title: "Grand Bishoftu Hospital Launches New Cardiac Center",
    date: "May 12, 2026",
    time: "2:30 PM",
    category: "Event",
    description: "State-of-the-art cardiac center equipped with latest technology now open to serve the community.",
    image: "/assets/news/cardiac.jpg", // Replace with your image
  },
  {
    id: 2,
    title: "Free Medical Camp for Underprivileged Children",
    date: "May 8, 2026",
    time: "9:00 AM",
    category: "News",
    description: "Over 500 children received free health checkups and vaccinations last weekend.",
    image: "/assets/news/medical-camp.jpg",
  },
];

const LatestNewsEvents = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#023E8A] tracking-tighter leading-tight">
            Latest News & Events
          </h2>
          <p className="mt-3  text-[#023E8A]/70 text-sm md:text-base tracking-[2px] font-medium max-w-md mx-auto">
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

          {/* Right Side - Video */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <div className="relative">
                <video
                  controls
                  className="w-full aspect-video bg-black"
                  poster="/assets/video-thumbnail.jpg" // Optional thumbnail
                >
                  <source src="/assets/videos/hospital-tour.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div className="absolute top-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  3:45
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-xl text-[#023E8A]">
                  Virtual Tour of Grand Bishoftu Hospital
                </h3>
                <p className="text-gray-600 mt-2">
                  Take a complete tour of our modern facilities, departments, and patient care areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsEvents;