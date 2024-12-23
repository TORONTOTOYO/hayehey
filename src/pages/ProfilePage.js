import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, BookOpen, Briefcase, Award, ChevronLeft, MapPin, Mail, Phone } from 'lucide-react';

const timelineData = {
  education: [
    {
      year: '2018 - 2022',
      title: 'Lorem Ipsum Dolor',
      institution: 'Universitatis Medicae Scientiae',
      description: 'Specialized in lorem ipsum with honors',
      location: 'Lorem, USA'
    },
    {
      year: '2014 - 2018',
      title: 'Baccalaureus Scientiae in Biology',
      institution: 'State Universitatis',
      description: 'Graduated Magna Cum Laude in lorem ipsum',
      location: 'Ipsum, USA'
    }
  ],
  experience: [
    {
      year: '2022 - Present',
      title: 'Senior Lorem Practitioner',
      institution: 'Centralis Hospitalis',
      description: 'Leading the lorem ipsum department',
      location: 'Dolor, USA'
    },
    {
      year: '2020 - 2022',
      title: 'Medical Lorem Resident',
      institution: 'Civitas Generalis Hospitalis',
      description: 'Completed residency in lorem ipsum',
      location: 'Sit Amet, USA'
    }
  ],
  certifications: [
    {
      year: '2023',
      title: 'Board Certification in Lorem Ipsum',
      institution: 'Medicae Tabula',
      description: 'National certification for lorem ipsum practice'
    },
    {
      year: '2022',
      title: 'Advanced Lorem Ipsum Support',
      institution: 'Cordis Associationis',
      description: 'Certification in emergency lorem ipsum care'
    }
  ]
};


export default function ProfilePage() {
  const handleBackClick = () => {
    window.location.href = '/'; // Or use router navigation if using React Router
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow text-gray-700 dark:text-white"
      >
        <ChevronLeft className="w-5 h-5" />
        <span>Back to Home</span>
      </button>

      {/* Profile Container */}
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-12">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-teal-600 to-cyan-500 py-12">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.div 
                  className="relative w-48 h-48"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="absolute inset-0 rounded-full border-4 border-white/50" />
                  <div className="absolute inset-[4px] rounded-full bg-gray-900 overflow-hidden">
                    <img
                      src="/Icons/profile.png"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                <div className="text-center md:text-left text-white">
                  <h1 className="text-4xl md:text-5xl font-bold mb-3">Dr. Romel Faraon</h1>
                  <p className="text-xl text-blue-100 mb-4">Internal Medicine Specialist</p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
                    <span className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm">
                      <MapPin className="w-4 h-4" />
                      Bay, Laguna
                    </span>
                    <span className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm">
                      <Mail className="w-4 h-4" />
                      dr.faraon@email.com
                    </span>
                    <span className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm">
                      <Phone className="w-4 h-4" />
                      (123) 456-7890
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Sections */}
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div>
                <TimelineSection
                  title="Education"
                  icon={BookOpen}
                  items={timelineData.education}
                />
                <TimelineSection
                  title="Certifications"
                  icon={Award}
                  items={timelineData.certifications}
                />
              </div>
              {/* Right Column */}
              <div>
                <TimelineSection
                  title="Experience"
                  icon={Briefcase}
                  items={timelineData.experience}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function TimelineSection({ title, icon: Icon, items }) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-8">
        <Icon className="w-6 h-6 text-teal-500" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
      </div>
      <div className="space-y-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-700"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-teal-500 rounded-full" />
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-cyan-500" />
                <span className="text-sm text-cyan-500">{item.year}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">{item.institution}</p>
              {item.location && (
                <p className="text-gray-500 dark:text-gray-300 mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {item.location}
                </p>
              )}
              <p className="text-gray-500 dark:text-gray-300">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}