import React, { useState } from 'react';
import { ScrollAnimation } from '../components/ScrollAnimation';
import { HighlightModal } from '../components/HighlightModal';
import { ThemeToggle } from '../components/ThemeToggle';
import { MobileNavigation } from '../components/MobileNavigation';
import { AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

const highlights = [
  {
    title: "Lorem Ipsum 1",
    icon: "🏆",
    content: [
      { title: "Lorem Ipsum 2", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      { title: "Lorem Ipsum 3", content: "Nullam vehicula dui euismod, convallis augue at, auctor ipsum." },
      { title: "Lorem Ipsum 4", content: "Curabitur vitae sem at libero dignissim euismod." }
    ]
  },
  {
    title: "Lorem Ipsum 5",
    icon: "🎓",
    content: [
      { title: "Lorem Ipsum 6", content: "Mauris nec velit eget risus tincidunt tincidunt." },
      { title: "Lorem Ipsum 7", content: "Sed auctor metus a ante scelerisque, non condimentum ante posuere." },
      { title: "Lorem Ipsum 8", content: "Phasellus sed justo vitae metus tincidunt dapibus." }
    ]
  },
  {
    title: "Lorem Ipsum 9",
    icon: "💼",
    content: [
      { title: "Lorem Ipsum 10", content: "Proin luctus urna a magna pretium, eu suscipit sapien lacinia." },
      { title: "Lorem Ipsum 11", content: "Donec auctor purus vel nunc maximus, ac auctor enim hendrerit." },
      { title: "Lorem Ipsum 12", content: "Aliquam erat volutpat. Integer laoreet lectus a felis ultricies." }
    ]
  },
  {
    title: "Lorem Ipsum 13",
    icon: "🤝",
    content: [
      { title: "Lorem Ipsum 14", content: "Aliquam tristique sapien ut turpis bibendum, eget vehicula lorem volutpat." },
      { title: "Lorem Ipsum 15", content: "Nunc vitae sapien interdum, vehicula lectus ut, sodales felis." },
      { title: "Lorem Ipsum 16", content: "Fusce ac libero ac felis tincidunt tincidunt." }
    ]
  }
];


export default function HomePage() {
  const [selectedHighlight, setSelectedHighlight] = useState(null);
  const handleScroll = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DR. RF
            </h1>
            <div className="flex items-center gap-8">
              <nav className="hidden md:block">
                <ul className="flex gap-12">
                  {["home", "about", "testimonials"].map((section) => (
                    <li key={section}>
                      <button
                        onClick={() => handleScroll(section)}
                        className="text-base font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition"
                      >
                        {section.toUpperCase()}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
              <ThemeToggle />
              <MobileNavigation />
            </div>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section
  id="home"
  className="flex items-center relative py-16 px-4 md:py-28"
>
  <div className="max-w-[80%] sm:max-w-[70%] mx-auto px-6 sm:px-8 rounded-[20px] border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-10 md:p-20">
    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-32">
      <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex-shrink-0">
        <div className="absolute inset-1 rounded-full bg-white dark:bg-gray-900" />
      </div>
      <div className="flex flex-col items-center md:items-start gap-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left">
          ROMEL
          <span className="block text-blue-600 dark:text-blue-400">FARAON</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 text-center md:text-left leading-relaxed">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Sapien rhoncus
          ultrices curae elementum tempor rhoncus. Tortor taciti vulputate
          placerat pretium integer fringilla.
        </p>
        <button className="group flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm md:text-lg font-medium transition">
          Get Started
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
        </button>
      </div>
    </div>
  </div>
</section>



        {/* Highlights Section */}
        <section id="highlights" className="py-20 md:py-28 flex items-center">
          <div className="max-w-[80%] mx-auto px-8 sm:px-12 lg:px-16 rounded-[20px] border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-16 md:p-20 transform -translate-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Highlights</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {highlights.map((item, index) => (
                <ScrollAnimation key={index}>
                  <button
                    onClick={() => setSelectedHighlight(index)}
                    className="group flex flex-col items-center gap-4 p-6 rounded-3xl bg-white dark:bg-gray-800 hover:shadow-xl transition duration-300"
                  >
                    <div className="w-20 h-20 flex items-center justify-center text-3xl bg-blue-100 dark:bg-blue-900 rounded-2xl group-hover:scale-110 transition">
                      {item.icon}
                    </div>
                    <span className="font-medium text-lg">{item.title}</span>
                  </button>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>


        <section
          id="about"
          className="py-20 md:py-28 flex items-center bg-gray-50 dark:bg-gray-800/50"
          role="region"
          aria-labelledby="about-heading"
        >
          <div className="max-w-[80%] mx-auto px-8 sm:px-12 lg:px-16 rounded-[20px] border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-16 md:p-20 transform -translate-y-6">
            <h2 id="about-heading" className="text-3xl md:text-5xl font-bold text-center mb-16">About Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-8">
                {/* Our Mission */}
                <div className="p-8 rounded-3xl bg-white dark:bg-gray-800 hover:shadow-xl transition duration-300">
                  <Star className="w-10 h-10 text-blue-600 mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Quis finibus aliquam commodo massa fames posuere. Faucibus fermentum dapibus volutpat dignissim rhoncus felis nostra diam. Mus ultrices ad fermentum; mollis penatibus nisl. Scelerisque egestas massa nascetur id diam ex cras justo hac.                  </p>
                </div>

                {/* Our Values */}
                <div className="p-8 rounded-3xl bg-white dark:bg-gray-800 hover:shadow-xl transition duration-300">
                  <Star className="w-10 h-10 text-blue-600 mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-bold mb-4">Our Values</h3>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Fames tincidunt est interdum est risus dictumst arcu porttitor. Nam sit eros nam vel accumsan dignissim habitasse. Natoque mattis facilisis ante porttitor condimentum accumsan. Sed senectus primis class molestie adipiscing pretium.                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex items-center">
                {/* Our Vision */}
                <div className="p-8 rounded-3xl bg-white dark:bg-gray-800 hover:shadow-xl transition duration-300">
                  <CheckCircle className="w-10 h-10 text-blue-600 mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Volutpat vel pulvinar dictumst ipsum rutrum imperdiet dignissim habitant conubia. Magna tincidunt in egestas etiam magna proin himenaeos. Dolor augue dui quisque congue arcu tortor velit habitant taciti.                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="py-20 md:py-28 flex items-center"
          aria-labelledby="testimonials-heading"
        >
          <div className="max-w-full sm:max-w-[90%] lg:max-w-[80%] mx-auto px-6 sm:px-10 lg:px-16 rounded-[30px] border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-10 md:p-20 transform -translate-y-8">
            <h2 id="testimonials-heading" className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-16 sm:mb-20">
              What Our Clients Say
            </h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 sm:gap-6">
              {[{
                  name: "CJ",
                  role: "CEO, Tech Inc",
                  content: "Sucking dick is the most satisfying thing a girl can do",
                  avatar: "/path-to-cj-avatar.jpg",
                },
                {
                  name: "Dariel",
                  role: "Designer, Creative Co",
                  content: "Kantotan na Ignition",
                  avatar: "/path-to-dariel-avatar.jpg",
                },
              ].map((item, index) => (
                <ScrollAnimation key={index} animateIn="fadeIn">
                  <div className="p-8 sm:p-6 rounded-3xl bg-white dark:bg-gray-800 hover:shadow-xl transition duration-300">
                    <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">"{item.content}"</p>
                    <div className="flex items-center gap-4 sm:gap-6">
                      <img
                        src={item.avatar}
                        alt={`${item.name}'s avatar`}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                      />
                      <div>
                        <div className="text-lg sm:text-xl font-medium">{item.name}</div>
                        <div className="text-base sm:text-lg text-gray-500 dark:text-gray-400">{item.role}</div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
{/* Footer */}
<footer className="py-8 bg-white/70 dark:bg-gray-800/70 text-gray-900 dark:text-white backdrop-blur-md">
  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 text-center">
    <div className="flex justify-center gap-8 mb-4">
      <a
        href="https://facebook.com"
        className="text-gray-900 dark:text-white hover:text-blue-500 transition"
        aria-label="Facebook"
      >
        <i className="fa-brands fa-facebook-f text-2xl" />
      </a>
      <a
        href="https://instagram.com"
        className="text-gray-900 dark:text-white hover:text-pink-500 transition"
        aria-label="Instagram"
      >
        <i className="fa-brands fa-instagram text-2xl" />
      </a>
      <a
        href="https://twitter.com"
        className="text-gray-900 dark:text-white hover:text-blue-400 transition"
        aria-label="Twitter"
      >
        <i className="fa-brands fa-twitter text-2xl" />
      </a>
      <a
        href="https://tiktok.com"
        className="text-gray-900 dark:text-white hover:text-black transition"
        aria-label="TikTok"
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
    </div>
  );
}