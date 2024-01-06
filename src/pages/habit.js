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
              title="I Didn't Ask for the Habit"
              type='Illustration'
              year='Spring 2018'
            />


        <p className="paragraph intro-p">
        <i>I Didn't Ask for the Habit</i> is an abstract comic created with an experimental workflow incorporating image data from Processing sketches, 3D models in Rhino and Grasshopper, screenshots, and Photoshop. I gave a workshop on this process at <a href="https://itp.nyu.edu/camp2022/" target="_blank">ITP Camp</a> in 2018.
        </p>

        <div className="image-gallery">
        {habit.map(image => (
              <div className="column-third">
                <Image
                    source={image.source}
                  />
              </div>
                  
                ))}

        </div>

        

        </div>
      </div>
     </Fade> 
      
  );
};
  
export default Habit;