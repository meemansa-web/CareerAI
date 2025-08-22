import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Upload, Target, TrendingUp, AlertCircle, CheckCircle, Sparkles, Zap, Download } from 'lucide-react';
import { mockResumeAnalysis } from '../data/mockData';
import Modal from './Modal';

const ResumeAnalysis: React.FC = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-emerald-700 dark:text-emerald-400';
    if (score >= 70) return 'text-blue-700 dark:text-blue-400';
    if (score >= 60) return 'text-amber-700 dark:text-amber-400';
    return 'text-red-700 dark:text-red-400';
  };

  const getScoreBg = (score: number) => {
    if (score >= 85) return 'bg-emerald-100 dark:bg-emerald-900/50 border-emerald-200 dark:border-emerald-700';
    if (score >= 70) return 'bg-blue-100 dark:bg-blue-900/50 border-blue-200 dark:border-blue-700';
    if (score >= 60) return 'bg-amber-100 dark:bg-amber-900/50 border-amber-200 dark:border-amber-700';
    return 'bg-red-100 dark:bg-red-900/50 border-red-200 dark:border-red-700';
  };

  const getProgressColor = (score: number) => {
    if (score >= 85) return 'from-emerald-500 to-emerald-600';
    if (score >= 70) return 'from-blue-500 to-blue-600';
    if (score >= 60) return 'from-amber-500 to-amber-600';
    return 'from-red-500 to-red-600';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    // Handle file drop logic here
  };

  return (
    <>
      <section className="py-24 bg-white dark:bg-dark-950 relative overflow-hidden transition-all duration-500">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-40 -left-32 w-96 h-96 bg-gradient-to-br from-secondary-400/10 to-primary-400/10 dark:from-secondary-400/5 dark:to-primary-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-white dark:bg-dark-800 border border-primary-200/50 dark:border-primary-700/50 rounded-full px-6 py-3 mb-8 shadow-lg shadow-primary-500/10 hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Zap className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              <span className="text-primary-700 dark:text-primary-300 font-semibold text-sm">AI-Powered Analysis</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              Optimize Your Resume
              <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                With AI Insights
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium">
              Get instant, intelligent feedback on your resume with our AI-powered analysis. Improve your chances of landing interviews.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Upload Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-dark-900 dark:to-dark-800 rounded-3xl p-10 border border-gray-200/50 dark:border-dark-700/50 shadow-lg shadow-gray-900/5 dark:shadow-black/20 hover:shadow-xl hover:shadow-gray-900/10 dark:hover:shadow-black/30 transition-all duration-300"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40 hover:scale-110 transition-all duration-300 cursor-pointer">
                  <Upload className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Upload Your Resume</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 font-medium">
                  Upload your resume in PDF or Word format for instant AI analysis
                </p>
                
                <div 
                  className={`border-2 border-dashed rounded-2xl p-12 cursor-pointer group transition-all duration-300 ${
                    isDragOver 
                      ? 'border-primary-400 bg-primary-50 dark:bg-primary-900/20' 
                      : 'border-gray-300 dark:border-dark-600 hover:border-primary-400 hover:bg-primary-50/50 dark:hover:bg-primary-900/10'
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => setIsUploadModalOpen(true)}
                >
                  <FileText className={`w-16 h-16 mx-auto mb-6 transition-all duration-200 ${
                    isDragOver ? 'text-primary-500 scale-110' : 'text-gray-400 dark:text-gray-500 group-hover:text-primary-500 group-hover:scale-110'
                  }`} />
                  <p className="text-gray-600 dark:text-gray-400 mb-3 font-medium">Drag and drop your resume here</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-6">or</p>
                  <button className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40 transition-all duration-200 hover:scale-105">
                    Browse Files
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Analysis Results */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Overall Score */}
              <div className="bg-white dark:bg-dark-800 border border-gray-200/50 dark:border-dark-700/50 rounded-3xl p-8 shadow-lg shadow-gray-900/5 dark:shadow-black/20 hover:shadow-xl hover:shadow-gray-900/10 dark:hover:shadow-black/30 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Overall Score</h3>
                  <div className={`px-6 py-3 rounded-2xl border font-bold text-xl transition-all duration-200 hover:scale-105 ${getScoreBg(mockResumeAnalysis.overallScore)} ${getScoreColor(mockResumeAnalysis.overallScore)}`}>
                    {mockResumeAnalysis.overallScore}/100
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-4 mb-4">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${mockResumeAnalysis.overallScore}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`bg-gradient-to-r ${getProgressColor(mockResumeAnalysis.overallScore)} h-4 rounded-full shadow-sm`}
                  ></motion.div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Your resume shows strong potential with room for strategic improvements.</p>
              </div>

              {/* Strengths and Improvements */}
              <div className="grid gap-6">
                <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200/50 dark:border-emerald-700/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center space-x-3 mb-4">
                    <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    <h4 className="font-bold text-emerald-800 dark:text-emerald-300 text-lg">Key Strengths</h4>
                  </div>
                  <ul className="space-y-3">
                    {mockResumeAnalysis.strengths.slice(0, 3).map((strength, index) => (
                      <motion.li 
                        key={index} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="text-emerald-700 dark:text-emerald-300 flex items-start space-x-3 font-medium hover:translate-x-2 transition-transform duration-200 cursor-pointer"
                      >
                        <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{strength}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200/50 dark:border-amber-700/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center space-x-3 mb-4">
                    <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    <h4 className="font-bold text-amber-800 dark:text-amber-300 text-lg">Areas to Improve</h4>
                  </div>
                  <ul className="space-y-3">
                    {mockResumeAnalysis.improvements.slice(0, 3).map((improvement, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                        className="text-amber-700 dark:text-amber-300 flex items-start space-x-3 font-medium hover:translate-x-2 transition-transform duration-200 cursor-pointer"
                      >
                        <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{improvement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button className="flex-1 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white py-4 rounded-2xl font-bold hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-200 flex items-center justify-center space-x-3 text-lg hover:scale-105">
                  <Target className="w-6 h-6" />
                  <span>Get Detailed Analysis</span>
                </button>
                <button className="px-6 py-4 bg-white dark:bg-dark-700 border-2 border-gray-200 dark:border-dark-600 text-gray-700 dark:text-gray-300 rounded-2xl font-semibold hover:bg-gray-50 dark:hover:bg-dark-600 hover:scale-105 transition-all duration-200">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Section Scores */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Detailed Section Analysis</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockResumeAnalysis.sections.map((section, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="bg-white dark:bg-dark-800 border border-gray-200/50 dark:border-dark-700/50 rounded-2xl p-6 shadow-lg shadow-gray-900/5 dark:shadow-black/20 hover:shadow-xl hover:shadow-gray-900/10 dark:hover:shadow-black/30 transition-all duration-300 hover:scale-105 cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">{section.name}</h4>
                    <span className={`px-3 py-1 rounded-xl text-sm font-bold border transition-all duration-200 hover:scale-105 ${getScoreBg(section.score)} ${getScoreColor(section.score)}`}>
                      {section.score}%
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-medium text-sm">{section.feedback}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upload Modal */}
      <Modal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        title="Upload Resume"
        size="lg"
      >
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Select Your Resume</h3>
            <p className="text-gray-600 dark:text-gray-400">Choose a file from your device or drag and drop it here</p>
          </div>
          
          <div className="border-2 border-dashed border-gray-300 dark:border-dark-600 rounded-2xl p-8 text-center hover:border-primary-400 transition-all duration-300">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400 mb-4">Supported formats: PDF, DOC, DOCX</p>
            <input type="file" accept=".pdf,.doc,.docx" className="hidden" id="resume-upload" />
            <label htmlFor="resume-upload" className="cursor-pointer bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-200 inline-block">
              Choose File
            </label>
          </div>
          
          <button className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-200">
            Analyze Resume
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ResumeAnalysis;
