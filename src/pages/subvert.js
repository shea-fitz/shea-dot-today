import React from 'react';
import Fade from 'react-reveal/Fade';

import PageHeader from '../components/PageHeader';
import Image from '../components/Image';
import Back from '../components/Back';

import cover from '../media/subvert/subvert-homepage-artists.gif'
import look from '../media/subvert/look&feel.gif'
import analysis from '../media/subvert/platformanalysis.gif'
import featureMap from '../media/subvert/feature-map.webp'
import pages from '../media/subvert/pages.webp'
import connect from '../media/subvert/connectivity.webp'
import alpha from '../media/subvert/alpha.webp'
import flows from '../media/subvert/flows.webp'
import collections from '../media/subvert/collections.webp'
import upload from '../media/subvert/upload.webp'



  
const Subvert = () => {
  return (
    <Fade>
    <div className="page-wrapper">

    <div className="back-button">
    <Back/>
    </div>


        <div className="page-content">
          <PageHeader
              title='Subvert'
              type='MVP Product Design & Design System'
              year='2025'
            />

        <Image
          source={cover}
        />


        <h3>Client</h3>

        <p className="paragraph">
        <a href="https://www.subvert.fm/" target="_blank">Subvert</a> is a <span className="highlight">cooperatively-owned Bandcamp alternative</span> that seeks to empower independent musicians and labels through an shared ownership model, combatting the corporatization of streaming culture.
        </p>


        <h3>Ask</h3>

        <p className="paragraph">
            Corporate acquisitions threaten independent music – that’s where Subvert comes in.
            Cooperative ownership of a platform requires dynamic feedback from a member-elected board, and while Subvert had a brand, a model, and a mission, they had no product. </p>

        <p className="paragraph">
            Our goals for this phase of design were: 

            <ul>
              <li>Ship an MVP to gather feedback from members.</li>
              <li>Combine features of social media, marketplace, and streaming.</li>
              <li>Create scalable opportunities for emergent community, curation, and editorial</li>
          </ul>
        </p>
         

        <div className="details">
          <div className="detail-column">
            <h3 className="reset-margin">Timeline</h3>
            3 months
          </div>

          <div className="detail-column">
            <h3 className="reset-margin">Team</h3>
            <a href="https://lsyl.live/" target="_blank">Lucy Siyao Liu</a> of <a href="https://props.supply/" target="_blank">Props Supply</a> (design director), Austin Robey (Subvert founder), Sean Adams (developer)

          </div>

          <div className="detail-column">
            <h3 className="reset-margin">Tools</h3>
            Figma
        </div>



        </div>


        <h3>Process</h3>

        <p className="paragraph last-p">
        We started with a competitor audit to identify industry precedents – not just in music streaming, but marketplaces and governance models too – supplemented by co-op feedback collected via the <a href="https://forum.subvert.fm/" target="_blank">Subvert member forum</a>.
        </p>

        <Image
          source={analysis}
        />

         <Image
          source={look}
        />

         <Image
          source={featureMap}
          caption='Feature map for the artist page. Features that persist across page navigation, like the audio player, are coded in yellow; Alpha features out of scope for MVP are greyed out.'
        />


       <h3>Collections, Not Playlists</h3>

       <p className="paragraph">
        A key feature we leaned into to set Subvert apart from competitors was Collections instead of Playlists. Unlike a playlist, <span className="highlight">a collection isn’t just songs</span> – it can also house artists, albums, notes, and other collections, creating greater curatorial freedom and rabbit-hole discovery. <br/><br/>

        The long-term vision for Collections is a place for user-generated editorial, akin to liner notes, blogs, journals, shrines, posters on the wall...

       </p>

         <Image
          source={collections}
          caption='MVP collections libary (2025) and Alpha collections page (2026)'
        />

        <h3>Page Structure and Content Agnosticism</h3>

        <p className="paragraph">

          The homogeny of <span className="highlight">streaming creates a hyper-prescriptive listening experience</span> that is often algorithmic and playlist-forward. <br/><br/>

          Our logic of collections is organic and content-agnostic: everything is equally discoverable and curate-able, so listeners can define how they relate to the music they love. <span className="highlight">To mirror the logic of collections while supporting a low-lift development for MVP,</span> we created a consistent page structure across all page types, relying on a base grid that could be repeatedly recycled, scaled, and eventually customized.
        </p>

         <Image
          source={pages}
        />

        <h3>Metadata Richness and Connectivity</h3>

        <p className="paragraph">
            To encourage organic (rather than algorithmic) discovery, akin to rifling through a record store or swapping mixtapes, we wanted as many opportunities for back-linking and rabbit-holing as possible. <span className="highlight">Song metrics aren’t streams,</span> but how many times someone purchased or collected it – a <span className="highlight">subtle but important shift that feels less superficial</span> than stream counts. <br/><br/>

            To further cater to artists, we also included song data like key, BPM, contributors (linked to Subvert profiles where applicable), and genre tags.
          
        </p>

         <Image
          source={connect}
        />

        <h3>Delivering and Scaling V1 Design System</h3>

        <p className="paragraph">
          By the end of our 3-month split, design delivered a foundational component library and core product flows:

          <ul>
              <li>Log in and account creation</li>
              <li>Profile editing</li>
              <li>Album and track uploads</li>
              <li>Add to cart and check-out</li>
          </ul>
        </p>

        <Image
          source={flows}
          caption='Foundational components and core product flows'
        />

        <Image
          source={upload}
          caption='MVP track upload within the artist dashboard'
        />

        <Image
          source={alpha}
          caption='MVP design system scaled to Alpha launch in 2026'
        />
        

       


        




    


            

        </div>
      
    </div>
    </Fade>
  );
};
  
export default Subvert;