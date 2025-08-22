import React, { useState } from 'react';
import { Search, Bell, Menu, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Modal from './Modal';

const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);

  const notifications = [
    { id: 1, title: 'New job match found!', message: 'Senior Frontend Developer at TechCorp matches your profile 95%', time: '2 min ago' },
    { id: 2, title: 'Profile view', message: 'Jane Smith from InnovateLab viewed your profile', time: '1 hour ago' },
    { id: 3, title: 'Application update', message: 'Your application for Product Manager role is under review', time: '3 hours ago' },
  ];

  return (
    <>
      <header className="bg-white/80 dark:bg-dark-900/80 backdrop-blur-md border-b border-gray-100/50 dark:border-dark-700/50 sticky top-0 z-50 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <span className="text-white font-bold text-lg">CA</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 cursor-pointer">CareerAI</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <a href="#" className="text-primary-600 dark:text-primary-400 font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-600 after:rounded-full hover:after:h-1 transition-all duration-200">Dashboard</a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium transition-all duration-200 hover:scale-105 hover:-translate-y-0.5">Jobs</a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium transition-all duration-200 hover:scale-105 hover:-translate-y-0.5">Resume</a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium transition-all duration-200 hover:scale-105 hover:-translate-y-0.5">Network</a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium transition-all duration-200 hover:scale-105 hover:-translate-y-0.5">Resources</a>
            </nav>

            {/* Right side */}
            <div className="flex items-center space-x-2">
              <button className="p-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-xl transition-all duration-200 hover:scale-110">
                <Search className="w-5 h-5" />
              </button>
              
              <button 
                onClick={() => setIsNotificationModalOpen(true)}
                className="p-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-xl transition-all duration-200 relative hover:scale-110"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>
              
              <button
                onClick={toggleTheme}
                className="p-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-xl transition-all duration-200 hover:scale-110"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <div className="hidden md:flex items-center space-x-2">
                <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium transition-all duration-200 hover:scale-105 px-4 py-2 rounded-xl">
                  Sign In
                </button>
                <button className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-4 py-2 rounded-xl font-semibold shadow-md shadow-primary-500/25 hover:shadow-lg hover:shadow-primary-500/40 transition-all duration-200 hover:scale-105">
                  Sign Up
                </button>
              </div>
              
              <button className="lg:hidden p-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-xl transition-all duration-200 hover:scale-110">
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Notifications Modal */}
      <Modal
        isOpen={isNotificationModalOpen}
        onClose={() => setIsNotificationModalOpen(false)}
        title="Notifications"
      >
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="p-4 rounded-2xl border border-gray-200 dark:border-dark-700 hover:bg-gray-50 dark:hover:bg-dark-700 transition-all duration-200 cursor-pointer">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{notification.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{notification.message}</p>
              <span className="text-xs text-gray-500 dark:text-gray-500">{notification.time}</span>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default Header;
