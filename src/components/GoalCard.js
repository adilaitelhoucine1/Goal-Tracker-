import React from 'react';

const GoalCard = ({ goal, onDelete }) => {
  // Calculate progress percentage (capped at 100%)
  const progress = Math.min(100, Math.round((goal.current / goal.target) * 100));
  
  // Determine the color based on the goal category
  let color;
  switch(goal.category) {
    case 'steps':
      color = 'green';
      break;
    case 'distance':
      color = 'blue';
      break;
    case 'weight':
      color = 'yellow';
      break;
    case 'calories':
      color = 'cyan';
      break;
    default:
      color = 'indigo';
  }

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this goal?")) {
      onDelete(goal.id);
    }
  };

  return (
    <div className={`bg-white rounded-2xl shadow-lg p-6 border-l-4 border-${color}-500 hover:shadow-xl transition-shadow duration-300`}>
    
      <div className="flex justify-between mb-3">
        <h3 className="text-xl font-semibold text-gray-800 flex items-center">
          {goal.title}
        </h3>
        <span className={`px-3 py-1 bg-${color}-100 text-${color}-800 text-sm rounded-full font-medium`}>
          {goal.unit}
        </span>
      </div>
 
      <div className="w-full bg-gray-200 rounded-full h-6 mb-3">
        <div 
          className={`bg-${color}-500 h-6 rounded-full text-center text-xs text-white font-semibold leading-6`} 
          style={{ width: `${progress}%` }}
        >
          {progress}%
        </div>
      </div>
      
   
      <div className="flex justify-between text-sm text-gray-600 mb-4">
        <span className="font-medium">Target: {goal.target} {goal.unit}</span>
        <span className="font-bold">Current: {goal.current} {goal.unit}</span>
      </div>
      
   
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-500">
          Created on: {goal.createdAt}
        </span>
        <button 
          onClick={handleDelete}
          className="px-4 py-1.5 text-sm bg-white border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default GoalCard;