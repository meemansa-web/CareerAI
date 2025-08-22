import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import JobDiscovery from './components/JobDiscovery';
import ResumeAnalysis from './components/ResumeAnalysis';
import NetworkingSection from './components/NetworkingSection';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark-950 transition-colors duration-500">
        <Header />
        <main>
          <Hero />
          <Features />
          <JobDiscovery />
          <ResumeAnalysis />
          <NetworkingSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
