import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Bookmark, ExternalLink, Building, Heart, Share2 } from 'lucide-react';
import { Job } from '../types';
import Modal from './Modal';

interface JobCardProps {
  job: Job;
  index: number;
}

const JobCard: React.FC<JobCardProps> = ({ job, index }) => {
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const getFitScoreColor = (score: number) => {
    if (score >= 90) return 'text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/50 border-emerald-200 dark:border-emerald-700';
    if (score >= 80) return 'text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 border-blue-200 dark:border-blue-700';
    if (score >= 70) return 'text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/50 border-amber-200 dark:border-amber-700';
    return 'text-gray-700 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-600';
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.share?.({
      title: job.title,
      text: `Check out this ${job.title} position at ${job.company}`,
      url: window.location.href
    });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onClick={() => setIsJobModalOpen(true)}
        className="group bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-3xl shadow-lg shadow-gray-900/5 dark:shadow-black/20 border border-gray-200/50 dark:border-dark-700/50 p-8 hover:shadow-xl hover:shadow-gray-900/10 dark:hover:shadow-black/30 hover:border-gray-300/50 dark:hover:border-dark-600/50 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] cursor-pointer"
      >
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/25 group-hover:shadow-xl group-hover:shadow-primary-500/40 group-hover:scale-110 transition-all duration-300">
              <Building className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors duration-200">{job.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">{job.company}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className={`px-4 py-2 rounded-full text-sm font-bold border transition-all duration-200 hover:scale-105 ${getFitScoreColor(job.fitScore)}`}>
              {job.fitScore}% fit
            </span>
            <div className="flex items-center space-x-1">
              <button 
                onClick={handleBookmark}
                className={`p-2 rounded-xl transition-all duration-200 hover:scale-110 ${isBookmarked ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/50' : 'text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/50'}`}
              >
                <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400 mb-6">
          <div className="flex items-center space-x-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
            <MapPin className="w-4 h-4" />
            <span className="font-medium">{job.location}</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-secondary-600 dark:hover:text-secondary-400 transition-colors duration-200">
            <Clock className="w-4 h-4" />
            <span className="font-medium">{job.type}</span>
          </div>
        </div>

        <p className="text-gray-700 dark:text-gray-300 text-sm mb-6 line-clamp-2 leading-relaxed">{job.description}</p>

        <div className="flex items-center justify-between mb-6">
          <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors duration-200">{job.salary}</span>
          <span className="text-sm text-gray-500 dark:text-gray-500 font-medium">Posted {job.posted}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {job.requirements.slice(0, 3).map((req, idx) => (
            <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full border border-gray-200 dark:border-dark-600 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors duration-200">
              {req.split(' ').slice(0, 2).join(' ')}
            </span>
          ))}
        </div>

        <div className="flex items-center space-x-3">
          <button className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white py-3 rounded-2xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40 hover:scale-105">
            <span>View Details</span>
            <ExternalLink className="w-4 h-4" />
          </button>
          
          <button 
            onClick={handleLike}
            className={`p-3 rounded-xl transition-all duration-200 hover:scale-110 ${isLiked ? 'text-red-500 bg-red-50 dark:bg-red-900/50' : 'text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/50'}`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
          </button>
          
          <button 
            onClick={handleShare}
            className="p-3 text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/50 rounded-xl transition-all duration-200 hover:scale-110"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </motion.div>

      {/* Job Details Modal */}
      <Modal
        isOpen={isJobModalOpen}
        onClose={() => setIsJobModalOpen(false)}
        title={job.title}
        size="lg"
      >
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Building className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{job.title}</h3>
              <p className="text-xl text-gray-600 dark:text-gray-400">{job.company}</p>
              <p className="text-gray-500 dark:text-gray-500">{job.location} • {job.type}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-3">Salary Range</h4>
              <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">{job.salary}</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-3">Match Score</h4>
              <span className={`px-4 py-2 rounded-full text-lg font-bold border ${getFitScoreColor(job.fitScore)}`}>
                {job.fitScore}% fit
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-3">Job Description</h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{job.description}</p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-3">Requirements</h4>
            <ul className="space-y-2">
              {job.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 dark:text-gray-300">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex space-x-4">
            <button className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white py-3 rounded-2xl font-semibold transition-all duration-200 hover:scale-105">
              Apply Now
            </button>
            <button className="flex-1 bg-white dark:bg-dark-700 border-2 border-gray-200 dark:border-dark-600 text-gray-700 dark:text-gray-300 py-3 rounded-2xl font-semibold hover:bg-gray-50 dark:hover:bg-dark-600 transition-all duration-200 hover:scale-105">
              Save for Later
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default JobCard;
