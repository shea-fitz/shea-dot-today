import React from 'react';
import './App.css';

// DATA
import {projects} from './data/projects';
import {writing} from './data/writing';
import { involvements } from './data/involvements';
import client from './icons/client.svg';
import personal from './icons/personal.svg';
import shea from './media/shea-3.jpg';

// COMPONENTS
import Project from './components/Project';
import Writing from './components/Writing';
import Info from './components/Info';


function App() {
  return (
    <>

      <div className="wrapper">  
    
          
        <div className="projects">
        <div className="header">W</div>

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
        
        
        {/* {involvements.map(i => (
                    <Project
                      cover={i.cover}
                      title={i.title}
                      type={i.type}
                      year={i.year}
                      description={i.description}
                      context={i.context}
                      link={i.link}
                      target={i.target}
                      caseStudy={i.case}
                    />
                  ))} */}

    

          <div className="writing">
            <div className="header">Writing</div>
              {writing.map(piece => (
                        <Writing
                          title={piece.title}
                          link={piece.link}
                          year={piece.year}
                          source={piece.source}
                        />
                      ))}
          </div>
              
          <div className="info">
          <div className="header">Info</div><Info/></div>

          <div className="shea"><img src={shea}/></div>
          
         


      
    
      </div>        
    </>
  );
}

export default App;
