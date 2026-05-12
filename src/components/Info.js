import React from 'react';
import arena from '../icons/arena.svg';
import mail from '../icons/mail.svg';
import insta from '../icons/insta.svg'
// import cv from '../icons/file.svg';
import song from '../media/ars-nova.mp3';

const Info = () => {

return (
<div className="info">
    <p className="bio">Designer by trade & multimodal hobbyist at large...currently a senior product designer at The New York Times.<br/><br/>

   "Shea's whole thing is figuring stuff out" – my manager <br/><br/>

    "whimsical, reverent, maximalist" – the group chat <br/><br/>

        
        </p>

    <span className="contact"><img className="icon" src={arena}></img> <a href="https://are.na/shea" target="_blank" className="contact-link">are.na/shea</a></span>
    {/* <span className="contact"><img className="icon" src={insta}></img><a href="https://instagram.com/sheafitz" target='_blank' className="contact-link">@sheafitz</a></span> */}
    {/* <span className="contact"><img className="icon" src={cv}></img> <a href="https://read.cv/shea" target="_blank" className="contact-link">read.cv/shea</a></span> */}
    <span className="contact"><img className="icon" src={mail}></img> sheafitz10@gmail.com</span>


    <div className="audio-label">Emerald Web - Ars Nova (1982)  ♫♪</div>
    <audio className="audio" controls src={song}>
    </audio>   

    </div>         
 );
}

export default Info;