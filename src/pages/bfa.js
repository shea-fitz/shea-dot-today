import React from 'react';
import PageHeader from '../components/PageHeader';
import Image from '../components/Image';
import Back from '../components/Back';

import cover from '../media/bfa/cover.png'
import before from '../media/bfa/before.png';
import moodboard from '../media/bfa/moodboards.png';
import logoInspo from '../media/bfa/logo-inspiration.png';
import sketches from  '../media/bfa/sketches.svg';
import logoAnatomy from  '../media/bfa/logo-anatomy.svg';
import figma from  '../media/bfa/figma.png';
import home from  '../media/bfa/home.svg';




  
const BlueFlower = () => {
  return (
    <div className="page-wrapper">

      <Back/>


        <div className="page-content">
          <PageHeader
              title='Blue Flower Arts'
              type='Brand Design'
              year='Summer 2021'
            />

        <Image
          source={cover}
        />


        <h3>Client</h3>

        <p className="paragraph">
        <a href="https://blueflowerarts.com/" target="_blank">Blue Flower Arts</a> (BFA) is a boutique, woman-owned literary agency known for their highly-regarded roster of artists, historical legacy, and small-business charm.
        </p>


        <h3>Ask</h3>

        <p className="paragraph">
        BFA wanted their brand to mark a new beginning: one that mirrored a change in leadership, the diversity of their roster, and the vibrant spirit of their team. Their goal was to relaunch their website with a complete rebrand in Summer 2021.
        </p>

        <div className="details">
          <div className="detail-column">
            <h3 className="reset-margin">Timeline</h3>
            <p>2 months</p>
          </div>

          <div className="detail-column">
            <h3 className="reset-margin">Team</h3>
            <a href="https://lsyl.live/" target="_blank">Lucy Siyao Liu</a>, <a href="https://spectrastudio.xxx/" target="_blank">Renée Christiane</a>, and myself as Surplus+

          </div>

          <div className="detail-column">
            <h3 className="reset-margin">Tools</h3>
            Figma, Illustrator, Photoshop
        </div>



        </div>


        <h3>Research</h3>

        <p className="paragraph">
        BFA's Project Manager provided us with initial brand research conducted with the in-house team - evocative questions like, <span className="highlight">"If BFA was a physical space, what would it be?"</span> (A vintage brownstone, they said, or a cozy old victorian house). From there, we provided four visual themes to choose from, mix, and match.
        </p>

        <Image
          source={before}
          caption='Before: Blue Flower Arts homepage'
        />

        <Image
          source={moodboard}
          caption='Moodboards and visual research'
        />

        <h3>Logo</h3>

        <p className="paragraph">
        When brainstorming for BFA's new logo, we gathered visual inspiration and established ways of describing BFA that could serve as prompts for our sketching and a <span className="highlight">source of truth for what the logo should communicate.</span> 

          <ul>
            <li>BFA is like a stem supporting many flowers</li>
            <li>BFA is a unified collection of many artists</li>
            <li>BFA is an epicenter, artists are like petals</li>
            <li>BFA supports unique careers that can grow in different ways</li>
          </ul>
        
        Formal considerations that stemmed from these descriptions were:
          <ul>
            <li>Should the logo have one or many flowers?</li>
            <li>If many, should they vary in size or shape? Or be a unified system?</li>
            <li>BFA is an epicenter, artists are like petals</li>
            <li>Should the logo reference a real blue flower?</li>
          </ul>

        </p>

          <Image
          source={logoInspo}
          caption='Logo inspiration'
        />

        

        <p className="paragraph">
            <Image
              source={sketches}
              caption='Mid-fidelity logo sketches'
            />

          By associating sketches with certain phrases, we were able to <span className="highlight">guide design reviews conceptually rather than formally.</span> Instead of asking, "Which logo do you like best?" we asked, "Which logo best represents [BFA as a support network of unique artists]?" This allowed the client to come to a logo decision holistically and happily.
        </p>

        <h3>Result</h3>

        <p className="paragraph">
        Drawing from Art Nouveau, stamps and seals, and blue poppies, we arrived at a logo that strikes the balance of <span className="highlight">strength, levity, tradition, and personal touch</span> that BFA wanted their brand to embody. With the logo, we arrived at Blue Flower Blue - fresh and bright, but not corporate - and built out the full brand ecosystem.
        </p>

        <p className="paragraph">BFA's website was designed by <a href="https://woolymammothdesign.com/" target="_blank">Wooly Mammoth Design</a>, based locally to BFA in Minneapolis.</p>


        <Image
          source={home}
          caption='After: Blue Flower Arts homepage, designed by Wooly Mammoth Design'
        />  

        <Image
          source={logoAnatomy}
          caption='Logo anatomy'
        />

        <Image
          source={figma}
          caption='Social media assets in Figma'
        />


        




    


            

        </div>
      
    </div>
  );
};
  
export default BlueFlower;