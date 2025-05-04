import React, { useState, useRef , useMemo } from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './screens/landingpage';
import Login from './screens/login';
import Signup from './screens/signup';
import Home from './screens/home';
import UploadVideo from './screens/video-upload';
import VideoManagement from './screens/video-management';

const routes = [
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/home", element: <Home /> },
  { path: "/video", element: <UploadVideo /> },
  { path: "/videomanage", element: <VideoManagement /> },
];
const App = () => {
  return(
    <Router>
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  </Router>
  )
};

export default App;