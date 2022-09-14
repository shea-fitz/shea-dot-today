import React from 'react';
import PageHeader from '../components/PageHeader';
import Image from '../components/Image';
import Back from '../components/Back';
  
const Atlas = () => {
  return (
    <div className="page-wrapper">
        <Back/>

        <div className="page-content">
          <PageHeader
              title='Altana Atlas'
              type='Product Design'
              year='Winter 2022'
            />


            {/* CONTENT GOES HERE */}

        </div>
      
    </div>
      
  );
};
  
export default Atlas;