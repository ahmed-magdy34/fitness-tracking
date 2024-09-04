import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import WorkoutForm from './components/WorkoutForm';
import ProgressDashboard from './components/ProgressDashboard';
import GoalsSetting from './components/GoalsSetting';

function App() {
  return (
    <Router>
      <div className="container mx-auto px-4">
        <Navigation />
        <Routes>
          <Route path="/" element={<WorkoutForm />} />
          <Route path="/progress" element={<ProgressDashboard />} />
          <Route path="/goals" element={<GoalsSetting />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;