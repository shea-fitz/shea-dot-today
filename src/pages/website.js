import React from 'react';
import Fade from 'react-reveal/Fade';

import PageHeader from '../components/PageHeader';
import Back from '../components/Back';
import Section from '../components/Section';

import { webArchive } from '../data/web-archive';


const Archive = () => {

    return (
      <>

      <Fade>

    
      <div className="page-wrapper">
          <div className="back-button">
                  <Back/>
          </div>
  
          <div className="page-content">
            <PageHeader
                title='A History of My Personal Website'
                type='Web Design and Development'
                year='2018 - forever'
              />
      </div>
    </div>

    <div className='timeline'>

            <div className="section archive-intro">
              <h2>Introduction</h2>
            <p className='paragraph'>I’ve built my website from scratch since 2018 and have taught myself everything it takes to do so along the way. It’s the most telling artifact of my relationship to my art practice and professional life over time.<br/><br/>
           
           Some themes extend through every iteration:
           
           <ol>
              <li>I’ve never wanted my website to feel purely professional.</li>
              <li>I’ve always been drawn to lightweight and low-fidelity website aesthetics that can be built with pure HTML and CSS.</li>
              <li>I’ve always struggled to create a cohesive narrative about my interests, skills, and craft.</li>
              <li>I‘ve always had a preference for organizing my website in as few pages as possible.</li>
              <li>I’ve always loved list-based layouts.</li>
           </ol>

           </p>

           <p className='paragraph'>
           
           *My true first website was a Squarespace portfolio site that I built in an all-nighter over Christmas break in 2017. This site was never crawled by the <a href="https://web.archive.org/" target="_blank">Wayback Machine</a> so it’s lost to the ether.</p>


            </div>

           {webArchive.map(version => (
                      <Section
                        title={version.version}
                        hero={version.cover}
                        alt1={version.alt1}
                        alt2={version.alt2}
                        contents={version.content}
                        intention={version.intention}
                        milestone={version.milestone}
                        favorite={version.favorite}
                      />
                    ))}
          </div>

          
           
      </Fade>
    </>
        
    );
  };
    
  export default Archive;