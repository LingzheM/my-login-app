import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './utils/UserContext';
import LoginPage from './pages/LoginPage';
import FeaturesPage from './pages/FeaturesPage';
import ErrorPage from './pages/errorPage';

function App() {
  return (
    <UserProvider>
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/userPage' element={<FeaturesPage/>} >
        </Route>
        <Route path='/error' element={<ErrorPage />} />
        {/* 可以添加其他的路由 */}
      </Routes>
    </Router>
    </UserProvider>

  );
}

export default App;
