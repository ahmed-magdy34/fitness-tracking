export const saveWorkout = (workout) => {
    const workouts = JSON.parse(localStorage.getItem('workouts') || '[]');
    workouts.push(workout);
    localStorage.setItem('workouts', JSON.stringify(workouts));
  };
  
  export const getWorkouts = () => {
    return JSON.parse(localStorage.getItem('workouts') || '[]');
  };
  
  export const saveGoal = (goal) => {
    localStorage.setItem('goal', JSON.stringify(goal));
  };
  
  export const getGoal = () => {
    return JSON.parse(localStorage.getItem('goal') || 'null');
  };