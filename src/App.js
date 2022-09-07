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
    <div className="wrapper">
      <div className="projects">
        
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
    </div>
  );
}

export default App;
