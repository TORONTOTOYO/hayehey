import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = ['HOME', 'ABOUT', 'TESTIMONIALS'];

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block md:hidden relative">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <Menu className="w-5 h-5" />
        )}
      </button>
      
      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity z-40
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`
          fixed top-[4rem] right-0 w-64 h-screen bg-white dark:bg-gray-900 
          shadow-lg z-50 transform transition-transform duration-200 ease-in-out
          border-l border-gray-200 dark:border-gray-700
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <nav className="h-full">
          <ul className="py-4 px-2">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="
                    block px-4 py-3 text-sm font-medium
                    text-gray-600 hover:text-blue-600 hover:bg-blue-50
                    dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800
                    rounded-lg transition-colors
                  "
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Additional Mobile Menu Content */}
          <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
            <button
              className="
                w-full px-4 py-2 text-sm font-medium text-white
                bg-blue-600 hover:bg-blue-700 
                rounded-lg transition-colors
              "
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default MobileNavigation;