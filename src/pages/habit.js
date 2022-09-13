import React from 'react';
import PageHeader from '../components/PageHeader';
import Image from '../components/Image';
import { Link } from 'react-router-dom';
  
const Habit = () => {
  return (
    <div className="page-wrapper">
      <Link to='/' className="back">home</Link>

        <div className="page-content">
          <PageHeader
              title="I Didn't Ask for the Habit"
              type='Illustration'
              year='Spring 2018'
            />


        <p className="paragraph">
        <i>I Didn't Ask for the Habit</i> is an abstract comic created with an experimental workflow incorporating image data from Processing sketches, 3D models in Rhino and Grasshopper, screenshots, and Photoshop. I gave a workshop on this process at <a href="https://itp.nyu.edu/camp2022/" target="_blank">ITP Camp</a> in 2018.
        </p>

        </div>
      </div>
      
  );
};
  
export default Habit;