import React, { useState } from 'react';
import { ScrollAnimation } from '../components/ScrollAnimation';
import { HighlightModal } from '../components/HighlightModal';
import { ThemeToggle } from '../components/ThemeToggle';
import { MobileNavigation } from '../components/MobileNavigation';
import { AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import AppointmentModal from '../components/AppointmentModal';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const highlights = [
  {
    title: "Lorem Ipsum 1",
    content: [
      {
        title: "Lorem Ipsum 2",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        video: "./highlights/video2.mp4"
      },
      {
        title: "Lorem Ipsum 3",
        content: "Nullam vehicula dui euismod, convallis augue at, auctor ipsum.",
        image: "./highlights/highligh3.jpg"
      },
      {
        title: "Lorem Ipsum 4",
        content: "Curabitur vitae sem at libero dignissim euismod.",
        image: "./highlights/highligh4.jpg"
      }
    ]
  },
  {
    title: "Lorem Ipsum 5",
    content: [
      {
        title: "Lorem Ipsum 6",
        content: "Mauris nec velit eget risus tincidunt tincidunt.",
        image: "./highlights/highligh6.jpg"
      },
      {
        title: "Lorem Ipsum 7",
        content: "Sed auctor metus a ante scelerisque, non condimentum ante posuere.",
        video: "./highlights/video3.mp4"
      },
      {
        title: "Lorem Ipsum 8",
        content: "Phasellus sed justo vitae metus tincidunt dapibus.",
        image: "./highlights/highligh8.jpg"
      }
    ]
  },
  {
    title: "Lorem Ipsum 9",
    content: [
      {
        title: "Lorem Ipsum 10",
        content: "Proin luctus urna a magna pretium, eu suscipit sapien lacinia.",
        image: "./highlights/highligh10.jpg"
      },
      {
        title: "Lorem Ipsum 11",
        content: "Donec auctor purus vel nunc maximus, ac auctor enim hendrerit.",
        image: "./highlights/highligh11.jpg"
      },
      {
        title: "Lorem Ipsum 12",
        content: "Aliquam erat volutpat. Integer laoreet lectus a felis ultricies.",
        video: "./highlights/video4.mp4"
      }
    ]
  },
  {
    title: "Lorem Ipsum 13",
    content: [
      {
        title: "Lorem Ipsum 14",
        content: "Aliquam tristique sapien ut turpis bibendum, eget vehicula lorem volutpat.",
        image: "./highlights/highligh4.jpg"
      },
      {
        title: "Lorem Ipsum 15",
        content: "Nunc vitae sapien interdum, vehicula lectus ut, sodales felis.",
        video: "./highlights/video5.mp4"
      },
      {
        title: "Lorem Ipsum 16",
        content: "Fusce ac libero ac felis tincidunt tincidunt.",
        image: "./highlights/highligh5.jpg"
      }
    ]
  }
];

export default function HomePage() {
  const [selectedHighlight, setSelectedHighlight] = useState(null);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const handleScroll = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openAppointmentModal = () => {
    setIsAppointmentModalOpen(true);
  };

  const closeAppointmentModal = () => {
    setIsAppointmentModalOpen(false);
  };
  

  return (
<div className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
  {/* Header */}
  <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        {/* Logo Section */}
        <a
          href="#"
          onClick={() => {
            window.history.replaceState(null, "", window.location.pathname);
            window.location.reload(); // Reload the page
          }}
        >
          <h1 className="text-xl font-semibold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent tracking-wide">
            DR. RF
          </h1>
        </a>

        {/* Navigation & Theme Toggle */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              {["home", "about", "highlights", "feedback"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => handleScroll(section)}
                    className="text-sm font-medium text-gray-600 hover:text-teal-500 dark:text-gray-300 dark:hover:text-cyan-400 transition-all duration-200 transform hover:scale-105"
                    aria-label={`Go to ${section} section`}
                  >
                    {section.toUpperCase()}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* Mobile Navigation */}
          <MobileNavigation />
        </div>
      </div>
    </div>
  </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section
  id="home"
  className="flex items-center relative py-8 sm:py-12 md:py-16 lg:py-20 px-4"
>
  <div className="w-[95%] sm:w-[85%] md:w-[80%] lg:w-[75%] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 rounded-3xl border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg p-6 sm:p-8 md:p-12 lg:p-16 shadow-md">
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20 lg:gap-32">
      {/* Profile Image */}
      <div className="relative w-48 sm:w-56 md:w-64 lg:w-80 h-48 sm:h-56 md:h-64 lg:h-80 rounded-full bg-gradient-to-tr from-teal-500 to-cyan-500 flex-shrink-0">
        <div className="absolute inset-1 rounded-full bg-white dark:bg-gray-900" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center md:items-start gap-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold  text-center md:text-left leading-tight text-gray-800 dark:text-gray-200">
          ROMEL
          <span className="block bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
            FARAON
          </span>
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 text-center md:text-left leading-relaxed max-w-2xl">
          Simplify and elevate your digital experience. Aesthetic design, clean
          code, and seamless interaction for modern solutions.
        </p>
        <button
          onClick={openAppointmentModal}
          className="group flex items-center gap-4 px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-full text-lg md:text-xl font-medium transition"
        >
          Book Now
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </div>
</section>

<section id="highlights" className="py-8 md:py-12 flex items-center">
  <div className="max-w-[80%] mx-auto px-8 sm:px-12 lg:px-16 rounded-[20px] border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-8 md:p-12 transform -translate-y-6">
  <h2       
  className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-800 dark:text-white mb-8"
  >Highlights</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {highlights.map((item, index) => {
        const firstContent = item.content[0]; // Get the first content of the highlight
        const isVideo = !!firstContent?.video; // Check if the first content is a video
        return (
          <ScrollAnimation key={index}>
            <button
              onClick={() => setSelectedHighlight(index)} // Update selected highlight
              className={`group flex flex-col items-center gap-4 transition duration-300 ${
                selectedHighlight === index
                  ? "text-white shadow-lg" // Apply style if selected
                  : ""
              }`}
            >
              {/* 3D Circular Effect */}
              <div className="relative flex items-center justify-center">
                {/* Outer Small Circular Layer with hover effect */}
                <div className="absolute w-24 h-24 rounded-full bg-gray-100 dark:bg-gray-100 z-0 group-hover:scale-110 group-hover:bg-gray-200 dark:group-hover:bg-gray-200 transition-transform duration-300"></div>
                {/* Main Circular Thumbnail with hover effect */}
                <div className="relative w-24 h-24 rounded-full flex items-center justify-center bg-blue-100 dark:bg-blue-900 border border-gray-300 dark:border-gray-700 overflow-hidden z-10 group-hover:scale-110 group-hover:shadow-lg transition-transform duration-300">
                  {isVideo ? (
                    // Render video thumbnail
                    <video
                      src={firstContent.video}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    // Render image thumbnail
                    <img
                      src={firstContent?.image || "path/to/default-image.jpg"}
                      alt={firstContent?.title || "Default Title"}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <span className="font-medium text-lg text-center">{item.title}</span>
            </button>
          </ScrollAnimation>
        );
      })}
    </div>
  </div>
</section>


<section
  id="about"
  className="py-8 md:py-12 flex items-center bg-gray-50 dark:bg-gray-800/50"
  role="region"
  aria-labelledby="about-heading"
>
  <motion.div
    className="max-w-[80%] mx-auto px-6 sm:px-10 lg:px-12 rounded-[20px] border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-8 md:p-12"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h2 id="about-heading"       
    className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-800 dark:text-white mb-8"
    >About Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="p-6 rounded-3xl bg-white dark:bg-gray-800 hover:shadow-xl transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Star className="w-8 h-8 text-blue-600 mb-4" aria-hidden="true" />
          <h3 className="text-xl font-bold mb-4">Our Mission</h3>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Quis finibus aliquam commodo massa fames posuere. Faucibus fermentum dapibus volutpat dignissim rhoncus felis nostra diam. Mus ultrices ad fermentum; mollis penatibus nisl. Scelerisque egestas massa nascetur id diam ex cras justo hac.
          </p>
        </motion.div>

        <motion.div
          className="p-6 rounded-3xl bg-white dark:bg-gray-800 hover:shadow-xl transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Star className="w-8 h-8 text-blue-600 mb-4" aria-hidden="true" />
          <h3 className="text-xl font-bold mb-4">Our Values</h3>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Fames tincidunt est interdum est risus dictumst arcu porttitor. Nam sit eros nam vel accumsan dignissim habitasse. Natoque mattis facilisis ante porttitor condimentum accumsan. Sed senectus primis class molestie adipiscing pretium.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex items-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="p-6 rounded-3xl bg-white dark:bg-gray-800 hover:shadow-xl transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <CheckCircle className="w-8 h-8 text-blue-600 mb-4" aria-hidden="true" />
          <h3 className="text-xl font-bold mb-4">Our Vision</h3>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Volutpat vel pulvinar dictumst ipsum rutrum imperdiet dignissim habitant conubia. Magna tincidunt in egestas etiam magna proin himenaeos. Dolor augue dui quisque congue arcu tortor velit habitant taciti.
          </p>
        </motion.div>
      </motion.div>
    </div>
  </motion.div>
</section>

<section
  id="feedback"
  className="py-12 md:py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900"
>
  <div className="max-w-[90%] lg:max-w-[80%] mx-auto px-6 sm:px-8 lg:px-12">
    <h2
      id="testimonials-heading"
      className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-800 dark:text-white mb-8"
    >
      What Our Clients Say
    </h2>

    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      breakpoints={{
        768: { slidesPerView: 2 },
      }}
      className="testimonial-swiper"
    >
      {[ 
        {
          name: 'CJ',
          role: 'CEO, Creative Co',
          content:
            '“Class facilisi curae curae cras mattis varius turpis. Id hendrerit neque libero montes sit quis nunc.”',
          avatar: './Icons/profile.png',
        },
        {
          name: 'Dariel',
          role: 'Lead Designer, Creative Co',
          content:
            '“Ad platea ornare quis risus ultrices scelerisque bibendum amet fringilla.”',
          avatar: './Icons/profile.png',
        },
        {
          name: 'Tyron',
          role: 'Admin, Creative Co',
          content:
            '“Gravida pharetra pellentesque sodales, pretium himenaeos justo luctus.”',
          avatar: './Icons/profile.png',
        },
      ].map((item, index) => (
        <SwiperSlide key={index}>
          <div className="p-6 sm:p-8 bg-gradient-to-r from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 italic mb-4">
              {item.content}
            </p>
            <div className="flex items-center gap-4">
              <img
                src={item.avatar}
                alt={`${item.name}'s avatar`}
                className="w-14 h-14 rounded-full border-2 border-blue-500 object-cover"
              />
              <div>
                <div className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
                  {item.name}
                </div>
                <div className="text-sm text-blue-500 dark:text-blue-400">
                  {item.role}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>


        {/* Footer */}
        <footer className="py-8 bg-white/70 dark:bg-gray-800/70 text-gray-900 dark:text-white backdrop-blur-md">
  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 text-center">
    <div className="flex justify-center gap-8 mb-4">
      <a
        href="https://facebook.com"
        className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition"
        aria-label="Facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-facebook-f text-2xl" />
      </a>
      <a
        href="https://instagram.com"
        className="text-gray-900 dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition"
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-instagram text-2xl" />
      </a>
      <a
        href="https://twitter.com"
        className="text-gray-900 dark:text-white hover:text-blue-400 dark:hover:text-blue-300 transition"
        aria-label="Twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-twitter text-2xl" />
      </a>
      <a
        href="https://tiktok.com"
        className="text-gray-900 dark:text-white hover:text-black dark:hover:text-white transition"
        aria-label="TikTok"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-tiktok text-2xl" />
      </a>
    </div>
    <p className="text-sm sm:text-base mb-4">
      © {new Date().getFullYear()} Dr. RF. All Rights Reserved.
    </p>
  </div>
</footer>

      </main>

      <AnimatePresence>
        {selectedHighlight !== null && (
          <HighlightModal
            highlights={highlights[selectedHighlight].content}
            initialIndex={0}
            onClose={() => setSelectedHighlight(null)}
          />
        )}
      </AnimatePresence>

      
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={closeAppointmentModal}
      />
    </div>
  );
}   