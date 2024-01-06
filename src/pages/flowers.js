import React from 'react';
import Fade from 'react-reveal/Fade';

import PageHeader from '../components/PageHeader';
import Image from '../components/Image';
import Back from '../components/Back';
import {flowers} from '../data/flowers';


const Flowers = () => {
    return (

      <Fade>
      <div className="page-wrapper">
            <div className="back-button">
    <Back/>
    </div>
  
          <div className="page-content">
            <PageHeader
                title="Flowers in Motion"
                type='Music, Design'
                year='2022 - 2023'
              />
  
  
          <p className="paragraph intro-p">
          <i>Flowers in Motion</i> is a series of mixes and visuals streaming on <a href="https://www.index-space.org/" target="_blank">Index Radio</a>. It was inspired by Chris Helzer's <a href="https://prairieecologist.com/2020/01/13/finally-a-practical-guide-for-roadside-wildflower-viewing/" target="_blank"><i>A Field Guide to Roadside Wildflowers at Full Speed</i></a>.

          

          <div className="audio-label">Full episode archive on Soundcloud</div>

          <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1436248000&color=%23888eeb&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

          </p>

          


  
          <div className="image-gallery">
          {flowers.map(image => (
                <div className="column-half">
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
    
  export default Flowers;