import React, { useState, useEffect } from 'react';

const ProgressForm = ({ onUpdateProgress }) => {
  
  const [formData, setFormData] = useState({
    goalId: '',
    value: '',
    date: new Date().toISOString().split('T')[0]
  });
  

  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const loadGoals = () => {
      const savedGoals = JSON.parse(localStorage.getItem('goals')) || [];
      setGoals(savedGoals);
      
   
      if (savedGoals.length > 0 && !formData.goalId) {
        setFormData(prev => ({
          ...prev,
          goalId: savedGoals[0].id
        }));
      }
    };
    
    loadGoals();
    
 
    // window.addEventListener('storage', loadGoals);
    
    return () => {
      window.removeEventListener('storage', loadGoals);
    };
  }, [formData.goalId]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.goalId && formData.value) {
      const currentGoals = JSON.parse(localStorage.getItem('goals')) || [];
      
  
      const updatedGoals = currentGoals.map(goal => {
        if (goal.id === formData.goalId) {
        
          const progressEntry = {
            value: parseFloat(formData.value),
            date: formData.date,
            timestamp: new Date().toISOString()
          };
          
        
          const progressHistory = goal.progressHistory || [];
          
      
          return {
            ...goal,
            progressHistory: [...progressHistory, progressEntry],
            current: parseFloat(formData.value) // Still update current value
          };
        }
        return goal;
      });
      
      // Save updated goals back to localStorage
      localStorage.setItem('goals', JSON.stringify(updatedGoals));
      
      // Update local state
      setGoals(updatedGoals);
      
      // Notify parent component if callback exists
      if (onUpdateProgress) {
        onUpdateProgress(formData.goalId, parseFloat(formData.value));
      }
      
      // Reset the value field
      setFormData(prev => ({ ...prev, value: '' }));
    }
  };


  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Record Progress</h3>
      
      <form onSubmit={handleSubmit}>
      
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">Goal:</label>
          <select
            name="goalId"
            value={formData.goalId}
            onChange={handleChange}
            className="w-full py-3 px-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            {goals.map(goal => (
              <option key={goal.id} value={goal.id}>
                {goal.title} ({goal.current}/{goal.target} {goal.unit})
              </option>
            ))}
          </select>
        </div>

 
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">Progress:</label>
          <input
            type="number"
            name="value"
            value={formData.value}
            onChange={handleChange}
            className="w-full py-3 px-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter progress value"
            required
            min="0.01"
            step="0.01"
          />
        </div>

   
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full py-3 px-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

 
        <button 
          type="submit" 
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-xl transition"
        >
          Record Progress
        </button>
      </form>
    </div>
  );
};

export default ProgressForm;