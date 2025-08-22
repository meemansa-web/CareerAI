import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, TrendingUp, Zap, Target, Play } from 'lucide-react';
import Modal from './Modal';

const Hero: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-dark-950 dark:via-dark-900 dark:to-dark-800 transition-all duration-500">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 dark:from-primary-400/10 dark:to-secondary-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-tr from-secondary-400/20 to-primary-400/20 dark:from-secondary-400/10 dark:to-primary-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:pr-8"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center space-x-3 bg-white/70 dark:bg-dark-800/70 backdrop-blur-sm border border-primary-200/50 dark:border-primary-700/50 rounded-full px-6 py-3 mb-8 shadow-lg shadow-primary-500/10 hover:shadow-xl hover:shadow-primary-500/20 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <span className="text-primary-700 dark:text-primary-300 font-semibold text-sm">AI-Powered Career Intelligence</span>
              </motion.div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight tracking-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600 bg-clip-text text-transparent">
                  Career Journey
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed font-medium">
                Discover perfect job matches, optimize your resume with AI insights, and build meaningful professional connections. Your next career breakthrough is one click away.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center space-x-3 shadow-xl shadow-primary-500/25 hover:shadow-2xl hover:shadow-primary-500/40 transition-all duration-300"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
                
                <button 
                  onClick={() => setIsVideoModalOpen(true)}
                  className="group bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm border border-gray-200 dark:border-dark-700 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-2xl font-semibold hover:bg-white dark:hover:bg-dark-700 hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  <span>Watch Demo</span>
                </button>
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full border-2 border-white dark:border-dark-800 hover:scale-110 transition-transform duration-200 cursor-pointer"></div>
                    ))}
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 font-medium">50k+ professionals</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-500 animate-bounce-subtle" />
                  <span className="text-gray-600 dark:text-gray-400 font-medium">92% success rate</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Main card */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-900/10 dark:shadow-black/20 p-8 border border-gray-200/50 dark:border-dark-700/50 hover:shadow-3xl hover:scale-105 transition-all duration-500 cursor-pointer group"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">AI Job Matching</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Find your perfect role</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[85, 92, 78].map((width, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-400">Match Score</span>
                          <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">{width}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${width}%` }}
                            transition={{ duration: 1, delay: i * 0.2 }}
                            className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                          ></motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                {/* Floating elements */}
                <motion.div 
                  animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 bg-white/90 dark:bg-dark-800/90 backdrop-blur-xl rounded-2xl shadow-xl shadow-gray-900/10 dark:shadow-black/20 p-4 border border-gray-200/50 dark:border-dark-700/50 hover:scale-110 transition-transform duration-300 cursor-pointer"
                >
                  <div className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-yellow-500 animate-pulse" />
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">98% Match</span>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-6 bg-white/90 dark:bg-dark-800/90 backdrop-blur-xl rounded-2xl shadow-xl shadow-gray-900/10 dark:shadow-black/20 p-4 border border-gray-200/50 dark:border-dark-700/50 hover:scale-110 transition-transform duration-300 cursor-pointer"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Live Updates</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Demo Modal */}
      <Modal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        title="CareerAI Demo"
        size="xl"
      >
        <div className="aspect-video bg-gray-900 rounded-2xl flex items-center justify-center">
          <div className="text-center">
            <Play className="w-20 h-20 text-white/60 mx-auto mb-4" />
            <p className="text-white/80 text-lg">Demo video coming soon!</p>
            <p className="text-white/60 text-sm mt-2">Experience the power of AI-driven career assistance</p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Hero;
