import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import StatsSummary from './components/StatsSummary';
import GoalsList from './components/GoalsList';
import AddGoalForm from './components/AddGoalForm';
import ProgressForm from './components/ProgressForm';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [goals, setGoals] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    inProgress: 0
  });

  useEffect(() => {
    const savedGoals = JSON.parse(localStorage.getItem('goals')) || [];
    setGoals(savedGoals);
  }, []);

  useEffect(() => {
    const completed = goals.filter(goal => goal.current >= goal.target).length;
    setStats({
      total: goals.length,
      completed: completed,
      inProgress: goals.length - completed
    });
  }, [goals]);



  const deleteGoal = (goalId) => {
    const updatedGoals = goals.filter(goal => goal.id !== goalId);
    setGoals(updatedGoals);
    localStorage.setItem('goals', JSON.stringify(updatedGoals));
  };

  // Update progress for a goal
  const updateProgress = (goalId, newValue) => {
    const updatedGoals = goals.map(goal => 
      goal.id === goalId ? { ...goal, current: newValue } : goal
    );
    setGoals(updatedGoals);
    localStorage.setItem('goals', JSON.stringify(updatedGoals));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />

      <main className="container mx-auto px-6 py-10">
        <StatsSummary stats={stats} />
        <GoalsList goals={goals} onDeleteGoal={deleteGoal} />
        
        <section className="mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AddGoalForm  />
            <ProgressForm goals={goals} onUpdateProgress={updateProgress} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
