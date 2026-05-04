import React from 'react';
import Fade from 'react-reveal/Fade';

import PageHeader from '../components/PageHeader';
import Image from '../components/Image';
import Back from '../components/Back';

import final from '../media/sam/sam.webp';




const SheaOnAir = () => {
    return (

      <Fade>
      <div className="page-wrapper">
            <div className="back-button">
                <Back/>
            </div>
  
          <div className="page-content">
            <PageHeader
                title="shea on air"
                type='Music'
                year='2025 - ongoing'
              />
  
  
          <p className="paragraph intro-p">
            shea on air is TKTKTKT
          </p>

               <iframe className="bandcamp-iframe" src="https://bandcamp.com/EmbeddedPlayer/album=2107613924/size=large/bgcol=ffffff/linkcol=e99708/artwork=small/track=1595110107/transparent=true/" seamless><a href="https://sheaonair.bandcamp.com/album/first-birthday-ep">First Birthday – EP by shea on air</a></iframe>

        

          <Image source={final} caption='Final editorial image'/>

                  
            </div>
        </div>
       </Fade> 
    );
  };
    
  export default SheaOnAir;