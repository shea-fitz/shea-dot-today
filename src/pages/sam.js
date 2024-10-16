import React from 'react';
import Fade from 'react-reveal/Fade';

import PageHeader from '../components/PageHeader';
import Image from '../components/Image';
import Back from '../components/Back';
import {flowers} from '../data/scent';


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
                year='2024'
              />
  
  
          <p className="paragraph intro-p">
           <a href="https://sam.are.na" target="_blank">Scent Access Memory</a> is an editorial collaboration between <a href="https://dirt.fyi/" target="_blank">Dirt</a> and <a href="https://www.are.na/" target="_blank">Are.na</a> on scent and its connection to memories, or rather, "olfactory triggers, digital traces, mall fragrances, utopian cities, cherry chapstick, and the impressions we leave behind." <br/><br/>
           Are.na commissioned me to create a visual identity for the series drawing upon the visual technique I used for my <a href="/flowers">radio show</a>. The distortion of the final image was created by manually scanning decaying roses and print-outs of text, and was edited entirely in Figma.
          </p>

          


  
          <div className="image-gallery">
          
  
          </div>
  
          
  
          </div>
        </div>
       </Fade> 
        
    );
  };
    
  export default Scent;