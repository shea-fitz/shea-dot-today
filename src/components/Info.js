import React from 'react';
import arena from '../icons/arena.svg';
import mail from '../icons/mail.svg';
import cv from '../icons/file.svg';
import song from '../media/ars-nova.wav';

const Info = () => {

return (
<div className="info">
    <p className="bio">
    
    <span className="audio-label">Today Shea is...</span>
    <ul>
        <li>a senior web designer at The New York Times</li>
        <li>drumming in a psychedelic rock band</li>
        <li>learning the <a href="https://www.youtube.com/watch?v=MN4pvzT8C6k&ab_channel=ClassicalSheetMusic" target="_blank">Chaminade Flute Concertino</a></li>
        <li>reading theories of boredom</li>

    </ul>
    
    </p>

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
