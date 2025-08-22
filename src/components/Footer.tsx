import React from 'react';
import { Github, Twitter, Linkedin, Mail, Sparkles, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-dark-950 dark:via-dark-900 dark:to-dark-950 text-white py-16 relative overflow-hidden transition-all duration-500">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 dark:from-primary-500/5 dark:to-secondary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary-500/10 to-primary-500/10 dark:from-secondary-500/5 dark:to-primary-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold hover:text-primary-400 transition-colors duration-200 cursor-pointer">CareerAI</span>
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-6 font-medium leading-relaxed">
              Empowering careers with AI-driven insights and meaningful professional connections.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-300 dark:text-gray-400 hover:text-white hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-200 hover:scale-110 hover:-translate-y-1">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-300 dark:text-gray-400 hover:text-white hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-200 hover:scale-110 hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-300 dark:text-gray-400 hover:text-white hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-200 hover:scale-110 hover:-translate-y-1">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-300 dark:text-gray-400 hover:text-white hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-200 hover:scale-110 hover:-translate-y-1">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Product</h4>
            <ul className="space-y-4 text-gray-300 dark:text-gray-400">
              <li><a href="#" className="hover:text-white dark:hover:text-white transition-colors duration-200 font-medium hover:translate-x-2 inline-block">Job Discovery</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-white transition-colors duration-200 font-medium hover:translate-x-2 inline-block">Resume Analysis</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-white transition-colors duration-200 font-medium hover:translate-x-2 inline-block">Networking</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-white transition-colors duration-200 font-medium hover:translate-x-2 inline-block">Career Insights</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-4 text-gray-300 dark:text-gray-400">
              <li><a href="#" className="hover:text-white dark:hover:text-white transition-colors duration-200 font-medium hover:translate-x-2 inline-block">About Us</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-white transition-colors duration-200 font-medium hover:translate-x-2 inline-block">Careers</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-white transition-colors duration-200 font-medium hover:translate-x-2 inline-block">Blog</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-white transition-colors duration-200 font-medium hover:translate-x-2 inline-block">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Support</h4>
            <ul className="space-y-4 text-gray-300 dark:text-gray-400">
              <li><a href="#" className="hover:text-white dark:hover:text-white transition-colors duration-200 font-medium hover:translate-x-2 inline-block">Help Center</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-white transition-colors duration-200 font-medium hover:translate-x-2 inline-block">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-white transition-colors duration-200 font-medium hover:translate-x-2 inline-block">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-white transition-colors duration-200 font-medium hover:translate-x-2 inline-block">API Docs</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 dark:border-dark-700/50 mt-12 pt-8 flex items-center justify-between">
          <p className="text-gray-300 dark:text-gray-400 font-medium">&copy; 2025 CareerAI. All rights reserved. Built with AI-powered intelligence.</p>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-300 dark:text-gray-400 hover:text-white hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-200 hover:scale-110 hover:-translate-y-1"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
