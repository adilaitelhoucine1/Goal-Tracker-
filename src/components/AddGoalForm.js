import React, { useState } from 'react';

const AddGoalForm = ({ onAddGoal }) => {
  const [title, setTitle] = useState('');
  const [target, setTarget] = useState('');
  const [unit, setUnit] = useState('');
  const [category, setCategory] = useState('steps');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleTargetChange = (e) => setTarget(e.target.value);
  const handleUnitChange = (e) => setUnit(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newGoal = {
      id: Date.now().toString(), 
      title: title,
      target: parseFloat(target),
      unit: unit,
      category: category,
      current: 0,
      progressHistory: [] 
    };
    
    const existingGoals = JSON.parse(localStorage.getItem('goals')) || [];
    localStorage.setItem('goals', JSON.stringify([...existingGoals, newGoal]));

    setTitle('');
    setTarget('');
    setUnit('');
    setCategory('steps');
    
  
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        Add New Goal
      </h3>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Goal Title:
          </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleTitleChange}
            className="w-full py-3 px-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter goal title"
          />
        </div>
        
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Target Value:
          </label>
          <input
            type="number"
            name="target"
            value={target}
            onChange={handleTargetChange}
            className="w-full py-3 px-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter target value"
            step="0.01"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Unit:
            </label>
            <input
              type="text"
              name="unit"
              value={unit}
              onChange={handleUnitChange}
              className="w-full py-3 px-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., steps, km, kg"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category:
            </label>
            <select
              name="category"
              value={category}
              onChange={handleCategoryChange}
              className="w-full py-3 px-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              <option value="steps">Steps</option>
              <option value="distance">Distance</option>
              <option value="weight">Weight</option>
              <option value="calories">Calories</option>
            </select>
          </div>
        </div>
 
        <button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl transition"
        >
          Add Goal
        </button>
      </form>
    </div>
  );
};

export default AddGoalForm;