import React from 'react';
import PageHeader from '../components/PageHeader';
import Image from '../components/Image';
import { Link } from 'react-router-dom';
  
const Atlas = () => {
  return (
    <div className="page-wrapper">
      <Link to='/' className="back">home</Link>

        <div className="page-content">
          <PageHeader
              title='Altana Atlas'
              type='Product Design'
              year='2022'
            />


            {/* CONTENT GOES HERE */}

        </div>
      
    </div>
      
  );
};
  
export default Atlas;