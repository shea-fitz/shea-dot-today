import React from 'react';
import Fade from 'react-reveal/Fade';


import PageHeader from '../components/PageHeader';
import Image from '../components/Image';
import Back from '../components/Back';
import {habit} from '../data/habit';
  
const Habit = () => {
  return (
    <Fade>
    <div className="page-wrapper">
           <div className="back-button">
    <Back/>
    </div>

        <div className="page-content">
          <PageHeader
              title="Jewelry and Metalwork"
              type='Design'
              year='2025'
            />


        <p className="paragraph intro-p">
          Jewelry etc etc etc 
        </p>

        <div className="image-gallery">
       

        </div>

        

        </div>
      </div>
     </Fade> 
      
  );
};
  
export default Habit;