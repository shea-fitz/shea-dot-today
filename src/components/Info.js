import React from 'react';
import arena from '../icons/arena.svg';
import mail from '../icons/mail.svg';
import song from '../media/music.m4a';
// import shea from '../media/shea.jpg'


const Info = () => {

return (
<div className="info">
    <p>Shea Fitzpatrick is a self-taught designer with an affinity for visual systems and understated narratives. Shea works as a Product Designer at Giant Machines, a software agency that prioritizes education and social impact. </p>

    <span className="contact"><img className="icon" src={arena}></img> <a href="https://are.na/shea" target="_blank" className="contact-link">are.na/shea</a></span>
    <span className="contact"><img className="icon" src={mail}></img> sheafitz10@gmail.com</span>


    <div className="audio-label">Listen while you browse?</div>
    <audio className="audio" controls src={song}>
    </audio>   
    
    {/* <div className="shea">
        <img src={shea}/>
    </div>  */}
    </div>         
 );
}

export default Info;