import React from 'react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
  
const Sketch = () => {
  return (
    <div className="page-wrapper">
      <Link to='/' className="back">home</Link>

        <div className="page-content">
          <PageHeader
              title='Digital Drawings'
              type='Illustration, Animation'
              year='2018 - 2020'
            />


            {/* CONTENT GOES HERE */}

        </div>
      
  );
};
  
export default Sketch;