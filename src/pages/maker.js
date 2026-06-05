import React from 'react';
import PageHeader from '../components/PageHeader';
import Image from '../components/Image';
import Back from '../components/Back';

import cover from '../media/maker/cover.webp';
import code from '../media/maker/code.webp';
import notes from '../media/maker/docs.webp';
import art from '../media/maker/art.svg';
import blog from '../media/maker/blog.svg';
import components from '../media/maker/components.webp';
import problems from '../media/maker/problems.webp';
import system from '../media/maker/brand system.webp';
import dao from '../media/maker/makerdao.webp';
import tokens from '../media/maker/tokens.webp';
import before from '../media/maker/before.webp';



  
const Maker = () => {
  return (
    <div className="page-wrapper">
]           <div className="back-button">
              <Back/>
            </div>

        <div className="page-content">
          <PageHeader
              title='MakerDAO, Community Development'
              type='Visual Design, Front-end Development, Brand'
              year='2020'
            />

          <Image
            source={cover}
          />

         
          <h3>Client</h3>

          <p className="paragraph">
          <a href="http://makerdao.com" target="_blank">MakerDAO</a> (now <a href="https://sky.money/" target="_blank">Sky</a>) is one of the most established projects in cryptocurrency, and Community Development (Comm-Dev) was its global network of contributors until 2022.
          </p>


          <h3>Ask</h3>

          <p className="paragraph">
          In 2020, Comm-Dev relaunched its documentation portal, which is built, written, and maintained entirely by community contributors for community contributors.  <span className="highlight">The problem with the original portal was that it was informationally dense, visually drab, and didn't reflect Comm-Dev's vibrant personality.</span>
          </p>

          <p className="paragraph">
          Comm-Dev was part of MakerDAO, but operated independently with its own goals. To mirror this relationship, Comm-Dev contributors <span className="highlight">wanted a visual identity that is in conversation with the core Maker brand (muted, soft gradients, fit for a financial brand), but with its own spin</span> – a bit bolder, but still geometric and clean, with greater emphasis on community engagement than pure finance.
          </p>

          <p className="paragraph">
          The team's goal was to migrate the portal from Gitbooks to its own tech stack while undergoing a visual redesign.
          </p>

          <div className="details">
            <div className="detail-column">
              <h3 className="reset-margin">Timeline</h3>
              6 Weeks
            </div>

            <div className="detail-column">
              <h3 className="reset-margin">Team</h3>
              
              Myself (Visual Designer) <br/>
              UX Strategist <br/>
              Lead Engineer <br/>
              Project Manager <br/>
              5-6 content writers <br/>
              

            </div>

            <div className="detail-column">
              <h3 className="reset-margin">Tools</h3>
              Figma, CSS, MDX.js (JSX)
          </div>
          </div>

            <Image
            source={before}
            caption='Community Development Wiki, before'
          />


          <h3>PROCESS</h3>

          <p className="paragraph">
          First, I consulted with the MakerDAO design team who owns the core Maker brand - not only did I I want to leverage existing materials in the Maker ecosystem, it was important to me to balance the MakerDAO team's comfort with how I might draw from their work while centering Comm-Dev's vision.
          </p>


           <Image
            source={dao}
            caption='MakerDAO website'
          />

        


          <p className="paragraph">
          After conducting brand research among Comm-Dev contributors, I established a visual theme and applied it to an in-progress design system. I preservedx gradient elements for graphics, but increased the saturation of the UI palette for a bolder, more social-oriented feel, which is what the community asked for. I also introduced, and helped implement, <span className="highlight">semantic design tokens, mobile components, interaction states, and dark mode</span>.
          </p>

          <Image
            source={tokens}
            caption='UI tokens, light mode. Hues reference the core Maker brand, but saturation is increased'
          />

          <Image
            source={components}
            caption='Nav and button components for light and dark mode, desktop and mobile'
          />

          <Image
            source={notes}
            caption='Example wiki page and search results'
          />

          

          <p className="paragraph">

          After V1 of the portal launched, I applied the rebrand across social media and marketing assets, <a href="https://github.com/makerdao/community/issues/1243" target="_blank">documenting and templatizing</a> styles so they can be modularly reworked by anyone.

          After the launch of V1, the site's <span className="highlight">bounce rate dropped by 25% and its weekly unique visitors doubled.</span>
          </p>

           <h3>SOCIAL AND EDITORIAL ASSETS</h3>

            <p className="paragraph">
          I created a system for any designer to generate brand assets for the blog, creating distinct themes for each blog category: Governance, Editorial, and Community.
          </p>

           <Image
            source={system}
          />

          <Image
            source={blog}
            caption='Blog article headers'
          />

          <Image
            source={art}
            caption='Marketing material'
          />

          


          <h3>Room for Improvement</h3>

          <p className="paragraph">The portal's content pages were written in MDX.js, which lets you write JSX in Markdown. </p>
          
          <p className="paragraph">This means:
          <ul>
            <li>Content writers are front-end developers!</li>
            <li>Pages are infinitely customizable.</li>
            <li>You can add additional style properties to any component.</li> 
          </ul> 

          <Image
            source={code}
            caption='Design system documentation written in JSX'
          />

          However, it also means page layouts are highly atomized, and consistency is difficult to enforce. Frankenstein pages became rampant.
          </p>

          <Image
            source={problems}
            caption='Eek! Frankenstein pages'
          />

          <h3>Recommendations</h3>

          <p className="paragraph">This is a classic case of <i>too much</i> user flexibility. With a cushier timeline, I’d recommend:
          <ul>
            <li><span className="highlight">A shift in messaging when recruiting content writers from individual empowerment to community empowerment.</span> Currently, content contributors are drawn in by this emphasis on customizability, which creates a highly individualized incentive to contribute to the portal, rather than a community-focused one. I would shift the messaging from “YOU have the power to do anything you want!” to “You have the power to help create a cohesive, unified resource for our community.”</li>
            <li>
            <span className="highlight">A content audit at the page-level.</span> A content-audit was conducted at the site-wide level by another UX designer, but that aids navigation more than component design.
            </li>
            <ul>
              <li><span className="highlight">Create page templates accordingly.</span> Content writers could then ask themselves could ask themselves, “What kind of article am I writing,” instead of “What component should I use?”</li>
            </ul>
          </ul>

          </p>

         

        </div>
    </div>
      
  );
};
  
export default Maker;