import React from 'react';
import Fade from 'react-reveal/Fade';

import PageHeader from '../components/PageHeader';
import Image from '../components/Image';
import Back from '../components/Back';

import {scent} from '../data/scent';
import final from '../media/sam/sam.webp';
import round1 from '../media/sam/round1.webp'; 







const Scent = () => {
    return (

      <Fade>
      <div className="page-wrapper">
            <div className="back-button">
    <Back/>
    </div>
  
          <div className="page-content">
            <PageHeader
                title="Scent Access Memory"
                type='Illustration'
                year='Spring 2024'
              />
  
  
          <p className="paragraph intro-p">
           <a href="https://sam.are.na" target="_blank">Scent Access Memory</a> is an editorial collaboration between <a href="https://dirt.fyi/" target="_blank">Dirt</a> and <a href="https://www.are.na/" target="_blank">Are.na</a> on scent and its connection to memories, or rather, "olfactory triggers, digital traces, mall fragrances, utopian cities, cherry chapstick, and the impressions we leave behind." <br/><br/>
           Are.na commissioned me to create a title image for the series drawing upon the visual technique I used for my <a href="/flowers">radio show</a>. The distortion of the final image was created by moving decaying roses and text print-outs across a scanning bed, and was edited entirely in Figma.
          </p>

          <Image source={final} caption='Final editorial image'/>

          <div className="image-gallery">
          {scent.map(image => (
              <div className="column-half">
                <Image
                    source={image.source}
                  />
              </div>
                  
                ))}
          </div>
  
          
          <Image source={round1} caption='First round explorations'/>

          


  
          
         

          
  
          </div>
        </div>
       </Fade> 
        
    );
  };
    
  export default Scent;