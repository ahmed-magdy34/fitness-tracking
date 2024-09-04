import React, { useEffect, useState } from 'react';
import { getWorkouts } from '../utils/localStorage';

function ProgressDashboard() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    setWorkouts(getWorkouts());
  }, []);

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Progress Dashboard</h2>
      {workouts.length === 0 ? (
        <p>No workouts logged yet.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Exercise Type</th>
              <th className="border p-2">Duration (min)</th>
              <th className="border p-2">Calories Burned</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout, index) => (
              <tr key={index}>
                <td className="border p-2">{workout.exerciseType}</td>
                <td className="border p-2">{workout.duration}</td>
                <td className="border p-2">{workout.caloriesBurned}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ProgressDashboard;