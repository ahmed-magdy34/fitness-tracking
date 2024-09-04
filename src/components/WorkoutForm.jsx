import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { saveWorkout } from '../utils/localStorage';

const validationSchema = Yup.object().shape({
  exerciseType: Yup.string().required('Exercise type is required'),
  duration: Yup.number().positive('Duration must be positive').required('Duration is required'),
  caloriesBurned: Yup.number().positive('Calories burned must be positive').required('Calories burned is required'),
});

function WorkoutForm() {
  const handleSubmit = (values, { resetForm }) => {
    saveWorkout(values);
    resetForm();
    alert('Workout logged successfully!');
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Log Workout</h2>
      <Formik
        initialValues={{ exerciseType: '', duration: '', caloriesBurned: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            <div>
              <Field
                name="exerciseType"
                type="text"
                placeholder="Exercise Type"
                className={`w-full p-2 border rounded ${errors.exerciseType && touched.exerciseType ? 'border-red-500' : ''}`}
              />
              <ErrorMessage name="exerciseType" component="div" className="text-red-500 text-sm" />
            </div>
            <div>
              <Field
                name="duration"
                type="number"
                placeholder="Duration (minutes)"
                className={`w-full p-2 border rounded ${errors.duration && touched.duration ? 'border-red-500' : ''}`}
              />
              <ErrorMessage name="duration" component="div" className="text-red-500 text-sm" />
            </div>
            <div>
              <Field
                name="caloriesBurned"
                type="number"
                placeholder="Calories Burned"
                className={`w-full p-2 border rounded ${errors.caloriesBurned && touched.caloriesBurned ? 'border-red-500' : ''}`}
              />
              <ErrorMessage name="caloriesBurned" component="div" className="text-red-500 text-sm" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Log Workout
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default WorkoutForm;