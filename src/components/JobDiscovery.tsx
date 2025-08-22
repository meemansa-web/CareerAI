import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, SlidersHorizontal, Sparkles, MapPin, DollarSign } from 'lucide-react';
import JobCard from './JobCard';
import Modal from './Modal';
import { generateMockJobs } from '../data/mockData';

const JobDiscovery: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs] = useState(generateMockJobs(6));
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  return (
    <>
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-dark-900 dark:to-dark-800 relative overflow-hidden transition-all duration-500">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-40 -right-32 w-96 h-96 bg-gradient-to-br from-primary-400/10 to-secondary-400/10 dark:from-primary-400/5 dark:to-secondary-400/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-tr from-secondary-400/10 to-primary-400/10 dark:from-secondary-400/5 dark:to-primary-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-white/70 dark:bg-dark-800/70 backdrop-blur-sm border border-primary-200/50 dark:border-primary-700/50 rounded-full px-6 py-3 mb-8 hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Sparkles className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              <span className="text-primary-700 dark:text-primary-300 font-semibold text-sm">AI-Powered Discovery</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              Find Your Perfect
              <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Career Match
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium">
              Our intelligent algorithm matches you with opportunities that align with your skills, experience, and career goals.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl rounded-3xl shadow-xl shadow-gray-900/5 dark:shadow-black/20 border border-gray-200/50 dark:border-dark-700/50 p-8 mb-12 hover:shadow-2xl hover:shadow-gray-900/10 dark:hover:shadow-black/30 transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search jobs, companies, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 border border-gray-200 dark:border-dark-600 rounded-2xl focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent bg-white/80 dark:bg-dark-700/80 backdrop-blur-sm text-lg font-medium placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white transition-all duration-200 hover:border-gray-300 dark:hover:border-dark-500"
                />
              </div>
              
              <div className="flex gap-4">
                <button 
                  onClick={() => setIsFilterModalOpen(true)}
                  className="flex items-center space-x-3 px-6 py-4 border border-gray-200 dark:border-dark-600 rounded-2xl hover:bg-gray-50 dark:hover:bg-dark-700 hover:border-gray-300 dark:hover:border-dark-500 transition-all duration-200 font-medium text-gray-700 dark:text-gray-300 hover:scale-105"
                >
                  <Filter className="w-5 h-5" />
                  <span>Location</span>
                </button>
                <button 
                  onClick={() => setIsFilterModalOpen(true)}
                  className="flex items-center space-x-3 px-6 py-4 border border-gray-200 dark:border-dark-600 rounded-2xl hover:bg-gray-50 dark:hover:bg-dark-700 hover:border-gray-300 dark:hover:border-dark-500 transition-all duration-200 font-medium text-gray-700 dark:text-gray-300 hover:scale-105"
                >
                  <SlidersHorizontal className="w-5 h-5" />
                  <span>Filters</span>
                </button>
                <button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-2xl font-semibold shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40 transition-all duration-200 hover:scale-105">
                  Search
                </button>
              </div>
            </div>
          </motion.div>

          {/* Job Results */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm text-primary-700 dark:text-primary-400 border-2 border-primary-200 dark:border-primary-700 px-8 py-4 rounded-2xl font-semibold hover:bg-white dark:hover:bg-dark-700 hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-lg hover:scale-105 transition-all duration-200">
              Load More Opportunities
            </button>
          </div>
        </div>
      </section>

      {/* Filters Modal */}
      <Modal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        title="Search Filters"
        size="lg"
      >
        <div className="space-y-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Enter city, state, or country"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-dark-600 rounded-xl focus:ring-2 focus:ring-primary-500 bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Salary Range</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-dark-600 rounded-xl focus:ring-2 focus:ring-primary-500 bg-white dark:bg-dark-700 text-gray-900 dark:text-white">
                <option>Any</option>
                <option>$50k - $100k</option>
                <option>$100k - $150k</option>
                <option>$150k - $200k</option>
                <option>$200k+</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Job Type</label>
            <div className="grid grid-cols-2 gap-3">
              {['Full-time', 'Part-time', 'Contract', 'Remote'].map((type) => (
                <label key={type} className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                  <span className="text-gray-700 dark:text-gray-300">{type}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex space-x-4">
            <button className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-200">
              Apply Filters
            </button>
            <button className="flex-1 bg-white dark:bg-dark-700 border border-gray-200 dark:border-dark-600 text-gray-700 dark:text-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-dark-600 transition-all duration-200">
              Clear All
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default JobDiscovery;
