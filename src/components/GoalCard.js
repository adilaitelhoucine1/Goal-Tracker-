import React from 'react';

// Category icons & colors
const categoryConfig = {
  steps: { icon: "👣", color: "bg-blue-600" },
  water: { icon: "💧", color: "bg-cyan-500" },
  workout: { icon: "🏋️‍♂️", color: "bg-purple-600" },
  other: { icon: "🎯", color: "bg-amber-500" }
};

const GoalCard = ({ goal, progress, onDelete }) => {
  const { icon, color } = categoryConfig[goal.category] || categoryConfig.other;
  const progressColor = progress >= 100 ? "bg-green-500" : color;
  
  // Format date to display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className={`h-2 ${progressColor}`}></div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center">
            <span className="text-2xl mr-3">{icon}</span>
            <h3 className="font-bold text-xl text-gray-800 leading-tight">{goal.title}</h3>
          </div>
          <button 
            onClick={onDelete}
            className="text-gray-400 hover:text-red-500 transition-colors"
            aria-label="Supprimer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
        
        <div className="text-gray-600 mb-4 flex items-center space-x-4">
          <span className="inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Cible: {goal.target} {goal.unit}
          </span>
          
          {goal.createdAt && (
            <span className="inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {formatDate(goal.createdAt)}
            </span>
          )}
        </div>
        
        <div className="relative pt-1 mb-1">
          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold inline-block text-blue-600">
              Progression
            </div>
            <div className="text-xs font-semibold inline-block text-blue-600">
              {progress}%
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-gray-200">
            <div 
              style={{ width: `${progress}%` }} 
              className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${progressColor} transition-all duration-500`}
            ></div>
          </div>
        </div>
        
        <p className="text-sm text-gray-500">
          {progress >= 100 
            ? "Objectif atteint! 🎉" 
            : `Reste ${goal.target - (goal.progress.reduce((sum, entry) => sum + entry.value, 0))} ${goal.unit} pour atteindre l'objectif`
          }
        </p>
      </div>
    </div>
  );
};

export default GoalCard;