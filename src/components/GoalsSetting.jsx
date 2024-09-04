import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { saveGoal, getGoal } from '../utils/localStorage';

const validationSchema = Yup.object().shape({
  weeklyWorkouts: Yup.number().positive('Must be positive').required('Required'),
  monthlyCaloriesBurned: Yup.number().positive('Must be positive').required('Required'),
});

function GoalsSetting() {
  const [currentGoal, setCurrentGoal] = useState(null);

  useEffect(() => {
    setCurrentGoal(getGoal());
  }, []);

  const handleSubmit = (values, { resetForm }) => {
    saveGoal(values);
    setCurrentGoal(values);
    resetForm();
    alert('Goal set successfully!');
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Set Fitness Goals</h2>
      {currentGoal && (
        <div className="mb-4 p-4 bg-gray-100 rounded">
          <h3 className="font-bold">Current Goals:</h3>
          <p>Weekly Workouts: {currentGoal.weeklyWorkouts}</p>
          <p>Monthly Calories Burned: {currentGoal.monthlyCaloriesBurned}</p>
        </div>
      )}
      <Formik
        initialValues={{ weeklyWorkouts: '', monthlyCaloriesBurned: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            <div>
              <Field
                name="weeklyWorkouts"
                type="number"
                placeholder="Weekly Workouts"
                className={`w-full p-2 border rounded ${errors.weeklyWorkouts && touched.weeklyWorkouts ? 'border-red-500' : ''}`}
              />
              <ErrorMessage name="weeklyWorkouts" component="div" className="text-red-500 text-sm" />
            </div>
            <div>
              <Field
                name="monthlyCaloriesBurned"
                type="number"
                placeholder="Monthly Calories Burned"
                className={`w-full p-2 border rounded ${errors.monthlyCaloriesBurned && touched.monthlyCaloriesBurned ? 'border-red-500' : ''}`}
              />
              <ErrorMessage name="monthlyCaloriesBurned" component="div" className="text-red-500 text-sm" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Set Goal
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default GoalsSetting;