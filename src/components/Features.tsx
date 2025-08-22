import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Users, FileText, TrendingUp, Zap, Info } from 'lucide-react';
import Modal from './Modal';

const Features: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<any>(null);
  const [isFeatureModalOpen, setIsFeatureModalOpen] = useState(false);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Matching',
      description: 'Advanced algorithms analyze your skills and match you with perfect opportunities.',
      color: 'primary',
      delay: 0,
      details: 'Our sophisticated AI engine uses machine learning to analyze your resume, skills, and career preferences to find job opportunities that align perfectly with your professional goals. The system learns from your interactions and continuously improves its recommendations.'
    },
    {
      icon: Target,
      title: 'Career Goal Tracking',
      description: 'Set and track your career objectives with personalized roadmaps.',
      color: 'secondary',
      delay: 0.1,
      details: 'Create detailed career roadmaps with milestone tracking, skill development recommendations, and progress visualization. Set short-term and long-term goals, and receive AI-driven suggestions on how to achieve them faster.'
    },
    {
      icon: Users,
      title: 'Smart Networking',
      description: 'Connect with industry professionals who can accelerate your career growth.',
      color: 'primary',
      delay: 0.2,
      details: 'Leverage AI to identify the most valuable professional connections based on your career goals, industry, and experience level. Get personalized introductions and conversation starters to build meaningful relationships.'
    },
    {
      icon: FileText,
      title: 'Resume Optimization',
      description: 'Get AI-powered feedback to make your resume stand out to recruiters.',
      color: 'secondary',
      delay: 0.3,
      details: 'Receive detailed analysis of your resume with specific suggestions for improvement. Our AI identifies missing keywords, formatting issues, and content gaps that could be preventing you from getting interviews.'
    },
    {
      icon: TrendingUp,
      title: 'Market Insights',
      description: 'Stay informed about industry trends and salary benchmarks.',
      color: 'primary',
      delay: 0.4,
      details: 'Access real-time market data including salary trends, skill demands, job market forecasts, and industry growth patterns. Make informed decisions about your career path with data-driven insights.'
    },
    {
      icon: Zap,
      title: 'Instant Notifications',
      description: 'Get real-time alerts for job matches and networking opportunities.',
      color: 'secondary',
      delay: 0.5,
      details: 'Never miss important opportunities with intelligent notifications. Get instant alerts for job matches, connection requests, industry news, and personalized career recommendations delivered straight to your device.'
    }
  ];

  const handleFeatureClick = (feature: any) => {
    setSelectedFeature(feature);
    setIsFeatureModalOpen(true);
  };

  return (
    <>
      <section className="py-24 bg-white dark:bg-dark-950 relative overflow-hidden transition-all duration-500">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 -right-32 w-96 h-96 bg-gradient-to-br from-primary-400/5 to-secondary-400/5 dark:from-primary-400/3 dark:to-secondary-400/3 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-32 w-96 h-96 bg-gradient-to-tr from-secondary-400/5 to-primary-400/5 dark:from-secondary-400/3 dark:to-primary-400/3 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              Powerful Features for
              <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Career Success
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium">
              Everything you need to take control of your career journey and achieve your professional goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isPrimary = feature.color === 'primary';
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: feature.delay }}
                  onClick={() => handleFeatureClick(feature)}
                  className="group relative cursor-pointer"
                >
                  <div className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-dark-700/50 rounded-3xl p-8 hover:shadow-xl hover:shadow-gray-900/10 dark:hover:shadow-black/30 hover:border-gray-300/50 dark:hover:border-dark-600/50 transition-all duration-300 h-full hover:-translate-y-2 hover:scale-[1.02]">
                    <div className="relative mb-8">
                      <div className={`w-16 h-16 ${isPrimary ? 'bg-gradient-to-br from-primary-500 to-primary-600' : 'bg-gradient-to-br from-secondary-500 to-secondary-600'} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg ${isPrimary ? 'shadow-primary-500/25 group-hover:shadow-primary-500/40' : 'shadow-secondary-500/25 group-hover:shadow-secondary-500/40'}`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Info icon */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-white dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                        <Info className="w-3 h-3 text-gray-600 dark:text-gray-400" />
                      </div>
                      
                      {/* Floating decoration */}
                      <div className={`absolute -top-1 -right-1 w-6 h-6 ${isPrimary ? 'bg-gradient-to-r from-secondary-400 to-secondary-500' : 'bg-gradient-to-r from-primary-400 to-primary-500'} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse`}></div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors duration-200">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                      {feature.description}
                    </p>

                    {/* Hover effect border */}
                    <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isPrimary ? 'bg-gradient-to-r from-primary-500/10 to-secondary-500/10' : 'bg-gradient-to-r from-secondary-500/10 to-primary-500/10'} -z-10`}></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Details Modal */}
      <Modal
        isOpen={isFeatureModalOpen}
        onClose={() => setIsFeatureModalOpen(false)}
        title={selectedFeature?.title || ''}
        size="lg"
      >
        {selectedFeature && (
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className={`w-16 h-16 bg-gradient-to-br ${selectedFeature.color === 'primary' ? 'from-primary-500 to-primary-600' : 'from-secondary-500 to-secondary-600'} rounded-2xl flex items-center justify-center shadow-lg`}>
                <selectedFeature.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedFeature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{selectedFeature.description}</p>
              </div>
            </div>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">{selectedFeature.details}</p>
            </div>
            
            <div className="flex space-x-4">
              <button className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-200">
                Learn More
              </button>
              <button className="flex-1 bg-white dark:bg-dark-700 border border-gray-200 dark:border-dark-600 text-gray-700 dark:text-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-dark-600 transition-all duration-200">
                Try Now
              </button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Features;
