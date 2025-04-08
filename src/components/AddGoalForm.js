import React, { useState } from 'react';

const AddGoalForm = ({ onAddGoal }) => {
 
  const [formData, setFormData] = useState({
    title: '',
    target: '',
    unit: '',
    category: 'steps',
  });




  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newGoal = {
        id: Date.now().toString(), 
        title: formData.title,
        target: parseFloat(formData.target),
        unit: formData.unit,
        category: formData.category,
        current: 0,
        createdAt: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        })
    };
    
   
    const existingGoals = JSON.parse(localStorage.getItem('goals')) || [];
    localStorage.setItem('goals', JSON.stringify([...existingGoals, newGoal]));


    setFormData({
      title: '',
      target: '',
      unit: '',
      category: 'steps',
    });
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
            value={formData.title}
            onChange={handleChange}
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
            value={formData.target}
            onChange={handleChange}
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
              value={formData.unit}
              onChange={handleChange}
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
              value={formData.category}
              onChange={handleChange}
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