import React from 'react';
import './App.css';


// DATA
import {projects} from './data/projects';
import {writing} from './data/writing';


// COMPONENTS
import Project from './components/Project';
import Writing from './components/Writing';


function App() {
  return (
    <>

    {/* <span className="name">Shea Fitzpatrick</span> */}

    <div className="wrapper">
      <div className="left">
      <div className="header">Projects</div>
        
      {projects.map(project => (
                  <Project
                    cover={project.cover}
                    title={project.title}
                    type={project.type}
                    year={project.year}
                    description={project.description}
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
      <div className="header">info</div>
          

      <div className="info">
         Shea Fitzpatrick is a designer based in Brooklyn, NY, currently working as a digital product designer at a small software agency.
      </div>
      
      </div>        
    </div>
    </>
  );
}

export default App;
