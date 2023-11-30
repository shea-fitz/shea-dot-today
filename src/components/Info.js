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
        <li>a senior web designer at The N*w Y*rk T*mes</li>
        <li>drumming on a <a href="https://en.wikipedia.org/wiki/Progressive_rock#:~:text=Progressive%20rock%20was%20predicated%20on,the%20Beatles%20and%20the%20Yardbirds." target="_blank">prog rock (?)</a> EP</li>
        <li>relearning the <a href="https://www.youtube.com/watch?v=MN4pvzT8C6k&ab_channel=ClassicalSheetMusic" target="_blank">Chaminade flute concertino</a></li>
        <li>writing about the <a href="https://www.are.na/block/19149705" target="_blank">pleasure x effort matrix</a></li>
        <li>helping mom decorate the kitchen</li>
        <li>planning a bachelorette party</li>
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
