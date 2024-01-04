import React from 'react';
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
  return (
    <>

      <div className="wrapper">  


      <div className="info">
          <div className="header">Shea Fitzpatrick</div><Info/></div>
    
          
        <div className="projects">
          <div className="header proj-header space-between">Projects
              <div className="categories">
                  <span className="category"><img className="icon" src={client}></img>professional</span>
                  <span className="category"><img className="icon" src={personal}></img>personal</span>
              </div>
          </div>

          {projects.map(project => (
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
        
          <div className="writing">
            <div className="header">Writing</div>
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

          <div className="shea"><img src={shea}/><div className="banner">"This reminded me of you"</div></div>         
    
      </div>        
    </>
  );
}

export default App;
