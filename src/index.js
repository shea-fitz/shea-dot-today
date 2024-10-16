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

import BlueFlower from './pages/bfa';
import Habit from './pages/habit';
import People from './pages/people';
import SketchDigital from './pages/sketch-digital';
import Sketch from './pages/sketch';
import StudentVisa from './pages/student-visa';
import Flowers from './pages/flowers';
import Archive from './pages/website';
import Scent from './pages/sam';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Routes>
      <Route path="/" element={<App />} />
      <Route path="bfa" element={<BlueFlower />} />
      <Route path="habit" element={<Habit />} />
      <Route path="people" element={<People />} />
      <Route path="sketch-digital" element={<SketchDigital />} />
      <Route path="sketch" element={<Sketch />} />
      <Route path="student-visa" element={<StudentVisa />} />
      <Route path="flowers" element={<Flowers />} />
      <Route path="website" element={<Archive />} />
      <Route path="scent" element={<Scent />} />

    </Routes>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
