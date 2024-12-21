import React, { useContext } from 'react';
import { Moon, Sun } from 'lucide-react';
import { ThemeContext } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-500 ease-in-out shadow-md focus:outline-none"
      aria-label="Toggle theme"
    >
      {/* Glow Effect */}
      <div
        className={`absolute w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-200 dark:from-blue-700 dark:to-blue-400 opacity-0 transition-all duration-500 ${
          theme === 'dark' ? 'opacity-20 scale-110' : 'opacity-10 scale-90'
        }`}
      />
      {/* Icon with Animation */}
      <div
        className={`flex items-center justify-center w-10 h-10 transform transition-transform duration-700 ${
          theme === 'dark' ? 'rotate-180 scale-105' : 'rotate-0 scale-100'
        }`}
      >
        {theme === 'dark' ? (
          <Sun className="w-6 h-6 text-yellow-500" />
        ) : (
          <Moon className="w-6 h-6 text-blue-500" />
        )}
      </div>
    </button>
  );
}
