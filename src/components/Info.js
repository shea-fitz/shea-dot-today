import React from 'react';
import arena from '../icons/arena.svg';
import mail from '../icons/mail.svg';
import cv from '../icons/file.svg';
import song from '../media/ars-nova.wav';

const Info = () => {

return (
<div className="info">
    <p className="bio">Shea Fitzpatrick is a designer with an affinity for visual systems and understated narratives. <br/> <br/> Shea is a web designer at T Brand Studio of the New York Times.</p>

    <span className="contact"><img className="icon" src={arena}></img> <a href="https://are.na/shea" target="_blank" className="contact-link">are.na/shea</a></span>
    {/* <span className="contact"><img className="icon" src={cv}></img> <a href="https://read.cv/shea" target="_blank" className="contact-link">read.cv/shea</a></span> */}
    <span className="contact"><img className="icon" src={mail}></img> sheafitz10@gmail.com</span>


    <div className="audio-label">Emerald Web - Ars Nova (1982)</div>
    <audio className="audio" controls src={song}>
    </audio>   

    </div>         
 );
}

export default Info;