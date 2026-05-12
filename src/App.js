import React from 'react';
import { useState } from 'react';
import Fade from 'react-reveal/Fade';

import './App.css';

// DATA
import {projects} from './data/projects';
import {writing} from './data/writing';
import client from './icons/client.svg';
import personal from './icons/personal.svg';
import shea from './media/leaves.png';

// COMPONENTS
import Project from './components/Project';
import Writing from './components/Writing';
import Info from './components/Info';


function App() {

  const [filter, setFilter] = useState(null);
  const [tagFilter, setTagFilter] = useState([]);

  
  const filteredProjects = projects
  .filter(p => filter === null || p.context === filter)
  .filter(p => tagFilter.length === 0 || tagFilter.every(t => p.tags.includes(t)));

  return (
    <>

      <div className="wrapper">  


    <Fade>
      <div className="info">
          <div className="header">Shea Fitzpatrick</div>
          <Info/></div>
    </Fade>
    

    <Fade>   
        <div className="projects">
        <div className="header proj-header space-between">Projects

            <div className="categories">
              <span className="category pointer" onClick={() => setFilter(null)} style={{ opacity: filter === null ? 1 : 0.8 }}>
                   <span className="icon">꩜</span>everything
              </span>

              <span
                className="category pointer"
                onClick={() => setFilter('client')}
                style={{ opacity: filter === 'client' ? 1 : 0.65 }}
              >
                <img className="icon" src={client} />client work
              </span>

              <span
                className="category pointer"
                onClick={() => setFilter('personal')}
                style={{ opacity: filter === 'personal' ? 1 : 0.65 }}
              >
                <img className="icon" src={personal} />personal
              </span>
            </div>
          </div>

         <div className="tag-filters">
            <span className="category">type:</span>
            <div className="tag-list">
              {['design', 'web', 'music', 'illustration', 'animation'].map(tag => (
                <span
                  className="tag pointer"
                  key={tag}
                  onClick={() => setTagFilter(prev => 
                      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
                  )}
                  className={`tag pointer ${tagFilter.includes(tag) ? 'tag-active' : ''}`}
                  >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="proj-list">
          {filteredProjects.map(project => (
                      <Project
                        cover={project.cover}
                        title={project.title}
                        type={project.type}
                        year={project.year}
                        description={project.description}
                        context={project.context}
                        link={project.link}
                        target={project.target}
                        caseStudy={project.case}
                      />
                    ))}
          </div>

          </div>
        </Fade>      
        

        <Fade>
        <div className="writing">
            <div className="header">Writing + Features</div>
            <div className="writing-list">
            {writing.map(piece => (
                        <Writing
                          title={piece.title}
                          link={piece.link}
                          year={piece.year}
                          source={piece.source}
                        />
                      ))}

            </div>
          </div>
        </Fade>
          

          <Fade>
            <a href="https://www.youtube.com/watch?v=bu58brYNRu0" target="_blank" className="shea"><img src={shea}/><div className="banner">"This reminded me of you"</div></a>
          </Fade>

    
      </div>    

      <div className="footer"><span>♫ I built this site from scratch with React.js and the <a href="https://www.are.na/developers/explore" target="_blank">Are.na API</a>. Last updated May 11, 2026 ♫</span>
        
        {/* <div className="gossips-badge"><a href="https://gossipsweb.net"><img src="https://gossipsweb.net/images/twwmwh-lime.jpg" alt="This website was made with hands." /></a></div>
        <div className="phone-badge"><a href="https://internetphonebook.net"><img src="https://internetphonebook.net/images/badges/laptop-hands-sun.png"></img></a></div> 
         */}
      </div>   
        

      

    </>
  );
}

export default App;
