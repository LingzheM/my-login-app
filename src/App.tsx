import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import WorkUrgencyScreen from './pages/WorkUrgencyScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/work-urgency-screen' Component={WorkUrgencyScreen} />
        {/* 可以添加其他的路由 */}
      </Routes>
    </Router>
  );
}

export default App;
