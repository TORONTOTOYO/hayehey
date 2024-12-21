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
  className="flex items-center relative py-28 md:py-36 px-4"
>
  <div className="max-w-[80%] mx-auto px-10 sm:px-16 lg:px-20 rounded-[30px] border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-20 md:p-28 transform -translate-y-10">
    <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32">
      <div className="relative w-80 h-80 md:w-[30rem] md:h-[30rem] rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex-shrink-0">
        <div className="absolute inset-1 rounded-full bg-white dark:bg-gray-900" />
      </div>
      <div className="flex flex-col items-center md:items-start gap-8 max-w-2xl">
        <h2 className="text-5xl md:text-7xl font-bold text-center md:text-left">
          ROMEL FARAON
          <span className="block text-blue-600 dark:text-blue-400">DOCTOR</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 text-center md:text-left leading-relaxed">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Sapien rhoncus ultrices curae elementum tempor rhoncus. Tortor taciti vulputate placerat pretium integer fringilla. 
        </p>
        <button className="group flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg font-medium transition">
          Get Started
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition" />
        </button>
      </div>
    </div>
  </div>
</section>

{/* Highlights Section */}
<section id="highlights" className="py-28 md:py-36 flex items-center">
  <div className="max-w-[80%] mx-auto px-10 sm:px-16 lg:px-20 rounded-[30px] border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-20 md:p-28 transform -translate-y-8">
    <h2 className="text-4xl md:text-6xl font-bold text-center mb-24">Highlights</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
      {highlights.map((item, index) => (
        <ScrollAnimation key={index}>
          <button
            onClick={() => setSelectedHighlight(index)}
            className="group flex flex-col items-center gap-6 p-8 rounded-3xl bg-white dark:bg-gray-800 hover:shadow-xl transition duration-300"
          >
            <div className="w-24 h-24 flex items-center justify-center text-4xl bg-blue-100 dark:bg-blue-900 rounded-2xl group-hover:scale-110 transition">
              {item.icon}
            </div>
            <span className="font-medium text-lg">{item.title}</span>
          </button>
        </ScrollAnimation>
      ))}
    </div>
  </div>
</section>

{/* About Section */}
<section
  id="about"
  className="py-28 md:py-36 flex items-center bg-gray-50 dark:bg-gray-800/50"
>
  <div className="max-w-[80%] mx-auto px-10 sm:px-16 lg:px-20 rounded-[30px] border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-20 md:p-28 transform -translate-y-8">
    <h2 className="text-4xl md:text-6xl font-bold text-center mb-24">About Us</h2>
    <div className="grid md:grid-cols-3 gap-12">
      {[
        {
          title: "Our Mission",
          content:
            "To provide innovative solutions that empower businesses to thrive in the digital Donec mattis platea in semper adipiscing nibh varius lacus leo. Mi condimentum sed penatibus mattis vulputate nascetur orci facilisis. Montes metus scelerisque curabitur sit nam lacus..",
          icon: Star,
        },
        {
          title: "Our Vision",
          content:
            "Curae nisl lectus justo; sagittis dui ut morbi. Est dignissim sapien augue senectus lorem. Scelerisque odio proin eros cubilia condimentum bibendum dapibus. Himenaeos iaculis dui sapien ante pharetra? Est tortor commodo nisl platea vel augue praesent elementum?",
          icon: CheckCircle,
        },
        {
          title: "Our Values",
          content:
            "Sit ante dignissim proin fermentum blandit dui. Vel vivamus platea dapibus odio fames. Integer per dui platea elit dictumst molestie. Porttitor condimentum leo praesent phasellus est sodales? Enim ridiculus habitant quam justo sodales inceptos. believe in integrity, excellence, and innovation in everything we do.",
          icon: Star,
        },
      ].map((item, index) => (
        <ScrollAnimation key={index}>
          <div className="p-12 rounded-3xl bg-white dark:bg-gray-800 hover:shadow-xl transition duration-300">
            <item.icon className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold mb-6">{item.title}</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {item.content}
            </p>
          </div>
        </ScrollAnimation>
      ))}
    </div>
  </div>
</section>

{/* Testimonials Section */}
<section id="testimonials" className="py-28 md:py-36 flex items-center">
  <div className="max-w-[80%] mx-auto px-10 sm:px-16 lg:px-20 rounded-[30px] border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-20 md:p-28 transform -translate-y-8">
    <h2 className="text-4xl md:text-6xl font-bold text-center mb-24">What Our Clients Say</h2>
    <div className="grid md:grid-cols-2 gap-12">
      {[
        { name: "CJ", role: "CEO, Tech Inc", content: "SUCKING DICK IS THE SATISYING THING A GIRL CAN DO" },
        { name: "DARIEL", role: "Designer, Creative Co", content: "KAN 2 10" }
      ].map((item, index) => (
        <ScrollAnimation key={index}>
          <div className="p-12 rounded-3xl bg-white dark:bg-gray-800 hover:shadow-xl transition duration-300">
            <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">"{item.content}"</p>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900" />
              <div>
                <div className="text-xl font-medium">{item.name}</div>
                <div className="text-lg text-gray-500 dark:text-gray-400">{item.role}</div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      ))}
    </div>
  </div>
</section>

        {/* Footer */}
        <footer className="py-16 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-8">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MARK JOHN QUIDAYAN
              </h2>
              <nav>
                <ul className="flex gap-12">
                  {["Home", "About", "Testimonials", "Contact"].map((item) => (
                    <li key={item}>
                      <a href={`#${item.toLowerCase()}`} className="text-lg text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="text-base text-gray-500 dark:text-gray-400">
                © 2069 ROMEL FARAON. All rights reserved.
              </div>
            </div>
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