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

    {/* <span className="name">Shea Fitzpatrick</span> */}

    <div className="wrapper">  
      <div className="mobile-info">
        <Info/>
      </div>

      <div className="left">
      <div className="header proj-header space-between">Projects
      <div className="categories">
          <span className="category"><img className="icon" src={client}></img>client</span>
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
      <div className="header">Involvements</div>
      
      {involvements.map(i => (
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
                ))}

      </div>
      <div className="right">
      <div className="header">Writing</div>
      <div className="writing">
        {writing.map(piece => (
                  <Writing
                    title={piece.title}
                    link={piece.link}
                    year={piece.year}
                    source={piece.source}
                  />
                ))}
      </div>

      <div className="header desktop-info">info</div>

      <div className="desktop-info">
        <Info/>
      </div>
      <img src={shea} className="shea"/>

      
     

        {/* <img src={shea} className="shea"/> */}
      

      
      </div>        
    </div>
    </>
  );
}

export default App;
