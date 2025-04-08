import React from 'react';
import GoalCard from './GoalCard';


const GoalsList = ({ goals, onDeleteGoal }) => {
  return (
    <section className="mb-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 relative">
        <span className="inline-block pb-2 border-b-4 border-indigo-500">Your Goals</span>
      </h2>
      
      {goals.length === 0 ? (
        <div className="bg-white rounded-xl p-8 text-center shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <h3 className="text-xl font-medium text-gray-700 mt-4">No goals found</h3>
          <p className="text-gray-500 mt-2">Start by adding a new goal using the form.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {goals.map(goal => (
            <GoalCard 
              key={goal.id} 
              goal={goal} 
              onDelete={onDeleteGoal} 
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default GoalsList;