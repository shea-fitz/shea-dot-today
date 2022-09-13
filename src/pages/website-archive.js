import React from 'react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import Image from '../components/Image';

const Archive = () => {
    return (
      <div className="page-wrapper">
        <Link to='/' className="back">home</Link>
  
          <div className="page-content">
            <PageHeader
                title='Website Archive'
                type='Design, Development, and fumbling around the internet'
                year='2018 - ?'
              />
  
  
              {/* CONTENT GOES HERE */}
  
          </div>
        
      </div>
        
    );
  };
    
  export default Archive;