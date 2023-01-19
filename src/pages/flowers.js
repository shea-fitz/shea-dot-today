import React from 'react';
import PageHeader from '../components/PageHeader';
import Image from '../components/Image';
import Back from '../components/Back';
import {flowers} from '../data/flowers';
import song from '../media/music.m4a';


const Flowers = () => {
    return (
      <div className="page-wrapper">
          <Back/>
  
          <div className="page-content">
            <PageHeader
                title="Flowers in Motion"
                type='Music, Design'
                year='2022 - ongoing'
              />
  
  
          <p className="paragraph">
          <i>Flowers in Motion</i> is a series of mixes and visuals coming to <a href="https://www.index-space.org/" target="_blank">Index Radio</a> in 2023. It was inspired by Chris Helzer's <a href="https://prairieecologist.com/2020/01/13/finally-a-practical-guide-for-roadside-wildflower-viewing/" target="_blank"><i>A Field Guide to Roadside Wildflowers at Full Speed</i></a>. The entire episode archive is on <a href="https://soundcloud.com/more-swans" target="_blank">Soundcloud</a> under the musical project More Swans.

          <div className="audio-label">Flowers in Motion – no. 1</div>
            <audio className="audio" controls src={song}>
            </audio>   
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
        
    );
  };
    
  export default Flowers;