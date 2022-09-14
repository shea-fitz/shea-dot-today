import React from 'react';
import PageHeader from '../components/PageHeader';
import Back from '../components/Back';
import Image from '../components/Image';

const Archive = () => {
    return (
      <div className="page-wrapper">
        <Back/>
  
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