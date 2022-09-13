import React from 'react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
  
const People = () => {
  return (
    <div className="page-wrapper">
      <Link to='/' className="back">home</Link>

        <div className="page-content">
          <PageHeader
              title='Two People in a Room Over Time'
              type='Illustration, Exhibition'
              year='2019'
            />

            {/* CONTENT GOES HERE */}

        </div>
      
  );
};
  
export default People;