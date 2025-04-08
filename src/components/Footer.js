import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-6 mt-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Goal Tracking App
            </h3>
            <p className="text-sm opacity-80">Atteignez vos objectifs fitness quotidiens</p>
          </div>
          <p className="text-sm opacity-80">
            © 2025 Fitness Goal Tracker | Designed By Adil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;