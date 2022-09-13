import React from 'react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
  
const BlueFlower = () => {
  return (
    <div className="page-wrapper">
      <Link to='/' className="back">home</Link>

        <div className="page-content">
          <PageHeader
              title='Blue Flower Arts'
              type='Brand Design'
              year='2021'
            />


            {/* CONTENT GOES HERE */}

        </div>
      
    </div>
  );
};
  
export default BlueFlower;