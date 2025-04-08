import React from 'react';
import AddGoalForm from './AddGoalForm';
import ProgressForm from './ProgressForm';

const FormsSection = ({ 
  newGoal, 
  onNewGoalChange, 
  onAddGoal, 
  dailyProgress, 
  onProgressChange, 
  onAddProgress, 
  goals 
}) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
      <AddGoalForm 
        newGoal={newGoal}
        onNewGoalChange={onNewGoalChange}
        onSubmit={onAddGoal}
      />
      <ProgressForm 
        dailyProgress={dailyProgress}
        onProgressChange={onProgressChange}
        onSubmit={onAddProgress}
        goals={goals}
      />
    </section>
  );
};

export default FormsSection;