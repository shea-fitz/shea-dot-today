import React from 'react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
  
const StudentVisa = () => {
  return (
    <div className="page-wrapper">
      <Link to='/' className="back">home</Link>

        <div className="page-content">
          <PageHeader
              title='Student Visa Review'
              type='Visual Design, Frontend Styling, Exhibition Design'
              year='2021'
            />


            {/* CONTENT GOES HERE */}

        </div>
      
  );
};
  
export default StudentVisa;