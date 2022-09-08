import React from 'react';
import './App.css';


// DATA
import {projects} from './data/projects';
import {writing} from './data/writing';
import arena from './icons/arena.svg';
import mail from './icons/mail.svg';
import client from './icons/client.svg';
import personal from './icons/personal.svg';
import shea from './media/shea.jpg'

// COMPONENTS
import Project from './components/Project';
import Writing from './components/Writing';


function App() {
  return (
    <>

    {/* <span className="name">Shea Fitzpatrick</span> */}

    <div className="wrapper">

      <div className="left">
      <div className="header proj-header space-between">Projects <br/><br/>
      <div className="categories">
          <span className="category">client work<img className="icon" src={client}></img> </span>
          <span className="category">personal<img className="icon" src={personal}></img></span>
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
         Shea currently works as a digital product designer at a small software agency in NYC. <br/><br/>

         <span className="contact"><img className="icon" src={arena}></img> <a href="https://are.na/shea" target="_blank" className="contact-link">are.na/shea</a></span>
         <span className="contact"><img className="icon" src={mail}></img> sheafitz10@gmail.com</span>
      </div>

      {/* <img src={shea} className="shea"></img> */}
      
      </div>        
    </div>
    </>
  );
}

export default App;
