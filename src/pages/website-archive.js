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
                type='Construction of self'
                year='2018 - forever'
              />

           {/* INTRODUCTION   */}

           <p></p>
        
          </div>
      </div>

      </>
        
    );
  };
    
  export default Archive;