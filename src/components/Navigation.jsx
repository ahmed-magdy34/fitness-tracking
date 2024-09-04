import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="bg-blue-500 p-4 mb-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white hover:text-gray-200">Log Workout</Link>
        </li>
        <li>
          <Link to="/progress" className="text-white hover:text-gray-200">Progress</Link>
        </li>
        <li>
          <Link to="/goals" className="text-white hover:text-gray-200">Goals</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;