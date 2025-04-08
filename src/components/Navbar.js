import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="text-xl font-bold">Goal Tracking App</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="px-3 py-1 rounded-lg bg-white text-blue-700 font-medium hover:bg-blue-50 transition">
            Dashboard
          </button>
          <button className="px-3 py-1 rounded-lg bg-transparent border border-white text-white font-medium hover:bg-white hover:text-blue-700 transition">
            Statistics
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;