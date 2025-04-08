import React from 'react';

const StatsSummary = ({ stats }) => {
  return (
    <section className="mb-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 relative">
        <span className="inline-block pb-2 border-b-4 border-blue-500">Your Weekly Stats</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center">
            <div className="rounded-full bg-green-100 p-3 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700">Completed Goals</h3>
              <p className="text-4xl font-bold text-green-600">{stats.completedGoals}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center">
            <div className="rounded-full bg-blue-100 p-3 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700">Average Progress</h3>
              <p className="text-4xl font-bold text-blue-600">{stats.averageProgress}%</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center">
            <div className="rounded-full bg-indigo-100 p-3 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700">Total Goals</h3>
              <p className="text-4xl font-bold text-indigo-600">{stats.totalGoals}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSummary;