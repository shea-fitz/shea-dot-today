import React from 'react';
import PageHeader from '../components/PageHeader';
import Image from '../components/Image';
import Back from '../components/Back';
import {flowers} from '../data/flowers';


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
          <i>Flowers in Motion</i> is a musical and visual series coming soon to <a href="https://www.index-space.org/" target="_blank">Index Radio</a>. Its full archive is on <a href="https://soundcloud.com/more-swans" target="_blank">Soundcloud</a> under the musical project More Swans.
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