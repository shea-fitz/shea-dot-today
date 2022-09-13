import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Atlas from './pages/atlas';
import BlueFlower from './pages/bfa';
import Habit from './pages/habit';
import Maker from './pages/maker';
import People from './pages/people';
import Sketch from './pages/sketch';
import StudentVisa from './pages/student-visa';
import CaseStudies from './pages/case-studies';
import Archive from './pages/website-archive';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Routes>
      <Route path="/" element={<App />} />
      <Route path="atlas" element={<Atlas />} />
      <Route path="bfa" element={<BlueFlower />} />
      <Route path="habit" element={<Habit />} />
      <Route path="maker" element={<Maker />} />
      <Route path="people" element={<People />} />
      <Route path="sketch" element={<Sketch />} />
      <Route path="student-visa" element={<StudentVisa />} />
      <Route path="case-studies" element={<CaseStudies />} />
      <Route path="website-archive" element={<Archive />} />
    </Routes>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
