import React from 'react';
import Fade from 'react-reveal/Fade';

import PageHeader from '../components/PageHeader';
import Back from '../components/Back';
import Image from '../components/Image';

import ideas from '../media/nyta/design-ideation.webp';
import memo from '../media/nyta/desktop-scroll.gif';
import mobile from '../media/nyta/mobile-nav.webp';
import ref from '../media/nyta/ref.webp';
import mark from '../media/nyta/mark-makers.gif';





  
const NYTA = () => {
  return (

    <Fade>
    <div className="page-wrapper">
           <div className="back-button">
    <Back/>
    </div>

        <div className="page-content">
          <PageHeader
              title='New York Times Advertising'
              type='Web campaigns'
              year='2023 - 2026'
            />


          <Image
            source={memo}
          />


            <h2>The Memo (2023)</h2>

            <p className="paragraph">
            The Memo was an internal initiative to create a summary of The New York Times' annual <a href="https://www.nytimes.com/section/business/dealbook" target="_blank">Dealbook Summit</a>. The aim was for the site to feel like a classified document and I explored designs across a spectrum of skeumorphism. Ultimately we opted for the analog reference to be a nod rather than a gimmick, amplified out by collage and sketch elements by illustrator <a href="https://mikemcquade.com/" target="_blank">Mike McQuade</a>. I designed and coded a microsite that lived on the NYTA website.
            </p>

            {/* <div className="details">
              <div className="detail-column">
                <h3 className="reset-margin">Timeline</h3>
               3 weeks
              </div>

              <div className="detail-column">
                <h3 className="reset-margin">Collaborators</h3>
                Adam Okrasinski (Executive Director), with illustrations by <a href="https://mikemcquade.com/" target="_blank">Mike McQuade</a>

              </div>

              <div className="detail-column">
                <h3 className="reset-margin">Tools</h3>
                HTML, CSS, Javascript, Figma
            </div>
        </div> */}

         <Image
            source={ideas}
            caption="Design ideation"
          />

           <Image
            source={mobile}
            caption="Mobile nav"
          />



        <h2>Mark Makers on the Moment (2024 - 2025)</h2>

        <p className="paragraph"><a href="https://www.nytimes.com/mark-makers-on-the-moment" target="_blank">Mark Makers on the Moment</a> is an ongoing NYTA intiative to provide a platform for stories from Marketing industry. Illustrations by <a href="http://www.uliknoerzer.com/" target="_blank">Uli Knözer</a>.</p> 

          {/* <div className="details">
              <div className="detail-column">
                <h3 className="reset-margin">Timeline</h3>
               3 articles shipped quarterly
              </div>

              <div className="detail-column">
                <h3 className="reset-margin">Collaborators</h3>
                Ellie Clayman (Design Director), with illustrations by <a href="http://www.uliknoerzer.com/" target="_blank">Uli Knözer</a>
              </div>

              <div className="detail-column">
                <h3 className="reset-margin">Tools</h3>
                Webflow, Figma
            </div>
        </div> */}
    
      <Image
            source={mark}
          />

      </div>
    </div>
    </Fade>
  );
};
  
export default NYTA;