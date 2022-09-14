import React from 'react';
import PageHeader from '../components/PageHeader';
import Back from '../components/Back';
import Image from '../components/Image';

import home from '../media/student-visa/home.png';
import mocks from '../media/student-visa/mocks.png';
import moodboard from '../media/student-visa/moodboard.png';
import station from '../media/student-visa/station.png';
import worldMap from '../media/student-visa/world-map.png';
import day from '../media/student-visa/day-mode.png';
import index from '../media/student-visa/index.png';
  
const StudentVisa = () => {
  return (
    <div className="page-wrapper">
        <Back/>

        <div className="page-content">
          <PageHeader
              title='Student Visa Review'
              type='Visual Design, Experience Design'
              year='Winter 2020'
            />


          <Image
            source={home}
          />


            <h3>Client</h3>

            <p className="paragraph">
            <a href="http://www.studentvisa.review/" target="_blank">The Student Visa Review</a> was commissioned by the RISD Department of Architecture in Collaboration with The Canadien Centre for Architecture (CCA).
            </p>


            <h3>Ask</h3>

            <p className="paragraph">
            RISD commissioned a web-based, interactive audio installation to showcase recorded interviews with international students at RISD who studied remotely in COVID lockdown. The interviews are <span className="highlight">contemplative, candid accounts of adapting to remote learning</span> and the nuances of their experiences as international students in a global pandemic.
            </p>

            <div className="details">
              <div className="detail-column">
                <h3 className="reset-margin">Timeline</h3>
                <p>4 months</p>
              </div>

              <div className="detail-column">
                <h3 className="reset-margin">Team</h3>
                <a href="https://lsyl.live/" target="_blank">Lucy Siyao Liu</a>, Dan Taeyoung, and myself as Surplus+

              </div>

              <div className="detail-column">
                <h3 className="reset-margin">Tools</h3>
                Figma, Photoshop, CSS, Vue.js, 
            </div>
        </div>

        <h3>Concept</h3>

        <p className="paragraph">

        We considered three core characteristics when designing the web experience: <span className="highlight">sense of time, sense of narrative, and sense of environment.</span>
        <br/><br/>
        With the client, we decide to create:
        <ul>
            <li>Something edgeless & atmospheric, but with a visual logic</li>
            <li>Emphasis on cycles of leaving and returning, but not a closed circle</li>
            <li>An open-ended experience, but with established pathways</li> 
            <li>A meditative quality of looking out a train window</li>
          </ul> 
        </p>

        <Image
            source={mocks}
            caption='Early mock ups of navigation schema'
          />

        <Image
            source={moodboard}
            caption='Moodboard and inspiration'
          />

        <h3>Result</h3>

        <p className="paragraph">Using metaphors of transit - leaving and returning - we designed a meditative and exploratory landscape that listeners can traverse. 

        Conversations between students and their friends, families, and peers are accompanied by ambient sounds of an airport as they move across time zones and color-changing skies.</p>

        <Image
            source={station}
            caption='Students at their "home station," night mode'
          />

        <Image
            source={day}
            caption='Individual station, dawn mode'
          />

        <Image
            source={index}
            caption='Audio index, day mode'
          />

        <Image
            source={worldMap}
            caption='Map of the "world"'
          />

      </div>
    </div>
  );
};
  
export default StudentVisa;