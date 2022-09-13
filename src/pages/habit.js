import React from 'react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
  
const Habit = () => {
  return (
    <div className="page-wrapper">
      <Link to='/' className="back">home</Link>

        <div className="page-content">
          <PageHeader
              title="I Didn't Ask for the Habit"
              type='Illustration'
              year='2018'
            />


            {/* CONTENT GOES HERE */}

        </div>
      
  );
};
  
export default Habit;