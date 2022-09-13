import React from 'react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
  
const Maker = () => {
  return (
    <div className="page-wrapper">
      <Link to='/' className="back">home</Link>

        <div className="page-content">
          <PageHeader
              title='MakerDAO, Community Development'
              type='Visual Design, Design System, Brand Assets'
              year='2020'
            />

            {/* CONTENT GOES HERE */}

        </div>
      
  );
};
  
export default Maker;