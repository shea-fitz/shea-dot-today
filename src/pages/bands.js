import React from 'react';
import Fade from 'react-reveal/Fade';

import PageHeader from '../components/PageHeader';
import Image from '../components/Image';
import Back from '../components/Back';

import render from '../media/bands/renders.gif';
import jitter from '../media/bands/jitter.gif';

import driversSeat from '../media/bands/the-gluu_drivers-seat.webp';
import sooGood from '../media/bands/the-gluu_soo-good.webp';
import dreaming from '../media/bands/the-gluu_dreaming.webp';
import moodboard from '../media/bands/moodboard-gluu.webp';

import charm from '../media/bands/charm.webp';
import extra from '../media/bands/extracurriculars.webp';
import tattoo from '../media/bands/talon-tattoo.webp';
import codes from '../media/bands/codes.webp';

import mini from '../media/bands/mini.webp';
import ah12 from '../media/bands/ah12.webp';
import tommy from '../media/bands/tommy.webp';



  
const Bands = () => {
  return (
    <Fade>
    <div className="page-wrapper">

    <div className="back-button">
    <Back/>
    </div>


        <div className="page-content">
          <PageHeader
              title='Band Visuals'
              type='Animation, Web Design, Graphic Design'
              year='2020 - 2025'
            />


      <div></div>

        <h2>Talon (2025)</h2>

        <p className="paragraph">
          <a href="https://open.spotify.com/artist/3QBo4tlekZDVCgtpMwQA64?si=9ip-9zsDTbO1fwO-pFfbHw" target="_blank">Talon</a> is a Brooklyn-based rock band descendent from the likes of Mannequin Pussy, The Breeders, and Hole. I've helped them strengthen their brand presence through tour visuals and their <a href="https://www.talontheband.com/" target="_blank">first website</a>, taking a lo-res logo they made two years ago and building a visual universe around it to stay true to their punk DIY spirit. I designed the album art for their debut LP, Codes, out September 2025.
          
        </p>

                 <Image source={codes} caption="Album art and tracklist for Talon's debut LP, Codes"/>


        <iframe className="website-iframe" src="https://www.talontheband.com/"></iframe>


         <Image source={extra}/>

         <div className="image-gallery">

          <div className="column-half"> 
            <Image source={charm} caption="Laser cut brass charm for the bassist"/>
              </div>

              <div className="column-half"> 
            <Image source={tattoo} caption="Band tattoos <3"/>
              </div>
        
        </div>

     <div className="spacer"></div>


        <h2>Lawrence Rothman – Sunny Place for Shady People (2021)</h2>

        <p className="paragraph">
            I collaborated with <a href="https://www.matthixon.com/" target="_blank">Matt Hixon</a> on a chaotic Western-inspired visualizer for <a href="https://www.instagram.com/lawrencerothman/?hl=en" target="_blank">Lawrence Rothman's</a> single Sunny Place for Shady People. In a mad 48-hour dash I created the animated sequences in Blender using generative landscapes and glitch video textures from Matt's collection of archival footage.
        </p>

        <iframe className="video-iframe" width="auto" height="400" src="https://www.youtube.com/embed/sW4aexJe8-s?si=rzNbA30zjfJsw9fA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        
        <Image source={render}/>
         <Image source={jitter}/>





      
      


         {/* <h2>The Gluu (2025)</h2>

        <p className="paragraph">The Gluu is a pop project by Mark Matter and MK Charron. I made the single art for their debut releases. They wanted something graphic and Y2K-inspired a la 90's teen magazines.</p>

      <div className="image-gallery">
        <div className="column-third"> 
          <Image source={driversSeat} />
        </div>

         <div className="column-third"> 
          <Image source={sooGood} />
        </div>

         <div className="column-third"> 
          <Image source={dreaming} />
        </div>
      
       <Image source={moodboard} caption="Moodboard provided by The Gluu"/>

       </div>


   <div className="spacer"></div> */}


        
    <h2>Other work for musicians (2020 - 2025)</h2>

    <div className="image-gallery">

      <div className="column-third"> 
            <Image source={ah12} caption="Angel Hair No. 12 – Rise With The Sun (2024)"/>
              </div>

              <div className="column-third"> 
            <Image source={mini} caption="Mini – Mass (2020)"/>
              </div>

              <div className="column-third"> 
            <Image source={tommy} caption="Tommy Baby – Hours (2023)"/>
              </div>
    </div>
            

     </div>
      
    </div>
    </Fade>
  );
};
  
export default Bands;