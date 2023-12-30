import React from 'react';
import PageHeader from '../components/PageHeader';
import Back from '../components/Back';
import Image from '../components/Image';

const Archive = () => {
    return (

      <>
      <div className="page-wrapper">
          <div className="back-button">
                  <Back/>
          </div>
  
          <div className="page-content">
            <PageHeader
                title='Website Archive'
                type='How I taught myself about the web'
                year='2018 - forever'
              />
        
          </div>
      </div>

      </>
        
    );
  };
    
  export default Archive;