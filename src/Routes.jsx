/**
 * Application Routing Configuration
 * 
 * This file defines all available routes in the application using React Router v7.
 * New routes can be added by importing their components and adding them to the Routes component.
 * Currently implemented routes:
 * - Home (/) - The main landing page
 */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Page components
import HomePage from './pages/Home/Home';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Additional routes can be added here */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;