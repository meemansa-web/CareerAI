import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, MessageCircle, UserPlus, TrendingUp, Network, Sparkles, Send } from 'lucide-react';
import { generateMockConnections } from '../data/mockData';
import Modal from './Modal';

const NetworkingSection: React.FC = () => {
  const connections = generateMockConnections(6);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [selectedConnection, setSelectedConnection] = useState<any>(null);
  const [connectedUsers, setConnectedUsers] = useState<Set<string>>(new Set());

  const handleConnect = (connectionId: string) => {
    setConnectedUsers(prev => new Set([...prev, connectionId]));
  };

  const handleMessage = (connection: any) => {
    setSelectedConnection(connection);
    setIsMessageModalOpen(true);
  };

  return (
    <>
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-dark-900 dark:to-dark-800 relative overflow-hidden transition-all duration-500">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 right-32 w-96 h-96 bg-gradient-to-br from-secondary-400/10 to-primary-400/10 dark:from-secondary-400/5 dark:to-primary-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 -left-32 w-96 h-96 bg-gradient-to-tr from-primary-400/10 to-secondary-400/10 dark:from-primary-400/5 dark:to-secondary-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-white/70 dark:bg-dark-800/70 backdrop-blur-sm border border-secondary-200/50 dark:border-secondary-700/50 rounded-full px-6 py-3 mb-8 hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Network className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
              <span className="text-secondary-700 dark:text-secondary-300 font-semibold text-sm">Smart Networking</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              Build Meaningful
              <span className="block bg-gradient-to-r from-secondary-600 to-primary-600 bg-clip-text text-transparent">
                Professional Networks
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium">
              Connect with industry professionals who can accelerate your career. Our AI identifies the most valuable connections for your goals.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            <div className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl rounded-3xl p-8 text-center shadow-lg shadow-gray-900/5 dark:shadow-black/20 border border-gray-200/50 dark:border-dark-700/50 hover:shadow-xl hover:shadow-gray-900/10 dark:hover:shadow-black/30 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-500/25 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">50K+</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Active Professionals</p>
            </div>
            
            <div className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl rounded-3xl p-8 text-center shadow-lg shadow-gray-900/5 dark:shadow-black/20 border border-gray-200/50 dark:border-dark-700/50 hover:shadow-xl hover:shadow-gray-900/10 dark:hover:shadow-black/30 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-secondary-500/25 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">85%</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Response Rate</p>
            </div>
            
            <div className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl rounded-3xl p-8 text-center shadow-lg shadow-gray-900/5 dark:shadow-black/20 border border-gray-200/50 dark:border-dark-700/50 hover:shadow-xl hover:shadow-gray-900/10 dark:hover:shadow-black/30 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">3x</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Faster Career Growth</p>
            </div>
          </motion.div>

          {/* Recommended Connections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">AI-Recommended Connections</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {connections.map((connection, index) => {
                const isConnected = connectedUsers.has(connection.id);
                
                return (
                  <motion.div
                    key={connection.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg shadow-gray-900/5 dark:shadow-black/20 border border-gray-200/50 dark:border-dark-700/50 hover:shadow-xl hover:shadow-gray-900/10 dark:hover:shadow-black/30 hover:border-gray-300/50 dark:hover:border-dark-600/50 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] cursor-pointer"
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="relative">
                        <img
                          src={connection.avatar}
                          alt={connection.name}
                          className="w-16 h-16 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                          <Sparkles className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 dark:text-white text-lg group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">{connection.name}</h4>
                        <p className="text-gray-600 dark:text-gray-400 font-medium">{connection.title}</p>
                        <p className="text-gray-500 dark:text-gray-500 text-sm">{connection.company}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Relevance Score</span>
                        <span className="text-sm font-bold text-primary-600 dark:text-primary-400">{connection.relevanceScore}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-3">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${connection.relevanceScore}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full shadow-sm"
                        ></motion.div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 font-medium text-sm mb-6 bg-gray-50 dark:bg-dark-700 p-3 rounded-xl">{connection.reason}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500 mb-6">
                      <span className="font-medium">{connection.mutualConnections} mutual connections</span>
                    </div>

                    <div className="flex space-x-3">
                      <button 
                        onClick={() => handleConnect(connection.id)}
                        disabled={isConnected}
                        className={`flex-1 py-3 px-4 rounded-2xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:scale-105 ${
                          isConnected 
                            ? 'bg-green-500 text-white cursor-not-allowed' 
                            : 'bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40'
                        }`}
                      >
                        <UserPlus className="w-4 h-4" />
                        <span>{isConnected ? 'Connected' : 'Connect'}</span>
                      </button>
                      <button 
                        onClick={() => handleMessage(connection)}
                        className="flex-1 bg-white dark:bg-dark-700 border-2 border-gray-200 dark:border-dark-600 text-gray-700 dark:text-gray-300 py-3 px-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-dark-600 hover:border-gray-300 dark:hover:border-dark-500 transition-all duration-200 flex items-center justify-center space-x-2 font-semibold hover:scale-105"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Message</span>
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <div className="text-center mt-12">
            <button className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm text-secondary-700 dark:text-secondary-400 border-2 border-secondary-200 dark:border-secondary-700 px-8 py-4 rounded-2xl font-semibold hover:bg-white dark:hover:bg-dark-700 hover:border-secondary-300 dark:hover:border-secondary-600 hover:shadow-lg hover:scale-105 transition-all duration-200">
              Explore More Connections
            </button>
          </div>
        </div>
      </section>

      {/* Message Modal */}
      <Modal
        isOpen={isMessageModalOpen}
        onClose={() => setIsMessageModalOpen(false)}
        title={`Message ${selectedConnection?.name}`}
        size="md"
      >
        {selectedConnection && (
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <img
                src={selectedConnection.avatar}
                alt={selectedConnection.name}
                className="w-12 h-12 rounded-xl"
              />
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">{selectedConnection.name}</h4>
                <p className="text-gray-600 dark:text-gray-400">{selectedConnection.title}</p>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Subject
              </label>
              <input
                type="text"
                placeholder="Let's connect and discuss opportunities"
                className="w-full px-4 py-3 border border-gray-200 dark:border-dark-600 rounded-xl focus:ring-2 focus:ring-primary-500 bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Hi! I noticed we share similar interests in the tech industry. I'd love to connect and learn more about your experience..."
                className="w-full px-4 py-3 border border-gray-200 dark:border-dark-600 rounded-xl focus:ring-2 focus:ring-primary-500 bg-white dark:bg-dark-700 text-gray-900 dark:text-white resize-none"
              />
            </div>
            
            <button className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-200 flex items-center justify-center space-x-2">
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </div>
        )}
      </Modal>
    </>
  );
};

export default NetworkingSection;
